import { useState, useRef, useEffect, memo } from 'react'
import { PlayOutline } from 'antd-mobile-icons'
import { useDebounceFn } from 'ahooks'
import { timeFormat } from '../tools'

function getPortHeight(dom) {
  //计算歌词窗口padding值
  const { height } = dom.getBoundingClientRect()
  return height / 2
}

function getLrcIndexByScrollTop(top, maxLen) {
  //根据滑动距离计算当前歌词下标
  let shouldIdx = Math.round(top / 24)
  if (shouldIdx > maxLen - 1) {
    shouldIdx = maxLen - 1
  }
  return shouldIdx
}

const Lrc = ({ lrcLists = [], onClick, memoLrc, curTime }) => {
  console.log('render lrc')
  const lrcPort = useRef()
  const [lrcPd, setLrcPd] = useState(0)

  useEffect(() => {
    const pd = getPortHeight(lrcPort.current)
    setLrcPd(pd)
    console.log(memoLrc.current.idx)
    setTimeout(() => (lrcPort.current.scrollTop = memoLrc.current.top), 0)
  }, [lrcLists])

  //当前歌词下标
  const [curIdx, setCurIdx] = useState(0)
  //歌词滑动函数
  const { run: scrollHandler } = useDebounceFn(
    () => {
      const nowTop = lrcPort.current.scrollTop
      const shouldIdx = getLrcIndexByScrollTop(nowTop, lrcLists.length)
      setCurIdx(shouldIdx)
      memoLrc.current.idx = shouldIdx
      memoLrc.current.top = lrcPort.current.scrollTop
    },
    { wait: 60 }
  )

  function getScrollTop(curIdx) {
    //计算滚动距离
    const top = curIdx * 24
    lrcPort.current.scrollTo({ behavior: 'smooth', top })
  }
  useEffect(() => {
    const idx = getActive()
    getScrollTop(idx)
  }, [curTime])

  function getActive() {
    if (!lrcLists.length) return
    const len = lrcLists.length
    if (curTime >= lrcLists[len - 1]?.time) {
      setCurIdx(len - 1)
      return len - 1
    }
    for (let i = 0; i < lrcLists.length - 1; i++) {
      const { time: time1 } = lrcLists[i]
      const { time: time2 } = lrcLists[i + 1]
      if (curTime >= time1 && curTime < time2) {
        setCurIdx(i)
        return i
      }
    }
  }

  return (
    <div className="lrc-pannel" onClick={onClick}>
      <div
        className="lrc-port"
        ref={lrcPort}
        style={{ padding: `${lrcPd}px 0` }}
        onScroll={scrollHandler}
      >
        {lrcLists.map(({ txt, time }, i) => {
          return (
            <p key={time} className={`${i === curIdx && 'on'}`}>
              {txt}
            </p>
          )
        })}
      </div>
      <div className="tag-line">
        <span className="time-stamp">{timeFormat(lrcLists[curIdx]?.time)}</span>
        <PlayOutline className="ply-tag" name="play-circle" />
      </div>
    </div>
  )
}

export default memo(Lrc)
