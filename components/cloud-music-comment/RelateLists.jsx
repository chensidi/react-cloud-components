import { useState, useEffect, useContext, Suspense, memo } from 'react'
import { reloadFn, useApiHooks } from './hooks'
import { ResolveProvider } from './Comment.jsx'
import { Skeleton } from 'antd-mobile'
import { TabContext } from './Tabs'

function transCount(count, formatter = 'w') {
  return (count / 10000).toFixed(1) + '万'
}

const ListsWrap = ({children}) => {
  return (
    <div className="list-wrap">
      { children }
    </div>
  )
}

ListsWrap.Item = function({pic, count, tit, author}) {
  return (
    <div className="list-item">
      <figure className="cover">
        <img src={pic} alt="" />
        <span className="ply-cnt">{ count }</span>
      </figure>
      <h3 className="tit elp">{ tit }</h3>
      <p className="author">
        <span className="elp">by { author }</span>
        <i className="tag"></i>
      </p>
    </div>
  )
}

const RelateLists = ({ requestCb }) => {
  const cresolveLists = useContext(ResolveProvider)
  let simiLists = requestCb('getSimiPlayLists')
  console.log(simiLists)
  cresolveLists[0]()
    return (
      <div className="relate-playlist">
        <h3 className="jc-title">
          包含这首歌的歌单
        </h3>
        <ListsWrap>
          {
            simiLists.map(item => {
              return (
                <ListsWrap.Item 
                  key={item.id}
                  pic={item.coverImgUrl}
                  count={transCount(item.playCount)}
                  tit={item.name}
                  author={item.creator.nickname}
                >
                </ListsWrap.Item>
              )
            })
          }
        </ListsWrap>
      </div>
    )
}

const Loading = () => {
  return (
    <>
      <Skeleton.Title animated />
      <Skeleton.Paragraph lineCount={5} animated />
    </>
  )
}

export default memo(({id}) => {
  const requestCb = useApiHooks(id, 'getSimiPlayLists')
  const { isFirst, rid } = useContext(TabContext)
  if (!reloadFn.load) {
    reloadFn.load = () => requestCb.reload('getSimiPlayLists')
  }
  useEffect(() => {
    if (isFirst) {
      return
    }
  }, [rid]);
  return (
    <Suspense fallback={<Loading></Loading>}>
      <RelateLists requestCb={requestCb} />
    </Suspense>
  )
})

