// "use client";

// import { useState } from "react";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";

// export default function LoginPage() {
//   const [role, setRole] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleRoleClick = (selectedRole) => {
//     setRole(selectedRole);
//     if (selectedRole === "admin") {
//       setEmail("admin@gmail.com");
//       setPassword("admin123");
//     } else if (selectedRole === "seller") {
//       setEmail("seller@gmail.com");
//       setPassword("seller123");
//     } else if (selectedRole === "buyer") {
//       setEmail("buyer@gmail.com");
//       setPassword("buyer123");
//     }
//   };

//   const handleLogin = async () => {
//     const res = await signIn("credentials", {
//       redirect: false,
//       email,
//       password,
//       role,
//     });

//     if (res.ok) {
//       if (role === "admin") {
//         router.push("/dashboard/AllUsers");
//       } else if (role === "seller") {
//         router.push("/dashboard/seller");
//       } else if (role === "buyer") {
//         router.push("/dashboard/analytics");
//       } else {
//         router.push("/dashboard");
//       }
//     } else {
//       toast("Invalid credentials");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen px-4">
//       <h1 className="text-3xl font-bold mb-6">🔐 LOGIN / REGISTER</h1>

//       {/* Role Buttons */}
//       <div className="flex gap-3 mb-6">
//         <button
//           className={`px-4 py-2 rounded font-semibold transition ${
//             role === "admin" ? "bg-blue-600 text-white" : "bg-gray-200"
//           }`}
//           onClick={() => handleRoleClick("admin")}
//         >
//           Admin
//         </button>
//         <button
//           className={`px-4 py-2 rounded font-semibold transition ${
//             role === "seller" ? "bg-green-600 text-white" : "bg-gray-200"
//           }`}
//           onClick={() => handleRoleClick("seller")}
//         >
//           Seller
//         </button>
//         <button
//           className={`px-4 py-2 rounded font-semibold transition ${
//             role === "buyer" ? "bg-purple-600 text-white" : "bg-gray-200"
//           }`}
//           onClick={() => handleRoleClick("buyer")}
//         >
//           Buyer
//         </button>
//       </div>

//       {/* Input Fields */}
//       <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md space-y-4">
//         <div>
//           <label className="block text-sm font-medium mb-1">Email</label>
//           <input
//             type="email"
//             placeholder="example@gmail.com"
//             className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Password</label>
//           <input
//             type="password"
//             placeholder="********"
//             className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <button
//           onClick={handleLogin}
//           className="w-full bg-black text-white py-2 rounded font-semibold hover:bg-gray-900 transition"
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }

import LoginForm from "@/app/Components/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
