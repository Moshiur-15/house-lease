"use client";
import FilterBar from "@/app/Components/Home/FilterBar";
import ExclusiveCard from "../../Components/Home/ExclusiveCard";
import { useState } from "react";

const Properties = () => {
  const [view, setView] = useState("grid");
  console.log(view);
  const properties = [
    {
      id: 1,
      title: "Luxury Villa in Beverly Hills",
      location: "Beverly Hills, CA",
      beds: 5,
      baths: 3,
      sqft: 250,
      price: 5500000,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      description:
        "Experience world-class luxury in this grand villa featuring a sprawling garden, pool, and stunning architecture.",
    },
    {
      id: 2,
      title: "Modern Townhouse in NYC",
      location: "New York, NY",
      beds: 4,
      baths: 2,
      sqft: 180,
      price: 3200000,
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      description:
        "Sleek and stylish townhouse located in the heart of Manhattan, close to top restaurants and attractions.",
    },
    {
      id: 3,
      title: "Beachside Bungalow in Malibu",
      location: "Malibu, CA",
      beds: 3,
      baths: 2,
      sqft: 140,
      price: 2950000,
      image: "https://images.unsplash.com/photo-1572120360610-d971b9b78827",
      description:
        "Wake up to ocean views in this cozy bungalow, just steps away from Malibu’s pristine beaches.",
    },
    {
      id: 4,
      title: "Cozy Cottage in Vermont",
      location: "Stowe, VT",
      beds: 2,
      baths: 1,
      sqft: 110,
      price: 850000,
      image: "https://images.unsplash.com/photo-1599427303058-f04cbcf4756e",
      description:
        "A charming and quiet retreat tucked into Vermont’s scenic countryside, perfect for peaceful getaways.",
    },
    {
      id: 5,
      title: "Penthouse in Downtown Chicago",
      location: "Chicago, IL",
      beds: 4,
      baths: 3,
      sqft: 200,
      price: 4100000,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      description:
        "Live above the skyline in this luxury penthouse with floor-to-ceiling windows and modern amenities.",
    },
    {
      id: 6,
      title: "Family Home in Suburbia",
      location: "Naperville, IL",
      beds: 3,
      baths: 2,
      sqft: 160,
      price: 650000,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      description:
        "Spacious and comfortable home perfect for families, located in a quiet and friendly suburban neighborhood.",
    },
    {
      id: 7,
      title: "Sustainable Smart House",
      location: "Austin, TX",
      beds: 4,
      baths: 2,
      sqft: 190,
      price: 1250000,
      image: "https://images.unsplash.com/photo-1613977257363-bb5bca58f2a0",
      description:
        "Eco-friendly smart home with solar panels, modern design, and integrated tech systems for green living.",
    },
  ];
  

  return (
    <div className="">
      {/* banner */}
      <div
        className="relative h-96 sm:h-[410px] xl:h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://portland-residence.b-cdn.net/wp-content/uploads/2014/05/2.6-6-1.webp)",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-white text-center p-5">
          <h1 className="text-4xl lg:text-5xl font-semibold mb-4">
            Top Real Estate <br /> Listings in Portland
          </h1>
        </div>
      </div>

      <section className="container mx-auto px-6 mb-20">
        {/* search */}
        <>
          <FilterBar view={view} setView={setView} />
        </>
        {/* card */}
        <div
          className={`grid gap-6 mt-8 ${
            view === "list"
              ? "grid-cols-1"
              : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
          }`}
        >
          {properties?.slice(0, 6).map((property) => (
            <ExclusiveCard view={view} property={property} key={property?.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Properties;
