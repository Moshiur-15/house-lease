import GetBlog from "@/app/Components/Admin/GetBlog";
import BlogCard from "@/app/Components/Home/BlogCard";
const Blogs = async() => {
  const blogs = await GetBlog();
  return (
    <>
      <div
        className="relative h-96 sm:h-[410px] lg:h-[450px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/TMJ2jx2k/download-5.jpg)",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-white text-center p-5">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Real Estate Blog
          </h1>
          <p className="text-lg lg:text-xl mb-6 leading-relaxed">
            Read about the latest industry news
          </p>
        </div>
      </div>
      <section className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold my-8">All Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {blogs?.slice().reverse().map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Blogs;
