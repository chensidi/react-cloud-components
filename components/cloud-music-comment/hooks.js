import { useState, useEffect } from 'react'

function randomSortArray(arr) {
  var stack = [];
  while (arr.length) {
      //Math.random()：返回 [0,1) 之间的一个随机数
      var index = parseInt(Math.random() * arr.length);  // 利用数组长度生成随机索引值
      stack.push(arr[index]);  // 将随机索引对应的数组元素添加到新的数组中
      arr.splice(index, 1);  // 删除原数组中随机生成的元素
  }
  return stack;
}

const baseUrl = 'http://zhoup.top:7003'
// const baseUrl = 'http://localhost:5000'
const urlsMap = {
  simiPlayLists: '/simi/playlist',
  simiSongLists: '/simi/song',
  comments: '/comment/music'
}

function getSimiPlayLists(id) {
  return fetch(`${baseUrl}${urlsMap.simiPlayLists}?id=${id}`)
  .then(res => res.json())
  .then(res => {
    const { playlists = [] } = res
    return randomSortArray(playlists)
  })
}

function getSimiSongLists(id) {
  return fetch(`${baseUrl}${urlsMap.simiSongLists}?id=${id}`)
  .then(res => res.json())
  .then(res => {
    const { songs = [] } = res
    return randomSortArray(songs)
  })
}

const requestFnMap = {
  getSimiPlayLists,
  getSimiSongLists
}

const requestMaps = {}

export function useApiHooks(id, ...requestFns) {
  console.log('excute')
  requestFns.forEach(fn => {
    if (!requestMaps[fn] || id != requestMaps[fn].id) {
      requestMaps[fn] = {
        loading: true,
        result: null,
        _promise: requestFnMap[fn](id),
        id
      }
    }
  })

  Object.values(requestMaps).forEach(fnObj => {
    fnObj._promise.then(res => {
      fnObj.result = res
      fnObj.loading = false
    })
  })

  const getterFn = (fnName) => {
    const fnObj = requestMaps[fnName]
    console.log(fnObj.loading)
    if (fnObj.loading) {
      throw fnObj._promise
    } else {
      return fnObj.result
    }
  }

  getterFn.reload = function(fnName) {
    console.log('reload')
    const fnObj = requestMaps[fnName]
    fnObj.loading = true
    fnObj.result = null
    // requestFnMap[fnName](fnObj.id)
    fnObj._promise = requestFnMap[fnName](fnObj.id)
    /* return fnObj._promise.then(res => {
      setTimeout(() => {
        fnObj.result = res
        fnObj.loading = false
      }, 1000)
    }) */
  }

  return getterFn
}

export function getCmts({id, limit = 20, offset = 0}) {
  return fetch(`${baseUrl}${urlsMap.comments}?id=${id}&limit=${limit}&offset=${offset}`)
  .then(res => res.json())
  .then(res => {
    return res
  })
}

export const reloadFn = {
  load: null,
  load2: null
}