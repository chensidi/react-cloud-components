import {UnorderedListOutline} from 'antd-mobile-icons'
import {useRequest} from 'ahooks'

import {requestMiniInfo} from './api'
import CircleBar from './CircleBar'

// 底部播放条
const MiniBar = ({bottom = 0, id}) => {
  const {data = {}} = useRequest(() => requestMiniInfo(id))
  return (
    <div className="mini-bar" style={{bottom}}>
      <div className="content">
        <img src={data.picUrl} />
        <div className="ply-info">
          <h4>{data.title}</h4>
          <p>{data.author}</p>
        </div>
      </div>
      <CircleBar />
      <div className="ply-ico">
        <UnorderedListOutline />
      </div>
    </div>
  )
}

export default MiniBar
