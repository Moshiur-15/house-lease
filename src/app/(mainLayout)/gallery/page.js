"use client";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
            "url(https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
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
                  className="w-full h-auto object-cover transition-transform transform hover:scale-125 duration-500"
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
                className="absolute top-4 right-4 bg-white text-black p-2 rounded-full shadow-md"
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
