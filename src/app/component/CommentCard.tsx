import React from "react";
import ProgressiveImage from "./ProgressiveImage";
import { FaStar } from "react-icons/fa";
import { BiDislike, BiLike } from "react-icons/bi";

function CommentCard() {
  return (
    <div className="w-full flex flex-row gap-[19px] py-8">
      <div className="h-[40px] w-[40px] rounded-full relative overflow-hidden">
        <ProgressiveImage
          src={
            "https://instagram.fsrg6-1.fna.fbcdn.net/v/t51.2885-19/458180751_1223770658968369_4573641629844033891_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsrg6-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=IoMmAQTjCMkQ7kNvgFa6lzF&_nc_gid=aed5ac4a46754d7d99d9a3ba483d9c69&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYDeYGPLZYFfZEnWGKPo4zrowkTpG8LX-WBONEvAwo0b8w&oe=67251442&_nc_sid=7d3ac5"
          }
          alt={"profile"}
          width={500}
          height={500}
          quality={20}
          className={"h-full w-full absolute object-cover object-center mx-auto"}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col h-full justify-between gap-[11px]">
        <div className="w-fit">
          <div className="flex gap-[8px] h-full items-center">
            <h4 className="text-slate-600">Salim Sulaiman</h4>
            <h5 className="text-bombay-400 text-[14px]">Yesterday</h5>
          </div>
          <div className="flex gap-[2px] text-[14px] items-center">
            <FaStar className="text-sunflower-500" />
            <FaStar className="text-sunflower-500" />
            <FaStar className="text-sunflower-500" />
            <FaStar className="text-sunflower-500" />
            <FaStar className="text-sunflower-500" />
          </div>
        </div>
        <div className="w-full flex flex-col gap-[9px]">
          <h4 className="text-slate-700">Produk sangat bagus, build quality sangat kokoh, sangat recomended</h4>
          <div className="flex gap-[18px]">
            <h4 className="text-bombay-400 font-medium cursor-pointer">Reply</h4>
            <div className="flex gap-[4px] items-center">
              <BiLike className="text-xl text-bombay-400 cursor-pointer" />
              <h4 className="text-base text-slate-700">12</h4>
            </div>
            <div className="flex gap-[4px] items-center">
              <BiDislike className="text-xl text-bombay-400 cursor-pointer" />
              <h4 className="text-base text-slate-700">0</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
