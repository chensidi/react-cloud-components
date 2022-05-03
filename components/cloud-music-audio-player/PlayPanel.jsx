import Bg from './Bg'
import Disk from './Disk'
import Lrc from './Lrc'
import { formatLrc } from '../tools'

import { useRequest, useToggle } from 'ahooks'
import { requestLrc } from './api'
import { useMemo, useRef } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const PlayPanel = ({ id }) => {
  const { data: lrc } = useRequest(() => requestLrc(id))
  const lrcLists = useMemo(() => formatLrc(lrc), [lrc])

  const [show, { toggle }] = useToggle()
  const memoLrc = useRef({ idx: 0, top: 0 })
  return (
    <section className="player-wrap">
      <Bg url="https://p1.music.126.net/lFSv32MTTbVa8r6D3zuYrw==/64871186055033.jpg" onClick={toggle} />
      <SwitchTransition mode="out-in">
        <CSSTransition
          unmountOnExit={true}
          appear
          classNames="fade"
          timeout={150}
          in={show}
          key={show ? "on" : "off"}
        >
          {
            show ? <Lrc lrcLists={lrcLists} onClick={toggle} memoLrc={memoLrc} /> : <Disk url="https://p1.music.126.net/lFSv32MTTbVa8r6D3zuYrw==/64871186055033.jpg" />
          }
        </CSSTransition>
      </SwitchTransition>
    </section>
  )
}

export default PlayPanel
