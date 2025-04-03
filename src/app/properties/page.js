import ExclusiveCard from "../Components/Home/ExclusiveCard";

const properties = () => {
  const properties = [
    {
      title: "Villa With Panoramic View",
      beds: 5,
      baths: 3,
      sqft: 250,
      price: "$5,500,000",
    },
    {
      title: "Villa With Panoramic View",
      beds: 5,
      baths: 3,
      sqft: 250,
      price: "$5,500,000",
    },
    {
      title: "Villa With Panoramic View",
      beds: 5,
      baths: 3,
      sqft: 250,
      price: "$5,500,000",
    },
    {
      title: "Villa With Panoramic View",
      beds: 5,
      baths: 3,
      sqft: 250,
      price: "$5,500,000",
    },
    {
      title: "Villa With Panoramic View",
      beds: 5,
      baths: 3,
      sqft: 250,
      price: "$5,500,000",
    },
    {
      title: "Villa With Panoramic View",
      beds: 5,
      baths: 3,
      sqft: 250,
      price: "$5,500,000",
    },
    {
      title: "Villa With Panoramic View",
      beds: 5,
      baths: 3,
      sqft: 250,
      price: "$5,500,000",
    },
  ];

  return (
    <div className="">
      {/* banner */}
      <div
        className="relative h-96 sm:h-[410px] xl:h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-white text-center p-5">
          <h1 className="sm:text-4xl lg:text-5xl font-semibold mb-4">
            Top Real Estate <br/> Listings in Portland
          </h1>
        </div>
      </div>

      <section className="container mx-auto">
        {/* title */}
        <div className="flex flex-col space-y-1 text-center pt-10">
          <span className="text-xs font-semibold tracking-widest flex justify-center items-center gap-1 text-orange-500 uppercase">
            <div className="h-2.5 w-2.5 rounded-full bg-[#EA703B]"></div>
            Exclusive
          </span>
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Properties
          </h2>
        </div>

        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
          {properties?.slice(0, 6).map((property) => (
            <ExclusiveCard property={property} key={property?.title} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default properties;
