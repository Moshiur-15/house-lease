"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

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
        toast("Failed to load comments");
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
    <div className="max-w-3xl mx-auto">
      <ShowBlogComment comments={comments} loading={loading} />
      <BlogComment blogId={blogId} fetchComments={fetchComments} />
    </div>
  );
};

export default BlogCommentsWrapper;

// Show Blog Comment
const ShowBlogComment = ({ comments, loading }) => {
  const [expandedComments, setExpandedComments] = React.useState({});

  const toggleComment = (id) => {
    setExpandedComments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (loading)
    return (
      <p className="text-gray-800 dark:text-gray-200">Loading comments...</p>
    );
  if (!comments.length)
    return (
      <p className="text-gray-800 dark:text-gray-200">No comments found.</p>
    );

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6 uppercase text-gray-900 dark:text-gray-100">
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
                src={item.image}
                alt={item.title}
                className="w-14 h-14 object-cover"
              />
            ) : (
              <div className="w-14 h-14 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">
                  
                </span>
              </div>
            )}

            {/* Comment Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-bold uppercase text-gray-900 dark:text-gray-100">
                  {item.name}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(item.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 my-2 text-justify border-b border-gray-300 dark:border-gray-700 leading-7 pb-4">
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

// Blog Comment Form
const BlogComment = ({ blogId, fetchComments }) => {
  const [loading, setLoading] = useState(false);
  const { data: section } = useSession();

  const handleComment = async (e) => {
    e.preventDefault();
    if (!section?.user?.email) return toast("Please Login...");
    const comment = e.target.comment.value;

    try {
      setLoading(true);
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/blogs/comment`,
        {
          email: section.user.email,
          name: section.user.name,
          image: section.user.image,
          comment,
          blogId,
        }
      );
      toast("Comment submitted!");
      e.target.reset();
      await fetchComments();
    } catch (err) {
      console.error(err);
      toast("Failed to submit comment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-6 px-6 py-12 bg-white dark:bg-gray-900">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Leave a Reply
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Your email address will not be published.
      </p>
      <form onSubmit={handleComment}>
        <textarea
          name="comment"
          placeholder="Your Message"
          className="p-3 resize-none border w-full mt-4 h-32 bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 focus:outline-none focus:border-blue-500"
          required
        ></textarea>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <input
            type="text"
            className="p-3 border w-full bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 focus:outline-none focus:border-blue-500"
            defaultValue={section?.user?.name}
            readOnly
          />
          <input
            type="email"
            className="p-3 border w-full bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 focus:outline-none focus:border-blue-500"
            defaultValue={section?.user?.email}
            readOnly
          />
        </div>
        <button className="group relative px-8 border border-black dark:border-white overflow-hidden py-2.5 mt-4 transition-all duration-500 hover:border-transparent bg-black dark:bg-white">
          <div className="absolute inset-0 w-0 bg-white dark:bg-black transition-[width] duration-500 ease-in-out group-hover:w-full"></div>
          <span className="relative z-10 flex items-center justify-center gap-2 text-white dark:text-black group-hover:text-black dark:group-hover:text-white">
            {loading ? "Submitting Comment..." : "Submit Comment"}
          </span>
        </button>
      </form>
    </section>
  );
};
