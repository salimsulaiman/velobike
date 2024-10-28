import React from "react";
import ProgressiveImage from "./ProgressiveImage";
import { FaStar } from "react-icons/fa";
import { BiDislike, BiLike } from "react-icons/bi";

interface Comment {
  id: number;
  account: Account;
  rating: number;
  primary: boolean;
  date: Date;
  comment: string;
  parentId?: number;
  like: number;
  dislike: number;
}

interface Account {
  name: string;
  picture: string;
}

function CommentCard({ account, rating, date, primary, comment, parentId, like, dislike }: Comment) {
  const formatDate = (date: Date) => {
    const now = new Date();
    const diffTime = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

    if (diffDays === 0) {
      return "Today";
    } else if (diffDays === 1) {
      return "Yesterday";
    } else {
      return date.toDateString(); // Format the date as needed (default to locale date)
    }
  };

  const formattedDate = formatDate(date);
  return (
    <div className="w-full">
      <div className="w-full flex flex-row gap-[19px] py-4">
        <div className="h-[40px] w-[40px] rounded-full relative overflow-hidden">
          <ProgressiveImage
            src={account?.picture}
            alt={"profile"}
            width={500}
            height={500}
            quality={20}
            className={"h-full w-full absolute object-cover object-center mx-auto"}
            loading="lazy"
          />
        </div>
        <div className="w-full flex flex-col h-full justify-between gap-[11px]">
          <div className="w-fit">
            <div className="flex gap-[8px] h-full items-center">
              <h4 className="text-slate-600">{account?.name}</h4>
              <h5 className="text-bombay-400 text-[12px]">{formattedDate}</h5>
            </div>
            <div className="flex gap-[2px] text-[14px] items-center">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={` ${i < rating ? "text-sunflower-500" : "text-link-water-200"}`} />
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col gap-[9px]">
            <h4 className="text-slate-700">{comment}</h4>
            <div className="flex gap-[18px]">
              {primary && <h4 className="text-bombay-400 font-medium cursor-pointer">Reply</h4>}
              <div className="flex gap-[4px] items-center">
                <BiLike className="text-xl text-bombay-400 cursor-pointer" />
                <h4 className="text-base text-slate-700">{like}</h4>
              </div>
              <div className="flex gap-[4px] items-center">
                <BiDislike className="text-xl text-bombay-400 cursor-pointer" />
                <h4 className="text-base text-slate-700">{dislike}</h4>
              </div>
            </div>
          </div>
          {/* {if comment have parent id =1 so show the comment right} */}
        </div>
      </div>
      <div className="w-full rounded-full h-[2px] bg-zumthor-100 mt-5 mb-5"></div>
    </div>
  );
}

export default CommentCard;
