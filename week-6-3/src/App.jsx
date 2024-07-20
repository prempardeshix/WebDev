import { useEffect, useMemo, useState } from "react";

function App() {
  const [exchangeData1, setExchangeData1] = useState({ returns: 0 });
  const [exchangeData2, setExchangeData2] = useState({ returns: 0 });
  const [bankData, setBankData] = useState({ income: 0 });

  useEffect(() => {
    setTimeout(() => {
      setExchangeData1({ returns: 100 });
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setExchangeData2({ returns: 100 });
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBankData({ income: 100 });
    }, 1000);
  }, []);

  const exchangeData = useMemo(() => {
    console.log("Hi");
    return exchangeData1.returns + exchangeData2.returns;
  }, [exchangeData1, exchangeData2]);

  // console.log("Hi");
  // const exchangeData = exchangeData1.returns + exchangeData2.returns;

  const incomeTax = (bankData.income + exchangeData) * 0.3;

  return <div>hi there, your income tax returns are {incomeTax}</div>;
}

export default App;
