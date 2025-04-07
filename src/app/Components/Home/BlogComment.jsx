import React from "react";

const BlogComment = () => {
  return (
    <div className="mt-6px-6 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Leave a Reply</h2>
      <p className="text-gray-700 mb-4">
        {" "}
        Your email address will not be published.
      </p>
      <form>
        <textarea
          placeholder="Your Message"
          className="p-3 border  w-full mt-4 h-32 focus:outline-none focus:ring-0"
        ></textarea>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border  w-full focus:outline-none focus:ring-0"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border  w-full focus:outline-none focus:ring-0"
          />
        </div>
        <button className="group relative px-8 border border-black overflow-hidden py-2.5 mt-4 transition-all duration-500 hover:border-transparent bg-black">
          <div className="absolute inset-0 w-0 bg-white transition-[width] duration-500 ease-in-out group-hover:w-full"></div>
          <span className="relative z-10 flex items-center justify-center gap-2 text-white group-hover:text-black">
            Submit Comment
          </span>
        </button>
      </form>
    </div>
  );
};

export default BlogComment;
