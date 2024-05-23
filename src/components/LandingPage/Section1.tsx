import Image from "next/image";
import React from "react";

function Section1() {
  return (
    <section className="grow bg-blue-50 h-[80vh] md:pl-10 ">
      <div className="w-[100%] h-[100%] flex items-end justify-center md:justify-between ">
        <div className="h-[100%] flex flex-col items-center justify-center ">
          {/* <div className="w-72 h-72 bg-purple-300 rounded-2xl animate-spin-slow "></div> */}
          <div className=" flex justify-center items-center flex-col">
            <h1 className="text-2xl md:text-3xl xl:text-5xl font-subtitle font-extrabold text-center  ">
              Jens Henning Müller
            </h1>
            <h3 className="text-sm md:text-base xl:text-lg font-semibold mt-2">
              Professor | Scientist | Author
            </h3>
          </div>
        </div>
        <Image
          alt="profile"
          width={500}
          height={600}
          src="/profile.png"
          className="object-contain hidden md:flex md:w-8/12 xl:w-6/12"
        />
      </div>
    </section>
  );
}

export default Section1;
