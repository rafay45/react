import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})
  useEffect(() => {
    fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_DpgDu7Uj2bCmOhPbWT5tNIJTV4jyf07f0MFNwhSU&base=${currency}`)
      .then(response => response.json()).then(response => {
        setData(response.data)
      }).catch(error => {
        console.error("Error fetching currency data:", error);
        setData({})
      });
  }, [currency])

  return data;
}

export default useCurrencyInfo;