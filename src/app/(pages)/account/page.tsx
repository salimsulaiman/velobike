"use client";
import Cart from "@/app/component/account/Cart";
import ProfileSetting from "@/app/component/account/ProfileSetting";
import Shipping from "@/app/component/account/Shipping";
import Wishlist from "@/app/component/account/Wishlist";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";

interface UserData {
  name: string;
  username: string;
  email: string;
  password: string;
  picture: string;
}

function AccountPage() {
  const [data, setData] = useState<UserData | undefined>(undefined);
  const [menu, setMenu] = useState(0);

  const menuItems = [
    { id: 0, label: "Profile", icon: <FiUser /> },
    { id: 1, label: "Wishlist", icon: <MdFavoriteBorder /> },
    { id: 2, label: "Cart", icon: <MdOutlineShoppingCart /> },
    { id: 3, label: "Shipping", icon: <LiaShippingFastSolid /> },
  ];

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setData(JSON.parse(userData)); // Parse if you stored the data as JSON
    } else {
      setData(undefined); // Or set a default value that matches your state type
    }
  }, []);

  return (
    <div className="w-full bg-gallery-100">
      <div className="max-w-screen-xlg mx-auto flex flex-col items-center justify-center px-6 lg:px-2 min-h-[915px]">
        <div className="w-full h-[674px] mt-24 rounded-[9px] flex overflow-hidden shadow-premiere">
          <div className="w-3/12 bg-black-haze-50">
            <div className="w-full  px-[21px] py-[40px]">
              {/* profile */}
              <div className=" w-full flex gap-[14px] items-center px-[7px]">
                <div className="h-[47px] w-[47px] rounded-full bg-slate-500 overflow-hidden">
                  {data?.picture && (
                    <Image
                      src={data.picture}
                      alt="profile"
                      className="w-full h-full text-center object-cover object-center"
                      width={500}
                      height={500}
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <div className="text-base text-big-stone-950 line-clamp-1">{data?.name}</div>
                  <div className="text-[10px] text-slate-500 line-clamp-1">{data?.email}</div>
                </div>
              </div>
              {/* menu */}
              <ul className="mt-[29px] w-full">
                <li className="text-sm text-slate-500 px-[7px] block mb-[10px]">General</li>
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => setMenu(item.id)}
                    className={`text-base py-[3px] my-1 px-[7px] flex gap-[12px] items-center cursor-pointer rounded-[9px] ${
                      menu === item.id ? "text-white bg-curious-blue-600" : "text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-9/12 bg-white">
            {menu == 0 && <ProfileSetting />}
            {menu == 1 && <Wishlist />}
            {menu == 2 && <Cart />}
            {menu == 3 && <Shipping />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
