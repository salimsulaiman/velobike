import React, { useState } from "react";
import CartItems from "../CartItems";
import { MdDiscount } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

function Cart() {
  // const steps = [0, 1, 2];
  const [currentStep] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [redeem, setRedeem] = useState(false);

  const cartItems = [
    {
      name: "FELT Bike",
      type: "Fixie Bike",
      variant: "Cyan",
      price: 6750000,
      image: "/assets/product/FELT-fixie.png",
    },
    {
      name: "RBEA Road Bike",
      type: "Road Bike",
      variant: "Red",
      price: 8500000,
      image: "/assets/product/RBEA-road.png",
    },
  ];

  const handleClear = () => {
    setInputValue("");
  };

  const handleRedeem = () => {
    setRedeem(true);
    console.log("Coupons redeemed!"); // Debugging
  };
  return (
    <>
      <div className="w-full px-[21px] py-[40px] h-full overflow-auto scrollbar">
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
          <div className="w-full">
            {cartItems.map((items, index) => {
              return (
                <CartItems
                  key={index}
                  name={items?.name}
                  type={items?.type}
                  variant={items?.variant}
                  price={items?.price}
                  image={items?.image}
                />
              );
            })}
          </div>
          <div className="w-full flex gap-8 mt-8">
            <div className="w-1/2">
              <h4 className="text-slate-800 font-medium mb-[10px]">Coupons</h4>
              <div className="flex justify-end items-center gap-2 relative w-full rounded-[8px] border border-alto-100 p-[14px] text-sm group group-focus:border-green-500">
                <label
                  htmlFor="coupons"
                  className="flex gap-2 text-bombay-400 items-center absolute top-1/2 -translate-y-1/2 left-[14px] cursor-text w-full"
                >
                  <MdDiscount />
                  <h5 className="text-sm">Coupons</h5>
                </label>
                <input
                  type="text"
                  className="max-w-1/2 text-green-700 focus:outline-none text-right uppercase"
                  maxLength={10}
                  id="coupons"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                {inputValue && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <RxCross2 />
                  </button>
                )}
              </div>
              <div className="w-full flex mt-2 justify-end">
                <button
                  onClick={handleRedeem}
                  className="text-xs text-slate-500 hover:text-green-800"
                >
                  Redeem
                </button>
              </div>
            </div>
            <div className="w-1/2">
              <h4 className="text-slate-800 font-medium mb-[10px]">
                Price Details
              </h4>
              <div className="w-full p-4 bg-alabaster-100 rounded-[8px]">
                <ul className="w-full">
                  <li className="text-xs text-slate-800">3 Items</li>
                  <li className="text-xs text-slate-800 w-full flex justify-between my-2">
                    <h5 className="text-bombay-400">1 x FELT Fixie</h5>
                    <h5 className="text-slate-800 font-medium">6.750.000</h5>
                  </li>
                  <li className="text-xs text-slate-800 w-full flex justify-between my-2">
                    <h5 className="text-bombay-400">1 x FELT Fixie</h5>
                    <h5 className="text-slate-800 font-medium">6.750.000</h5>
                  </li>
                  {redeem && (
                    <li className="text-xs text-slate-800 w-full flex justify-between my-2">
                      <h5 className="text-bombay-400">Coupon Discount</h5>
                      <h5 className="text-green-800 font-medium">-200.000</h5>
                    </li>
                  )}
                </ul>
                <hr className="my-4" />
                <div className="flex items-center justify-between text-slate-800 font-medium">
                  <h4>Total Amount</h4>
                  <h4>17.300.000</h4>
                </div>
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-curious-blue-600 hover:bg-curious-blue-700 text-white mt-4 text-sm py-[10px]"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
