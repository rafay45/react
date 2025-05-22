import { useState, useEffect} from "react";

function useCurrencyInfo(currency){
  const [data, setData] = useState({})
    useEffect(() => {
      let data =  fetch(`https://api.exchangerate.host/latest?base=${currency}`)
      .then(response => response.json()).then(response => setData(response[currency]))
      console.log(data);
    }, [currency])
       return data;
}

export default useCurrencyInfo;