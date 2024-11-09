"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import { MdDirectionsBike } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";
import { FaStar } from "react-icons/fa";
import ProductCard from "../component/ProductCard";

function Home() {
  const [currentItem, setCurrentItem] = useState(0); // State to track active carousel item

  const carouselItems = [
    {
      id: 1,
      name: "Nurul Ismawati",
      image: "https://utfs.io/f/sIzmAMtbfJsZEG2mlWuq8oHJAVax9Whg37P0slGNSz5wd6X1",
      rating: 5,
      review: "Produk sangat bagus, build quality sangat kokoh. sangat recomended",
    },
    {
      id: 2,
      name: "Salim Sulaiman",
      image: "https://utfs.io/f/sIzmAMtbfJsZ4iGOGglU8tTMPbXAGuRWZzQcVEdiayrC3lHk",
      rating: 4,
      review: "Sangat mantap, secara keseluruhan saya sangat suka dengan produk yang dihadirkan",
    },
    {
      id: 3,
      name: "Samy Sulaiman",
      image: "https://utfs.io/f/sIzmAMtbfJsZ4RSPBylU8tTMPbXAGuRWZzQcVEdiayrC3lHk",
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

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      once: true, // Specify whether animation should happen only once
    });
  }, []);
  return (
    <div className="w-full relative">
      <div className="bg-alabaster-50 h-auto lg:h-[750px] w-full pt-[140px] sm:pt-[165px] pb-6 relative">
        <div className="max-w-screen-xlg mx-auto flex flex-col md:flex-row px-6 lg:px-2 h-full">
          <div className="w-full md:w-4/12 lg:w-3/12" data-aos="fade-right">
            <h4 className="text-slate-800 mb-3">Road Bike</h4>
            <h1 className="text-slate-800 uppercase text-[40px] sm:text-[60px] lg:text-[87px] max-w-full md:max-w-md leading-none">
              Santa Cruz
            </h1>
            <div className="flex flex-row items-center mt-6 md:mt-11 gap-3">
              <Link
                href={"/"}
                className="text-white bg-curious-blue-600 rounded-full py-[10px] px-[32px] inline-block text-sm sm:text-base"
              >
                Buy
              </Link>
              <h4 className="text-slate-700 text-lg lg:text-xl font-bold">IDR 10.750.000</h4>
            </div>
            <div className="flex bg-alto-200 p-[10px] items-center justify-center w-fit rounded-full mt-6 md:mt-11 gap-[6px]">
              <div className="w-[30px] sm:w-[47px] h-[30px] sm:h-[47px] rounded-full flex items-center justify-center bg-curious-blue-600">
                <div className="w-[22px] sm:w-[39px] h-[22px] sm:h-[39px] border-[1px] sm:border-2 border-alto-200 rounded-full"></div>
              </div>
              <div className="w-[30px] sm:w-[47px] h-[30px] sm:h-[47px] rounded-full flex items-center justify-center bg-tuatara-900"></div>
              <div className="w-[30px] sm:w-[47px] h-[30px] sm:h-[47px] rounded-full flex items-center justify-center bg-white"></div>
            </div>
          </div>
          <div className="w-full md:w-8/12 lg:w-9/12 relative h-full flex items-center justify-center mt-4 md:mt-0">
            <Image
              src={"/assets/product/santacruz.png"}
              alt="santacruz"
              width={1000}
              height={1000}
              className="w-[650px] lg:w-[827px] h-auto -top-0 lg:-top-4 z-10 relative lg:absolute"
              data-aos="zoom-in"
              quality={100}
              priority
            />
          </div>
        </div>
        <Image
          src={"/assets/grey-svg.svg"}
          alt="grey-svg"
          width={1000}
          height={1000}
          quality={100}
          className="absolute -left-1 bottom-0 -right-1 w-full m-0 hidden lg:block"
        />
      </div>
      <div className="bg-white w-full">
        <div className="max-w-screen-xlg min-h-[1350px] sm:min-h-[1400px] md:min-h-[971px] mx-auto pt-[70px] sm:pt-[100px] md:pt-[145px] pb-12 relative px-6 lg:px-2">
          <h4 className="text-sm sm:text-xl text-curious-blue-600 font-bold uppercase">Your Ride Start Here</h4>
          <h3 className="text-2xl sm:text-[32px] text-slate-800 mb-[74px]">Our Facilities & Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8 h-fit md:h-auto">
            <div className="rounded-[11px] shadow-premiere min-h-[194px] pb-7 bg-white relative border-[1px] border-curious-blue-600 hover:bg-curious-blue-600 group transition-all duration-200 ease-in-out">
              <div className="h-[59px] w-[59px] bg-curious-blue-600 border-2 border-transparent group-hover:border-curious-blue-600 group-hover:bg-white absolute left-6 sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 -top-8 rounded-[7px] flex items-center justify-center transition-all duration-200 ease-in-out">
                <MdDirectionsBike className="text-[35px] text-white group-hover:text-curious-blue-600 transition-all duration-200 ease-in-out" />
              </div>
              <h3 className="text-slate-800 px-[35px] sm:px-0 text-xl font-medium text-start sm:text-center mt-[54px] group-hover:text-white transition-all duration-200 ease-in-out cursor-default">
                Various Collection
              </h3>
              <h4 className="text-slate-600 mt-3 px-[35px] group-hover:text-white transition-all duration-200 ease-in-out cursor-default text-start sm:text-center">
                Discover a wide range of products to suit every style and need.
              </h4>
            </div>
            <div className="rounded-[11px] shadow-premiere min-h-[194px] pb-7 bg-white relative border-[1px] border-curious-blue-600 hover:bg-curious-blue-600 group transition-all duration-200 ease-in-out">
              <div className="h-[59px] w-[59px] bg-curious-blue-600 border-2 border-transparent group-hover:border-curious-blue-600 group-hover:bg-white absolute left-6 sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 -top-8 rounded-[7px] flex items-center justify-center transition-all duration-200 ease-in-out">
                <ImPriceTags className="text-[35px] text-white group-hover:text-curious-blue-600 transition-all duration-200 ease-in-out" />
              </div>
              <h3 className="text-slate-800 px-[35px] sm:px-0 text-xl font-medium text-start sm:text-center mt-[54px] group-hover:text-white transition-all duration-200 ease-in-out cursor-default">
                Avordable Price
              </h3>
              <h4 className="text-slate-600 mt-3 px-[35px] group-hover:text-white transition-all duration-200 ease-in-out cursor-default text-start sm:text-center">
                Enjoy high-quality, stylish products that perfectly fit your budget.
              </h4>
            </div>
            <div className="rounded-[11px] shadow-premiere min-h-[194px] pb-7 bg-white relative border-[1px] border-curious-blue-600 hover:bg-curious-blue-600 group transition-all duration-200 ease-in-out">
              <div className="h-[59px] w-[59px] bg-curious-blue-600 border-2 border-transparent group-hover:border-curious-blue-600 group-hover:bg-white absolute left-6 sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 -top-8 rounded-[7px] flex items-center justify-center transition-all duration-200 ease-in-out">
                <MdDirectionsBike className="text-[35px] text-white group-hover:text-curious-blue-600 transition-all duration-200 ease-in-out" />
              </div>
              <h3 className="text-slate-800 px-[35px] sm:px-0 text-xl font-medium text-start sm:text-center mt-[54px] group-hover:text-white transition-all duration-200 ease-in-out cursor-default">
                Waranty Product
              </h3>
              <h4 className="text-slate-600 mt-3 px-[35px] group-hover:text-white transition-all duration-200 ease-in-out cursor-default text-start sm:text-center">
                All items come with a warranty to ensure quality and customer satisfaction.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1130px] mx-auto bg-curious-blue-600  rounded-t-none lg:rounded-t-[10px] -mt-[350px] mb-[24px] lg:mb-[18px] py-[62px] px-[30px] relative">
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
          data-aos="fade-top"
          className="absolute h-auto w-[500px] lg:w-[718px] right-0 bottom-0 hidden md:block"
        />
        <div className="w-full relative Z-20">
          <h4 className="text-sm sm:text-xl text-white font-bold uppercase">Your Ride Start Here</h4>
          <h3 className="text-2xl sm:text-[32px] text-white mb-[33px]">Our Facilities & Features</h3>
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
      <div className="max-w-[1130px] mx-auto flex flex-col md:flex-row justify-between mb-[77px] gap-7 lg:gap-5 px-6 lg:px-2">
        <div className="bg-white w-full md:w-1/2 h-[240px] sm:h-[320px] shadow-premiere rounded-bl-[10px] py-[23px] px-[35px] relative overflow-hidden ">
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
            className="absolute -left-[450px] sm:-left-[350px] h-auto w-[749px] max-w-none"
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
        <div className="bg-boulder-500 w-full md:w-1/2 h-[240px] sm:h-[320px] shadow-premiere rounded-br-[10px] py-[23px] px-[35px] relative overflow-hidden">
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
            className="absolute -right-[200px] sm:-right-[120px] h-auto w-[468px] max-w-none"
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
      <div className="bg-white w-full relative overflow-hidden px-6 lg:px-2">
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
          <h4 className="text-sm sm:text-xl text-curious-blue-600 font-bold uppercase relative z-10">
            Choose Your Bikes
          </h4>
          <div className="w-full flex justify-between items-end mb-[50px] sm:mb-[74px] relative z-10">
            <h3 className="text-2xl sm:text-[32px] text-slate-800">Our Special Bikes</h3>
            <Link href={"/"} className="text-slate-600 hover:text-slate-800 relative z-10">
              <span className="hidden sm:block">Show All Product</span>
              <span className="block sm:hidden text-sm">Show All</span>
            </Link>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-[32px] relative z-10">
            {/* product */}
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            {/* end product */}
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="w-full mx-auto bg-curious-blue-600 relative overflow-hidden py-20 sm:py-32 px-6">
          <Image
            src={"/assets/white-svg.svg"}
            alt="white-svg"
            width={1000}
            height={1000}
            quality={100}
            className="absolute -left-1 top-0 right-1 w-full z-10 m-0 border-none hidden sm:block"
          />
          <div className="max-w-screen-xlg mx-auto relative flex flex-col justify-center">
            <Image
              src={"/assets/abstract-square.png"}
              alt="abstract-square"
              width={1000}
              height={1000}
              quality={100}
              className="absolute -right-[150px] w-[955px] opacity-20 lg:opacity-100 max-w-none"
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
              className="absolute w-[1697px] -right-[900px] -top-[25px] scale-x-[-1] max-w-none hidden md:block"
            />
            <h4 className="text-sm sm:text-xl text-white font-bold uppercase z-20 mt-0 sm:mt-20">
              Custumer Experience
            </h4>
            <h3 className="text-2xl sm:text-[32px] text-white mb-[33px] z-20">What Our Customer Say</h3>
            <div className="max-w-[393px] z-20 flex flex-col min-h-[150px] justify-between">
              <div className="carousel w-full">
                {carouselItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`carousel-item max-w-[393px] flex flex-col transition-opacity duration-1000 ease-in-out transform ${
                      currentItem === index ? "opacity-100 translate-x-0" : "opacity-0 absolute"
                    }`}
                  >
                    <div className="w-full flex gap-[18px]">
                      <div className="w-[58px] h-[58px] bg-slate-800 rounded-full overflow-hidden">
                        <Image
                          src={item?.image}
                          alt="profile"
                          className="w-full h-full object-cover object-center"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="flex flex-col justify-between h-fit">
                        <h4 className="text-white font-medium">{item?.name}</h4>
                        <div className="flex gap-[3px] mt-[8px]">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`text-2xl ${i < item.rating ? "text-sunflower-500" : "text-slate-100"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <h4 className="text-white mt-[25px]">{item.review}</h4>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full flex gap-[6px] mt-[11px]" id="pagination">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    className={`h-[6px] ${
                      currentItem === index ? "w-[43px] bg-silver-chalice-400" : "w-[24px] bg-white"
                    } rounded-full transition-all duration-500 ease-in-out`}
                    onClick={() => handleButtonClick(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-alabaster-50">
        <div className="max-w-screen-xlg min-h-[600px] sm:min-h-[644px] py-[58px] mx-auto relative overflow-hidden">
          <h3 className="text-slate-800 text-lg sm:text-xl text-center uppercase">
            Velo
            <span className="font-bold">Bike</span>
          </h3>
          <h1 className="text-slate-800 text-[36px] sm:text-[48px] text-center uppercase max-w-[302px] mx-auto mt-4">
            Ride More <span className="font-bold">Worry Less</span>
          </h1>
          <Image
            src={"/assets/bikes-tagline.png"}
            alt="bikes-tagline"
            width={1000}
            height={1000}
            quality={100}
            className="absolute w-[750px] sm:w-[815px] max-w-none left-1/2 -translate-x-1/2 -bottom-[125px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
