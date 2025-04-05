import FilterBar from "@/app/Components/Home/FilterBar";
import ExclusiveCard from "../../Components/Home/ExclusiveCard";

const properties = () => {
  const properties = [
    {
      id: 1,
      title: "Villa With Panoramic View",
      beds: 5,
      baths: 3,
      sqft: 250,
      price: "$5,500,000",
    },
    {
      id: 2,
      title: "Villa With Panoramic View",
      beds: 5,
      baths: 3,
      sqft: 250,
      price: "$5,500,000",
    },
    {
      id: 3,
      title: "Villa With Panoramic View",
      beds: 5,
      baths: 3,
      sqft: 250,
      price: "$5,500,000",
    },
    {
      id: 4,
      title: "Villa With Panoramic View",
      beds: 5,
      baths: 3,
      sqft: 250,
      price: "$5,500,000",
    },
    {
      id: 5,
      title: "Villa With Panoramic View",
      beds: 5,
      baths: 3,
      sqft: 250,
      price: "$5,500,000",
    },
    {
      id: 6,
      title: "Villa With Panoramic View",
      beds: 5,
      baths: 3,
      sqft: 250,
      price: "$5,500,000",
    },
    {
      id: 7,
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
          <h1 className="text-4xl lg:text-5xl font-semibold mb-4">
            Top Real Estate <br/> Listings in Portland
          </h1>
        </div>
      </div>

      <section className="container mx-auto px-6 mb-20">

        {/* search */}
        <>
        <FilterBar/>
        </>
        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
          {properties?.slice(0, 6).map((property) => (
            <ExclusiveCard property={property} key={property?.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default properties;
