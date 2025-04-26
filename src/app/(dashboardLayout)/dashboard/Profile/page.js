"use client";
import { useState } from "react";
import Image from "next/image";

const ProfilePage = () => {
  const [userData] = useState({
    name: "Moshiur",
    email: "masiurislam28@gmail.com",
    location: "patuakhali, barisal bangladesh",
    role: "admin",
    profileImage:
      "https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/482029397_666064502483185_5276856443150858496_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGv-X9dZXuRBiZMNTuVkdCBXqFtI40eDh1eoW0jjR4OHdV4wvyCVPo4A7T40BRiu2U51q8ezMyDJeqSLQ7MW09O&_nc_ohc=CTyDShnkCzAQ7kNvwHdOatQ&_nc_oc=AdnaBZxu6cB84xbO4emxrr7sa4bmbh4Goo-xpG_zwd76ZdIdjxcdR957xeak_CsvuIc&_nc_zt=23&_nc_ht=scontent.fdac31-1.fna&_nc_gid=sCaDaeRX7k6_F4g59RtiDA&oh=00_AfGwJfBqdBlFs-AVNmL3fFv35OLLcrowHz-A3Zni8IHKgQ&oe=68127F25",
  });

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
        <button className="absolute top-4 right-4 bg-white/80 dark:bg-gray-800/70 text-sm px-4 py-2 backdrop-blur-md hover:bg-white hover:scale-105 dark:hover:bg-gray-700 transition-all">
          Edit Cover
        </button>
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
              src={userData.profileImage}
              alt="Profile"
              width={120}
              height={120}
              className="border-4 border-white dark:border-gray-800 object-cover shadow-lg group-hover:scale-105 transition-transform"
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
                  {userData.name}
                </span>
                {userData.name}
              </span>
            </h2>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mt-1 text-[17px]">
            {userData.role === "admin" && "Administrator"}
            {userData.role === "seller" && "Real Estate Seller"}
          </p>
        </>

        {/* Email and Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-100 dark:bg-gray-700 p-4">
            <label className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Email Address
            </label>
            <p className="text-gray-700 dark:text-gray-200 mt-1 break-words">
              {userData.email}
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-700 p-4">
            <label className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Location
            </label>
            <p className="text-gray-700 dark:text-gray-200 mt-1">
              {userData.location}
            </p>
          </div>
        </div>

        {/* Admin or Seller Extra Info */}
        <div className="bg-gray-100 dark:bg-gray-700 p-4 mt-6">
          {userData.role === "admin" && (
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              🛡️ As an admin, you have full control over users and listings.
            </p>
          )}
          {userData.role === "seller" && (
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              🏠 As a seller, you can manage your property listings.
            </p>
          )}
          {userData.role === "buyer" && (
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              🛒 As a buyer, you can browse and save your favorite properties.
            </p>
          )}
        </div>
      </div>

      <div className="bg-white dark:h-0 h-10"></div>

      {/* Update Section */}
      <section className="border-t dark:border-gray-700 bg-slate-50 dark:bg-gray-900/80 mt-12">
        <div className="px-4 py-10 lg:px-32">

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
              className="w-full px-4 py-3 border dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-0 focus:ring-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-0 focus:ring-none"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full px-4 py-3 border dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-0 focus:ring-none"
            />
            <input
              type="text"
              placeholder="Professional Title"
              className="w-full px-4 py-3 border dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-0 focus:ring-none"
            />
          </div>
          <button className="mt-6 bg-[#FF8904] text-white px-6 py-3 transition-all shadow-lg hover:shadow-[#d4a973] dark:hover:shadow-[#e3af7397]">
            Save Changes
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
