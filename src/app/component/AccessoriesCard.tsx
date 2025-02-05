import Image from "next/image";
import Link from "next/link";
import React from "react";

function AccessoriesCard() {
  return (
    <div className="rounded-[32px] bg-gradient-to-br from-white/10 to-white/40 backdrop-blur-sm px-4 md:px-[20px] py-[17px] flex flex-col justify-between my-2">
      <div className="w-full h-full rounded-[14px] mb-2 overflow-hidden">
        <Image
          src={"/assets/product/velobike-sport-gloves.png"}
          alt="velobike-sport-gloves"
          width={1000}
          height={1000}
          quality={100}
          className="w-full h-full object-fill object-center"
        />
      </div>
      <div className="w-full">
        <h4 className="text-white line-clamp-1">Helmet Bike</h4>
        <h5 className="text-white line-clamp-1 text-[10px] mt-[7px]">Helmet</h5>
        <h4 className="text-white line-clamp-1 text-[14px] font-bold mt-[7px]">IDR 800.000</h4>
        <Link
          href={"/collection/1"}
          className="text-curious-blue-600 bg-white text-[12px] mt-4 p-[10px] text-center w-full inline-block rounded-[14px]"
        >
          Show More
        </Link>
      </div>
    </div>
  );
}

export default AccessoriesCard;
