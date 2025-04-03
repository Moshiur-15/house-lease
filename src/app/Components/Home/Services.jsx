
import React from "react";
import Title from "../Sherd/Title";
import Link from "next/link";

const Services = () => {
  const realEstateData = [
    {
      id: 1,
      title: "HOME SEARCH",
      description:
        "Searching for a new home is an exciting journey for buyers and sellers.",
      img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/properties",
    },
    {
      id: 2,
      title: "HOME VALUATION",
      description:
        "Accurate home valuation ensures fair pricing for sellers & appropriate offers for buyers.",
      img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#",
    },
    {
      id: 3,
      title: "LET'S CONNECT",
      description:
        "Whether you're looking to buy, sell, or simply have questions about real estate.",
      img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/contact",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-24 text-black">
      <div className="text-center mb-8">
        <Title h2="OUR SERVICES" p="Passionate about being different & Loyal" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {realEstateData?.slice(0, 6).map((item) => (
          <div key={item.id} className="">
            <div className="relative h-56 lg:h-80 rounded-bl-[30px] rounded-tr-[30px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1605146769289-440113cc3d00"
                alt="dlsgfd"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="px-3 py-6 flex flex-col grow">
              <h2 className="text-lg sm:text-xl font-semibold uppercase">{item.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
              <div className="mt-auto">
                <Link
                  href={item?.link}
                  className="mt-4 inline-block text-orange-400 font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
