"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Signup() {
  const route = useRouter();

  const user = [
    {
      name: "Salim",
      email: "salim@gmail.com",
      password: "salim",
      picture: "https://api.dicebear.com/9.x/thumbs/svg?seed=Salim",
    },
    {
      name: "Nurul",
      email: "nurul@gmail.com",
      password: "nurul",
      picture: "https://api.dicebear.com/9.x/thumbs/svg?seed=Nurul",
    },
  ];

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const findUser = user.find((items) => items.email === email && items.password === password);

      if (email === "" && password === "") {
        return alert("Please fill email and password field");
      }
      if (!findUser) {
        return alert("Incorrect email or password");
      }
      localStorage.setItem("user", JSON.stringify(findUser));
      route.push("/");
    } catch (error) {
      return alert(error);
    }
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white px-6 lg:px-2">
      <div className="w-full lg:w-5/6 xl:w-3/5 bg-white h-[700px] rounded-2xl shadow-premiere flex overflow-hidden">
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center p-8 relative">
          <h3 className="text-slate-700 text-base absolute top-8 left-8">
            Velo<span className="font-bold">Bike</span>
          </h3>
          <h1 className="text-slate-700 font-bold text-2xl">Register</h1>
          <h4 className="text-slate-400 mt-4 text-sm md:text-base">Please register your account</h4>
          <form onSubmit={handleLogin} className="flex flex-col justify-center gap-4 mt-4">
            <div className="form-control">
              <div className="relative">
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  className="w-full border-2 border-slate-200 outline-transparent focus:border-transparent focus:outline-curious-blue-600 rounded-lg p-2 text-slate-700 peer focus:placeholder-transparent"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
                <label
                  htmlFor="username"
                  className="absolute left-2 -top-2 text-xs text-curious-blue-600 bg-white px-1 transition-all duration-300 transform scale-0 peer-focus:scale-100"
                >
                  Username
                </label>
              </div>
            </div>
            <div className="form-control">
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full border-2 border-slate-200 outline-transparent focus:border-transparent focus:outline-curious-blue-600 rounded-lg p-2 text-slate-700 peer focus:placeholder-transparent"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <label
                  htmlFor="email"
                  className="absolute left-2 -top-2 text-xs text-curious-blue-600 bg-white px-1 transition-all duration-300 transform scale-0 peer-focus:scale-100"
                >
                  Email
                </label>
              </div>
            </div>
            <div className="form-control">
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="w-full border-2 border-slate-200 outline-transparent focus:border-curious-blue-600 focus:outline-curious-blue-600 rounded-lg p-2 text-slate-700 peer focus:placeholder-transparent"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <label
                  htmlFor="password"
                  className="absolute left-2 -top-2 text-xs text-curious-blue-600 bg-white px-1 transition-all duration-300 transform scale-0 peer-focus:scale-100"
                >
                  Password
                </label>
              </div>
            </div>
            <button className="w-full bg-curious-blue-600 py-3 text-white rounded-lg hover:bg-curious-blue-700">
              Register
            </button>
            <div className="w-full relative my-4">
              <hr className="w-full" />
              <h4 className="text-sm text-slate-400 absolute top-1/2 -translate-y-1/2 inline-block left-1/2 -translate-x-1/2 px-2 bg-white">
                or
              </h4>
            </div>
            <button
              className="w-full bg-slate-50 py-3 text-slate-500 border-[1px] border-slate-400 rounded-lg hover:bg-slate-100 flex items-center justify-center gap-2"
              type="button"
            >
              Register with Google
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
              Have an account?{" "}
              <span>
                <Link href={"/signin"} className="text-curious-blue-600 hover:text-curious-blue-700">
                  Login
                </Link>
              </span>
            </h4>
          </form>
        </div>
        <div className="w-1/2 bg-yellow-500 rounded-l-2xl overflow-hidden relative hidden md:block ">
          <Image
            src={"/assets/signup-image.jpg"}
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

export default Signup;
