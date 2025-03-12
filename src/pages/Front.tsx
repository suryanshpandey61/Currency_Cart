import React, { useState } from "react";

const Front: React.FC = () => {
 
    const [ amount, setAmount ] = useState<number>(0);
    const [ convertedAmount, setConvertedAmount ] = useState<number>(0);

    const conversionRate = 33.86;

    const  handleConversionRate = () => {
              setConvertedAmount(amount*conversionRate);
    }




    return(
        <div className="w-[100%]">
            
            <div className="w-[70%]">
                 {/* Amount div  */}
                 <div>
                    Amount 
                    <input type="number"
                      value={amount}
                      placeholder="Enter amount in USDT"
                      onChange={(e)=>setAmount(parseFloat(e.target.value))}
                      className="border"
                    />
                 </div>
                 {/* From div  */}
                 <div>
                    From 
                    <input type="text"
                      placeholder="USDT"
                      readOnly 
                      className="border"
                    />
                 </div>
                  {/* To div  */}
                  <div>
                    To
                    <input type="text" 
                    placeholder="TBH (Thai Bhat)"
                    readOnly
                    className="border"
                    />
                  </div>
                  <div>
                    1 USDT = {conversionRate} THB
                  </div>
                  <div>
                    Calculated Amount : {convertedAmount}
                  </div>
                  <div>
                      <button 
                      onClick={handleConversionRate}
                      >Place Order</button>
                  </div>
            </div>

        </div>
    )
}
export default Front;