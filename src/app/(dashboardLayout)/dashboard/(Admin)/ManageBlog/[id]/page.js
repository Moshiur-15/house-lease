// app/seller/[id]/page.jsx
import BlogUpdate from "@/app/Components/Admin/BlogUpdate";
import GetSingleBlog from "@/app/Components/Admin/GetSingleBlog";
import React from "react";

const Page = async ({ params }) => {
  const { id } = await params;
  const SingleData = await GetSingleBlog(id);

    if (!SingleData) {
      return <div className="text-center text-red-500 p-10">Data not found</div>;
    }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen p-6">
      {/* <ManageBlogModal key={SingleData._id} property={SingleData} /> */}
      <BlogUpdate id={SingleData} />
    </div>
  );
};

export default Page;
