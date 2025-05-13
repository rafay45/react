import { useState, useEffect} from "react";

function useCurrencyInfo(currency){
  const [data, setData] = useState({})
    useEffect(() => {
      let data =  fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then(response => response.json()).then(response => setData(response[currency]))
      console.log(data);
    }, [currency])
       return data;
}

export default useCurrencyInfo;