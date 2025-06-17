"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginPage() {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRoleClick = (selectedRole) => {
    setRole(selectedRole);
    if (selectedRole === "admin") {
      setEmail("admin@gmail.com");
      setPassword("admin123");
    } else if (selectedRole === "seller") {
      setEmail("seller@gmail.com");
      setPassword("seller123");
    } else if (selectedRole === "buyer") {
      setEmail("buyer@gmail.com");
      setPassword("buyer123");
    }
  };

  const handleLogin = async () => {
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
      role,
    });

    if (res.ok) {
      if (role === "admin") {
        router.push("/dashboard/AllUsers");
      } else if (role === "seller") {
        router.push("/dashboard/seller");
      } else if (role === "buyer") {
        router.push("/dashboard/analytics");
      } else {
        router.push("/dashboard");
      }
    } else {
      toast("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-3xl font-bold mb-6">🔐 LOGIN / REGISTER</h1>

      {/* Role Buttons */}
      <div className="flex gap-3 mb-6">
        <button
          className={`px-4 py-2 rounded font-semibold transition ${
            role === "admin" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleRoleClick("admin")}
        >
          Admin
        </button>
        <button
          className={`px-4 py-2 rounded font-semibold transition ${
            role === "seller" ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleRoleClick("seller")}
        >
          Seller
        </button>
        <button
          className={`px-4 py-2 rounded font-semibold transition ${
            role === "buyer" ? "bg-purple-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleRoleClick("buyer")}
        >
          Buyer
        </button>
      </div>

      {/* Input Fields */}
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="********"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-2 rounded font-semibold hover:bg-gray-900 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}

// "use client"
// // import { useAuth } from "@/app/context/AuthContext";
// import axios from "axios";
// import Link from "next/link";
// import React, { useState } from "react";

// const LoginPage = () => {
//   const inputStyle =
//     "w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-0 bg-white text-black";

//   const [register, setRegister] = useState(false);
//   const [message, setMessage] = useState("");
//   //const { login } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // setMessage("");
//     // setRegister(true);

//     // try {
//     //   const email = e.target.email.value;
//     //   const password = e.target.password.value;

//     //   const res = await axios.post("https://house-lease.vercel.app/api/auth?login=true", {
//     //     email,
//     //     password,
//     //   });
//     //   setMessage("Login successfully");
//     //   console.log(res.data);
//     // } catch (err) {
//     //   console.error("Error submitting data", err);
//     //   setMessage("Failed to create account. Please try again.");
//     // } finally {
//     //   setRegister(false);
//     // }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">LOGIN</h2>
//         <p className="text-sm text-gray-500 mb-8 text-center">
//           WELCOME BACK! PLEASE LOGIN TO YOUR ACCOUNT
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="email" className="block mb-1 font-medium text-gray-600">
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               placeholder="Your email"
//               className={inputStyle}
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block mb-1 font-medium text-gray-600">
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               placeholder="Your password"
//               className={inputStyle}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={register}
//             className={`w-full border py-2 mt-2 text-white duration-300 border-transparent ${
//               register
//                 ? "bg-gray-500 cursor-not-allowed"
//                 : "bg-black hover:border-black hover:bg-gray-100 hover:text-black"
//             }`}
//           >
//             {register ? "Processing..." : "Login"}
//           </button>

//           <button
//             type="button"
//             className="w-full border border-gray-300 py-2 flex items-center justify-center gap-2 hover:bg-black hover:text-white hover:border-transparent duration-300"
//             onClick={() => ("Google login not implemented yet")}
//           >
//             <img
//               src="https://www.svgrepo.com/show/355037/google.svg"
//               alt="Google"
//               className="w-5 h-5"
//             />
//             Login with Google
//           </button>

//           {message && (
//             <p className="mt-4 text-center font-semibold text-sm text-green-600">
//               {message.toUpperCase()}
//             </p>
//           )}

//           <p className="text-sm text-center text-gray-600 mt-6">
//             Don&apos;t have an account?
//             <Link
//               href="/Auth/register"
//               className="text-blue-500 font-semibold hover:underline"
//             >
//               Sign up here
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
