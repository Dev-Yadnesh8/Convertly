import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({});
    useEffect( async()=>{
      try {
        const response = await  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
        const rawData = await response.json();
        console.log(rawData);
        setData(rawData[currency]);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      
    },[currency]);

    return data;
}

export default useCurrencyInfo;