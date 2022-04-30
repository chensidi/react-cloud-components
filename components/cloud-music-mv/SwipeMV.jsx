import React, { useRef } from 'react'
import { Swiper } from 'antd-mobile'
import { PlayOutline } from 'antd-mobile-icons'

import { Video, VideoInfo } from './Video'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

function playHandler(ref) {
  // console.log(ref);
  ref.current.toggle()
}

const MvItem = (props) => {
  <Swiper.Item>
    <div className='mv-item' onClick={playHandler}>
      <Video />
      <VideoInfo />
      <PlayOutline className='ply-ico'/>
    </div>
  </Swiper.Item>
}

const verticalItems = colors.map((color, index) => <MvItem key={index} />)

const SwipeMV = () => {
  const refs = []
  colors.forEach(item => {
    refs.push(useRef())
  })

  return (
    <>
      <Swiper 
        direction='vertical' 
        style={{ '--height': '100vh' }}
        indicator={() => null}
      >
        {
          colors.map((color, index) => (
            <Swiper.Item key={index}>
              <div className='mv-item' onClick={() => playHandler(refs[index])}>
                <Video ref={refs[index]} />
                <VideoInfo />
                <PlayOutline className='ply-ico'/>
              </div>
            </Swiper.Item>
          ))
        }
      </Swiper>
    </>
  )
}

export default SwipeMV