import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function getCurrencyInfo() {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        const json = await response.json();
        setData(json[currency]);
      } catch (err) {
        console.log(err);
      }
    }

    getCurrencyInfo();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
