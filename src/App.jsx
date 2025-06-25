import { useState } from "react";
import InputContainer from "./components/inputContainer";
import { ArrowUpDown } from "lucide-react";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [convertTo, setConvertTo] = useState("usd");
  const [convertedResult, setConvertedResult] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  console.log("UseCurrencyInfo result", currencyInfo);

  const currencyOptions = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(convertTo);
    setConvertTo(from);
    setConvertedResult(amount);
    setAmount(convertedResult);
  };

  const getConvertedResult = () => {
    setConvertedResult(amount * currencyInfo[convertTo]);
  };

  const conversionRate = currencyInfo[convertTo] / currencyInfo[from] || 0;

  return (
    <div className="h-screen w-full bg-[#fafafa] flex justify-center items-center">
      <div className="bg-[#f1f0f0] border border-gray-300 rounded-3xl shadow-lg w-[90%] max-w-md p-1 relative text-center">
        {/* Stack inputs in a column */}
        <div className="flex flex-col relative ">
          <InputContainer
            label={"From"}
            currenciesOption={currencyOptions}
            selectedCurrency={from}
            onCurrencyChange={(currency) => {
              console.log("Currency in app.jsx", currency);

              setFrom(currency);
            }}
            amount={amount}
            onAmountChange={(amt) => setAmount(amt)}
          />

          <InputContainer
            label={"Converted To"}
            currenciesOption={currencyOptions}
            selectedCurrency={convertTo}
            onCurrencyChange={(currency) => setConvertTo(currency)}
            amount={convertedResult}
            amountDisable:true
          />

          <span
            onClick={swap}
            className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 bg-white border-[6px] border-[#f1f0f0] rounded-full p-3 text-sm font-medium"
          >
            <ArrowUpDown className="text-gray-600" />
          </span>
        </div>
        {currencyInfo[from] && currencyInfo[convertTo] && (
          <p className="text-gray-600 text-sm mt-3">
            1 {from.toUpperCase()} = {conversionRate.toFixed(2)}{" "}
            {convertTo.toUpperCase()}
          </p>
        )}

        <button
          onClick={getConvertedResult}
          className="bg-[#9fe871] p-3 rounded-3xl mt-10 mb-3 w-72"
        >
          Convert
        </button>
      </div>
    </div>
  );
}

export default App;
