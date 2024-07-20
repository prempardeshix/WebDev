import { memo, useCallback, useEffect, useMemo, useState } from "react";

function App() {
  const [exchangeData1, setExchangeData1] = useState({ returns: 0 });
  const [exchangeData2, setExchangeData2] = useState({ returns: 0 });
  const [bankData, setBankData] = useState({ income: 0 });

  useEffect(() => {
    setTimeout(() => {
      setExchangeData1({ returns: 100 });
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setExchangeData2({ returns: 100 });
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBankData({ income: 100 });
    }, 3000);
  }, []);

//   function cryptoSum() {
//     return exchangeData1.returns + exchangeData2.returns;
//   }

  const cryptoSum = useCallback((cryptoSum) => { return exchangeData1.returns + exchangeData2.returns;}, [exchangeData1, exchangeData2]);

  return <Calculator cryptoSum={cryptoSum}></Calculator>;
}

const Calculator = memo(({ cryptoSum }) => {
  console.log("re-rendered");
  return <div>re-rendered crypto returns are {cryptoSum()}</div>;
});

export default App;
