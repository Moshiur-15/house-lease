import React from "react";
// import Title from "../Components/Sherd/Title";

const Blogs = () => {
  const blog = [
    {
      id: 1,
      title: "HOME SEARCH",
      description:
        "Searching for a new home is an exciting journey for buyers and sellers.",
      img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "HOME VALUATION",
      description:
        "Accurate home valuation ensures fair pricing for sellers & appropriate offers for buyers.",
      img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "LET'S CONNECT",
      description:
        "Whether you're looking to buy, sell, or simply have questions about real estate.",
      img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "LET'S CONNECT",
      description:
        "Whether you're looking to buy, sell, or simply have questions about real estate.",
      img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "LET'S CONNECT",
      description:
        "Whether you're looking to buy, sell, or simply have questions about real estate.",
      img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "LET'S CONNECT",
      description:
        "Whether you're looking to buy, sell, or simply have questions about real estate.",
      img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "LET'S CONNECT",
      description:
        "Whether you're looking to buy, sell, or simply have questions about real estate.",
      img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "LET'S CONNECT",
      description:
        "Whether you're looking to buy, sell, or simply have questions about real estate.",
      img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "LET'S CONNECT",
      description:
        "Whether you're looking to buy, sell, or simply have questions about real estate.",
      img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <div className="">
      <div
        className="relative h-96 sm:h-[410px] lg:h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
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
          {blog?.slice(0, 6).map((blog, index) => (
            <div key={index} className="flex flex-col">
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt={blog.title}
                className="w-full h-64 object-cover"
              />

              <div className="px-3 py-6">
                <h2 className="text-lg font-semibold text-gray-800">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm mt-2">{blog.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-orange-400 font-semibold"
                >
                  Continue reading →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
