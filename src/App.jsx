import { useRef, useEffect, useState, FC, Componennt } from 'react'
import { Button, SearchBar, List } from 'antd-mobile'

import { useSearch } from './hooks'

import Comment from '../components/cloud-music-comment'
import MV from '../components/cloud-music-mv'
import { MiniBar, PlayPanel } from '../components/cloud-music-audio-player'

function App() {
  const cmtRef = useRef()

  function showCmt() {
    cmtRef.current.show()
  }

  const [cid, setId] = useState(188261)
  function changeId(id) {
    setId(id)
    showCmt()
  }

  const [searchList, update] = useSearch()
  function searchHandler(val) {
    console.log(val)
    update(val)
  }

  const mvRef = useRef()
  function clickHandler() {
    // console.log(mvRef.current);
    mvRef.current.show()
  }

  return (
    <div className="App">
      <SearchBar onSearch={searchHandler} />
      <List header="可点击的功能列表">
        {searchList &&
          searchList.map(({ id, name }) => {
            return (
              <List.Item key={id} onClick={() => changeId(id)}>
                {name}
              </List.Item>
            )
          })}
      </List>
      <Comment ref={cmtRef} id={cid} />
      <MV ref={mvRef} />
      <Button onClick={clickHandler}>显示MV</Button>
      <MiniBar id={188261} />
      <PlayPanel id={188261} />
    </div>
  )
}

export default App
