import { useState } from "react";
import api from './server'

function useSearch() {
  const [searchList, setSearch] = useState([])
  
  function updateList(keywords) {
    if (keywords) {
      api.search({kw:keywords}).then(res => {
        setSearch(res)
      })
    }
  }

  return [searchList, updateList]
}

export {
  useSearch
}