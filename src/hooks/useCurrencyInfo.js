import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((response) => response.json())
      .then((rawData) => {
        console.log(rawData);
        setData(rawData[currency]);
        console.log(data);
      }).catch((e)=> {
        console.error(e);
        
      } );
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
