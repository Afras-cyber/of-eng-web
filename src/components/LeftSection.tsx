import { Typography } from "@mui/material";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import WebsiteData from "@/lib/Data/WebsiteData";
import Image from "next/image";
function LeftSection() {
  return (
    <div className="hidden sm:block w-2/12  ">
        <Image
          src="/profile.png"
          width={500}
          height={500}
          className="rounded-xl  w-11/12 object-cover border-[3px] border-primary p-1 mb-3"
          alt="profile"
        />
      <div className="">

        <Typography
          className="font-title font-bold text-start"
          variant="body1"
        >
          {WebsiteData.name}
        </Typography>
        <Typography variant="body2" className="font-title text-start">
          {WebsiteData.address}
        </Typography>
      </div>
      <div className="py-2 pt-4 ">
        <div className="flex items-center  space-x-1 mb-2">
          <TbDeviceLandlinePhone className="text-primary" />{" "}
          <Typography variant="body2" className="font-title ">
            {WebsiteData.tel}
          </Typography>{" "}
        </div>
        <div className="flex items-center  space-x-1 mb-2">
          <FaPhoneAlt className="text-primary" />
          <Typography variant="body2" className="font-title ">
            {WebsiteData.mobile}
          </Typography>
        </div>
        <div className="flex items-center  space-x-1 mb-2">
          <IoIosMail className="text-xl text-primary" />
          <Typography variant="body2" className="font-title ">
            {WebsiteData.email}
          </Typography>{" "}
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
