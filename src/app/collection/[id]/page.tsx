import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

function Detail() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xlg mx-auto relative h-[306px] overflow-hidden bg-alabaster-50">
        <Image
          src={"/assets/abstract-square-grey.png"}
          alt="abstract-square-grey"
          width={1000}
          height={1000}
          quality={100}
          className="w-[798px] -top-[0px] -right-[58px] absolute"
        />
      </div>
      <div className="w-full relative bg-white min-h-[200px]">
        <div className="max-w-screen-xlg mx-auto flex gap-[69px]">
          <div className="w-1/2 relative">
            <div className="aspect-square bg-seashell-100 relative -top-[97px] rounded-[10px] overflow-hidden flex items-center justify-center p-4">
              <Image
                src={"/assets/product/FELT-fixie.png"}
                alt="FELT-fixie"
                width={1000}
                height={1000}
                quality={80}
                className="w-full h-auto object-cover object-center"
              />
            </div>
          </div>
          <div className="w-1/2 relative">
            {/* subproduct */}
            <div className="w full flex gap-[6px] items-center absolute -left-[49px] -top-[35px]">
              <h5 className="text-[14px] text-bombay-400">Bikes</h5>
              <div className="h-[8px] w-[8px] rounded-full bg-bombay-400"></div>
              <h5 className="text-[14px] text-bombay-400">Fixie Bike</h5>
              <div className="h-[8px] w-[8px] rounded-full bg-bombay-400"></div>
              <h5 className="text-[14px] text-slate-500">FELT Fixie</h5>
            </div>
            <div className="w-full mt-[28px]">
              <h1 className="text-slate-700 text-[32px] font-medium">FELT Fixie</h1>
              <h4 className="text-slate-500 text-xl mt-2">Fixie Bike</h4>
              <div className="flex items-center mt-[15px] gap-[11px]">
                <div className="flex gap-[3px] text-[24px] items-center">
                  <FaStar className="text-sunflower-500" />
                  <FaStar className="text-sunflower-500" />
                  <FaStar className="text-sunflower-500" />
                  <FaStar className="text-sunflower-500" />
                  <FaStar className="text-sunflower-500" />
                </div>
                <h4 className="text-slate-500">10 Reviews</h4>
              </div>
              <h1 className="text-slate-700 text-[40px] font-semibold mt-[14px]">IDR 6.750.000</h1>
              <div className="flex items-center gap-[7px] mt-[14px]">
                <h4 className="text-slate-700 font-medium">Color</h4>
                <div className="h-[6px] w-[6px] rounded-full bg-bombay-400"></div>
                <h4 className="text-bombay-400">Cyan</h4>
              </div>
              <div className="flex items-center mt-[8px] gap-[6px]">
                <div className="w-[47px] h-[47px] rounded-full flex items-center justify-center bg-[#CCECF4] cursor-pointer">
                  <div className="w-[39px] h-[39px] border-2 border-white rounded-full"></div>
                </div>
                <div className="w-[47px] h-[47px] rounded-full flex items-center justify-center bg-[#F55861] cursor-pointer"></div>
              </div>
              <button className="text-white bg-curious-blue-600 rounded-[13px] w-full mt-[38px] py-[10px] text-center font-semibold">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
