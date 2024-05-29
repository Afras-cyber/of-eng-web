import React from "react";
import Theme from "@/lib/Theme";
import { Button, Container, Typography } from "@mui/material";
import { FaCloudDownloadAlt, FaPhone, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import WebsiteData from "@/lib/Data/WebsiteData";
import QuickLinksData from "@/lib/Data/QuickLinksData";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";
function page() {
  return (
    <Theme>
      <Container maxWidth="sm" className="p-0">
        <div className="p-1 sm:p-10">
          <Typography
            variant="h4"
            className=" font-bold text-start sm:text-center mb-4 text-2xl md:text-3xl capitalize"
          >
            Imprint
          </Typography>

          <div className="">
            <Typography variant="body1" className="font-semibold">
              Address :
            </Typography>
            <Typography
              variant="body2"
              className="mb-4 text-left font-title flex justify-start pl-4"
              //   component="address"
            >
              {`${WebsiteData.address}`.split(" ").map((item) => (
                <>
                  {item},
                  <br />
                </>
              ))}
            </Typography>
          </div>
          <div className="flex items-center space-x-1 mb-2">
            <TbDeviceLandlinePhone className="text-primary" />{" "}
            <Typography
              component="p"
              variant="body2"
              className="px-2 font-title"
            >
              {WebsiteData.tel}
            </Typography>{" "}
          </div>
          <div className="flex items-center space-x-1 mb-2">
            <FaPhoneAlt className="text-primary" />
            <Typography
              component="p"
              variant="body2"
              className="px-2 font-title"
            >
              {WebsiteData.mobile}
            </Typography>
          </div>
          <div className="flex items-center space-x-1 mb-2">
            <IoIosMail className="text-xl text-primary" />
            <Typography
              component="p"
              variant="body2"
              className="px-2 font-title"
            >
              {WebsiteData.email}
            </Typography>{" "}
          </div>
        </div>
        <hr />
        <Typography component="p" variant="body2" className="px-2 my-3 font-title">
          Sales tax ID: DE199793044
        </Typography>
      </Container>
    </Theme>
  );
}

export default page;
