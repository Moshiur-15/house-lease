import ManagePropertieTable from "@/app/Components/seller/ManagePropertieTable";
import React from "react";

const ManagePropertie = () => {
  const properties = [
    {
      id: 1,
      title: "Luxury Villa in Beverly Hills",
      location: "Beverly Hills, CA",
      beds: 5,
      baths: 3,
      sqft: 250,
      price: 5000,
      status: "sold",
      category: "villa",
      cardImage: "url_to_card_image.jpg",
      description:
        "Luxury Villa in Beverly Hills. Spacious, modern design with stunning views.",
    },
    {
      id: 2,
      title: "Modern Apartment in NYC",
      location: "New York, NY",
      beds: 3,
      baths: 2,
      sqft: 180,
      price: 4000,
      status: "for sale",
      category: "apartment",
      cardImage: "url_to_card_image.jpg",
      description:
        "Beautiful apartment in NYC. Perfect for city living and close to everything.",
    },
    {
      id: 3,
      title: "Beach House in Miami",
      location: "Miami, FL",
      beds: 4,
      baths: 3,
      sqft: 220,
      price: 4200,
      status: "for sale",
      category: "house",
      cardImage: "url_to_card_image.jpg",
      description: "Enjoy beach life in this beautiful Miami beach house.",
    },
    {
      id: 4,
      title: "Countryside Cottage",
      location: "Nashville, TN",
      beds: 2,
      baths: 1,
      sqft: 160,
      price: 2300,
      status: "sold",
      category: "cottage",
      cardImage: "url_to_card_image.jpg",
      description: "Cozy and charming countryside cottage.",
    },
    {
      id: 5,
      title: "Countryside Cottage",
      location: "Nashville, TN",
      beds: 2,
      baths: 1,
      sqft: 160,
      price: 2300,
      status: "sold",
      category: "cottage",
      cardImage: "url_to_card_image.jpg",
      description: "Cozy and charming countryside cottage.",
    },
    {
      id: 7,
      title: "Countryside Cottage",
      location: "Nashville, TN",
      beds: 2,
      baths: 1,
      sqft: 160,
      price: 2300,
      status: "sold",
      category: "cottage",
      cardImage: "url_to_card_image.jpg",
      description: "Cozy and charming countryside cottage.",
    },
    {
      id: 8,
      title: "Countryside Cottage",
      location: "Nashville, TN",
      beds: 2,
      baths: 1,
      sqft: 160,
      price: 2300,
      status: "sold",
      category: "cottage",
      cardImage: "url_to_card_image.jpg",
      description: "Cozy and charming countryside cottage.",
    },
    {
      id: 9,
      title: "Countryside Cottage",
      location: "Nashville, TN",
      beds: 2,
      baths: 1,
      sqft: 160,
      price: 2300,
      status: "sold",
      category: "cottage",
      cardImage: "url_to_card_image.jpg",
      description: "Cozy and charming countryside cottage.",
    },
    {
      id: 10,
      title: "Countryside Cottage",
      location: "Nashville, TN",
      beds: 2,
      baths: 1,
      sqft: 160,
      price: 2300,
      status: "sold",
      category: "cottage",
      cardImage: "url_to_card_image.jpg",
      description: "Cozy and charming countryside cottage.",
    },
    {
      id: 11,
      title: "Countryside Cottage",
      location: "Nashville, TN",
      beds: 2,
      baths: 1,
      sqft: 160,
      price: 2300,
      status: "sold",
      category: "cottage",
      cardImage: "url_to_card_image.jpg",
      description: "Cozy and charming countryside cottage.",
    },
  ];
  return (
    <section className="my-5 lg:my-10">
      <div className="flex justify-between mb-4 items-center px-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          MANAGE YOU PROPERTIES
        </h2>
        <input
          type="text"
          placeholder="Search Properties..."
          className="border border-gray-300 dark:border-gray-600 w-full max-w-[16rem] py-2 px-3"
        />
      </div>
      <ManagePropertieTable properties={properties} />
    </section>
  );
};

export default ManagePropertie;
