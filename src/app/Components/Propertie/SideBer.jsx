"use client";
import { useSession } from "next-auth/react";

const SideBer = ({ recentPosts }) => {
  const { data: session } = useSession();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    console.log("Form submitted", { name, email, message });
  };

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
            <p className="text-sm text-gray-500 dark:text-gray-400">10-10-2020</p>
          </div>
        </div>

        {/* Form Fields */}
        <form
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
        </form>

        {/* Buttons */}
        <button
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
        </button>
      </div>

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
