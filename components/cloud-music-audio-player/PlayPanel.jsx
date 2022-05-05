import Bg from './Bg'
import Disk from './Disk'
import Lrc from './Lrc'
import Audio from './Audio'
import { formatLrc } from '../tools'

import { useRequest, useToggle } from 'ahooks'
import { requestLrc } from './api'
import { useMemo, useRef, useCallback, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const PlayPanel = ({ id }) => {
  const { data: lrc } = useRequest(() => requestLrc(id))
  const lrcLists = useMemo(() => formatLrc(lrc), [lrc])

  const [show, { toggle }] = useToggle()
  const memoLrc = useRef({ idx: 0, top: 0 })

  // 音频资源相关
  const audioRef = useRef()
  const [isPlay, { toggle: togglePlay }] = useToggle(false)
  const play = useCallback(() => {
    audioRef.current.play()
  }, [])
  const pause = useCallback(() => {
    audioRef.current.pause()
  }, [])
  const playCtrl = useCallback(() => {
    isPlay ? pause() : play()
    togglePlay()
  }, [isPlay])
  const [curTime, setCurtime] = useState(0)
  return (
    <section className="player-wrap">
      <Bg
        url="https://p1.music.126.net/lFSv32MTTbVa8r6D3zuYrw==/64871186055033.jpg"
        onClick={toggle}
      />
      <SwitchTransition mode="out-in">
        <CSSTransition
          unmountOnExit={true}
          appear
          classNames="fade"
          timeout={150}
          in={show}
          key={show ? 'on' : 'off'}
        >
          {show ? (
            <Lrc
              lrcLists={lrcLists}
              onClick={toggle}
              memoLrc={memoLrc}
              curTime={curTime}
            />
          ) : (
            <Disk
              playState={isPlay}
              playCtrl={playCtrl}
              url="https://p1.music.126.net/lFSv32MTTbVa8r6D3zuYrw==/64871186055033.jpg"
            />
          )}
        </CSSTransition>
      </SwitchTransition>
      {/* <audio
        ref={audioRef}
        onTimeUpdate={(e) => {
          setCurTime(audioRef.current.currentTime)
        }}
        src="http://m8.music.126.net/20220504204003/afa790551581f0759fa87162dd712052/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3036222985/f34b/cf39/4009/f9f78b87e872c3105830ca640a32cb25.mp3"
      ></audio> */}
      <Audio ref={audioRef} id={id} onTimeUpdate={setCurtime} />
    </section>
  )
}

export default PlayPanel
