const Disk = ({ url }) => {
  return (
    <div className="cover">
      <div className="cover-pic">
        <div className="cover-border"></div>
        <div className="cover-img">
          <img src={url} alt="" className="rotate-cove paused" />
        </div>
        <span className="line off"></span>
        <span className="ply-btn"></span>
      </div>
    </div>
  )
}

export default Disk