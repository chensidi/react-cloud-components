import { PlayOutline } from 'antd-mobile-icons'
import { Skeleton } from 'antd-mobile'
import { useApiHooks, reloadFn } from './hooks'
import { useContext, Suspense, memo, useEffect } from 'react'
import { ResolveProvider } from './Comment.jsx'
import { TabContext } from './Tabs'

const SimiLists = ({children}) => {
  return (
    <div className="simi-wrap">
      { children }
    </div>
  )
}

SimiLists.Item = function({pic, tit, info}) {
  function renderCover(pic) {
    return (
      <img src={pic} alt="" />
    )
  }

  function renderContent({tit, info}) {
    return (
      <div className="item-cnt">
        <h3 className='elp'>{ tit }</h3>
        <p className='elp'>{ info }</p>
      </div>
    )
  }

  return (
    <div className="simi-item">
      <div className="item-main">
        { renderCover(pic) }
        { renderContent({tit, info}) }
      </div>
      <i className="ply-ico">
        <PlayOutline className='inner-ico' />
      </i>
    </div>
  )
}

const SimilarLists = ({ requestCb }) => {
  const resolveLists = useContext(ResolveProvider)
  const simiLists = requestCb('getSimiSongLists')
  resolveLists[1]()
  return (
    <div className="simi-lists">
      <h3 className="jc-title">
        喜欢这首歌的人也听
      </h3>
      <SimiLists>
        {
          simiLists.map(item => {
            return (
              <SimiLists.Item 
                key={item.id}
                pic={item.album.picUrl}
                tit={item.name}
                info={`${item.artists[0].name} - ${item.album.name}`}
              ></SimiLists.Item>
            )
          })
        }
      </SimiLists>
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
  const requestCb = useApiHooks(id, 'getSimiSongLists')
  const { isFirst, rid } = useContext(TabContext)
  if (!reloadFn.load2) {
    reloadFn.load2 = () => requestCb.reload('getSimiSongLists')
  }
  useEffect(() => {
    if (isFirst) {
      return
    }
    // requestCb.reload('getSimiSongLists')
  }, [rid]);
  return (
    <Suspense fallback={ <Loading></Loading> }>
      <SimilarLists requestCb={requestCb} />
    </Suspense>
  )
})