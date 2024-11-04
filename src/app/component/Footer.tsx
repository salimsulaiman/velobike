import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-black overflow-hidden relative">
      <div className="w-full h-full bg-black/70 absolute inset-0 z-10"></div>
      <Image
        src={"/assets/footer-background.png"}
        alt="footer-background"
        width={2000}
        height={2000}
        quality={100}
        className="absolute w-full h-full object-cover top-0 left-0"
      />
      <div className="relative w-full bg-gradient-to-b from-woodsmoke-950 via-woodsmoke-950/90 via-25% to-transparent to-100% z-20 py-4 px-6 lg:px-2">
        <div className="max-w-screen-xl mx-auto grid grid-cols-6 gap-[67px] pt-[88px] px-6 lg:px-2 pb-12">
          <div className="col-span-6 md:col-span-2 text-center md:text-start">
            <h3 className="text-white text-2xl uppercase">
              Velo<span className="font-bold">Bike</span>
            </h3>
            <h4 className="text-silver-chalice-400 text-base mt-[28px] max-w-full md:max-w-[208px]">
              Every ride is a new story waiting to unfold.
            </h4>
            <Link
              href={"/"}
              className="inline-block bg-white text-slate-700 py-[10px] px-[32px] rounded-full hover:bg-slate-100 mt-[47px]"
            >
              Shop Now
            </Link>
          </div>
          <ul>
            <li className="text-white text-xl mb-[14px] font-bold">Product</li>
            <li className="mb-[7px]">
              <Link href={"/"} className="text-silver-chalice-400 hover:text-white">
                Fixie Bike
              </Link>
            </li>
            <li className="mb-[7px]">
              <Link href={"/"} className="text-silver-chalice-400 hover:text-white">
                Road Bike
              </Link>
            </li>
            <li className="mb-[7px]">
              <Link href={"/"} className="text-silver-chalice-400 hover:text-white">
                Mountain Bike
              </Link>
            </li>
            <li className="mb-[7px]">
              <Link href={"/"} className="text-silver-chalice-400 hover:text-white">
                Accessories
              </Link>
            </li>
          </ul>
          <ul>
            <li className="text-white text-xl mb-[14px] font-bold">Account</li>
            <li className="mb-[7px]">
              <Link href={"/"} className="text-silver-chalice-400 hover:text-white">
                Profile
              </Link>
            </li>
            <li className="mb-[7px]">
              <Link href={"/"} className="text-silver-chalice-400 hover:text-white">
                Cart
              </Link>
            </li>
            <li className="mb-[7px]">
              <Link href={"/"} className="text-silver-chalice-400 hover:text-white">
                Payment
              </Link>
            </li>
          </ul>
          <ul>
            <li className="text-white text-xl mb-[14px] font-bold">Services</li>
            <li className="mb-[7px]">
              <Link href={"/"} className="text-silver-chalice-400 hover:text-white">
                Warranty
              </Link>
            </li>
          </ul>
          <ul>
            <li className="text-white text-xl mb-[14px] font-bold">Help</li>
            <li className="mb-[7px]">
              <Link href={"/"} className="text-silver-chalice-400 hover:text-white">
                Support
              </Link>
            </li>
            <li className="mb-[7px]">
              <Link href={"/"} className="text-silver-chalice-400 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="max-w-screen-xl mx-auto mt-12 flex justify-between items-center px-6 lg:px-2 pb-8">
          <h5 className="text-white text-[12px]">
            Copyright &copy; 2024{" "}
            <span className="uppercase text-curious-blue-600">
              Velo<span className="font-bold">Bike</span>
            </span>{" "}
            All Rights Reserved
          </h5>
          <div className="flex gap-3">
            <Link href={"/"}>
              <FaLinkedin className="text-[34px] text-white" />
            </Link>
            <Link href={"/"}>
              <FaGithub className="text-[34px] text-white" />
            </Link>
            <Link href={"/"}>
              <FaInstagram className="text-[34px] text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
