"use client";
import React from "react";
import { FaAngleDown } from "react-icons/fa";
import ProductCard from "@/app/component/ProductCard";

function Detail() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-screen-xlg mx-auto pt-[120px] pb-6">
        {/* product */}
        <div className="w-full py-6">
          <div className="flex gap-[11px]">
            <button className="text-woodsmoke-950 text-sm px-[12px] py-[7px] bg-black-haze-100 hover:bg-black-haze-200 rounded-full flex items-center">
              Type
              <span className="ms-[2px] mt-[2px]">
                <FaAngleDown />
              </span>
            </button>
            <button className="text-woodsmoke-950 text-sm px-[12px] py-[7px] bg-black-haze-100 hover:bg-black-haze-200 rounded-full flex items-center">
              Price
              <span className="ms-[2px] mt-[2px]">
                <FaAngleDown />
              </span>
            </button>
            <button className="text-woodsmoke-950 text-sm px-[12px] py-[7px] bg-black-haze-100 hover:bg-black-haze-200 rounded-full flex items-center">
              Review
              <span className="ms-[2px] mt-[2px]">
                <FaAngleDown />
              </span>
            </button>
            <button className="text-woodsmoke-950 text-sm px-[12px] py-[7px] bg-black-haze-100 hover:bg-black-haze-200 rounded-full flex items-center">
              Color
              <span className="ms-[2px] mt-[2px]">
                <FaAngleDown />
              </span>
            </button>
            <button className="text-woodsmoke-950 text-sm px-[12px] py-[7px] bg-black-haze-100 hover:bg-black-haze-200 rounded-full flex items-center">
              Sort
              <span className="ms-[2px] mt-[2px]">
                <FaAngleDown />
              </span>
            </button>
          </div>
          <h4 className="text-xl text-curious-blue-600 font-bold relative z-10 mt-[32px]">Result</h4>
          <h3 className="text-[32px] text-slate-800 mb-[35px]">RoadBike</h3>
          <div className="w-full grid grid-cols-4 gap-[32px] relative z-10">
            {/* product */}
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            {/* end product */}
          </div>
        </div>
        <div className="w-full flex gap-2 justify-center mb-6">
          <button className="rounded-full w-[18px] h-[18px] bg-slate-800"></button>
          <button className="rounded-full w-[18px] h-[18px] bg-alto-200"></button>
          <button className="rounded-full w-[18px] h-[18px] bg-alto-200"></button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
