"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { MdDirectionsBike, MdShoppingCart } from "react-icons/md";

interface UserData {
  name: string;
  email: string;
  password: string;
  picture: string;
}

function Navbar() {
  const route = useRouter();
  const [scrolling, setScrolling] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [data, setData] = useState<UserData | undefined>(undefined);

  const pathname = usePathname();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    route.push("/signin");
  };

  const closeMenu = () => {
    setToggleMenu(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setData(JSON.parse(userData)); // Parse if you stored the data as JSON
    } else {
      setData(undefined); // Or set a default value that matches your state type
    }
  }, []);
  return (
    <div className="w-full">
      <nav className="max-w-screen-xlg mx-auto hidden xmd:flex fixed left-0 right-0 top-[34px] items-center justify-between z-50 px-6 lg:px-2">
        <div
          className={`flex py-[9px] lg:py-5 px-[9px] lg:px-[49px] rounded-full ${
            scrolling ? "bg-black/40 backdrop-blur-lg" : "bg-white"
          } shadow-premiere transition-all duration-300 ease-in-out`}
        >
          <h2 className={`hidden lg:block text-lg lg:text-xl ${scrolling ? "text-white" : "text-slate-800"}`}>
            Velo<span className="font-bold">Bike</span>
          </h2>
          <div className="w-12 h-12 rounded-full bg-white flex lg:hidden items-center justify-center overflow-hidden">
            <MdDirectionsBike className="text-2xl text-curious-blue-600" />
          </div>
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
                } transition-all duration-300 ease-in-out rounded-full px-[25px] py-[14px] inline-block text-sm lg:text-base`}
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname.includes("/collection")
                    ? "bg-curious-blue-600 text-white"
                    : "bg-porcelain-100 text-slate-800"
                } transition-all duration-300 ease-in-out rounded-full px-[25px] py-[14px] inline-block text-sm lg:text-base`}
                href={"/collection"}
              >
                Collection
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/sale" ? "bg-curious-blue-600 text-white" : "bg-porcelain-100 text-slate-800"
                } transition-all duration-300 ease-in-out rounded-full px-[25px] py-[14px] inline-block text-sm lg:text-base`}
                href={"/"}
              >
                Sale
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/articles" ? "bg-curious-blue-600 text-white" : "bg-porcelain-100 text-slate-800"
                } transition-all duration-300 ease-in-out rounded-full px-[25px] py-[14px] inline-block text-sm lg:text-base`}
                href={"/"}
              >
                Articles
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/support" ? "bg-curious-blue-600 text-white" : "bg-porcelain-100 text-slate-800"
                } transition-all duration-300 ease-in-out rounded-full px-[25px] py-[14px] inline-block text-sm lg:text-base`}
                href={"/"}
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`flex py-[9px] px-[9px] lg:px-[14px] rounded-full items-center justify-center ${
            scrolling ? "bg-black/40 backdrop-blur-lg" : "bg-white"
          } gap-[10px] shadow-premiere transition-all duration-300 ease-in-out`}
        >
          <div className="w-12 h-12 rounded-full bg-porcelain-100 flex items-center justify-center">
            <MdShoppingCart className="text-xl" />
          </div>
          <div className="w-12 h-12 rounded-full bg-porcelain-100 flex items-center justify-center">
            <IoSearchSharp className="text-xl" />
          </div>
          <div className="dropdown dropdown-end">
            <div
              className="w-12 h-12 rounded-full bg-porcelain-100 flex items-center justify-center overflow-hidden"
              role="button"
              tabIndex={0}
            >
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
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-4">
              <li>
                <Link href={"/"}>Account</Link>
              </li>
              <li>
                <h4 onClick={handleLogout}>Logout</h4>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* responsive navbar */}
      {/* <nav className="max-w-screen-xlg h-[85px] mx-auto block xmd:hidden fixed left-0 right-0 bottom-[34px] z-50 px-3">
        <div className="w-full bg-white h-full rounded-[30px] shadow-premiere grid grid-cols-4 gap-4">
          <div
            className={`h-full text-center flex flex-col items-center justify-between py-4 relative ${
              pathname == "/" ? "text-curious-blue-600" : "text-slate-700"
            } transition-all duration-300 ease-in-out`}
            onClick={() => router.push("/")}
          >
            {pathname == "/" && <div className="w-1/2 h-1 bg-curious-blue-600 absolute top-0 rounded-b-full"></div>}
            <MdHome className="text-[30px]" />
            <h4 className="text-sm mt-1">Home</h4>
          </div>
          <div
            className={`h-full text-center flex flex-col items-center justify-between py-4 relative ${
              pathname == "/collection" ? "text-curious-blue-600" : "text-slate-700"
            } transition-all duration-300 ease-in-out`}
            onClick={() => router.push("/collection")}
          >
            {pathname == "/collection" && (
              <div className="w-1/2 h-1 bg-curious-blue-600 absolute top-0 rounded-b-full"></div>
            )}
            <MdPedalBike className="text-[30px]" />
            <h4 className="text-sm mt-1">Collection</h4>
          </div>
          <div
            className={`h-full text-center flex flex-col items-center justify-between py-4 relative ${
              pathname == "/sale" ? "text-curious-blue-600" : "text-slate-700"
            } transition-all duration-300 ease-in-out`}
            onClick={() => router.push("/sale")}
          >
            {pathname == "/sale" && <div className="w-1/2 h-1 bg-curious-blue-600 absolute top-0 rounded-b-full"></div>}
            <MdOutlineDiscount className="text-[30px]" />
            <h4 className="text-sm mt-1">Sale</h4>
          </div>
          <div
            className={`h-full text-center flex flex-col items-center justify-between py-4 relative ${
              pathname == "/articles" ? "text-curious-blue-600" : "text-slate-700"
            } transition-all duration-300 ease-in-out`}
            onClick={() => router.push("/articles")}
          >
            {pathname == "/articles" && (
              <div className="w-1/2 h-1 bg-curious-blue-600 absolute top-0 rounded-b-full"></div>
            )}
            <MdArticle className="text-[30px]" />
            <h4 className="text-sm mt-1">Articles</h4>
          </div>
        </div>
      </nav> */}
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-50 shadow-premiere block xmd:hidden">
        <div className="flex justify-between items-center max-w-screen-xlg mx-auto px-6 lg:px-2 py-6 relative bg-white">
          <div className="flex gap-6 items-center bg-white">
            <div
              className={`text-2xl text-slate-700 block xmd:hidden cursor-pointer transition-transform duration-300 transform ${
                toggleMenu ? "rotate-180" : "rotate-0"
              }`}
              onClick={handleToggle}
            >
              {toggleMenu ? <CgClose /> : <CgMenu />}
            </div>

            <h2 className="text-xl text-slate-800">
              Velo<span className="font-bold">Bike</span>
            </h2>
          </div>
          <div
            className={`absolute xmd:static bg-white min-h-[45vh] xmd:min-h-fit -mt-6 ${
              toggleMenu ? "top-[100%] opacity-100" : "-top-[100%] opacity-0"
            } w-full xmd:w-auto flex items-center px-5 left-0 right-0 transition-all duration-200 ease-in-out -z-10 rounded-b-2xl shadow-xl`}
          >
            <ul className="flex flex-col xmd:flex-row items-start xmd:items-center gap-0 xmd:gap-[4vw] w-full xmd:w-fit">
              <Link
                href="/"
                onClick={closeMenu}
                className="p-4 inline-block bg-white hover:bg-slate-200 text-slate-700 w-full rounded-lg"
              >
                <li>Home</li>
              </Link>
              <Link
                href="/collection"
                onClick={closeMenu}
                className="p-4 inline-block bg-white hover:bg-slate-200 text-slate-700 w-full rounded-lg"
              >
                <li>Collection</li>
              </Link>
              <Link
                href="/sale"
                onClick={closeMenu}
                className="p-4 inline-block bg-white hover:bg-slate-200 text-slate-700 w-full rounded-lg"
              >
                <li>Sale</li>
              </Link>
              <Link
                href="/articles"
                onClick={closeMenu}
                className="p-4 inline-block bg-white hover:bg-slate-200 text-slate-700 w-full rounded-lg"
              >
                <li>Articles</li>
              </Link>
              <Link
                href="/support"
                onClick={closeMenu}
                className="p-4 inline-block bg-white hover:bg-slate-200 text-slate-700 w-full rounded-lg"
              >
                <li>Support</li>
              </Link>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            {/* <button className="bg-curious-blue-600 text-white px-5 py-2 rounded-full hover:bg-curious-blue-700">
              Sign in
            </button> */}
            <Link href={"/"}>
              <IoSearchSharp className="text-2xl text-slate-600 hover:text-slate-700" />
            </Link>
            <Link href={"/"}>
              <MdShoppingCart className="text-2xl text-slate-600 hover:text-slate-700" />
            </Link>
            <div className="dropdown dropdown-end">
              <div
                className="w-12 h-12 rounded-full bg-porcelain-100 flex items-center justify-center overflow-hidden"
                role="button"
                tabIndex={0}
              >
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
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[100] w-52 p-2 shadow mt-4">
                <li>
                  <Link href={"/"}>Account</Link>
                </li>
                <li>
                  <h4 onClick={handleLogout}>Logout</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
