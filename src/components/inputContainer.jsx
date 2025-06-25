import { useId } from "react";

function InputContainer({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currenciesOption = [],
  selectedCurrency = "inr",
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountId = useId();
  console.log("Unique Id", amountId);

  return (
    <div className="bg-white rounded-3xl px-5 py-6 w-full h-36 flex justify-between items-center mb-2">
      <div className="flex flex-col items-start">
        <label
          htmlFor={amountId}
          className="text-[13px] text-gray-400 mb-4 font-semibold"
        >
          {label}
        </label>
        <input
          id={amountId}
          type="number"
          value={amount}
          disabled={amountDisable}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          placeholder="Enter Amount"
          className="text-3xl font-semibold text-gray-800 placeholder-gray-600 bg-transparent p1 focus:outline-none  w-[75%]"
        />
      </div>
      <select
        value={selectedCurrency}
        onChange={(e) => {
          console.log("Currency selected ", e.target.value);

          onCurrencyChange && onCurrencyChange(e.target.value);
        }}
        disabled={currencyDisable}
        className="bg-[#fafafa] border border-gray-300 rounded-xl h-10 px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        {currenciesOption.map((currency, index) => {
          return (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default InputContainer;
