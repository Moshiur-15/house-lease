"use client";
import { useSession } from "next-auth/react";

const SideBer = ({ recentPosts, house }) => {
  const { data: session } = useSession();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const name = formData.get("name");
  //   const email = formData.get("email");
  //   const message = formData.get("message");
  //   console.log("Form submitted", { name, email, message });
  // };
  console.log("House data in SideBer:", house);
  
  return (
    <aside className="py-8 space-y-10">
      {/* Seller Info */}
      <div className="p-6 bg-gray-100 dark:bg-gray-800">
        <div className="flex items-center space-x-4">
          <img
            src="https://i.ibb.co.com/wNPyX4j/me.jpg"
            alt="Agent"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Moshiur
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              10-10-2020
            </p>
          </div>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          {session?.user?.name || "Moshiur Rahman"} is a professional real
          estate agent with years of experience in the industry. He is dedicated
          to helping clients find their dream homes and providing exceptional
          service.
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Contact him for personalized assistance and expert advice on buying or
          selling properties.
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <a
            href={`mailto:${session?.user?.email || "moshiur@example.com"}`}
            className="flex items-center gap-2 px-4 py-2 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v4" />
            </svg>
            {house?.sellerEmail || "moshiur@example.com"}
          </a>
          <a
            href="https://wa.me/8801234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 6.01L0 24l6.18-1.62A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.24-1.44l-.37-.22-3.67.96.98-3.58-.24-.37A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01s-.51.07-.78.36c-.27.29-1.03 1.01-1.03 2.46 0 1.45 1.05 2.85 1.2 3.05.15.2 2.07 3.17 5.03 4.31.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.09 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
            </svg>
            +880 1327023639
          </a>
        </div>
      </div>
        {/* <form
          onSubmit={handleSubmit}
          className="w-full mx-auto p-4 bg-gray-50 dark:bg-gray-700"
        >
          <input
            name="name"
            placeholder="Your Name"
            className="w-full border px-3 py-2 text-sm mb-2 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0"
            defaultValue={session?.user?.name || ""}
            required
            readOnly
          />
          <input
            name="email"
            placeholder="Your Email"
            type="email"
            className="w-full border px-3 py-2 text-sm mb-2 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0"
            defaultValue={session?.user?.email || ""}
            required
            readOnly
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows="4"
            className="w-full max-h-36 max-w-full border px-3 py-2 text-sm mb-2 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0"
          ></textarea>
        </form> */}

        {/* Buttons */}
        {/* <button
          type="submit"
          className="w-full border bg-black py-2 mt-2 hover:border-black hover:bg-gray-100 text-white dark:hover:bg-gray-200 dark:hover:text-black duration-500 hover:text-black border-transparent"
        >
          📧 Send Email
        </button>

        <button className="group relative w-full border border-black dark:border-gray-500 overflow-hidden py-2 mt-2 transition-all duration-500 hover:border-transparent">
          <div className="absolute inset-0 w-0 bg-black dark:bg-white transition-[width] duration-500 ease-in-out group-hover:w-full"></div>
          <span className="relative z-10 flex items-center justify-center gap-2 text-black dark:text-white group-hover:text-white dark:group-hover:text-black">
            👥 WhatsApp
          </span>
        </button> */}

      {/* Recent Posts */}
      <div className="p-4 bg-gray-100 dark:bg-gray-800">
        <h2 className="font-semibold text-lg mb-4 text-gray-800 dark:text-white">
          Recent Properties
        </h2>
        <ul className="space-y-4">
          {recentPosts
            ?.slice()
            .reverse()
            .slice(0, 3)
            .map((post, index) => (
              <li key={index} className="flex items-center space-x-3">
                <img
                  src={post.cardImage}
                  alt={post.title}
                  className="w-[100px] h-[90px] lg:w-[75px] lg:h-[75px] object-cover rounded cursor-pointer"
                />
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {post.title}
                  </p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideBer;
