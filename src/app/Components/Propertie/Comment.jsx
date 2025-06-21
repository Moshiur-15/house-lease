"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

//main Page
const PropertyComments = ({ propertyId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchComments = async () => {
    if (!propertyId) return;
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/seller/property/comment?propertyId=${propertyId}`
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
  }, [propertyId]);

  return (
    <div className="max-w-3xl mx-auto">
      <ShowComment comments={comments} loading={loading} />
      <CommentForm propertyId={propertyId} fetchComments={fetchComments} />
    </div>
  );
};

export default PropertyComments;

// Show Comment 
const ShowComment = ({ comments, loading }) => {
  const [expandedComments, setExpandedComments] = useState({});

  const toggleComment = (id) => {
    setExpandedComments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (loading) return <p className="text-gray-800 dark:text-gray-200">Loading comments...</p>;
  if (!comments.length) return <p className="text-gray-800 dark:text-gray-200">No comments found.</p>;

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6 uppercase text-gray-900 dark:text-gray-100">
        {comments.length} Comment{comments.length > 1 ? "s" : ""}
      </h2>
      {comments.slice(0, 4).map((item) => (
        <div key={item._id} className="flex gap-4 mb-8">
          {item.avatar && (
            <img
              src={item.avatar}
              alt={item.email}
              className="w-14 h-14 object-cover"
            />
          )}
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

//  Comment Form
const CommentForm = ({ propertyId, fetchComments }) => {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  const handleComment = async (e) => {
    e.preventDefault();
    if (!session?.user?.email) return toast("Please Login...");
    const comment = e.target.comment.value;
    try {
      setLoading(true);
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/seller/property/comment`,
        {
          email: session.user.email,
          name: session.user.name,
          comment: comment,
          propertyId: propertyId,
        }
      );
      e.target.reset();
      await fetchComments();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-6 px-6 py-12 bg-white dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Leave a Reply</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Your email address will not be published.
      </p>
      <form onSubmit={handleComment}>
        <textarea
          name="comment"
          placeholder="Your Message"
          className="p-3 resize-none border w-full mt-4 h-32 focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
          required
        ></textarea>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <input
            type="text"
            className="p-3 border w-full focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
            defaultValue={session?.user?.name}
            readOnly
          />
          <input
            type="email"
            className="p-3 border w-full focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
            defaultValue={session?.user?.email}
            readOnly
          />
        </div>
        <button className="mt-4 bg-black text-white px-6 py-2 hover:bg-white hover:text-black hover:border hover:border-black transition dark:bg-gray-100 dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white">
          {loading ? "Submitting..." : "Submit Comment"}
        </button>
      </form>
    </section>
  );
};
