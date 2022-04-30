import React, { useState, useImperativeHandle, forwardRef } from 'react'
import { LeftOutline } from 'antd-mobile-icons'

import './style.scss'
import SwipeMV from './SwipeMV'

const MV = forwardRef((props, ref) => {
  // 控制显示开关
  const [show, setShow] = useState(false)
  // 暴露给父组件使用
  useImperativeHandle(ref, () => {
    return {
      show: () => setShow(true),
      hide: () => setShow(false)
    }
  })

  return (
    <div className={`mv-wrap ${show?'show-mv':''}`}>
      <LeftOutline className='back' onClick={() => setShow(false)} />
      <SwipeMV />
    </div>
  )
})

export default MV