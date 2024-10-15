"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import { MdDirectionsBike } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";
import { FaStar } from "react-icons/fa";

function Home() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      once: true, // Specify whether animation should happen only once
    });
  }, []);
  return (
    <div className="w-full">
      <div className="bg-alabaster-50 h-[677px] w-full pt-[165px]">
        <div className="max-w-screen-xlg mx-auto flex">
          <div className="w-3/12" data-aos="fade-right">
            <h4 className="text-slate-800 mb-3">Road Bike</h4>
            <h1 className="text-slate-800 uppercase text-[87px] max-w-md leading-none">Santa Cruz</h1>
            <div className="flex items-center mt-11">
              <Link href={"/"} className="text-white bg-curious-blue-600 rounded-full py-[10px] px-[32px] inline-block">
                Buy
              </Link>
              <h4 className="text-slate-700 text-xl font-bold ms-3">IDR 10.750.000</h4>
            </div>
            <div className="flex bg-alto-200 p-[10px] items-center justify-center w-fit rounded-full mt-11 gap-[6px]">
              <div className="w-[47px] h-[47px] rounded-full flex items-center justify-center bg-curious-blue-600">
                <div className="w-[39px] h-[39px] border-2 border-alto-200 rounded-full"></div>
              </div>
              <div className="w-[47px] h-[47px] rounded-full flex items-center justify-center bg-tuatara-900"></div>
              <div className="w-[47px] h-[47px] rounded-full flex items-center justify-center bg-white"></div>
            </div>
          </div>
          <div className="w-9/12 relative">
            <Image
              src={"/assets/product/santacruz.png"}
              alt="santacruz"
              width={1000}
              height={1000}
              className="w-[827px] h-auto -left-8 -top-4 absolute"
              data-aos="fade-left"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
      <div className="bg-white w-full">
        <div className="max-w-screen-xlg min-h-[971px] mx-auto pt-[145px] pb-12">
          <h4 className="text-xl text-curious-blue-600 font-bold uppercase">Your Ride Start Here</h4>
          <h3 className="text-[32px] text-slate-800 mb-[74px]">Our Facilities & Features</h3>
          <div className="grid grid-cols-3 gap-8">
            <div className="rounded-[11px] shadow-premiere min-h-[194px] bg-white relative border-[1px] border-curious-blue-600 hover:bg-curious-blue-600 group transition-all duration-200 ease-in-out">
              <div className="h-[59px] w-[59px] bg-curious-blue-600 border-2 border-transparent group-hover:border-curious-blue-600 group-hover:bg-white absolute left-1/2 -translate-x-1/2 -top-8 rounded-[7px] flex items-center justify-center transition-all duration-200 ease-in-out">
                <MdDirectionsBike className="text-[35px] text-white group-hover:text-curious-blue-600 transition-all duration-200 ease-in-out" />
              </div>
              <h3 className="text-slate-800 text-xl font-medium text-center mt-[54px] group-hover:text-white transition-all duration-200 ease-in-out cursor-default">
                Various Collection
              </h3>
              <h4 className="text-slate-600 mt-3 px-[35px] group-hover:text-white transition-all duration-200 ease-in-out cursor-default">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing elit. adipiscing elit.
              </h4>
            </div>
            <div className="rounded-[11px] shadow-premiere min-h-[194px] bg-white relative border-[1px] border-curious-blue-600 hover:bg-curious-blue-600 group transition-all duration-200 ease-in-out">
              <div className="h-[59px] w-[59px] bg-curious-blue-600 border-2 border-transparent group-hover:border-curious-blue-600 group-hover:bg-white absolute left-1/2 -translate-x-1/2 -top-8 rounded-[7px] flex items-center justify-center transition-all duration-200 ease-in-out">
                <ImPriceTags className="text-[35px] text-white group-hover:text-curious-blue-600 transition-all duration-200 ease-in-out" />
              </div>
              <h3 className="text-slate-800 text-xl font-medium text-center mt-[54px] group-hover:text-white transition-all duration-200 ease-in-out cursor-default">
                Avordable Price
              </h3>
              <h4 className="text-slate-600 mt-3 px-[35px] group-hover:text-white transition-all duration-200 ease-in-out cursor-default">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing elit. adipiscing elit.
              </h4>
            </div>
            <div className="rounded-[11px] shadow-premiere min-h-[194px] bg-white relative border-[1px] border-curious-blue-600 hover:bg-curious-blue-600 group transition-all duration-200 ease-in-out">
              <div className="h-[59px] w-[59px] bg-curious-blue-600 border-2 border-transparent group-hover:border-curious-blue-600 group-hover:bg-white absolute left-1/2 -translate-x-1/2 -top-8 rounded-[7px] flex items-center justify-center transition-all duration-200 ease-in-out">
                <MdDirectionsBike className="text-[35px] text-white group-hover:text-curious-blue-600 transition-all duration-200 ease-in-out" />
              </div>
              <h3 className="text-slate-800 text-xl font-medium text-center mt-[54px] group-hover:text-white transition-all duration-200 ease-in-out cursor-default">
                Waranty Product
              </h3>
              <h4 className="text-slate-600 mt-3 px-[35px] group-hover:text-white transition-all duration-200 ease-in-out cursor-default">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing elit. adipiscing elit.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1130px] mx-auto bg-curious-blue-600 min-h-[626px] rounded-t-[10px] -mt-[350px] mb-[18px] py-[62px] px-[30px] relative">
        <div className="absolute overflow-hidden w-full top-0 bottom-0 left-0 right-0">
          <Image
            src={"/assets/velobike-font.png"}
            alt="velobike-font"
            width={1000}
            height={1000}
            quality={100}
            className="w-10/12 h-auto absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          />
          <Image
            src={"/assets/spiral.png"}
            alt="spiral"
            width={500}
            height={500}
            className="w-[284px] absolute -right-2 -top-20"
          />
          <Image
            src={"/assets/wave-line.png"}
            alt="wave-line"
            height={1000}
            width={1000}
            quality={100}
            className="absolute w-[152px] left-[332px] top-[158px]"
          />
        </div>
        <Image
          src={"/assets/product/santacruz-white.png"}
          alt="santacruz-white"
          width={1000}
          height={1000}
          quality={100}
          data-aos="fade-left"
          className="absolute h-auto w-[718px] right-0 bottom-0"
        />
        <div className="w-5/12">
          <h4 className="text-xl text-white font-bold uppercase">Your Ride Start Here</h4>
          <h3 className="text-[32px] text-white mb-[33px]">Our Facilities & Features</h3>
          <div className="max-w-[368px]">
            <h4 className="text-white font-bold mb-[10px]">Durability</h4>
            <h4 className="text-white mb-[33px]">
              High-quality products are built with superior materials and craftsmanship.
            </h4>
            <h4 className="text-white font-bold mb-[10px]">Enhanced Performance</h4>
            <h4 className="text-white mb-[33px]">
              Best quality products offer superior functionality, efficiency, and user experience.
            </h4>
            <h4 className="text-white font-bold mb-[10px]">Customer Satisfaction</h4>
            <h4 className="text-white mb-[33px]">High-quality products lead to increased customer satisfaction.</h4>
            <Link
              href={"/"}
              className="inline-block bg-white text-curious-blue-600 py-[10px] px-[32px] rounded-full hover:bg-slate-100"
            >
              Explore Product
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-[1130px] mx-auto flex justify-between mb-[77px] gap-5">
        <div className="bg-white w-1/2 h-[320px] shadow-premiere rounded-bl-[10px] py-[23px] px-[35px] relative overflow-hidden ">
          <Image
            src={"/assets/spiral-blue.png"}
            alt="bikes-category"
            width={1000}
            height={1000}
            quality={100}
            className="absolute -left-[55px] -top-[55px] h-auto w-[248px] max-w-none"
          />
          <Image
            src={"/assets/spiral-blue.png"}
            alt="bikes-category"
            width={1000}
            height={1000}
            quality={100}
            className="absolute -right-[55px] -bottom-[55px] h-auto w-[184px] max-w-none"
          />
          <Image
            src={"/assets/wave-line-blue.png"}
            alt="bikes-category"
            width={1000}
            height={1000}
            quality={100}
            className="absolute top-[23px] right-[97px] h-auto w-[98px] max-w-none"
          />
          <Image
            src={"/assets/product/bikes-category.png"}
            alt="bikes-category"
            width={1000}
            height={1000}
            quality={100}
            className="absolute -left-[350px] h-auto w-[749px] max-w-none"
          />
          <div className="w-full h-full">
            <h3 className="text-slate-800 text-xl font-bold text-right">Bikes</h3>
            <h4 className="text-slate-800 text-base max-w-[211px] text-right ms-auto">
              More quality Bikes make reading fun & safe
            </h4>
            <div className="w-full flex justify-end mt-[10px]">
              <Link
                href={"/"}
                className="px-[32px] py-[10px] bg-curious-blue-600 text-white rounded-full z-40 relative inline-block"
              >
                Show More
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-boulder-500 w-1/2 h-[320px] shadow-premiere rounded-br-[10px] py-[23px] px-[35px] relative overflow-hidden">
          <Image
            src={"/assets/skew-line.png"}
            alt="skew-line"
            width={1000}
            height={1000}
            className="absolute left-[10px] bottom-[23px] h-auto w-[286px] max-w-none"
          />
          <Image
            src={"/assets/spiral.png"}
            alt="spiral"
            width={1000}
            height={1000}
            className="absolute -right-[50px] -bottom-[50px] h-auto w-[248px] max-w-none"
          />
          <Image
            src={"/assets/wave-line.png"}
            alt="wave-line"
            width={1000}
            height={1000}
            className="absolute left-[157px] top-[22px] h-auto w-[98px] max-w-none"
          />
          <Image
            src={"/assets/product/accessories-category.png"}
            alt="bikes-category"
            width={1000}
            height={1000}
            className="absolute -right-[120px] h-auto w-[468px] max-w-none"
          />
          <div className="w-full h-full">
            <h3 className="text-white text-xl font-bold">Accessories</h3>
            <h4 className="text-white text-base max-w-[211px]">Variations attributes to complement your driving</h4>
            <div className="w-full flex justify-start mt-[10px]">
              <Link
                href={"/"}
                className="px-[32px] py-[10px] bg-white text-curious-blue-600 rounded-full z-40 relative inline-block"
              >
                Show More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full relative overflow-hidden">
        <Image
          src={"/assets/skew-line-blue.png"}
          alt="skew-line-blue"
          width={1000}
          height={1000}
          className="absolute w-[635px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        />
        <div className="max-w-screen-xlg min-h-[558px] py-[51px] mx-auto relative">
          <Image
            src={"/assets/spiral-grey.png"}
            alt="spiral-grey"
            width={1000}
            height={1000}
            className="absolute w-[216px] top-[11px] -left-[138px]"
          />
          <Image
            src={"/assets/wave-line-blue.png"}
            alt="wave-line-blue"
            width={1000}
            height={1000}
            className="absolute w-[160px] top-[82px] right-[187px]"
          />
          <h4 className="text-xl text-curious-blue-600 font-bold uppercase relative z-10">Choose Your Bikes</h4>
          <div className="w-full flex justify-between items-end mb-[74px] relative z-10">
            <h3 className="text-[32px] text-slate-800">Our Sepcial Bikes</h3>
            <Link href={"/"} className="text-slate-600 hover:text-slate-800 relative z-10">
              Show All Product
            </Link>
          </div>
          <div className="w-full grid grid-cols-4 gap-[32px] relative z-10">
            {/* product */}
            <div className="min-h-[337px] bg-transparent py-[17px] px-[6px] rounded-[12px]">
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
                href={"/"}
                className="text-white bg-curious-blue-600 text-[12px] p-[10px] text-center w-full inline-block rounded-[14px]"
              >
                Show More
              </Link>
            </div>
            <div className="min-h-[337px] bg-transparent py-[17px] px-[6px] rounded-[12px]">
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
                href={"/"}
                className="text-white bg-curious-blue-600 text-[12px] p-[10px] text-center w-full inline-block rounded-[14px]"
              >
                Show More
              </Link>
            </div>
            <div className="min-h-[337px] bg-transparent py-[17px] px-[6px] rounded-[12px]">
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
                href={"/"}
                className="text-white bg-curious-blue-600 text-[12px] p-[10px] text-center w-full inline-block rounded-[14px]"
              >
                Show More
              </Link>
            </div>
            <div className="min-h-[337px] bg-transparent py-[17px] px-[6px] rounded-[12px]">
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
                href={"/"}
                className="text-white bg-curious-blue-600 text-[12px] p-[10px] text-center w-full inline-block rounded-[14px]"
              >
                Show More
              </Link>
            </div>
            {/* end product */}
          </div>
        </div>
      </div>
      <div className="w-full bg-curious-blue-600 relative overflow-hidden">
        <Image
          src={"/assets/white-svg.svg"}
          alt="white-svg"
          width={1000}
          height={1000}
          quality={100}
          className="absolute left-0 top-0 right-0 w-full z-10"
        />
        <div className="max-w-screen-xlg mx-auto min-h-[573px] relative flex flex-col justify-center">
          <Image
            src={"/assets/abstract-square.png"}
            alt="abstract-square"
            width={1000}
            height={1000}
            quality={100}
            className="absolute -right-[150px] w-[955px]"
          />
          <Image
            src={"/assets/abstract-skew.png"}
            alt="abstract-skew"
            width={1000}
            height={1000}
            quality={100}
            className="absolute left-[21px] w-[729px]"
          />
          <Image
            src={"/assets/abstract-arrow.png"}
            alt="abstract-arrow"
            width={1000}
            height={1000}
            quality={100}
            className="absolute top-1/2 -translate-y-1/3 w-[266px] -left-[133px]"
          />
          <Image
            src={"/assets/product/FELT-fixie.png"}
            alt="abstract-arrow"
            width={3000}
            height={3000}
            quality={100}
            className="absolute w-[1697px] -right-[900px] -top-[25px] scale-x-[-1] max-w-none"
          />
          <h4 className="text-xl text-white font-bold uppercase z-20 mt-20">Custumer Experience</h4>
          <h3 className="text-[32px] text-white mb-[33px] z-20">What Our Customer Say</h3>
          <div className="max-w-[393px] z-20">
            <div className="flex gap-[18px]">
              <div className="w-[58px] h-[58px] bg-slate-800 rounded-full overflow-hidden">
                <Image
                  src={
                    "https://instagram.fsrg6-1.fna.fbcdn.net/v/t51.2885-19/419521185_3778436632376022_531051164506999775_n.jpg?_nc_ht=instagram.fsrg6-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=NFHhATmmJGYQ7kNvgEtQwki&_nc_gid=c943e0447a4941f69b1df345d49987a6&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYDCz6Pwrzbeu8sV2CjTwk6KKVt3RzSleBOD07_j9zV8bw&oe=6713A3D0&_nc_sid=7d3ac5"
                  }
                  alt="profile"
                  className="w-full h-full object-cover object-center"
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex flex-col justify-between h-full">
                <h4 className="text-white font-medium">Nurul Ismawati</h4>
                <div className="flex gap-[3px] mt-[8px]">
                  <FaStar className="text-sunflower-500 text-2xl" />
                  <FaStar className="text-sunflower-500 text-2xl" />
                  <FaStar className="text-sunflower-500 text-2xl" />
                  <FaStar className="text-sunflower-500 text-2xl" />
                  <FaStar className="text-sunflower-500 text-2xl" />
                  <FaStar className="text-sunflower-500 text-2xl" />
                </div>
              </div>
            </div>
            <div className="w-full">
              <h4 className="text-white mt-[25px]">
                Produk sangat bagus, build quality sangat kokoh. sangat recomended
              </h4>
            </div>
            <div className="w-full flex gap-[6px] mt-[11px]">
              <div className="h-[6px] w-[43px] bg-silver-chalice-400 rounded-full"></div>
              <div className="h-[6px] w-[24px] bg-white rounded-full"></div>
              <div className="h-[6px] w-[24px] bg-white rounded-full"></div>
              <div className="h-[6px] w-[24px] bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-alabaster-50">
        <div className="max-w-screen-xlg min-h-[644px] py-[58px] mx-auto relative overflow-hidden">
          <h3 className="text-slate-800 text-xl text-center uppercase">
            Velo
            <span className="font-bold">Bike</span>
          </h3>
          <h1 className="text-slate-800 text-[48px] text-center uppercase max-w-[302px] mx-auto mt-4">
            Ride More <span className="font-bold">Worry Less</span>
          </h1>
          <Image
            src={"/assets/bikes-tagline.png"}
            alt="bikes-tagline"
            width={1000}
            height={1000}
            quality={100}
            className="absolute w-[815px] max-w-none left-1/2 -translate-x-1/2 -bottom-[125px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
