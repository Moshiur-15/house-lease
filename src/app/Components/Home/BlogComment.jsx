"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";

const BlogComment = ({ blogId }) => {
  const [loading, setLoading] = useState(false);
  const { data: section } = useSession();
  const handleComment = async (e) => {
    e.preventDefault();
    if (!section.user.email) return alert("Please Login...");
    const comment = e.target.comment.value;
    try {
      setLoading(true);
       const req = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/blogs/comment`,
        {
          email: section?.user?.email,
          name: section?.user?.name,
          comment: comment,
          blogId: blogId,
        }
      );
      alert("Send Comment!");
      e.target.reset();
      console.log(req.data)
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="mt-6px-6 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Leave a Reply</h2>
      <p className="text-gray-700 mb-4">
        {" "}
        Your email address will not be published.
      </p>
      <form onSubmit={handleComment}>
        <textarea
          placeholder="Your Message"
          className="p-3 resize-none border  w-full mt-4 h-32 focus:outline-none focus:ring-0"
          name="comment"
        ></textarea>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border  w-full focus:outline-none focus:ring-0"
            defaultValue={section?.user?.name}
            readOnly
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border  w-full focus:outline-none focus:ring-0"
            defaultValue={section?.user?.email}
            readOnly
          />
        </div>
        <button className="group relative px-8 border border-black overflow-hidden py-2.5 mt-4 transition-all duration-500 hover:border-transparent bg-black">
          <div className="absolute inset-0 w-0 bg-white transition-[width] duration-500 ease-in-out group-hover:w-full"></div>
          <span className="relative z-10 flex items-center justify-center gap-2 text-white group-hover:text-black">
            {loading ? "Submit Comment..." : "Submit Comment"}
          </span>
        </button>
      </form>
    </section>
  );
};

export default BlogComment;
