"use client";
import React from "react";

const userData = {
  name: "Moshiur Islam",
};

const Test = () => {
  return (
    <div className="relative group overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold dark:text-white">
        <span
          className="relative text-6xl uppercase tracking-widest text-transparent [text-stroke:1px rgba(0,0,0,0.5)]"
          style={{ WebkitTextStroke: "1px rgba(0,0,0,0.5)" }}
        >
          <span
            className="absolute top-[9px] left-0 w-0 h-full overflow-hidden whitespace-nowrap transition-all duration-1000 ease-in-out group-hover:w-full border-r-8"
            style={{
              color: "#00a8d4",
              WebkitTextStroke: "1px #00a8d4",
              borderColor: "#00a8d4",
            }}
          >
            {userData.name}
          </span>
          {userData.name}
        </span>
      </h2>
    </div>
  );
};

export default Test;
