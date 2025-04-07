import BlogAside from "@/app/Components/Home/BlogAside";
import BlogDetails from "@/app/Components/Home/BlogDetails";
import React from "react";

const BlogId = ({ params }) => {
  const blogs = [
    {
      id: 1,
      CardTitle: "Finding Your Dream Rental",
      DetailTitle:
        "A Comprehensive Guide to Finding Your Dream Rental Home Easily",
      CardDes:
        "Looking for the perfect rental home can be overwhelming, but knowing your needs, preferences, and budget will make the entire process much smoother and successful.",
      DetailDes1:
        "Get expert advice on how to begin your search, understand what to prioritize, and navigate the rental market without feeling lost or confused by listings.",
      DetailDes2:
        "Before signing anything, it's crucial to fully understand the terms and conditions of rental agreements to avoid future legal or financial issues.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      Date: "2025-10-05",
      Location: "USA",
    },
    {
      id: 2,
      CardTitle: "Smart Budgeting for Renters",
      DetailTitle:
        "How to Effectively Budget for Your New Rental Home and Stay Financially Secure",
      CardDes:
        "Budgeting properly is essential for renters. By planning your expenses and saving for unexpected costs, you can live comfortably and avoid financial stress.",
      DetailDes1:
        "Set realistic financial goals, create a monthly plan, and include all rental-related costs like utilities, deposits, maintenance, and emergency savings.",
      DetailDes2:
        "Avoid common budgeting mistakes such as underestimating move-in costs or forgetting to factor in insurance, transportation, and internet bills.",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      Date: "2025-09-22",
      Location: "Canada",
    },
    {
      id: 3,
      CardTitle: "Top Cities for Affordable Rentals",
      DetailTitle:
        "Explore the Best Cities Offering Affordable Rentals Without Sacrificing Quality",
      CardDes:
        "Finding affordable places to live doesn't mean sacrificing comfort. These cities offer budget-friendly rentals while still maintaining a good quality of life.",
      DetailDes1:
        "We’ve compiled a list of cities around the world where renting won’t break the bank, and you’ll still enjoy access to public transport, safety, and local charm.",
      DetailDes2:
        "Compare rental prices, cost of living, amenities, and job opportunities across different cities before deciding where to move for a more balanced lifestyle.",
        image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      Date: "2025-09-10",
      Location: "Germany",
    },
    {
      id: 4,
      CardTitle: "Rental Scams to Avoid",
      DetailTitle:
        "How to Spot and Avoid Common Rental Scams to Protect Yourself From Fraud",
      CardDes:
        "The rental market can sometimes attract scammers. Learn to identify and avoid fraud by staying informed and practicing cautious behavior during your search.",
      DetailDes1:
        "Look out for suspicious listings, landlords who won’t meet in person, or those asking for large deposits without paperwork—these are red flags you shouldn't ignore.",
      DetailDes2:
        "Protect yourself by verifying property ownership, visiting homes in person, and never making payments until you're sure everything is legitimate and legal.",
        image: "https://images.unsplash.com/photo-1581091012184-7c4ff26d6f86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      Date: "2025-08-30",
      Location: "UK",
    },
    {
      id: 5,
      CardTitle: "Documents You Need to Rent",
      DetailTitle:
        "Essential Documents You Must Have Ready Before Renting a Property",
      CardDes:
        "Before moving into a new rental, you’ll need several key documents. Being prepared helps speed up the process and shows you're a serious tenant to landlords.",
      DetailDes1:
        "Make sure to have your ID, proof of income, references, and bank statements ready. These are standard documents that most landlords will require for review.",
      DetailDes2:
        "Having your paperwork in order allows you to apply quickly for rentals you love, especially in competitive markets where hesitation could cost you the deal.",
        image: "https://images.unsplash.com/photo-1607082349566-18734270f676?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      Date: "2025-08-18",
      Location: "Australia",
    },
    {
      id: 6,
      CardTitle: "How to Negotiate Rent",
      DetailTitle:
        "Master the Art of Negotiating Rent for Better Deals and Lower Prices",
      CardDes:
        "Negotiating your rent is possible, especially in markets with high vacancy rates. Learn the best strategies and how to communicate effectively with landlords.",
      DetailDes1:
        "Build your case by researching local rental rates, offering longer leases, and being a reliable tenant. These factors help support your rent reduction request.",
      DetailDes2:
        "Approach negotiations professionally. Avoid being too aggressive, and instead, show how both parties benefit from the arrangement for better outcomes.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      Date: "2025-08-01",
      Location: "India",
    },
    {
      id: 7,
      CardTitle: "Renting With Pets",
      DetailTitle:
        "Essential Tips for Renting With Pets and Finding the Right Pet-Friendly Home",
      CardDes:
        "Renting with pets can be tricky, but it’s not impossible. You’ll need to find pet-friendly properties and understand the rules that come with them.",
      DetailDes1:
        "Start by filtering listings that allow pets. Ask landlords about breed restrictions, pet deposits, and pet rent so you're clear on expectations and costs.",
      DetailDes2:
        "Be transparent about your pet's behavior, keep them trained, and maintain cleanliness to ensure a good relationship with your landlord and neighbors.",
        image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      Date: "2025-07-15",
      Location: "France",
    },
    {
      id: 8,
      CardTitle: "Furnishing Your First Rental",
      DetailTitle:
        "Smart Ways to Furnish Your First Rental Without Breaking the Bank",
      CardDes:
        "Starting from scratch can be expensive. Learn how to furnish your new rental in a cost-effective way by focusing on essentials and prioritizing what you need.",
      DetailDes1:
        "Begin with basic furniture like a bed, table, and seating. Avoid unnecessary splurges on decorative items until you've settled into your new place comfortably.",
      DetailDes2:
        "Look for deals at thrift stores, online marketplaces, or furniture rental services. These options help you save money while still creating a cozy environment.",
        image: "https://images.unsplash.com/photo-1560448071-8ef170df9f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      Date: "2025-06-30",
      Location: "Japan",
    },
    {
      id: 9,
      CardTitle: "Understanding Rental Agreements",
      DetailTitle:
        "Your Complete Guide to Understanding Rental Agreements and Lease Contracts",
      CardDes:
        "A rental agreement is a legal contract that protects both tenants and landlords. Understanding the terms can save you from unexpected fees and obligations.",
      DetailDes1:
        "Pay attention to clauses related to rent increases, repairs, subletting, and termination. Each of these can affect your rental experience and rights.",
      DetailDes2:
        "If something seems unclear, ask for clarification or legal advice before signing. Never agree to anything you're unsure about or can't afford to commit to.",
        image: "https://images.unsplash.com/photo-1581091870621-b2c989c7c58e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      Date: "2025-06-15",
      Location: "Italy",
    },
    {
      id: 10,
      CardTitle: "When to Move for Better Deals",
      DetailTitle:
        "How to Choose the Right Time to Move for Better Rental Deals and Discounts",
      CardDes:
        "The time of year you choose to move can greatly impact rental prices. Learn when landlords are more likely to offer discounts or lower rent for faster leasing.",
      DetailDes1:
        "Rental prices often dip during the winter months due to lower demand. Plan your move during this period to secure better deals and have more options.",
      DetailDes2:
        "Avoid peak moving seasons like summer when competition is high. Moving in off-season months provides more negotiation power and flexibility.",
        image: "https://images.unsplash.com/photo-1572120360610-d971b9b78828?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      Date: "2025-05-15",
      Location: "USA",
    },
  ];
//   param data
  const { BlogId } = params;
  const detail = blogs.find(b=> b.id === parseInt(BlogId))
  return (
    <div className="container mx-auto lg:flex gap-10 px-6.5 lg:px-5.5">
        {/* details data */}
        <section className="w-full lg:w-4/6 min-h-96">
          <BlogDetails detail={detail} />
        </section>
        {/* sideber */}
        <aside className="w-full lg:w-2/6 h-fit sticky top-12">
          <BlogAside/>
        </aside>
    </div>
  );
};

export default BlogId;
