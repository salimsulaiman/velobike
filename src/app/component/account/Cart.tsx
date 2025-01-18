import React, { useState } from "react";
import CartItems from "../CartItems";
import { MdDiscount } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import CartMenu from "./cartMenu/CartMenu";
import CartAddressMenu from "./cartMenu/CartAddressMenu";
import CartPaymentMenu from "./cartMenu/cartPaymentMenu";

function Cart() {
  const steps = [0, 1, 2];
  const [currentStep, setCurrentStep] = useState(0);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "FELT Bike",
      type: "Fixie Bike",
      variant: "Cyan",
      price: 6750000,
      quantity: 1,
      image: "/assets/product/FELT-fixie.png",
    },
    {
      id: 2,
      name: "RBEA Road Bike",
      type: "Road Bike",
      variant: "Red",
      price: 8500000,
      quantity: 1,
      image: "/assets/product/RBEA-road.png",
    },
  ]);

  const [toast, setToast] = useState(false);
  const [toastError, setToastError] = useState(false);
  const [toastDeleteItem, setToastDeleteItem] = useState(false);

  return (
    <>
      <div className="w-full px-[21px] py-[40px] h-full overflow-auto scrollbar">
        <h2 className="text-2xl font-medium text-big-stone-950 mb-3">Cart</h2>
        {cartItems.length === 0 ? (
          <div className="w-full h-1/2 flex flex-col gap-2 items-center justify-center">
            <h1 className="text-slate-400 font-bold">
              Your cart is still empty
            </h1>
            <h2 className="text-slate-800 font-bold">Lets add some items!</h2>
            <Link
              href={"/collection"}
              className="bg-curious-blue-600 text-sm text-white px-4 py-2 rounded-full hover:bg-curious-blue-700"
            >
              Go to shop
            </Link>
          </div>
        ) : (
          <div className="w-full">
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
            {currentStep == 0 && (
              <CartMenu
                cartItems={cartItems}
                setToast={setToast}
                setToastError={setToastError}
                setToastDeleteItem={setToastDeleteItem}
                setCartItems={setCartItems}
                steps={steps}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
              />
            )}
            {currentStep == 1 && (
              <CartAddressMenu
                cartItems={cartItems}
                steps={steps}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
              />
            )}
            {currentStep == 2 && <CartPaymentMenu />}
          </div>
        )}
      </div>
      {toast && (
        <div className="toast toast-end z-50">
          <div className="alert alert-success text-white">
            <span>Successfully use coupon</span>
          </div>
        </div>
      )}
      {toastError && (
        <div className="toast toast-end z-50">
          <div className="alert alert-error text-white">
            <span>You already redeem this code</span>
          </div>
        </div>
      )}
      {toastDeleteItem && (
        <div className="toast toast-end z-50">
          <div className="alert alert-error text-white">
            <span>Item successfully deleted</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
