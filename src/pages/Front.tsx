import React, { useState } from "react";

const Front: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);

  const conversionRate = 33.86;

  const handleConversionRate = () => {
    setConvertedAmount(amount * conversionRate);
  };

  return (
    <div className="w-[100%] lg:pt-[5%] pt-[50px]  min-h-screen front-bg">
      <div className="lg:w-[70%] w-[90%] border rounded-md  p-[2%] mx-auto  flex flex-col">
        {/* Amount div  */}
        <div className="flex lg:w-[80%] lg:pt-0 pt-5 w-[90%] justify-between mx-auto">
          <h1 className="lg:text-[2rem] text-[1.5rem]">Amount</h1>
          <input
            type="number"
            value={amount}
            placeholder="Enter amount in USDT"
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            className="border w-[60%] lg:w-[80%] pl-[2%] text-[1.5rem] rounded-md"
          />
        </div>
        {/* From div  */}
        <div className="flex mx-auto justify-between mt-[2%] lg:w-[80%] lg:pt-0 pt-5 w-[90%]">
          <h1 className="lg:text-[2rem] text-[1.5rem] ">From</h1>
          <input
            type="text"
            placeholder="USDT"
            readOnly
            className="border lg:w-[80%] w-[60%] pl-[2%] text-[1.5rem] rounded-md"
          />
        </div>
        {/* To div  */}
        <div className="flex mx-auto justify-between mt-[2%] lg:w-[80%] lg:pt-0 pt-5  w-[90%]">
          <h1 className="lg:text-[2rem] text-[1.5rem]">To</h1>
          <input
            type="text"
            placeholder="TBH (Thai Bhat)"
            readOnly
            className="border lg:w-[80%] w-[60%] pl-[2%] lg:text-[1.5rem] text-[1.2rem] rounded-md"
          />
        </div>
        <div className="flex mx-auto mt-[2%] lg:text-[2rem]  text-[1.5rem] lg:w-[80%] w-[90%] lg:pt-0 pt-5">
          <h1>1 USDT = {conversionRate} THB</h1>
        </div>
        <div className="flex  mx-auto mt-[2%] lg:text-[2rem] lg:pt-0 pt-5 lg:w-[80%] w-[90%] text-[1.5rem]">
          <h1>Calculated Amount : {convertedAmount} THB</h1>
        </div>
        {/* btn div  */}
        <div className="flex mx-auto mt-[2%] lg:w-[80%] w-[90%] lg:pt-0 pt-5 justify-between">
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
