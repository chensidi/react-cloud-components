import { InfiniteScroll, List } from 'antd-mobile'
import { useState, memo, useEffect, useContext } from 'react'
import { HeartOutline } from 'antd-mobile-icons'
import { getCmts } from './hooks'
import { TabContext } from './Tabs'

const HeadImg = ({pic}) => {
  pic = pic + '?imageView=1&type=webp&thumbnail=61x0'
  return (
    <div className='cmt_head'>
      <img src={pic} alt="" />
    </div>
  )
}

const CmtWrap = ({header, body, reply}) => {
  return (
    <div className='cmt_wrap'>
      { header }
      { body }
      { reply }
    </div>
  )
}

const CmtContent = ({content, beReplied}) => {
  let reply 
  if (beReplied) {
    reply = <span>回复
      <em className='at'>{ beReplied.user.nickname }</em>：
    </span>
  }
  return (
    <>
      <div className="cmt_content">
        { reply }
        { content }
      </div>
    </>
  )
}

const CmtReply = ({beReplied}) => {
  if (!beReplied) {
    return null
  }
  const { user, content } = beReplied
  return (
    <div className='reply'>
      <span className='reply-user'>@{ user.nickname }</span>
      <span>{ content }</span>
    </div>
  )
}

const CmtHeader = ({nickName, time, likeCount}) => {
  return (
    <div className="cmt_header">
      <div className='cmt_meta'>
        <span className='cmt_user'>{ nickName }</span>
        <div className='cmt_time'>
          { time }
        </div>
      </div>
      <div className="cmt_like">
        <span className="cmt_count">{ likeCount }</span>
        <HeartOutline className='like-ico' />
      </div>
    </div>
  )
}

const CommentItem = ({
  content = '',
  beReplied,
  user = {
    avatarUrl: '',
    nickname: ''
  },
  likedCount = 0,
  timeStr = ''
}) => {
  return (
    <div className='cmt_item'>
      <HeadImg pic={user.avatarUrl} />
      <CmtWrap
        header={<CmtHeader nickName={user.nickname} time={timeStr} likeCount={likedCount} />}
        body={<CmtContent content={content} beReplied={beReplied[0]} />}
        reply={<CmtReply beReplied={beReplied[0]} />}
      />
    </div>
  )
}

const CommentLists = ({id}) => {
  const [hasMore, setHasMore] = useState(true)
  const [hotCmts, setHotCmts] = useState([]) //热评
  const [cmts, setCmts] = useState([]) //评论

  const { rid } = useContext(TabContext)

  async function loadMore() { //加载更多
    const { hotComments = [], more, comments = [] } = await getCmts({id, offset: cmts.length})
    hotComments && setHotCmts(list => [...list, ...hotComments])
    setCmts(list => [...list, ...comments])
    setHasMore(more)
  }

  function reset() { //重置数据
    setHotCmts([])
    setCmts([])
    setHasMore(true)
  }

  useEffect(() => {
    reset()
  }, [id, rid])

  return (
    <div className='cmt-wrap'>
      <h3 className="jc-title">
        精彩评论
      </h3>
      {hotCmts.map((item, index) => (
        <CommentItem key={index} {...item} />
      ))}
      <h3 className="jc-title">
        全部评论
      </h3>
      {cmts.map((item, index) => (
        <CommentItem key={index} {...item} />
      ))}
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </div>
  )
}

export default memo(CommentLists)