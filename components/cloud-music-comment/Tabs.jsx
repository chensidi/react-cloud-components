import { Tabs, PullToRefresh } from 'antd-mobile'
import { useState, useEffect, useRef, useLayoutEffect, createContext } from 'react'
import { debounce } from 'lodash'

import CommentLists from './CommentLists.jsx'
import RelateLists from './RelateLists.jsx'
import SimilarLists from './SimilarLists.jsx'
import { reloadFn } from './hooks'

const tabLists = [ //分类表头
  {label: '相关歌单', key: 'relateLists'},
  {label: '相似歌曲', key: 'similarSongs'},
  {label: '精彩评论', key: 'comments'}
]

export const TabContext = createContext()

const TabArea = ({ownKey, id, rid}) => {
  switch(ownKey) {
    case 'relateLists':
      return <RelateLists id={id} rid={rid} />
    case 'similarSongs':
      return <SimilarLists id={id} />
    case 'comments':
      return <CommentLists id={id} />
    default:
      return null
  }
}

const CommentsTabs = ({tops = [], id}) => {

  const scrollHandler = debounce(() => {
    const curTop = Math.ceil(scrollWrap.current.scrollTop)
    if (curTop < tops[0]) {
      setActiveKey('relateLists')
    } else if (curTop >= tops[0] && curTop < tops[1]) {
      setActiveKey('similarSongs')
    } else {
      setActiveKey('comments')
    }
  }, 50)

  useLayoutEffect(() => {
    scrollWrap.current.addEventListener('scroll', scrollHandler)
  }, [tops])
  // tab页切换事件
  function tabChange(key) {
    setActiveKey(key)
    switch (key) {
      case 'relateLists':
        return scrollWrap.current.scrollTo(0, 0, {})
      case 'similarSongs':
        return scrollWrap.current.scrollTo(0, tops[0])
      case 'comments':
        return scrollWrap.current.scrollTo(0, tops[1])
    }
  }

  // 激活状态key
  const [activeKey, setActiveKey] = useState('relateLists')

  //滚动容器ref
  const scrollWrap = useRef()

  const [rid, setRid] = useState(0)
  const [isFirst, setFirst] = useState(true)
  function refreshHandler() {
    // console.log('refresh', reloadFn)
    reloadFn.load()
    reloadFn.load2()
    setRid(rid => rid + 1)
  }

  useEffect(() => {
    setFirst(false)
  }, []);

  return (
    <>
      <Tabs onChange={tabChange} activeKey={activeKey}>
        {
          tabLists.map(({label, key}) => {
            return (
              <Tabs.Tab title={label} key={key}>
              </Tabs.Tab>
            )
          })
        }
      </Tabs>
        <div className='content-wrap' ref={scrollWrap}>
          <PullToRefresh
            onRefresh={refreshHandler}
          >
            <TabContext.Provider value={{isFirst, rid}}>
            {
              tabLists.map(({key}) => {
                return <TabArea ownKey={key} key={key} id={id} />
              })
            }
            </TabContext.Provider>
          </PullToRefresh>
        </div>
    </>
  )
}

export default CommentsTabs