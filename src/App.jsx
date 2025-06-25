import { useState } from "react";
import InputContainer from "./components/inputContainer";
import { ArrowUpDown } from "lucide-react";

function App() {
  const [amount, setAmount] = useState(0);

  return (
    <div className="h-screen w-full bg-[#fafafa] flex justify-center items-center">
      <div className="bg-[#f1f0f0] border border-gray-300 rounded-3xl shadow-lg w-[90%] max-w-md p-1 relative text-center">
        {/* Stack inputs in a column */}
        <div className="flex flex-col relative ">
          <InputContainer label={"Amount"} />


            <InputContainer label={"Converted To"} />

          <span className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 bg-white border-[6px] border-[#f1f0f0] rounded-full p-3 text-sm font-medium">
            <ArrowUpDown className="text-gray-600"/>
          </span>
        </div>
        <button className="bg-[#9fe871] p-3 rounded-3xl mt-10 mb-3 w-72">Convert</button>
      </div>
    </div>
  );
}

export default App;
