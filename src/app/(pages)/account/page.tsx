"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { RiMapPin2Fill } from "react-icons/ri";

interface UserData {
  name: string;
  username: string;
  email: string;
  password: string;
  picture: string;
}

function AccountPage() {
  const [data, setData] = useState<UserData | undefined>(undefined);

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
                <li className="text-base text-white py-[3px] px-[7px] flex gap-[12px] items-center cursor-pointer bg-curious-blue-600 rounded-[9px]">
                  <span>
                    <FiUser />
                  </span>
                  Profile
                </li>
                <li className="text-base text-slate-700 py-[3px] px-[7px] flex gap-[12px] items-center cursor-pointer">
                  <span>
                    <MdFavoriteBorder />
                  </span>
                  Wishlist
                </li>
                <li className="text-base text-slate-700 py-[3px] px-[7px] flex gap-[12px] items-center cursor-pointer">
                  <span>
                    <MdOutlineShoppingCart />
                  </span>
                  Cart
                </li>
                <li className="text-base text-slate-700 py-[3px] px-[7px] flex gap-[12px] items-center cursor-pointer">
                  <span>
                    <LiaShippingFastSolid />
                  </span>
                  Shipping
                </li>
              </ul>
            </div>
          </div>
          <div className="w-9/12 bg-white">
            <div className="w-full px-[21px] py-[40px]">
              <h2 className="text-2xl font-medium text-big-stone-950 mb-3">Profile</h2>
              <div className="flex flex-col w-full">
                {/* photo */}
                <div className="flex w-full mb-3">
                  <div className="w-4/12">
                    <h4 className="text-sm text-big-stone-950">Your Photo</h4>
                    <h5 className="text-[10px] text-slate-500">This will be displayed on your profile</h5>
                  </div>
                  <div className="w-8/12 flex items-center gap-3">
                    <div className="w-[51px] h-[51px] rounded-full bg-slate-500 overflow-hidden">
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
                    <h4 className="text-sm text-slate-500 cursor-pointer hover:text-slate-600">Delete</h4>
                    <h4 className="text-sm text-curious-blue-600 font-semibold cursor-pointer hover:text-curious-blue-700">
                      Update
                    </h4>
                  </div>
                </div>
                {/* line */}
                <div className="w-full h-[1px] bg-gradient-to-r from-athens-gray-50/0 via-athens-gray-100 to-athens-gray-50/0 my-6"></div>
                {/* field */}
                <form action="">
                  <div className="flex w-full items-center mb-5">
                    <label className="text-sm text-big-stone-950 w-4/12" htmlFor="fullname">
                      Fullname
                    </label>
                    <input
                      id="fullname"
                      type="text"
                      className="w-full border-[1px] border-slate-300 max-w-[369px] rounded-[7px] py-[5px] px-[11px] text-sm"
                      value={data?.name}
                    />
                  </div>
                  <div className="flex w-full items-center mb-5">
                    <label className="text-sm text-big-stone-950 w-4/12" htmlFor="username">
                      Username
                    </label>
                    <input
                      id="username"
                      type="text"
                      className="w-full border-[1px] border-slate-300 max-w-[369px] rounded-[7px] py-[5px] px-[11px] text-sm"
                      value={data?.username}
                    />
                  </div>
                  <div className="flex w-full items-center mb-1">
                    <label className="text-sm text-big-stone-950 w-4/12" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full border-[1px] border-slate-300 max-w-[369px] rounded-[7px] py-[5px] px-[11px] text-sm"
                      value={data?.email}
                    />
                  </div>
                  {/* <button className="text-white text-sm px-4 py-2 bg-curious-blue-600 rounded-full">Save</button> */}
                </form>
                {/* line */}
                <div className="w-full h-[1px] bg-gradient-to-r from-athens-gray-50/0 via-athens-gray-100 to-athens-gray-50/0 my-6"></div>
                <div className="flex w-full mb-3">
                  <div className="w-4/12">
                    <h4 className="text-sm text-big-stone-950">Address</h4>
                    <h5 className="text-[10px] text-slate-500">The address will be used for shipping</h5>
                  </div>
                  <div className="max-w-[369px]">
                    <div className="p-3 border-[1px] border-slate-300 rounded-[7px] w-full mb-3 relative">
                      <div className="w-1 h-[21px] bg-curious-blue-600 absolute left-0 top-3 rounded-r-[6px]"></div>
                      <div className="flex gap-1 items-center mb-1">
                        <h5 className="text-[10px] font-medium text-big-stone-950">House</h5>
                        <h5 className="text-[10px] font-medium text-slate-600 px-[5px] py-[2px] rounded-[4px] bg-zumthor-100">
                          Primary
                        </h5>
                      </div>
                      <h4 className="text-base text-big-stone-950 font-medium mb-1">Salim Sulaiman</h4>
                      <h5 className="text-[12px] text-big-stone-950 mb-1">+6287776421079</h5>
                      <h5 className="text-[12px] text-big-stone-950 leading-loose mb-2">
                        Jl. Gotong Royong, RT 04 RW 04 No 10, Balapulang Wetan, Kec. Balapulang, Kab. Tegal
                      </h5>
                      <div className="flex gap-[5px] items-center text-curious-blue-600 mb-2">
                        <RiMapPin2Fill />
                        <span className="text-[12px]">Pinpoint</span>
                      </div>

                      <div className="flex gap-[14px] items-center text-curious-blue-600">
                        <a href="" className="text-[12px]">
                          Edit Address
                        </a>
                        <div className="w-[1px] h-3 bg-slate-300"></div>
                        <a href="" className="text-[12px]">
                          Choose Primary
                        </a>
                        <div className="w-[1px] h-3 bg-slate-300"></div>
                        <a href="" className="text-[12px]">
                          Delete
                        </a>
                      </div>
                    </div>
                    <button className="text-white text-sm px-4 py-[6px] bg-curious-blue-600 rounded-full hover:bg-curious-blue-700">
                      Add Address +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
