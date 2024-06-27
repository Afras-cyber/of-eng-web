"use client";
import { Typography } from "@mui/material";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import WebsiteData from "@/lib/Data/WebsiteData";
import Image from "next/image";
import { usePathname } from "next/navigation";
function LeftSection() {
  const navigation = usePathname();
  return (
    <div
      className={`flex flex-col sm:flex-row lg:flex-col sm:gap-4 lg:gap-0 sm:px-10 sm:py-2 lg:px-0 lg:py-0${
        navigation == "/about/personal" ? "w-0 hidden" : " w-full lg:w-2/12"
      }`}
    >
      <Image
        src="/profile.png"
        width={500}
        height={500}
        className="rounded-full w-[120px]  h-[120px] object-cover border-[3px] border-primary p-1 mb-3 "
        alt="profile"
      />
      <div>
        <div className="">
          <Typography className="font-title font-bold text-start text-sm lg:text-base">
            {WebsiteData.name}
          </Typography>
          <Typography className="font-title text-start text-xs lg:text-sm">
          Humboldtstraße 9 <br/>
          84453 Mühldorf am Inn
            {/* {WebsiteData.address} */}
          </Typography>
        </div>
        <div className="py-2 pt-4 ">
          <div className="flex items-center  space-x-1 mb-2">
            <TbDeviceLandlinePhone className="text-primary" />{" "}
            <Typography className="font-title text-xs lg:text-sm">
              {WebsiteData.tel}
            </Typography>{" "}
          </div>
          <div className="flex items-center  space-x-1 mb-2">
            <FaPhoneAlt className="text-primary" />
            <Typography className="font-title text-xs lg:text-sm">
              {WebsiteData.mobile}
            </Typography>
          </div>
          <div className="flex items-center  space-x-1 mb-2">
            <IoIosMail className="text-xl text-primary" />
            <Typography className="font-title text-xs lg:text-sm">
              {WebsiteData.email}
            </Typography>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
