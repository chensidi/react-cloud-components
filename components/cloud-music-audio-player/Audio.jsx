import { useRef, useState, useImperativeHandle, forwardRef, memo } from 'react'
import { useRequest } from 'ahooks'
import { requestUrl } from './api'

const Audio = forwardRef(({ id, onTimeUpdate }, ref) => {
  console.log('render audio')
  const audioRef = useRef()
  const { data: url } = useRequest(() => requestUrl(id))
  useImperativeHandle(ref, () => {
    return {
      play() {
        audioRef.current.play()
      },
      pause() {
        audioRef.current.pause()
      },
    }
  })
  return (
    <audio
      src={url}
      ref={audioRef}
      onTimeUpdate={(e) => {
        onTimeUpdate(audioRef.current.currentTime)
      }}
    ></audio>
  )
})

export default memo(Audio)
