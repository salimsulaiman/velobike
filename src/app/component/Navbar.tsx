"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  const pathname = usePathname();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="max-w-screen-xlg mx-auto flex fixed left-0 right-0 top-[34px] items-center justify-between z-50">
      <div
        className={`flex py-5 px-[49px] rounded-full ${
          scrolling ? "bg-black/40 backdrop-blur-lg" : "bg-white"
        } shadow-premiere transition-all duration-300 ease-in-out`}
      >
        <h2 className={`text-xl ${scrolling ? "text-white" : "text-slate-800"}`}>
          Velo<span className="font-bold">Bike</span>
        </h2>
      </div>
      <div
        className={`flex py-[9px] px-[14px] rounded-full items-center justify-center ${
          scrolling ? "bg-black/40 backdrop-blur-lg" : "bg-white"
        } shadow-premiere transition-all duration-300 ease-in-out`}
      >
        <ul className="flex gap-[10px]">
          <li>
            <Link
              className={`${
                pathname === "/" ? "bg-curious-blue-600 text-white" : "bg-porcelain-100 text-slate-800"
              } transition-all duration-300 ease-in-out rounded-full px-[25px] py-[14px] inline-block`}
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${
                pathname === "/collection" ? "bg-curious-blue-600 text-white" : "bg-porcelain-100 text-slate-800"
              } transition-all duration-300 ease-in-out rounded-full px-[25px] py-[14px] inline-block`}
              href={"/collection"}
            >
              Collection
            </Link>
          </li>
          <li>
            <Link
              className={`${
                pathname === "/sale" ? "bg-curious-blue-600 text-white" : "bg-porcelain-100 text-slate-800"
              } transition-all duration-300 ease-in-out rounded-full px-[25px] py-[14px] inline-block`}
              href={"/"}
            >
              Sale
            </Link>
          </li>
          <li>
            <Link
              className={`${
                pathname === "/articles" ? "bg-curious-blue-600 text-white" : "bg-porcelain-100 text-slate-800"
              } transition-all duration-300 ease-in-out rounded-full px-[25px] py-[14px] inline-block`}
              href={"/"}
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              className={`${
                pathname === "/support" ? "bg-curious-blue-600 text-white" : "bg-porcelain-100 text-slate-800"
              } transition-all duration-300 ease-in-out rounded-full px-[25px] py-[14px] inline-block`}
              href={"/"}
            >
              Support
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`flex py-[9px] px-[14px] rounded-full items-center justify-center ${
          scrolling ? "bg-black/40 backdrop-blur-lg" : "bg-white"
        } gap-[10px] shadow-premiere transition-all duration-300 ease-in-out`}
      >
        <div className="w-12 h-12 rounded-full bg-porcelain-100 flex items-center justify-center">
          <MdShoppingCart className="text-xl" />
        </div>
        <div className="w-12 h-12 rounded-full bg-porcelain-100 flex items-center justify-center">
          <IoSearchSharp className="text-xl" />
        </div>
        <div className="w-12 h-12 rounded-full bg-porcelain-100 flex items-center justify-center overflow-hidden">
          <Image
            src={
              "https://instagram.fsrg6-1.fna.fbcdn.net/v/t51.29350-15/281604555_384921943580847_8615178406469412152_n.webp?stp=dst-jpg_e35_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsrg6-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=W9lZETFMjVEQ7kNvgFeCzjh&_nc_gid=fe7090699e9d471eaecee0f526094343&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=Mjg0MjI4MjI5ODQxOTE3OTk1MA%3D%3D.3-ccb7-5&oh=00_AYDF5Opd2NmEL5LZQ6w53UXwFW6ILFRXwnlCpmKfnHySgg&oe=670FFDA4&_nc_sid=7a9f4b"
            }
            alt="profile"
            className="w-full h-full object-cover object-center"
            width={500}
            height={500}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
