"use client";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Mountain landscape
  "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Beach
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Forest
  "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // City
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Lake
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Field
    "https://images.unsplash.com/photo-1558022103-603c34ab10ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80", // Wetland
    "https://images.unsplash.com/photo-1558026063-9c0a987d6f1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Bog Vegetation
    "https://images.unsplash.com/photo-1558022103-603c34ab10ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",  // Foggy Bog
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80", // Modern House
    "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Cozy Interior
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Villa
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80", // Bedroom
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  // Kitchen
];




const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="">
      {/* banner */}
      <div
        className="relative h-96 sm:h-[410px] xl:h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-white text-center p-5">
          <h1 className="sm:text-4xl lg:text-5xl font-semibold mb-4">
            Explore Our Collection
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Explore a curated collection of images that highlight the beauty and
            diversity of our work, each telling its own unique story
          </p>
        </div>
      </div>

      {/*  Gallery  */}
      <div className="container mx-auto px-5 lg:px-14 mb-20">
        <h2 className="text-3xl font-bold text-center mb-6 my-10">Gallery</h2>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                className="cursor-pointer overflow-hidden rounded-bl-4xl rounded-tr-4xl "
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt={`Gallery Image ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-[250px] md:h-[200px] xl:h-[250px] object-cover transition-transform transform hover:scale-125 duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-3xl w-full">
              <img
                src={selectedImage}
                alt="Zoomed Image"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <button
                className="absolute top-4 right-4 bg-white text-black px-3.5 py-2 rounded-full shadow-md cursor-pointer"
                onClick={() => setSelectedImage(null)}
              >
                ✖
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
