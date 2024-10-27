import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductCard() {
  return (
    <div className="min-h-[337px] bg-transparent py-[17px] px-[6px] rounded-[12px] my-5">
      <div className="h-[179px] rounded-[10px] mb-[22px] overflow-hidden">
        <Image
          src={"/assets/product/FELT-fixie.png"}
          alt="FELT-fixie"
          width={1000}
          height={1000}
          quality={80}
          className="w-full h-auto"
        />
      </div>
      <h4 className="text-big-stone-950 mb-[7px]">FELT Fixie</h4>
      <h5 className="text-slate-500 text-[12px] mb-[7px]">Fixie Bike</h5>
      <h4 className="text-big-stone-950 font-bold mb-[11px]">IDR 6.750.000</h4>
      <Link
        href={"/collection/1"}
        className="text-white bg-curious-blue-600 text-[12px] p-[10px] text-center w-full inline-block rounded-[14px]"
      >
        Show More
      </Link>
    </div>
  );
}

export default ProductCard;
