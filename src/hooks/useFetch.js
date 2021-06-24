import { useEffect, useState } from "react"

function useFetch(url, key) {
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        if (key === "undefined") {
          setList(data)
        } else {
          setList(data.key)
        }
      })
  }, [setList])

  return [list, setList]
}

export default useFetch
