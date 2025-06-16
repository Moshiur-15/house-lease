"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

const ShowBlogComment = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedComments, setExpandedComments] = useState({});

  useEffect(() => {
    if (!blogId) return;

    const fetchComments = async () => {
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

    fetchComments();
  }, [blogId]);

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
      {comments.slice().reverse().slice(0, 4).map((item) => (
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

export default ShowBlogComment;
