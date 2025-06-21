import Link from "next/link";
import React from "react";

const areas = [
  {
    name: "Barishal",
    image:
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    name: "Patuakhali",
    image:
      "https://portland-residence.b-cdn.net/wp-content/uploads/2014/05/2.6-6-1.webp",
  },
  {
    name: "Barguna",
    image:
      "https://portland-residence.b-cdn.net/wp-content/uploads/2014/05/10-4-1-1.webp",
  },
];

const PopularAreas = () => {
  return (
    <section className="bg-black text-white py-10 lg:py-32 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        <div className="w-full lg:w-1/2 text-center md:text-left space-y-4">
          <p className="text-orange-400 text-sm uppercase tracking-wider">
            Exclusive
          </p>
          <h2 className="text-2xl md:text-4xl font-semibold">Popular Areas</h2>
          <p className="text-gray-400 max-w-lg mx-auto md:mx-0">
            Dynamic approach, and tireless commitment to facilitating
            transactions for buyers and sellers.
          </p>
          <p className="text-gray-400 max-w-lg mx-auto md:mx-0">
            In the vibrant neighborhood of Portland, Maryland, Sam is renowned
            among residents, property developers, local businesses, and
            professionals.
          </p>
          <Link href="/contact" className="text-orange-400 font-semibold">
            Contact Me
          </Link>
        </div>
        <div className="mt-8 w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
            {areas.map((area, index) => (
              <div
                key={index}
                className="relative rounded-bl-[45px] rounded-tr-[45px] overflow-hidden w-full h-64 md:h-80 lg:h-64 xl:h-80 flex flex-col items-center"
              >
                <img
                  src={area.image}
                  alt={area.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 text-center w-full text-white text-lg font-semibold">
                  {area.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularAreas;
