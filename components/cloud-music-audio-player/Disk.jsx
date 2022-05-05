import { useMemo, memo } from 'react'

const Disk = ({ url, playCtrl, playState }) => {
  console.log('render disk')
  const innerClass = useMemo(() => {
    return {
      rotClass: playState ? 'running' : 'paused',
      lineClass: playState ? 'on' : 'off',
      btnClass: playState ? 'hide' : '',
    }
  }, [playState])
  return (
    <div className="cover">
      <div className="cover-pic" onClick={playCtrl}>
        <div className="cover-border"></div>
        <div className="cover-img">
          <img
            src={url}
            alt=""
            className={`rotate-cover ${innerClass.rotClass}`}
          />
        </div>
        <span className={`line ${innerClass.lineClass}`}></span>
        <span className={`ply-btn ${innerClass.btnClass}`}></span>
      </div>
    </div>
  )
}

export default memo(Disk)
