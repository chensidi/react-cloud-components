import { Popup } from 'antd-mobile'
import { useState, forwardRef, useImperativeHandle, createContext, useEffect } from 'react'

import './style.scss'
import CommentsTabs from './Tabs.jsx'

const resolveLists = []
const [promise1, promise2] = [
  createPromise(),
  createPromise()
]

function createPromise() {
  return new Promise((resolve) => {
    resolveLists.push(resolve)
  })
}

export const ResolveProvider = createContext()

const Comment = ({id}, ref) => {
  // 展示/隐藏popup
  const [showPop, setPop] = useState(false)

  // 给外部提供show/hide方法
  useImperativeHandle(ref, () => {
    return {
      show: () => setPop(true),
      hide: () => setPop(false)
    }
  })

  const [tops, setTops] = useState([])

  useEffect(() => {
    Promise.all([promise1, promise2]).then(() => {
      console.log('loaded')
      const simiListsDom = document.querySelector('.simi-lists')
      const cmtWrapDom = document.querySelector('.cmt-wrap')
      const admTabsDom = document.querySelector('.adm-tabs')
      const [top1, top2] = [
        simiListsDom.offsetTop - admTabsDom.clientHeight - 10,
        cmtWrapDom.offsetTop - admTabsDom.clientHeight - 10
      ]
      setTops([top1, top2])
    })
  }, [])

  return (
    <Popup
      visible={showPop}
      onMaskClick={() => {
        setPop(false)
      }}
      bodyStyle={{ 
        height: '85vh',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
      }}
    >
      <div className='pop-wrap'>
        <ResolveProvider.Provider value={resolveLists}>
          <CommentsTabs tops={tops} id={id} />
        </ResolveProvider.Provider>
      </div>
    </Popup>
  )
}

export default forwardRef(Comment)

/* 
  生成2个promise
  分别resolve之后获取dom属性
*/