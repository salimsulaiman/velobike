import React, { Dispatch, SetStateAction, useState } from "react";
import CartOrder from "../../CartOrder";

type CartItem = {
  id: number;
  name: string;
  type: string;
  variant: string;
  price: number;
  quantity: number;
  image: string;
};

interface CartMenuProps {
  cartItems: CartItem[];
  steps: number[];
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

function CartAddressMenu({
  cartItems,
  steps,
  currentStep,
  setCurrentStep,
}: CartMenuProps) {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("id-ID").format(price);
  };
  return (
    <div className="w-full">
      <div className="w-full mt-9">
        <h4 className="text-slate-800">Shipping Address</h4>
        <h5 className="text-slate-500 text-xs mt-2">
          The address will be used for shipping
        </h5>
        <div className="w-full mt-4">
          <div className="p-3 border-[1px] border-slate-300 rounded-[7px] w-full mb-3 relative">
            <div className="w-1 h-[21px] bg-curious-blue-600 absolute left-0 top-3 rounded-r-[6px]"></div>
            <div className="flex gap-1 items-center mb-1">
              <h5 className="text-[10px] font-medium text-big-stone-950">
                House
              </h5>
              <h5 className="text-[10px] font-medium text-slate-600 px-[5px] py-[2px] rounded-[4px] bg-zumthor-100">
                Primary
              </h5>
            </div>
            <h4 className="text-base text-big-stone-950 font-medium mb-1">
              Salim Sulaiman
            </h4>
            <h5 className="text-[12px] text-big-stone-950 mb-1">
              +6287776421079
            </h5>
            <h5 className="text-[12px] text-big-stone-950 leading-loose mb-2">
              Jl. Royong Gotong, Balapulang Wetan, Kec. Balapulang, Kab. Tegal
            </h5>

            <div className="flex gap-[14px] items-center text-curious-blue-600 hover:text-curious-blue-700">
              <a href="" className="text-[12px]">
                Change Address
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-athens-gray-50/0 via-athens-gray-100 to-athens-gray-50/0 my-6"></div>
      {/* field */}
      <div className="w-full">
        <h4 className="text-slate-800">Order</h4>
        <div className="w-full flex flex-col gap-4">
          <CartOrder />
          <CartOrder />
        </div>
      </div>
      {/* line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-athens-gray-50/0 via-athens-gray-100 to-athens-gray-50/0 my-6"></div>
      {/* field */}
      <div className="w-full flex gap-8">
        <div className="w-1/2">
          <h4 className="text-slate-800">Shipping</h4>
          <div className="relative mt-4">
            <button
              className="select select-bordered w-full flex items-center"
              onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
            >
              Select shipping service
            </button>
            {dropdownIsOpen && (
              <ul className="absolute z-10 bg-white border rounded-md shadow-lg w-full cursor-pointer my-1">
                <li
                  className="px-4 py-4 hover:bg-gray-100 flex flex-col gap-2"
                  onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
                >
                  <h5 className="font-bold text-sm">J&T Rp350.000</h5>
                  <p className="text-xs text-gray-500">
                    Estimated arrival 1 - 3 Dec
                  </p>
                </li>
                <li
                  className="px-4 py-4 hover:bg-gray-100 flex flex-col gap-2"
                  onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
                >
                  <h5 className="font-bold text-sm">JNE Rp360.000</h5>
                  <p className="text-xs text-gray-500">
                    Estimated arrival 2 - 3 Dec
                  </p>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="w-1/2">
          <h4 className="text-slate-800 font-medium mb-[10px]">Total Bill</h4>
          <div className="w-full p-4 bg-alabaster-100 rounded-[8px]">
            <ul className="w-full">
              <li className="text-sm text-slate-800 my-2">
                Check your bill summary
              </li>
              <li className="text-xs text-slate-800 w-full flex justify-between my-2">
                <h5 className="text-bombay-400">
                  Total Price ({cartItems.length})
                </h5>
                <h5 className="text-slate-800 font-medium">
                  {formatPrice(totalAmount)}
                </h5>
              </li>
              <li className="text-xs text-slate-800 w-full flex justify-between my-2">
                <h5 className="text-bombay-400">Shipping Cost</h5>
                <h5 className="text-slate-800 font-medium">
                  {formatPrice(360000)}
                </h5>
              </li>
              <li className="text-xs text-slate-800 w-full flex justify-between my-2">
                <h5 className="text-bombay-400">Coupon Discount</h5>
                <h5 className="text-green-800 font-medium">
                  -{formatPrice(200000)}
                </h5>
              </li>
              <li className="text-xs text-slate-800 w-full flex justify-between my-2">
                <h5 className="text-bombay-400">Service Fee</h5>
                <h5 className="text-slate-800 font-medium">
                  {formatPrice(1000)}
                </h5>
              </li>
            </ul>
            <hr className="my-4" />
            <div className="flex items-center justify-between text-slate-800 font-medium gap-2">
              <h4>Total Amount</h4>
              <h4>{formatPrice(totalAmount - 200000 + 360000 + 1000)}</h4>
            </div>
          </div>
          <div className="flex gap-2 justify-between">
            <button
              onClick={handlePrevious}
              type="button"
              className="w-full rounded-full bg-slate-400 hover:bg-slate-500 text-white mt-4 text-sm py-[10px]"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="w-full rounded-full bg-curious-blue-600 hover:bg-curious-blue-700 text-white mt-4 text-sm py-[10px]"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartAddressMenu;
