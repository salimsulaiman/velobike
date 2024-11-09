"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  const handleLogin = (e: any) => {
    e.preventDefault();
    alert("Success login");
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white">
      <div className="w-1/2 bg-white h-[700px] rounded-2xl shadow-premiere flex overflow-hidden">
        <div className="w-1/2 h-full flex flex-col justify-center p-8 relative">
          <h3 className="text-slate-700 text-base absolute top-8 left-8">
            Velo<span className="font-bold">Bike</span>
          </h3>
          <h1 className="text-slate-700 font-bold text-2xl">Sign in</h1>
          <h4 className="text-slate-400 mt-2">Please login to continue to your account</h4>
          <form onSubmit={handleLogin} className="flex flex-col justify-center gap-4 mt-4">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="grow" placeholder="Password" />
            </label>
            <div className="form-control">
              <label className="label cursor-pointer w-fit gap-2">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Stay signed in</span>
              </label>
            </div>
            <button className="w-full bg-curious-blue-600 py-3 text-white rounded-lg hover:bg-curious-blue-700">
              Sign in
            </button>
            <div className="w-full relative my-4">
              <hr className="w-full" />
              <h4 className="text-sm text-slate-400 absolute top-1/2 -translate-y-1/2 inline-block left-1/2 -translate-x-1/2 px-2 bg-white">
                or
              </h4>
            </div>
            <button
              className="w-full bg-slate-50 py-3 text-slate-700 border-[1px] border-slate-400 rounded-lg hover:bg-slate-100 flex items-center justify-center gap-2"
              type="button"
            >
              Sign in with Google
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                  <path
                    fill="#fbc02d"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#e53935"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4caf50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1565c0"
                    d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
              </span>
            </button>
            <h4 className="text-slate-400 text-center text-sm">
              Need an account?{" "}
              <span>
                <Link href={"/"} className="text-curious-blue-600 hover:text-curious-blue-700">
                  Create one
                </Link>
              </span>
            </h4>
          </form>
        </div>
        <div className="w-1/2 bg-curious-blue-600 rounded-l-2xl overflow-hidden relative">
          <Image
            src={"/assets/login-image.png"}
            width={1000}
            height={1000}
            alt="login-image"
            priority
            className="w-full h-full absolute object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}

export default page;
