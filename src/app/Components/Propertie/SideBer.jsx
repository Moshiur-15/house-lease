const SideBer = ({ recentPosts }) => {

  return (
    <aside className="py-8 space-y-10">
      {/* seller info */}
      <div className="p-6 bg-gray-100">
        <div className="flex items-center space-x-4">
          <img
            src="https://i.ibb.co.com/wNPyX4j/me.jpg"
            alt="Agent"
            className="w-12 h-12 rounded-full object-cover"
          />
          {/* posted user img */}
          <div>
            <h2 className="text-lg font-semibold">Moshiur</h2>{" "}
            {/* posted user name */}
            <p className="text-sm text-gray-500">10-10-2020</p>{" "}
            {/* posted date */}
          </div>
        </div>

        {/* Form Fields */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-3 py-2 text-sm mb-2 focus:outline-none focus:ring-0"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border px-3 py-2 text-sm mb-2 focus:outline-none focus:ring-0"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="w-full border px-3 py-2 text-sm mb-2 focus:outline-none focus:ring-0"
          />
          <textarea
            placeholder="I'm interested in [ Townhouse For Sale ]"
            className="w-full border px-3 py-2 text-sm mb-2 focus:outline-none focus:ring-0"
          ></textarea>
        </div>

        {/* Buttons */}
        <button className="w-full border bg-black py-2 mt-2 hover:border-black hover:bg-gray-100 text-white duration-500  hover:text-black border-transparent">
          📧 Send Email
        </button>

        <button className="group relative w-full border border-black overflow-hidden py-2 mt-2 transition-all duration-500 hover:border-transparent">
          <div className="absolute inset-0 w-0 bg-black transition-[width] duration-500 ease-in-out group-hover:w-full"></div>
          <span className="relative z-10 flex items-center justify-center gap-2 text-black group-hover:text-white">
            👥 WhatsApp
          </span>
        </button>
      </div>

      {/* Recent Posts */}
      <div className="p-4 bg-gray-100">
        <h2 className="font-semibold text-lg mb-4">Recent Properties</h2>
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
                  <p className="text-xs text-gray-600">
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <p className="text-sm font-medium">{post.title}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};
export default SideBer;
