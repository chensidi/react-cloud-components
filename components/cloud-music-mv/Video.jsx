import React, { useState, useImperativeHandle, useRef, forwardRef } from 'react'

const VideoInfo = () => {
  return (
    <section className='vedio-info'>
      <h4 className='tit'>咖啡 - <em className='time'>2022-01-31</em></h4>
      <p className='desc'>
        #太浓了吧否则怎会苦得说不出话
      </p>
      <div className='tags'>
        <span className='tag-itm'>华语</span>
      </div>
    </section>
  )
}

const Video = forwardRef((props, ref) => {
  // 播放状态
  const [isPlay, setPlay] = useState(false)
  // 对外暴露播放方法
  const videoRef = useRef()
  useImperativeHandle(ref, () => {
    return {
      play: () => {
        setPlay(true)
        videoRef.current.play()
      },
      pause: () => {
        setPlay(false)
        videoRef.current.pause()
      },
      toggle: () => {
        setPlay(val => !val)
        if (isPlay) {
          videoRef.current.pause()
        } else {
          videoRef.current.play()
        }
      } 
    }
  })
  return (
    <video 
      ref={videoRef}
      className='mv-vedio' 
      src="http://vodkgeyttp8.vod.126.net/cloudmusic/NjEyMTk1NjU=/8bc10695de9c671a31ab3e4b69a8f846/e34c232a3aeb7cf691c1bae5319aee76.mp4?wsSecret=00a3f468c23f73cbd20d5e747e6efae0&wsTime=1644038993" 
      poster='http://p1.music.126.net/Xsaj_1uInj2fvtmB18wGBA==/18798350302008480.jpg'>
    </video>
  )
})

export {
  VideoInfo,
  Video
} 