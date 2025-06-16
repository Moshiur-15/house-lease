"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

const BlogCommentsWrapper = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchComments = async () => {
    if (!blogId) return;
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/blogs/comment?blogId=${blogId}`
      );
      if (res.data.success) {
        setComments(res.data.data);
      } else {
        alert("Failed to load comments");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [blogId]);

  return (
    <div>
      <ShowBlogComment comments={comments} loading={loading} />
      <BlogComment blogId={blogId} fetchComments={fetchComments} />
    </div>
  );
};

export default BlogCommentsWrapper;

const ShowBlogComment = ({ comments, loading }) => {
  const [expandedComments, setExpandedComments] = React.useState({});

  const toggleComment = (id) => {
    setExpandedComments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (loading) return <p>Loading comments...</p>;
  if (!comments.length) return <p>No comments found.</p>;

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6 uppercase">
        {comments.length} Comment{comments.length > 1 ? "s" : ""}
      </h2>
      {comments
        .slice()
        .reverse()
        .slice(0, 4)
        .map((item) => (
          <div key={item._id} className="flex gap-4 mb-8">
            {/* Avatar */}
            {item.avatar ? (
              <img
                src={item.avatar}
                alt={item.email}
                className="w-14 h-14 rounded-full object-cover"
              />
            ) : (
              <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-white text-xl font-bold">
                {item.name[0].toUpperCase()}
              </div>
            )}

            {/* Comment Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-bold uppercase">{item.name}</h3>
                <span className="text-sm text-gray-500">
                  {new Date(item.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-700 my-2 text-justify border-b border-gray-300 leading-7 pb-4">
                {expandedComments[item._id]
                  ? item.comment
                  : `${item.comment.slice(0, 150)}...`}
                {item.comment.length > 150 && (
                  <span
                    onClick={() => toggleComment(item._id)}
                    className="text-blue-500 cursor-pointer ml-1 hover:underline"
                  >
                    {expandedComments[item._id] ? " Show Less" : " Read More"}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

const BlogComment = ({ blogId, fetchComments }) => {
  const [loading, setLoading] = useState(false);
  const { data: section } = useSession();

  const handleComment = async (e) => {
    e.preventDefault();
    if (!section?.user?.email) return alert("Please Login...");
    const comment = e.target.comment.value;

    try {
      setLoading(true);
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/blogs/comment`, {
        email: section.user.email,
        name: section.user.name,
        comment,
        blogId,
      });
      alert("Comment submitted!");
      e.target.reset();
      await fetchComments(); // নতুন কমেন্ট লোড করার জন্য কল
    } catch (err) {
      console.error(err);
      alert("Failed to submit comment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-6 px-6 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Leave a Reply</h2>
      <p className="text-gray-700 mb-4">Your email address will not be published.</p>
      <form onSubmit={handleComment}>
        <textarea
          name="comment"
          placeholder="Your Message"
          className="p-3 resize-none border w-full mt-4 h-32 focus:outline-none"
          required
        ></textarea>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <input
            type="text"
            className="p-3 border w-full"
            defaultValue={section?.user?.name}
            readOnly
          />
          <input
            type="email"
            className="p-3 border w-full"
            defaultValue={section?.user?.email}
            readOnly
          />
        </div>
        <button className="group relative px-8 border border-black overflow-hidden py-2.5 mt-4 transition-all duration-500 hover:border-transparent bg-black">
          <div className="absolute inset-0 w-0 bg-white transition-[width] duration-500 ease-in-out group-hover:w-full"></div>
          <span className="relative z-10 flex items-center justify-center gap-2 text-white group-hover:text-black">
            {loading ? "Submitting Comment..." : "Submit Comment"}
          </span>
        </button>
      </form>
    </section>
  );
};
