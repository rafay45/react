import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})
  useEffect(() => {
    let data = fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_5SLFKUVf9nrgkzuMirEqBjzTQZeldrw3UaHIuX7H&base=${currency}`)
      .then(response => response.json()).then(response => {
        setData(response.data)
      })
  }, [currency])
  return data;
}

export default useCurrencyInfo;