import React, { useState } from "react";
import Axios from "axios";
const GoogleIcon = require("../assets/images/Google.png");
const SignUpRight = require("../assets/images/Image1.jpeg");

export default function SignUp() {
  const [regInputs, setRegInputs] = useState({
    vendorName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<any>) => {
    setRegInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const register = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    try {
      await Axios.post("/api/auth/signup", regInputs, { withCredentials: true });
    } catch (err: any) {
      alert(err.response.data);
    }
  };

  return (
    <div className="login-container">
      <div className="p-12 xl:flex xl:flex-col xl:justify-center xl:pl-16 bg-white">
        <div className="mb-12">
          <h1 className="text-4xl"> Welcome new vendors </h1>
          <p className="opacity-70">Please register to create an account</p>
        </div>
        <form className="w-full xl:w-24rem" onSubmit={register}>
          <div className="flex flex-col gap-4">
            <div className="mb-3">
              <label
                htmlFor="name"
                className="inline-block bg-white mb-2.5 absolute px-0 py-2.5 text-sm translate-x-7 -translate-y-5"
              >
                Vendor name
              </label>
              <input
                type="text"
                id="vendorName"
                name="vendorName"
                className="border border-solid border-black h-14 px-8 py-0 w-full text-lg rounded-full"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="inline-block bg-white mb-2.5 absolute px-0 py-2.5 text-sm translate-x-7 -translate-y-5"
              >
                Enter email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="border border-solid border-black h-14 px-8 py-0 w-full text-lg rounded-full"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="inline-block bg-white mb-2.5 absolute px-0 py-2.5 text-sm translate-x-7 -translate-y-5"
              >
                Enter password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border border-solid border-black h-14 px-8 py-0 w-full text-lg rounded-full"
                onChange={handleChange}
              />
            </div>
            <button
              className="border-none bg-black text-white p-4 rounded-full text-center uppercase text-lg h-14 cursor-pointer hover:bg-gray-500"
              type="submit"
            >
              Sign Up
            </button>
            <div className="text-center">
              Already have an account? {""}
              <a href="/login" className="text-primary hover:font-bold">
                Sign In
              </a>
            </div>
          </div>

          <div className="divider my-8 opacity-50">OR</div>
          <div className="gap-7">
            <a
              href="#"
              className="gap-4 border-solid border border-black rounded-full justify-center p-2.5 flex text-black hover:bg-third"
            >
              <img src={GoogleIcon} width="30" alt="google icon" />
              Continue with Google
            </a>
          </div>
        </form>
      </div>
      <div className="hidden md:bg-third md:flex md:justify-center">
        <img src={SignUpRight} className="w-full" alt="background" />
      </div>
    </div>
  );
}
