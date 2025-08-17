"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { toast } from "sonner";

const LoginFormContent = () => {
  const inputStyle =
    "w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-0 bg-white text-black";

  const [register, setRegister] = useState(false);
  const [message, setMessage] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [userPass, setUserPass] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setRegister(true);

    try {
      const email = e.target.email.value;
      const password = e.target.password.value;
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl,
      });
      if (res.ok) {
        router.push(res.url);
        toast("Login Successfully!");
      } else {
        toast("Failed to login account. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting data", err);
      setMessage("Failed to create account. Please try again.");
    } finally {
      setRegister(false);
    }
  };
  const img = {
    backgroundImage:
      "url('https://i.ibb.co/YM3BvTq/photo-1568605114967-8130f3a36994.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh",
  };

  return (
    <section style={img}>
      <div
        className="min-h-screen flex items-center justify-center"
      >
        <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            LOGIN
          </h2>
          <p className="text-sm text-gray-500 mb-8 text-center">
            WELCOME BACK! PLEASE LOGIN TO YOUR ACCOUNT
          </p>

          <section className="flex items-center justify-center gap-3 mb-4">
            <button
              type="button"
              onClick={() => {
                setUserInfo("admin@gmail.com");
                setUserPass("1234");
              }}
              className="px-3 py-1 border rounded cursor-pointer"
            >
              Admin
            </button>
            <button
              type="button"
              onClick={() => {
                setUserInfo("seller@gmail.com");
                setUserPass("1234");
              }}
              className="px-3 py-1 border rounded cursor-pointer"
            >
              Seller
            </button>
            <button
              type="button"
              onClick={() => {
                setUserInfo("buyer@gmail.com");
                setUserPass("1234");
              }}
              className="px-3 py-1 border rounded cursor-pointer"
            >
              Buyer
            </button>
          </section>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-1 font-medium text-gray-600"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                className={inputStyle}
                required
                defaultValue={userInfo}
                onChange={(e) => setUserInfo(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-1 font-medium text-gray-600"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter Your Password"
                className={inputStyle}
                required
                defaultValue={userPass}
                onChange={(e) => setUserInfo(e.target.value)}
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
              onClick={() => toast("Google login not implemented yet")}
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
    </section>
  );
};

const LoginForm = () => {
  return (
    <Suspense fallback={<div>Loading Now...</div>}>
      <LoginFormContent />
    </Suspense>
  );
};

export default LoginForm;
