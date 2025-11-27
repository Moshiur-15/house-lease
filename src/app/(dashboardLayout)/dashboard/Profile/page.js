"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import axios from "axios";
import { toast } from "sonner";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const { data: session } = useSession();
  const email = session?.user.email;
  const [userData, setUserData] = useState(session?.user);

  useEffect(() => {
    if (session?.user) {
      setUserData(session.user);
    }
  }, [session]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const location = form.location.value;
    const professionalTitle = form.title.value;
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/UserDetailsUpdate`,
        { name, email, location, professionalTitle }
      );
      setUserData(res?.data?.updatedUser);
      toast("Profile updated successfully!");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(userData);

  return (
    <div className="dark:bg-[#0C0A09] bg-gray-100 min-h-screen">
      {/* Cover Section */}
      <div className="relative w-full h-48 md:h-60 lg:h-72">
        <Image
          src="https://media.istockphoto.com/id/136881877/photo/mountain-lake-with-dock-and-stars.jpg?s=612x612&w=0&k=20&c=hwMVAc4R5UGAOrQoZiXV4MYjuXodHWElPJp_ogCZySw="
          alt="Cover"
          fill
          className="object-cover"
        />
      </div>

      {/* Profile Info Section */}
      <div
        className="relative bg-white dark:bg-gray-800 -mt-14 p-6 pt-20 rounded-t-2xl"
        style={{
          boxShadow: "0 -8px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="absolute top-0 left-6 transform -translate-y-1/2">
          <div className="relative group">
            <Image
              src={
                session?.user.image ||
                "https://i.ibb.co.com/Q7zQC7sY/1000000889.jpg"
              }
              alt="Profile"
              width={120}
              height={120}
              className="border-4 h-[140px] w-36 border-white dark:border-gray-800 object-cover shadow-lg group-hover:scale-105 transition-transform"
              style={{ borderRadius: "50%" }}
            />
            <div
              className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
        <>
          <div className="relative group overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-bold dark:text-white">
              <span
                className="relative dark:text-white text-xl sm:text-3xl uppercase tracking-widest text-transparent [text-stroke:1px rgba(0,0,0,0.5)]"
                style={{ WebkitTextStroke: "1px rgba(0,0,0,0.5)" }}
              >
                <span
                  className="absolute top-0.5 lg:top-[3px] xl:top-[2px] left-0 w-0 h-full overflow-hidden whitespace-nowrap transition-all duration-1000 ease-in-out group-hover:w-full border-r-4"
                  style={{
                    color: "#ffb17d",
                    WebkitTextStroke: "1px #ffb17d",
                    borderColor: "#ffb17d",
                  }}
                >
                  {userData?.name}
                </span>
                {userData?.name}
              </span>
            </h2>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mt-1 text-[17px]">
            {userData?.role === "admin" && "Administrator"}
            {userData?.role === "seller" && "Real Estate Seller"}
            {userData?.role === "buyer" && "Real Estate Buyer"}
          </p>
        </>

        {/* Email and Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-100 dark:bg-gray-700 p-4">
            <label className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Email Address
            </label>
            <p className="text-gray-700 dark:text-gray-200 mt-1 break-words">
              {userData?.email ? userData.email : 'N/A '}
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-700 p-4">
            <label className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Location
            </label>
            <p className="text-gray-700 dark:text-gray-200 mt-1">
              {userData?.location ? userData.location : 'N/A '}
            </p>
          </div>
        </div>

        {/* Admin or Seller Extra Info */}
        <div className="bg-gray-100 dark:bg-gray-700 p-4 mt-6">
          {userData?.role === "admin" && (
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              🛡️ As an admin, you have full control over users and listings.
            </p>
          )}
          {userData?.role === "seller" && (
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              🏠 As a seller, you can manage your property listings.
            </p>
          )}
          {userData?.role === "buyer" && (
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              🛒 As a buyer, you can browse and save your favorite properties.
            </p>
          )}
        </div>
      </div>

      <div className="bg-white dark:h-0 h-10"></div>

      {/* Update Section */}
      <section className="border-t dark:border-gray-700 bg-slate-50 dark:bg-gray-900/80 mt-12">
        <form onSubmit={handleSubmit} className="px-4 py-10 lg:px-32">
          <div className="relative group overflow-hidden mb-8">
            <h2 className="text-2xl md:text-3xl font-bold dark:text-white">
              <span
                className="relative dark:text-white text-xl sm:text-3xl tracking-widest text-transparent dark:[text-stroke:1px #ffff]"
                style={{
                  WebkitTextStroke: "1px rgba(0, 0, 0, 0.5)",
                }}
              >
                <span
                  className="absolute top-0.5 lg:top-[3px] xl:top-[2px] left-0 w-0 h-full overflow-hidden whitespace-nowrap transition-all duration-1000 ease-in-out group-hover:w-full border-r-4"
                  style={{
                    color: "#ffb17d",
                    WebkitTextStroke: "1px #ffb17d",
                    borderColor: "#ffb17d",
                  }}
                >
                  Update Profile
                </span>
                Update Profile
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              required
              defaultValue={userData?.name}
              className="w-full px-4 py-3 border dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-0 focus:ring-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
              defaultValue={userData?.email}
              readOnly
              className="w-full px-4 py-3 border dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-0 focus:ring-none"
            />
            <input
              type="text"
              placeholder="Location"
              name="location"
              required
              defaultValue={userData?.location}
              className="w-full px-4 py-3 border dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-0 focus:ring-none"
            />
            <input
              type="text"
              placeholder="Professional Title"
              name="title"
              required
              defaultValue={userData?.professionalTitle}
              className="w-full px-4 py-3 border dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-0 focus:ring-none"
            />
          </div>
          <button className="mt-6 bg-[#FF8904] text-white px-6 py-3 transition-all shadow-lg hover:shadow-[#d4a973] dark:hover:shadow-[#e3af7397]">
            Save Changes
          </button>
        </form>
      </section>
    </div>
  );
};

export default ProfilePage;
