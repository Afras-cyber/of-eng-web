import { Typography } from "@mui/material";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import WebsiteData from "@/lib/Data/WebsiteData";
function LeftSection() {
  return (
    <div className="hidden sm:flex w-2/12  flex-col justify-start">
      <div>
{/* <Image src="profile.png"/> */}
      <Typography className="font-title font-bold" variant="body1">
        {WebsiteData.name}
      </Typography>
      <Typography variant="body2" className="font-title ">
        {WebsiteData.address}
      </Typography>
      </div>
      <div className="py-2 pt-4">
        <div className="flex items-start space-x-1 mb-2">
          <TbDeviceLandlinePhone className="text-primary" />{" "}
          <Typography variant="body2" className="font-title ">
            {WebsiteData.tel}
          </Typography>{" "}
        </div>
        <div className="flex items-start space-x-1 mb-2">
          <FaPhoneAlt className="text-primary" />
          <Typography variant="body2" className="font-title ">
            {WebsiteData.mobile}
          </Typography>
        </div>
        <div className="flex items-start space-x-1 mb-2">
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
