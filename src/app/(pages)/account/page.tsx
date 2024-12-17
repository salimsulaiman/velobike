"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMapPin, FiSearch, FiUser } from "react-icons/fi";
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

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const steps = [0, 1, 2];
  const [currentStep, setCurrentStep] = useState(0);

  const [addAddress] = useState("find");

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  // const handleAddress = (pagination: string) => {
  //   switch (pagination) {
  //     case "find":
  //       setAddAddress("find");
  //       break;
  //     case "pin":
  //       setAddAddress("pin");
  //       break;
  //     case "fill":
  //       setAddAddress("fill");
  //       break;

  //     default:
  //       break;
  //   }
  // };

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setData(JSON.parse(userData)); // Parse if you stored the data as JSON
    } else {
      setData(undefined); // Or set a default value that matches your state type
    }
  }, []);

  console.log(addAddress);

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
                    <button
                      className="text-white text-sm px-4 py-[6px] bg-curious-blue-600 rounded-full hover:bg-curious-blue-700"
                      onClick={() => {
                        const modal = document.getElementById("addAddress") as HTMLDialogElement;
                        if (modal) {
                          modal.showModal();
                          setCurrentStep(0);
                        }
                      }}
                    >
                      Add Address +
                    </button>
                    <dialog id="addAddress" className="modal modal-bottom sm:modal-middle">
                      <div className="modal-box">
                        <h3 className="font-semibold text-lg text-slate-700 mb-8 text-center">Add Address</h3>
                        <div className="w-full">
                          <div className="grid grid-cols-5 items-center relative max-w-[350px] mx-auto">
                            <div className="flex flex-col items-center gap-1">
                              <div
                                className={`rounded-full h-7 w-7 ${
                                  currentStep == 0 ? "bg-curious-blue-600" : "bg-white border-2 border-curious-blue-600"
                                } flex items-center justify-center`}
                              >
                                <div className={`${currentStep == 0 ? "text-white" : "text-curious-blue-600"}`}>1</div>
                              </div>
                              <div className="text-[10px] text-center mt-1">Find location</div>
                            </div>
                            <div className="w-full h-[1px] bg-slate-400 rounded-full"></div>
                            <div className="flex flex-col items-center gap-1">
                              <div
                                className={`rounded-full h-7 w-7 ${
                                  currentStep == 1 ? "bg-curious-blue-600" : "bg-white border-2 border-curious-blue-600"
                                } flex items-center justify-center`}
                              >
                                <div className={`${currentStep == 1 ? "text-white" : "text-curious-blue-600"}`}>2</div>
                              </div>
                              <div className="text-[10px] text-center mt-1">Pin location</div>
                            </div>
                            <div className="w-full h-[1px] bg-slate-400 rounded-full"></div>
                            <div className="flex flex-col items-center gap-1">
                              <div
                                className={`rounded-full h-7 w-7 ${
                                  currentStep == 2 ? "bg-curious-blue-600" : "bg-white border-2 border-curious-blue-600"
                                } flex items-center justify-center`}
                              >
                                <div className={`${currentStep == 2 ? "text-white" : "text-curious-blue-600"}`}>3</div>
                              </div>
                              <div className="text-[10px] text-center mt-1">Fill Detail</div>
                            </div>
                          </div>
                          <hr className="my-8" />
                          {currentStep == 0 && (
                            <div className="w-full">
                              <h4 className="text-big-stone-950 mb-4">Where is your shipping location?</h4>
                              <form action="" className="w-full">
                                <label className="input input-bordered border-curious-blue-600 focus:ring-curious-blue-600 focus:outline-curious-blue-600 flex items-center gap-2">
                                  <FiSearch className="text-slate-500" />
                                  <input
                                    type="text"
                                    className="grow placeholder:text-xs"
                                    placeholder="Write the name of the street, place, or housing complex"
                                  />
                                </label>
                              </form>
                              <button className="flex gap-4 w-full mt-4 items-center bg-curious-blue-600 px-4 py-2 text-white rounded-full hover:bg-curious-blue-700">
                                <FiMapPin />
                                <h4>Use current location</h4>
                              </button>
                              <h4 className="text-slate-500 text-sm mt-4">
                                Not found?, fill in the address{" "}
                                <Link href={"#"} className="text-curious-blue-600 hover:text-curious-blue-700">
                                  manually
                                </Link>
                              </h4>
                            </div>
                          )}
                          {currentStep == 1 && (
                            <div className="w-full">
                              <h4 className="text-big-stone-950 mb-4">Determine the pinpoint of your location</h4>
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.65027504472!2d109.09731577475831!3d-7.050317692951927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f95e6db6550a1%3A0xabfb48b6456fea26!2sJl.%20Gotong%20Royong%2C%20Kec.%20Balapulang%2C%20Kabupaten%20Tegal%2C%20Jawa%20Tengah%2052464!5e0!3m2!1sen!2sid!4v1733989224887!5m2!1sen!2sid"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-[150px] rounded-t-[7px] border-none outline-none"
                              ></iframe>
                              <div className="w-full p-4 flex flex-col border-2 rounded-b-[7px]">
                                <h4 className="text-base text-big-stone-950 mb-1">Balapulang Wetan</h4>
                                <h5 className="text-sm text-slate-500">Balapulang, Kab. Tegal, Jawa Tengah</h5>
                              </div>
                              <button className="flex gap-4 w-full mt-4 items-center bg-curious-blue-600 px-4 py-2 text-white rounded-full hover:bg-curious-blue-700">
                                <FiMapPin />
                                <h4>Use current location</h4>
                              </button>
                            </div>
                          )}
                          {currentStep == 2 && (
                            <div className="w-full">
                              <h4 className="text-big-stone-950 mb-4">Complete the detailed address</h4>
                              <div className="w-full p-4 flex flex-col border-2 rounded-[7px]">
                                <h4 className="text-base text-big-stone-950 mb-1">Balapulang Wetan</h4>
                                <h5 className="text-sm text-slate-500">Balapulang, Kab. Tegal, Jawa Tengah</h5>
                              </div>
                              <form action="">
                                <div className="form-control">
                                  <div className="relative my-4">
                                    <input
                                      id="label"
                                      type="text"
                                      placeholder="Address label"
                                      className="w-full border-2 border-slate-200 outline-transparent focus:border-transparent focus:outline-curious-blue-600 rounded-lg p-2 text-slate-700 peer focus:placeholder-transparent"
                                    />
                                    <label
                                      htmlFor="label"
                                      className="absolute left-2 -top-2 text-xs text-curious-blue-600 bg-white px-1 transition-all duration-300 transform scale-0 peer-focus:scale-100"
                                    >
                                      Label
                                    </label>
                                  </div>
                                </div>
                                <div className="form-control">
                                  <div className="relative mb-4">
                                    <textarea
                                      id="detail"
                                      placeholder="Address detail"
                                      className="w-full border-2 border-slate-200 outline-transparent focus:border-transparent focus:outline-curious-blue-600 rounded-lg p-2 text-slate-700 peer focus:placeholder-transparent"
                                    ></textarea>
                                    <label
                                      htmlFor="detail"
                                      className="absolute left-2 -top-2 text-xs text-curious-blue-600 bg-white px-1 transition-all duration-300 transform scale-0 peer-focus:scale-100"
                                    >
                                      Address detail
                                    </label>
                                  </div>
                                </div>
                                <div className="form-control">
                                  <div className="relative mb-4">
                                    <input
                                      id="note"
                                      type="text"
                                      placeholder="Courier note"
                                      className="w-full border-2 border-slate-200 outline-transparent focus:border-transparent focus:outline-curious-blue-600 rounded-lg p-2 text-slate-700 peer focus:placeholder-transparent"
                                    />
                                    <label
                                      htmlFor="note"
                                      className="absolute left-2 -top-2 text-xs text-curious-blue-600 bg-white px-1 transition-all duration-300 transform scale-0 peer-focus:scale-100"
                                    >
                                      Courier note
                                    </label>
                                    <h4 className="text-slate-500 text-xs mt-1">
                                      House color, landmarks, special instructions, etc.
                                    </h4>
                                  </div>
                                </div>
                                <div className="form-control">
                                  <div className="relative mb-4">
                                    <input
                                      id="name"
                                      type="text"
                                      autoComplete="false"
                                      placeholder="Recipients name"
                                      className="w-full border-2 border-slate-200 outline-transparent focus:border-transparent focus:outline-curious-blue-600 rounded-lg p-2 text-slate-700 peer focus:placeholder-transparent"
                                    />
                                    <label
                                      htmlFor="name"
                                      className="absolute left-2 -top-2 text-xs text-curious-blue-600 bg-white px-1 transition-all duration-300 transform scale-0 peer-focus:scale-100"
                                    >
                                      Recipients name
                                    </label>
                                  </div>
                                </div>
                                <div className="form-control">
                                  <div className="relative mb-4">
                                    <input
                                      id="phone"
                                      type="text"
                                      autoComplete="false"
                                      placeholder="Phone"
                                      className="w-full border-2 border-slate-200 outline-transparent focus:border-transparent focus:outline-curious-blue-600 rounded-lg p-2 text-slate-700 peer focus:placeholder-transparent"
                                    />
                                    <label
                                      htmlFor="phone"
                                      className="absolute left-2 -top-2 text-xs text-curious-blue-600 bg-white px-1 transition-all duration-300 transform scale-0 peer-focus:scale-100"
                                    >
                                      Phone
                                    </label>
                                  </div>
                                </div>
                                <div className="form-control">
                                  <label className="label cursor-pointer flex gap-4 items-start">
                                    <input
                                      type="checkbox"
                                      className="checkbox checkbox-primary"
                                      checked={isChecked}
                                      onChange={handleCheckboxChange}
                                    />
                                    <span className="text-xs">
                                      I agree to the Terms & Conditions and Privacy Policy for address settings on
                                      Tokopedia.
                                    </span>
                                  </label>
                                </div>
                              </form>
                            </div>
                          )}
                        </div>
                        <div className="modal-action">
                          <div className="flex gap-4">
                            {/* if there is a button in form, it will close the modal */}
                            <button
                              onClick={handlePrevious}
                              disabled={currentStep === 0}
                              className={`px-6 py-2 rounded-full ${
                                currentStep === 0
                                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                  : "bg-curious-blue-600 text-white hover:bg-curious-blue-700"
                              }`}
                            >
                              Previous
                            </button>

                            {currentStep == 2 ? (
                              <button
                                className={`px-6 py-2 rounded-full bg-curious-blue-600 text-white hover:bg-curious-blue-700  ${
                                  !isChecked && "opacity-50 cursor-not-allowed"
                                }`}
                                disabled={!isChecked}
                              >
                                Finish
                              </button>
                            ) : (
                              <button
                                onClick={handleNext}
                                disabled={currentStep === steps.length - 1}
                                className={`px-6 py-2 rounded-full ${
                                  currentStep === steps.length - 1
                                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    : "bg-curious-blue-600 text-white hover:bg-curious-blue-700"
                                }`}
                              >
                                Next
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </dialog>
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
