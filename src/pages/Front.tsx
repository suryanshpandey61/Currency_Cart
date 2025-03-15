import React, { useState } from "react";

const Front: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);

  const conversionRate = 33.86;

  const handleConversionRate = () => {
    setConvertedAmount(amount * conversionRate);
  };

  return (
    <div className="w-[100%] pt-[5%]  min-h-screen front-bg">
      <div className="w-[70%] border  p-[2%] mx-auto  flex flex-col">
        {/* Amount div  */}
        <div className="flex w-[80%] justify-between mx-auto">
          <h1 className="text-[2rem]">Amount</h1>
          <input
            type="number"
            value={amount}
            placeholder="Enter amount in USDT"
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            className="border w-[80%] pl-[2%] text-[1.5rem] rounded-md"
          />
        </div>
        {/* From div  */}
        <div className="flex mx-auto justify-between mt-[2%] w-[80%]">
          <h1 className="text-[2rem]">From</h1>
          <input
            type="text"
            placeholder="USDT"
            readOnly
            className="border w-[80%] pl-[2%] text-[1.5rem] rounded-md"
          />
        </div>
        {/* To div  */}
        <div className="flex mx-auto justify-between mt-[2%] w-[80%]">
          <h1 className="text-[2rem]">To</h1>
          <input
            type="text"
            placeholder="TBH (Thai Bhat)"
            readOnly
            className="border w-[80%] pl-[2%] text-[1.5rem] rounded-md"
          />
        </div>
        <div className="flex mx-auto mt-[2%] text-[2rem] w-[80%]">
          <h1>1 USDT = {conversionRate} THB</h1>
        </div>
        <div className="flex  mx-auto mt-[2%] text-[2rem] w-[80%]">
          <h1>Calculated Amount : {convertedAmount} THB</h1>
        </div>
        {/* btn div  */}
        <div className="flex mx-auto mt-[2%] w-[80%] justify-between">
          {/* Convert btn  */}

          <button className="convert-btn"
          onClick={handleConversionRate}
          >
           
            <span>Convert</span>
          </button>
          {/* place order btn  */}
          <button className="placeorder-btn">
            <span>Place Order</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Front;
