"use client";
import Image from "next/image";
import React from "react";

function Gallery({ Images }: { Images: string[] }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-5 ">
        {Images?.map((img,index) => (
          <Image
          key={index}
            alt="images"
            src={img}
            width={500}
            height={200}
            className="w-full h-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
