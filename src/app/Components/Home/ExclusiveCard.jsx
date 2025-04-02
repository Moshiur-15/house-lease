import React from "react";

const ExclusiveCard = ({ property }) => {
  return (
    <div className="flex flex-col">
      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt={property.title}
        className="w-full h-64 object-cover"
      />

      {/* Details */}
      <div className="p-6 bg-white flex-1">
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {property.title}
        </h3>

        <div className="flex gap-4 mb-4 text-gray-600">
          <span>{property.beds} Bedrooms</span>
          <span>{property.baths} Baths</span>
          <span>{property.sqft} ft²</span>
        </div>

        <hr />

        <div className="flex justify-between items-center my-2">
          <div className="text-2xl font-bold text-gray-900">
            {property.price}
          </div>
          <img
            src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt={property.title}
            className="w-10 h-10 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ExclusiveCard;
