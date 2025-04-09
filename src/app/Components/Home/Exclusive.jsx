import React from "react";
import ExclusiveCard from "./ExclusiveCard";

const Exclusive = () => {
  const properties = [
    {
      "id": 1,
      "title": "MOUNTAIN RETREAT CABIN",
      "location": "ASPEN, CO",
      "beds": 3,
      "baths": 2,
      "sqft": 180,
      "price": 3200,
      "status": "FOR SALE",
      "category": "CABIN",
      "cardImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "images": {
        "detImg1": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "detImg2": "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "detImg3": "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "detImg4": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      "description": "COZY MOUNTAIN CABIN WITH STUNNING LANDSCAPE VIEWS AND SECLUDED SERENITY."
    },
    {
      "id": 2,
      "title": "SEASIDE LUXURY HOME",
      "location": "MIAMI BEACH, FL",
      "beds": 4,
      "baths": 3,
      "sqft": 240,
      "price": 5800,
      "status": "FOR SALE",
      "category": "BEACH HOUSE",
      "cardImage": "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "images": {
        "detImg1": "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "detImg2": "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "detImg3": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "detImg4": "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      "description": "MODERN BEACHFRONT PROPERTY WITH OCEAN VIEWS AND PRIVATE ACCESS TO THE SHORE."
    },
    {
      "id": 3,
      "title": "URBAN SKYLINE APARTMENT",
      "location": "NEW YORK, NY",
      "beds": 2,
      "baths": 2,
      "sqft": 150,
      "price": 7200,
      "status": "FOR SALE",
      "category": "APARTMENT",
      "cardImage": "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "images": {
        "detImg1": "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "detImg2": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "detImg3": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80",
        "detImg4": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
      },
      "description": "SLEEK CITY APARTMENT IN THE HEART OF MANHATTAN WITH SKYLINE VIEWS."
    },
    {
      "id": 4,
      "title": "FOREST EDGE COTTAGE",
      "location": "PORTLAND, OR",
      "beds": 2,
      "baths": 1,
      "sqft": 120,
      "price": 2200,
      "status": "FOR RENT",
      "category": "COTTAGE",
      "cardImage": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "images": {
        "detImg1": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "detImg2": "https://images.unsplash.com/photo-1558026063-9c0a987d6f1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "detImg3": "https://images.unsplash.com/photo-1558022103-603c34ab10ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
        "detImg4": "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      "description": "PEACEFUL COTTAGE ON THE EDGE OF A LUSH GREEN FOREST WITH A MODERN TOUCH."
    },
    {
      "id": 5,
      "title": "LUXURY LAKE HOUSE",
      "location": "LAKE TAHOE, NV",
      "beds": 4,
      "baths": 3,
      "sqft": 280,
      "price": 6200,
      "status": "FOR SALE",
      "category": "LAKE HOUSE",
      "cardImage": "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "images": {
        "detImg1": "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "detImg2": "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "detImg3": "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "detImg4": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
      },
      "description": "STUNNING LAKEFRONT PROPERTY WITH A WRAPAROUND DECK AND GLASS WALLS."
    },
    {
      "id": 6,
      "title": "COUNTRYSIDE FIELD HOME",
      "location": "NAPA VALLEY, CA",
      "beds": 3,
      "baths": 2,
      "sqft": 200,
      "price": 3500,
      "status": "FOR RENT",
      "category": "FARMHOUSE",
      "cardImage": "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "images": {
        "detImg1": "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "detImg2": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80",
        "detImg3": "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "detImg4": "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      "description": "OPEN-CONCEPT FIELD HOME NESTLED AMONG THE VINES OF NAPA."
    },
    {
      "id": 7,
      "title": "WETLAND VIEW CABIN",
      "location": "EVERGLADES, FL",
      "beds": 2,
      "baths": 1,
      "sqft": 140,
      "price": 2100,
      "status": "FOR RENT",
      "category": "CABIN",
      "cardImage": "https://images.unsplash.com/photo-1558022103-603c34ab10ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
      "images": {
        "detImg1": "https://images.unsplash.com/photo-1558022103-603c34ab10ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
        "detImg2": "https://images.unsplash.com/photo-1558026063-9c0a987d6f1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "detImg3": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80",
        "detImg4": "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      "description": "SERENE RETREAT IN THE HEART OF NATURE'S WETLAND HAVEN."
    },
    {
      "id": 8,
      "title": "MODERN DREAM VILLA",
      "location": "LOS ANGELES, CA",
      "beds": 5,
      "baths": 4,
      "sqft": 300,
      "price": 6800,
      "status": "FOR SALE",
      "category": "VILLA",
      "cardImage": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      "images": {
        "detImg1": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
        "detImg2": "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "detImg3": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80",
        "detImg4": "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      "description": "LUXURY VILLA WITH MODERN INTERIOR AND SPACIOUS ROOMS."
    }
  ]
  
  

  return (
    <div className="px-4 sm:px-6 lg:px-24">
      <div className="flex flex-col space-y-1 text-center">
        <span className="text-xs font-semibold tracking-widest flex justify-center items-center gap-1 uppercase">
          <div className="h-2.5 w-2.5 rounded-full bg-[#EA703B]"></div>Exclusive
        </span>
        <h2 className="text-3xl font-bold text-gray-900">
          Featured Properties
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
        {properties?.slice(0, 6).map((property) => <ExclusiveCard property={property} key={property?.id} />)}
      </div>
    </div>
  );
};

export default Exclusive;
