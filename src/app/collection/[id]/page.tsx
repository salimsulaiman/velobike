"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import ProgressiveImage from "@/app/component/ProgressiveImage";
import CommentCard from "@/app/component/CommentCard";

function Detail() {
  const [activeSection, setActiveSection] = useState("details");
  return (
    <div className="w-full bg-white">
      <div className="w-full bg-alabaster-50">
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
            <div className="w-full">
              <Swiper
                className="relative -top-16"
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
              >
                <SwiperSlide
                  className={`bg-slate-100 rounded-xl aspect-square relative overflow-hidden cursor-pointer`}
                >
                  <ProgressiveImage
                    src={"/assets/product/FELT-fixie.png"}
                    alt={"FELT-fixie"}
                    width={500}
                    height={500}
                    quality={20}
                    className={"h-full w-full absolute object-cover object-center mx-auto"}
                    loading="lazy"
                  />
                </SwiperSlide>
              </Swiper>
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

      <div className="max-w-screen-xlg mx-auto relative bg-white">
        <div className="w-full flex gap-8">
          <h3
            onClick={() => setActiveSection("details")}
            className={`cursor-pointer text-2xl font-semibold ${
              activeSection === "details" ? "text-slate-700" : "text-bombay-400 hover:text-bombay-500"
            }`}
          >
            Details
          </h3>
          <h3
            onClick={() => setActiveSection("reviews")}
            className={`cursor-pointer text-2xl font-semibold ${
              activeSection === "reviews" ? "text-slate-700" : "text-bombay-400 hover:text-bombay-500"
            }`}
          >
            Reviews
          </h3>
        </div>
        <div className="w-full flex justify-between gap-[50px]">
          <div className="w-2/3">
            {activeSection == "details" && (
              <div className="w-full">
                <h4 className="text-slate-600 mt-8">No Data</h4>
              </div>
            )}
            {activeSection == "reviews" && (
              <div className="w-full">
                <select
                  name=""
                  id=""
                  className="flex px-[13px] py-[5px] rounded-[10px] border-2 border-bombay-400 mt-[36px] mb-3 bg-white"
                >
                  <option value="Newest">Newest</option>
                  <option value="Oldest">Oldest</option>
                </select>
                <CommentCard
                  id={1}
                  account={{
                    name: "Nurul Ismawati",
                    picture:
                      "https://instagram.fsrg6-1.fna.fbcdn.net/v/t51.2885-19/419521185_3778436632376022_531051164506999775_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsrg6-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=F7jS2tLCeCIQ7kNvgFMadFb&_nc_gid=fe16eb56cd2d4d79abb90d43f7ee7d43&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYAWAxer2rpuvQmmroF-l8Hg2DN25x0gmlvLOCdslCWPOw&oe=67257010&_nc_sid=7d3ac5",
                  }}
                  rating={5}
                  date={new Date("2024-10-28")}
                  primary={false}
                  comment={"Produk sangat bagus, build quality sangat kokoh, sangat recomended"}
                  like={1}
                  dislike={0}
                />
                <CommentCard
                  id={1}
                  account={{
                    name: "Salim Sulaiman",
                    picture:
                      "https://instagram.fsrg6-1.fna.fbcdn.net/v/t51.2885-19/458180751_1223770658968369_4573641629844033891_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsrg6-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=IoMmAQTjCMkQ7kNvgFa6lzF&_nc_gid=aed5ac4a46754d7d99d9a3ba483d9c69&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYDeYGPLZYFfZEnWGKPo4zrowkTpG8LX-WBONEvAwo0b8w&oe=67251442&_nc_sid=7d3ac5",
                  }}
                  rating={3}
                  date={new Date("2024-10-27")}
                  primary={false}
                  comment={"Sayang banget untuk warna merah jarang ready stock"}
                  like={0}
                  dislike={2}
                />
                <CommentCard
                  id={2}
                  account={{
                    name: "Samy Sulaiman",
                    picture:
                      "https://instagram.fsrg6-1.fna.fbcdn.net/v/t51.2885-19/277318708_497873051955434_5811658738444759823_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsrg6-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=7O-VvV1wr3EQ7kNvgH8vWnp&_nc_gid=479686402b464408961e4fdd620a1ef1&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYBFggCPQ3OAe2MYfo186duPcPXzXa2t0CbuH5MMo3Pxxg&oe=6725784F&_nc_sid=7d3ac5",
                  }}
                  rating={4}
                  date={new Date("2024-10-04")}
                  primary={false}
                  comment={"Nyaman banget buat dipakai"}
                  parentId={1}
                  like={5}
                  dislike={0}
                />
              </div>
            )}
          </div>
          <div className="w-1/3 mt-11 mb-8">
            <div className="flex w-full items-center justify-between">
              <div className="flex gap-[8px] text-[32px]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={`text-sunflower-500`} />
                ))}
              </div>
              <h2 className="text-[32px] text-slate-600 font-bold">4.8</h2>
            </div>
            <div className="w-full rounded-full h-[2px] bg-zumthor-100 mt-5 mb-5"></div>
            <div className="w-full">
              <div className="flex w-full items-center justify-between gap-[9px] mb-[17px]">
                <h4 className="text-bombay-400 font-semibold">5</h4>
                <div className="h-[16px] w-[250px] bg-alto-200 rounded-[4px] overflow-hidden">
                  <div className="h-full bg-sunflower-500 w-10/12 rounded-[4px]"></div>
                </div>
                <h4 className="text-slate-600 font-semibold">5</h4>
              </div>
              <div className="flex w-full items-center justify-between gap-[9px] mb-[17px]">
                <h4 className="text-bombay-400 font-semibold">5</h4>
                <div className="h-[16px] w-[250px] bg-alto-200 rounded-[4px] overflow-hidden">
                  <div className="h-full bg-sunflower-500 w-7/12 rounded-[4px]"></div>
                </div>
                <h4 className="text-slate-600 font-semibold">5</h4>
              </div>
              <div className="flex w-full items-center justify-between gap-[9px] mb-[17px]">
                <h4 className="text-bombay-400 font-semibold">5</h4>
                <div className="h-[16px] w-[250px] bg-alto-200 rounded-[4px] overflow-hidden">
                  <div className="h-full bg-sunflower-500 w-4/12 rounded-[4px]"></div>
                </div>
                <h4 className="text-slate-600 font-semibold">5</h4>
              </div>
              <div className="flex w-full items-center justify-between gap-[9px] mb-[17px]">
                <h4 className="text-bombay-400 font-semibold">5</h4>
                <div className="h-[16px] w-[250px] bg-alto-200 rounded-[4px] overflow-hidden">
                  <div className="h-full bg-sunflower-500 w-3/12 rounded-[4px]"></div>
                </div>
                <h4 className="text-slate-600 font-semibold">5</h4>
              </div>
              <div className="flex w-full items-center justify-between gap-[9px] mb-[17px]">
                <h4 className="text-bombay-400 font-semibold">5</h4>
                <div className="h-[16px] w-[250px] bg-alto-200 rounded-[4px] overflow-hidden">
                  <div className="h-full bg-sunflower-500 w-0 rounded-[4px]"></div>
                </div>
                <h4 className="text-slate-600 font-semibold">5</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
