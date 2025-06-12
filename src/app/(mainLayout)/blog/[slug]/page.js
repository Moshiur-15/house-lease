import BlogAside from "@/app/Components/Home/BlogAside";
import BlogComment from "@/app/Components/Home/BlogComment";
import BlogDetails from "@/app/Components/Home/BlogDetails";
import ShowBlogComment from "@/app/Components/Home/ShowBlogComment";
import React from "react";

const BlogId = ({ params }) => {
  const blogs = [
  {
    id: 1,
    CardTitle: "FINDING YOUR DREAM RENTAL",
    CardDes: "LOOKING FOR THE PERFECT RENTAL HOME CAN BE OVERWHELMING, BUT KNOWING YOUR NEEDS, PREFERENCES, AND BUDGET WILL MAKE THE ENTIRE PROCESS MUCH SMOOTHER AND SUCCESSFUL.",
    DetailTitle: "A COMPREHENSIVE GUIDE TO FINDING YOUR DREAM RENTAL HOME EASILY",
    DetailDes1: "GET EXPERT ADVICE ON HOW TO BEGIN YOUR SEARCH, UNDERSTAND WHAT TO PRIORITIZE, AND NAVIGATE THE RENTAL MARKET WITHOUT FEELING LOST OR CONFUSED BY LISTINGS.",
    DetailTitle1_1: "KNOW YOUR PRIORITIES LIKE LOCATION, SAFETY, AND AMENITIES BEFORE STARTING YOUR SEARCH.",
    DetailDes2: "BEFORE SIGNING ANYTHING, IT'S CRUCIAL TO FULLY UNDERSTAND THE TERMS AND CONDITIONS OF RENTAL AGREEMENTS TO AVOID FUTURE LEGAL OR FINANCIAL ISSUES.",
    DetailDes2_1: "CONSULT A REAL ESTATE EXPERT OR LEGAL ADVISOR TO REVIEW THE AGREEMENT.",
    image1: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1350&q=80",
    image2: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1350&q=80",
    Date: "2025-10-05",
    Location: "USA"
  },
  {
    id: 2,
    CardTitle: "HOW TO BUDGET FOR A RENTAL PROPERTY",
    CardDes: "LEARN THE MOST EFFECTIVE WAYS TO CALCULATE YOUR RENTAL BUDGET AND AVOID FINANCIAL STRESS WHILE LIVING COMFORTABLY.",
    DetailTitle: "MASTERING YOUR RENTAL PROPERTY BUDGET",
    DetailDes1: "UNDERSTANDING YOUR MONTHLY INCOME AND EXPENSES IS CRUCIAL IN DETERMINING THE RIGHT RENTAL PRICE RANGE FOR YOU.",
    DetailTitle1_1: "FOLLOW THE 30% RULE — SPEND NO MORE THAN 30% OF YOUR INCOME ON RENT.",
    DetailDes2: "ACCOUNT FOR ADDITIONAL EXPENSES LIKE UTILITIES, DEPOSITS, AND MAINTENANCE TO PREVENT UNEXPECTED COSTS.",
    DetailDes2_1: "USE A BUDGETING APP TO TRACK AND PLAN YOUR MONTHLY RENTAL EXPENSES EFFECTIVELY.",
    image1: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1350&q=80",
    image2: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80",
    Date: "2025-10-10",
    Location: "CANADA"
  },
  {
    id: 3,
    CardTitle: "THE BENEFITS OF LIVING IN A RENTAL COMMUNITY",
    CardDes: "DISCOVER THE HIDDEN ADVANTAGES OF BEING PART OF A RENTAL COMMUNITY INCLUDING SAFETY, AMENITIES, AND SOCIAL INTERACTIONS.",
    DetailTitle: "WHY RENTAL COMMUNITIES ARE A GREAT CHOICE FOR MODERN LIVING",
    DetailDes1: "RENTAL COMMUNITIES OFTEN OFFER AMENITIES LIKE GYMS, POOLS, AND EVENTS THAT CREATE A FRIENDLY ENVIRONMENT.",
    DetailTitle1_1: "BUILDING RELATIONSHIPS WITH NEIGHBORS CAN IMPROVE MENTAL HEALTH AND SOCIAL LIFE.",
    DetailDes2: "PROPERTY MANAGEMENT TAKES CARE OF MAINTENANCE, GIVING YOU PEACE OF MIND.",
    DetailDes2_1: "REPORT ANY ISSUES THROUGH THEIR ONLINE SYSTEM FOR FASTER SERVICE.",
    image1: "https://images.unsplash.com/photo-1617104678880-12d97b2aa1d4?auto=format&fit=crop&w=1350&q=80",
    image2: "https://images.unsplash.com/photo-1600585154154-711c84871839?auto=format&fit=crop&w=1350&q=80",
    Date: "2025-10-15",
    Location: "AUSTRALIA"
  },
  {
    id: 4,
    CardTitle: "WHAT TO ASK BEFORE RENTING A HOUSE",
    CardDes: "KNOW THE ESSENTIAL QUESTIONS TO ASK LANDLORDS OR AGENTS BEFORE YOU SIGN A LEASE AGREEMENT.",
    DetailTitle: "ESSENTIAL QUESTIONS FOR YOUR NEXT RENTAL PROPERTY",
    DetailDes1: "ASK ABOUT UTILITIES, MAINTENANCE RESPONSIBILITIES, AND LEASE TERMS TO AVOID MISUNDERSTANDINGS.",
    DetailTitle1_1: "ALWAYS ASK IF THE RENT INCLUDES UTILITIES OR IF THEY ARE BILLED SEPARATELY.",
    DetailDes2: "KNOW ABOUT NEIGHBORHOOD SAFETY, PARKING RULES, AND PET POLICIES BEFORE FINALIZING.",
    DetailDes2_1: "VISIT THE AREA AT DIFFERENT TIMES OF DAY TO JUDGE ITS SAFETY AND ACTIVITY LEVEL.",
    image1: "https://images.unsplash.com/photo-1572120360610-d971b9b78827?auto=format&fit=crop&w=1350&q=80",
    image2: "https://images.unsplash.com/photo-1600585153943-4b922faecd3a?auto=format&fit=crop&w=1350&q=80",
    Date: "2025-10-20",
    Location: "UK"
  },
  {
    id: 5,
    CardTitle: "DECORATING YOUR RENTAL WITHOUT DAMAGE",
    CardDes: "MAKE YOUR RENTAL FEEL LIKE HOME WITHOUT BREAKING YOUR LEASE OR SPENDING TOO MUCH.",
    DetailTitle: "CREATIVE AND DAMAGE-FREE RENTAL DECOR IDEAS",
    DetailDes1: "USE REMOVABLE WALLPAPER, TEMPORARY HOOKS, AND RUGS TO TRANSFORM YOUR SPACE WITHOUT DAMAGE.",
    DetailTitle1_1: "AVOID NAILS OR SCREWS — OPT FOR COMMAND STRIPS AND TENSION RODS.",
    DetailDes2: "ADD PERSONALITY WITH LIGHTING, PLANTS, AND FURNITURE ARRANGEMENT.",
    DetailDes2_1: "THRIFT STORES CAN BE GREAT FOR UNIQUE, BUDGET-FRIENDLY FINDS.",
    image1: "https://images.unsplash.com/photo-1600585153939-176f6ff5b6c3?auto=format&fit=crop&w=1350&q=80",
    image2: "https://images.unsplash.com/photo-1586105251261-72a756497a12?auto=format&fit=crop&w=1350&q=80",
    Date: "2025-10-25",
    Location: "GERMANY"
  },
  {
    id: 6,
    CardTitle: "RENTING VS BUYING: WHAT'S RIGHT FOR YOU?",
    CardDes: "SHOULD YOU RENT OR BUY A HOME? EXPLORE THE PROS AND CONS OF EACH OPTION TO MAKE AN INFORMED DECISION.",
    DetailTitle: "RENTING VS BUYING — WHICH OPTION FITS YOUR LIFESTYLE?",
    DetailDes1: "RENTING OFFERS FLEXIBILITY, LOWER INITIAL COSTS, AND LESS MAINTENANCE RESPONSIBILITY.",
    DetailTitle1_1: "PERFECT FOR STUDENTS, TRAVELERS, OR THOSE STILL EXPLORING LOCATIONS.",
    DetailDes2: "BUYING PROVIDES STABILITY, EQUITY BUILDING, AND LONG-TERM INVESTMENT VALUE.",
    DetailDes2_1: "IDEAL IF YOU'RE FINANCIALLY READY AND PLAN TO STAY LONG TERM.",
    image1: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1350&q=80",
    image2: "https://images.unsplash.com/photo-1586104988468-14a9d56e4102?auto=format&fit=crop&w=1350&q=80",
    Date: "2025-10-30",
    Location: "INDIA"
  }
]

//   param data
  const { slug } = React.use(params);
  const detail = blogs.find(b=> b.id === parseInt(slug))
  console.log(params)
  return (
    <div className="container mx-auto lg:flex gap-10 px-6.5 lg:px-5.5">
        {/* details data */}
        <section className="w-full lg:w-4/6 min-h-96">
          <BlogDetails detail={detail} />
          {/* show Comment */}
          <ShowBlogComment/>
          {/* Comment input */}
          <BlogComment/>
        </section>
        {/* sideber */}
        <aside className="w-full lg:w-2/6 h-fit sticky top-12">
          <BlogAside/>
        </aside>
    </div>
  );
};

export default BlogId;
