import axios from "axios";

export default {
    async getLrc(id) { //获取歌词
        const res = await axios.get('/api/lyric', {params: {id}})
        return res.data.lrc.lyric;
    },
    async getSongUrl(id) { //播放地址
        const res = await axios.get('/api/song/url', {params: {id}})
        return res.data.data[0].url;
    },
    async getSongInfo(ids) { //歌曲详情
        const res = await axios.get('/api/song/detail', {params: {ids}})
        return res.data.songs[0];
    },
    async search({
        kw = '',
        type = 1,
        limit = 30,
        offset = 0
    }) { //搜索
        const res = await axios.get('/api/cloudsearch', {params: {
            keywords: kw,
            type,
            limit,
            offset
        }})
        return res.data.result.songs;
    },
}