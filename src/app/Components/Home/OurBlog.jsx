import React from "react";
import Title from "../Sherd/Title";
import BlogCard from "./BlogCard";

const OurBlog = () => {
  const blog = [
    {
      _id: 1,
      CardTitle: "How to Find the Perfect Rental Home",
      CardDes:
        "Explore smart strategies to find a rental home that fits your lifestyle and budget.",
      Date: "2025-04-10",
      DetailTitle: "Step-by-step Guide to Rental Hunting",
      DetailDes1:
        "Start by identifying your needs, location preferences, and budget before searching.",
      DetailTitle1_1: "Research Neighborhoods",
      DetailDes2:
        "Visit neighborhoods at different times and check for amenities, safety, and transport.",
      DetailDes2_1: "Talk to locals and use online forums for honest reviews.",
      Location: "San Francisco, CA",
      cardImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      detImg1:
        "https://images.unsplash.com/photo-1572120360610-d971b9b5a45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
    {
      _id: 2,
      CardTitle: "Budgeting Tips for Renters",
      CardDes:
        "Learn how to effectively plan your rental budget to avoid financial stress.",
      Date: "2025-05-02",
      DetailTitle: "Building Your Rental Budget",
      DetailDes1:
        "Include rent, utilities, deposits, and emergency funds in your budget plan.",
      DetailTitle1_1: "Track Monthly Expenses",
      DetailDes2:
        "Use budgeting apps or spreadsheets to monitor your spending habits.",
      DetailDes2_1: "Adjust your lifestyle to meet your financial goals.",
      Location: "Austin, TX",
      cardImage:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      detImg1:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
    {
      _id: 3,
      CardTitle: "Understanding Your Rental Agreement",
      CardDes:
        "Avoid disputes by knowing the key clauses in your lease agreement.",
      Date: "2025-03-15",
      DetailTitle: "Important Lease Agreement Points",
      DetailDes1:
        "Review rent amount, duration, maintenance responsibilities, and penalties carefully.",
      DetailTitle1_1: "Clarify Additional Terms",
      DetailDes2:
        "Ask about pet policies, guest rules, and subletting restrictions before signing.",
      DetailDes2_1: "Keep a signed copy and document all communications.",
      Location: "New York, NY",
      cardImage:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      detImg1:
        "https://images.unsplash.com/photo-1560184897-e6f9e7632ca3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
    {
      _id: 4,
      CardTitle: "Moving Tips for Renters",
      CardDes:
        "Make your move stress-free with these essential packing and planning tips.",
      Date: "2025-06-01",
      DetailTitle: "Efficient Moving Strategies",
      DetailDes1:
        "Start packing early, label boxes, and keep essentials accessible.",
      DetailTitle1_1: "Plan Utilities and Change of Address",
      DetailDes2:
        "Schedule disconnection and reconnection of utilities in advance.",
      DetailDes2_1: "Update your address for mail and services timely.",
      Location: "Seattle, WA",
      cardImage:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      detImg1:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
    {
      _id: 5,
      CardTitle: "How to Maintain Your Rental Property",
      CardDes:
        "Simple maintenance tips to keep your rental in great condition and avoid charges.",
      Date: "2025-05-22",
      DetailTitle: "Rental Maintenance Basics",
      DetailDes1:
        "Report issues promptly and keep the property clean to prevent damages.",
      DetailTitle1_1: "Understand Your Responsibilities",
      DetailDes2:
        "Know what maintenance tasks are your duty and what belongs to the landlord.",
      DetailDes2_1: "Keep documentation of repairs and communications.",
      Location: "Chicago, IL",
      cardImage:
        "https://images.unsplash.com/photo-1468071174046-657d9d351a40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      detImg1:
        "https://images.unsplash.com/photo-1556911073-52527ac437f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
    {
      _id: 6,
      CardTitle: "Neighborhood Tips for Renters",
      CardDes:
        "Choose a neighborhood that fits your lifestyle and safety preferences.",
      Date: "2025-04-28",
      DetailTitle: "Evaluating Neighborhoods",
      DetailDes1:
        "Check local amenities, safety ratings, public transport, and schools.",
      DetailTitle1_1: "Visit at Different Times",
      DetailDes2:
        "Experience the neighborhood during day and night for a full picture.",
      DetailDes2_1: "Connect with locals for honest insights.",
      Location: "Boston, MA",
      cardImage:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      detImg1:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
  ];
  
  return (
    <div className="px-4 sm:px-6 lg:px-24">
      <Title h2="NEWS" p="Our Blog" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {blog?.slice(0, 6).map((blog, index) => (
         <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default OurBlog;
