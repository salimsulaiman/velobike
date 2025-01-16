import React, { useState } from "react";

function Cart() {
  const steps = [0, 1, 2];
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <>
      <div className="w-full px-[21px] py-[40px]">
        <h2 className="text-2xl font-medium text-big-stone-950 mb-3">Cart</h2>
        <div className="w-6/12 mx-auto relative">
          <div className="h-[1px] bg-bombay-400 w-11/12 absolute top-3"></div>
          <div className="flex w-full justify-between relative z-10">
            <div className="flex flex-col items-center gap-2">
              <div
                className={`rounded-full h-7 w-7 ${
                  currentStep == 0
                    ? "bg-curious-blue-600"
                    : "bg-white border-2 border-bombay-400"
                } flex items-center justify-center`}
              >
                <h5
                  className={`text-xs font-bold ${
                    currentStep == 0
                      ? "text-white"
                      : "text-bombaborder-bombay-400"
                  }`}
                >
                  1
                </h5>
              </div>
              <h5
                className={`text-xs ${
                  currentStep == 0 ? "text-slate-700" : "text-bombay-400"
                }`}
              >
                Cart
              </h5>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className={`rounded-full h-7 w-7 ${
                  currentStep == 1
                    ? "bg-curious-blue-600"
                    : "bg-white border-2 border-bombay-400"
                } flex items-center justify-center`}
              >
                <h5
                  className={`text-xs font-bold ${
                    currentStep == 1
                      ? "text-white"
                      : "text-bomaborder-bombay-400"
                  }`}
                >
                  2
                </h5>
              </div>
              <h5
                className={`text-xs ${
                  currentStep == 1 ? "text-slate-700" : "text-bombay-400"
                }`}
              >
                Address
              </h5>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className={`rounded-full h-7 w-7 ${
                  currentStep == 2
                    ? "bg-curious-blue-600"
                    : "bg-white border-2 border-bombay-400"
                } flex items-center justify-center`}
              >
                <h5
                  className={`text-xs font-bold ${
                    currentStep == 2
                      ? "text-white"
                      : "text-bombborder-bombay-400"
                  }`}
                >
                  3
                </h5>
              </div>
              <h5
                className={`text-xs ${
                  currentStep == 2 ? "text-slate-700" : "text-bombay-400"
                }`}
              >
                Payment
              </h5>
            </div>
          </div>
        </div>
        <div className="w-full px-4">
          <div className="w-full flex justify-between mt-8 items-center">
            <div className="form-control">
              <label className="label cursor-pointer flex gap-2">
                <input type="checkbox" className="checkbox" />
                <span className="label-text text-slate-800 text-base">
                  Select All
                </span>
              </label>
            </div>
            <button className="bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 text-xs rounded-full">
              Remove
            </button>
          </div>
          <hr className="mt-4" />
        </div>
      </div>
    </>
  );
}

export default Cart;
