export function setImgSize(url, w, h) {
  return url + `?imageView&thumbnail=${w}y${h}&quality=75&tostatic=0`
}

export function resolveArtists(artists = []) {
  const artistsArr = artists.map((item) => item.name)
  return artistsArr.join('/')
}

export function formatLrc(lrc) {
  //歌词转数组
  if (typeof lrc !== 'string') return []
  let split1 = lrc.split('[')
  split1.shift()
  let split2 = []
  split1.map((item) => {
    let temp = item.split(']')
    let time = temp[0]
    time = time.split(':')
    time = parseInt(time[0]) * 60 + Math.round(time[1])
    if (temp[1].trim() != '') {
      //排除空歌词
      split2.push({
        time,
        txt: temp[1],
      })
    }
  })
  return split2
}

export function timeFormat(allSeconds, formatter = 'mm-ss', slipter = ':') {
  let [hours, minutes, seconds] = [
    Math.floor(allSeconds / 3600),
    Math.floor((allSeconds % 3600) / 60),
    (allSeconds % 3600) % 60,
  ]
  let formatterArr = formatter.split('-')
  const res = formatterArr.map((itm) => {
    if (itm === 'hh') {
      return hours.toString().padStart(2, '0')
    }
    if (itm === 'h') {
      return hours.toString()
    }
    if (itm === 'mm') {
      return minutes.toString().padStart(2, '0')
    }
    if (itm === 'm') {
      return minutes.toString()
    }
    if (itm === 'ss') {
      return seconds.toString().padStart(2, '0')
    }
    if (iem === 's') {
      return seconds.toString()
    }
  })
  return res.join(slipter)
}

export function getNextSong(id, list, flag) {
  console.log(id)
  let idx = list.findIndex((itm) => itm.id == id)
  flag ? idx++ : idx--
  if (idx >= list.length) {
    //边界处理
    idx = 0
  }
  if (idx < 0) {
    idx = list.length - 1
  }
  const nextSong = list[idx]
  return nextSong
}

export function playSong(song, reactiveCurInfo) {
  Object.entries(song).map(([k, v]) => {
    reactiveCurInfo[k] = v
  })
}
