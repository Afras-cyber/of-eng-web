import Image from "next/image";
import React from "react";

function Section2() {
  return (
    <div className="py-4">
      <div className="grid grid-rows-1 md:grid-cols-3 md:grid-flow-row gap-3">
        <div className="shadow-xl h-32 flex justify-center items-center rounded-lg">
          <Image src="/study.png" width={100} height={100} alt="study image" />
          <h1 className="px-2 font-subtitle font-bold">Studies</h1>
        </div>
        <div className="shadow-xl h-32 flex justify-center items-center rounded-lg">
            <h1 className="px-2 font-subtitle font-bold">Training</h1>
          <Image
            src="/training.png"
            width={100}
            height={100}
            alt="training image"
          />
        </div>
        <div className="shadow-xl h-32 flex justify-center items-center rounded-lg">
          <Image
            src="/career.png"
            width={100}
            height={100}
            alt="Career image"
          />
          <h1 className="px-2 font-subtitle font-bold">Career</h1>
        </div>
      </div>
    </div>
  );
}

export default Section2;
