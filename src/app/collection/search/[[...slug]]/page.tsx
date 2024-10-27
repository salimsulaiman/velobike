"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import AccessoriesCard from "../../../component/AccessoriesCard";
import ProductCard from "@/app/component/ProductCard";

function Detail() {
  const [currentItem, setCurrentItem] = useState(0);
  const carouselItems = [
    {
      id: 1,
      name: "Nurul Ismawati",
      image:
        "https://instagram.fsrg6-1.fna.fbcdn.net/v/t51.2885-19/419521185_3778436632376022_531051164506999775_n.jpg?_nc_ht=instagram.fsrg6-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=NFHhATmmJGYQ7kNvgEtQwki&_nc_gid=c943e0447a4941f69b1df345d49987a6&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYDCz6Pwrzbeu8sV2CjTwk6KKVt3RzSleBOD07_j9zV8bw&oe=6713A3D0&_nc_sid=7d3ac5",
      rating: 5,
      review: "Produk sangat bagus, build quality sangat kokoh. sangat recomended",
    },
    {
      id: 2,
      name: "Salim Sulaiman",
      image:
        "https://instagram.fsrg6-1.fna.fbcdn.net/v/t51.29350-15/281604555_384921943580847_8615178406469412152_n.webp?stp=dst-jpg_e35_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsrg6-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=W9lZETFMjVEQ7kNvgFeCzjh&_nc_gid=fe7090699e9d471eaecee0f526094343&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=Mjg0MjI4MjI5ODQxOTE3OTk1MA%3D%3D.3-ccb7-5&oh=00_AYDF5Opd2NmEL5LZQ6w53UXwFW6ILFRXwnlCpmKfnHySgg&oe=670FFDA4&_nc_sid=7a9f4b",
      rating: 4,
      review: "Sangat mantap, secara keseluruhan saya sangat suka dengan produk yang dihadirkan",
    },
    {
      id: 3,
      name: "Samy Sulaiman",
      image:
        "https://instagram.fsrg6-1.fna.fbcdn.net/v/t51.2885-19/277318708_497873051955434_5811658738444759823_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsrg6-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=CsY3LRy0HUMQ7kNvgGPx39W&_nc_gid=2017a2cadc794fc3863e79b49cce7312&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYBhd1TD0gIOZnWH9fZkfeoJ2FT6jvTygesG8i8HhGBUKA&oe=671E380F&_nc_sid=7a9f4b",
      rating: 5,
      review: "Keren banget, kualitas gk main main ini",
    },
    // Add more items as needed
  ];

  const handleButtonClick = (index: number) => {
    setCurrentItem(index); // Update the current carousel item when a button is clicked
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem + 1) % carouselItems.length); // Loop back to the first item
    }, 6000); // 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [carouselItems.length, currentItem]);
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
