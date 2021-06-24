import { useEffect } from "react"
import { getCriptoUpdateUrl } from "../constants"
import useSetCounter from "../hooks/setCounter"

function useFetchCriptoUpdate(counter, setCounter, id, updateCryptoData) {
  //   const [counter, setCounter] = useSetCounter()

  useEffect(() => {
    if (counter < 0) {
      fetch(getCriptoUpdateUrl(id))
        .then(resp => resp.json())
        .then(data => {
          updateCryptoData(
            {
              current_price: data[id].gbp,
              last_updated: data[id]["last_updated_at"],
            },
            id
          )
        })
      setCounter(30)
    }
  }, [id, counter, setCounter, updateCryptoData])
}

export default useFetchCriptoUpdate
