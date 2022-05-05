const Bg = ({ url, onClick }) => {
  return (
    <div className="bg" onClick={onClick} style={{ backgroundImage: `url(${url})` }}>
    </div>
  )
}

export default Bg