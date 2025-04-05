import React from "react";
import Image from "next/image";

const Images = ({ img }) => {
  return (
    <div className="">
      <Image
        src={img}
        alt='Dynamic image'
        className="object-cover object-center"
        loading="lazy"
        fill
      />
    </div>
  );
};

export default Images;
