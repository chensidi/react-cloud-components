import axios from 'axios'

const api = 'http://zhoup.top:7003'

async function requestMiniInfo(id) {
  const {
    data: {
      songs: [info],
    },
  } = await axios.get(`${api}/song/detail?ids=${id}`)
  return {
    title: info.name,
    author: info.ar[0].name,
    picUrl: info.al.picUrl,
  }
}

async function requestLrc(id) {
  const {
    data: {
      lrc: { lyric },
    },
  } = await axios.get(`${api}/lyric?id=${id}`)
  return lyric
}

async function requestUrl(id) {
  const {
    data: {
      data: [{ url }],
    },
  } = await axios.get(`${api}/song/url?id=${id}`)
  return url
}

export { requestMiniInfo, requestLrc, requestUrl }
