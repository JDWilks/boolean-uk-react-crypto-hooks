import { useEffect, useState } from "react"
import { STATUS_UPDATES } from "../constants"

function useFetchStatusUpdates() {
  const [newsList, setNewsList] = useState([])

  useEffect(
    () =>
      fetch(STATUS_UPDATES)
        .then(resp => resp.json())
        .then(data => setNewsList(data.status_updates)),
    [setNewsList]
  )
  return [newsList]
}

export default useFetchStatusUpdates
