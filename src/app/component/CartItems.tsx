import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import ProgressiveImage from "./ProgressiveImage";

type CartItem = {
  id: number;
  name: string;
  type: string;
  variant: string;
  price: number;
  image: string;
  counter: number;
  onDelete: (id: number) => void;
  formatPrice: (price: number) => string;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
};

function CartItems({
  id,
  name,
  type,
  variant,
  price,
  image,
  counter,
  onDelete,
  formatPrice,
  onIncrement,
  onDecrement,
}: CartItem) {
  return (
    <>
      <div className="w-full py-6 flex justify-between">
        <div className="flex gap-4 w-full">
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox" />
            </label>
          </div>
          <div className="w-[115px] h-[115px] rounded-[8px] bg-slate-100 relative p-2">
            <ProgressiveImage
              src={image}
              alt={"FELT-fixie"}
              width={500}
              height={500}
              quality={20}
              className={
                "h-full w-full absolute object-contain object-center mx-auto"
              }
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-2 items-start">
              <h5 className="text-slate-800 text-xs px-3 border-[1px] border-slate-800 rounded-full text-center inline-block w-auto">
                Bike
              </h5>
              <h4 className="text-slate-800 text-base">{name}</h4>
              <div className="flex gap-2">
                <h5 className="text-bombay-400 text-xs">
                  Type: <span className="text-slate-800">{type}</span>
                </h5>
                <h5 className="text-bombay-400 text-xs">
                  Variant: <span className="text-slate-800">{variant}</span>
                </h5>
              </div>
            </div>
            <h5 className="text-bombay-400 text-base font-bold">
              IDR <span className="text-slate-800">{formatPrice(price)}</span>
            </h5>
          </div>
        </div>
        <div className="flex h-full items-end">
          <div className="flex gap-4 items-center">
            <FaTrash
              className="text-alto-100 cursor-pointer hover:text-slate-400"
              onClick={() => onDelete(id)}
            />
            <div className="flex bg-alabaster-100 border border-alto-100 px-2 py-[3px] gap-5 items-center rounded-[4px]">
              <button
                className="text-slate-700"
                onClick={() => onDecrement(id)}
              >
                -
              </button>
              <h5 className="text-slate-700 text-xs">{counter}</h5>
              <button
                className="text-slate-700"
                onClick={() => onIncrement(id)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default CartItems;
