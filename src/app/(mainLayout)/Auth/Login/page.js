"use client"
// import { useAuth } from "@/app/context/AuthContext";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

const LoginPage = () => {
  const inputStyle =
    "w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-0 bg-white text-black";

  const [register, setRegister] = useState(false);
  const [message, setMessage] = useState("");
  //const { login } = useAuth();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setMessage("");
    // setRegister(true);

    // try {
    //   const email = e.target.email.value;
    //   const password = e.target.password.value;

    //   const res = await axios.post("http://localhost:3000/api/auth?login=true", {
    //     email,
    //     password,
    //   });
    //   setMessage("Login successfully");
    //   console.log(res.data);
    // } catch (err) {
    //   console.error("Error submitting data", err);
    //   setMessage("Failed to create account. Please try again.");
    // } finally {
    //   setRegister(false);
    // }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">LOGIN</h2>
        <p className="text-sm text-gray-500 mb-8 text-center">
          WELCOME BACK! PLEASE LOGIN TO YOUR ACCOUNT
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-600">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              className={inputStyle}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-medium text-gray-600">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Your password"
              className={inputStyle}
              required
            />
          </div>

          <button
            type="submit"
            disabled={register}
            className={`w-full border py-2 mt-2 text-white duration-300 border-transparent ${
              register
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-black hover:border-black hover:bg-gray-100 hover:text-black"
            }`}
          >
            {register ? "Processing..." : "Login"}
          </button>

          <button
            type="button"
            className="w-full border border-gray-300 py-2 flex items-center justify-center gap-2 hover:bg-black hover:text-white hover:border-transparent duration-300"
            onClick={() => alert("Google login not implemented yet")}
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Login with Google
          </button>

          {message && (
            <p className="mt-4 text-center font-semibold text-sm text-green-600">
              {message.toUpperCase()}
            </p>
          )}

          <p className="text-sm text-center text-gray-600 mt-6">
            Don&apos;t have an account?
            <Link
              href="/Auth/register"
              className="text-blue-500 font-semibold hover:underline"
            >
              Sign up here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

