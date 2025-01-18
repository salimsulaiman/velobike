import React from "react";
import ProgressiveImage from "./ProgressiveImage";

function CartOrder() {
  return (
    <div className="w-full flex mt-3 justify-between items-start">
      <div className="flex gap-[19px]">
        <div className="w-[95px] h-[85px] bg-slate-100 rounded-[8px] relative p-2">
          <ProgressiveImage
            src="/assets/product/FELT-fixie.png"
            alt="felt-fixie"
            width={500}
            height={500}
            className={
              "h-full w-full absolute object-contain object-center mx-auto"
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-slate-800">FELT Fixie</h4>
          <h5 className="text-bombay-400 text-[14px]">Cyan Variant</h5>
        </div>
      </div>
      <div className="w-fit text-bombay-400 text-[14px]">
        1 x IDR{" "}
        <span className="text-slate-700 font-semibold me-2">6.750.000</span>
      </div>
    </div>
  );
}

export default CartOrder;
