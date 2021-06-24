import { useEffect, useState } from "react"

function useSetCounter() {
  const [counter, setCounter] = useState(30)
  const [playTicker, setPlayTicker] = useState(false)

  useEffect(() => {
    const interval =
      playTicker &&
      setInterval(() => {
        setCounter(count => count - 1)
      }, 1000)

    return () => clearInterval(interval)
  }, [setCounter, playTicker])

  return [counter, setCounter, playTicker, setPlayTicker]
}
export default useSetCounter
