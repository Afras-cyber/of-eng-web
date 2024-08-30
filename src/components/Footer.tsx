import Image from "next/image";
import Link from "next/link";

import { FaSquareFacebook, FaSquareWhatsapp, FaPhone, FaSquareInstagram, FaSquareYoutube, FaSquareTwitter, FaSquareXTwitter, FaSquarePinterest } from "react-icons/fa6";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";
import WebsiteData from "@/lib/Data/WebsiteData";
import QuickLinksData from "@/lib/Data/QuickLinksData";
import { Container, Typography } from "@mui/material";
import { FaLinkedin } from "react-icons/fa";
function Footer() {

const Social = ()=>(  <>
  <li>
  {/* <Link
    href="https://www.facebook.com/jenshenningmueller/"
    target="_blank"
  > */}
    <FaSquareFacebook className="text-3xl text-primary" />
  {/* </Link> */}
</li>
<li>
  {/* <Link
    href="https://www.facebook.com/jenshenningmueller/"
    target="_blank"
  > */}
    <FaSquareInstagram className="text-3xl text-primary" />
  {/* </Link> */}
</li>
<li>
  {/* <Link
    href="https://www.facebook.com/jenshenningmueller/"
    target="_blank"
  > */}
    <FaSquareYoutube className="text-3xl text-primary" />
  {/* </Link> */}
</li>
<li>
  {/* <Link
    href="https://www.facebook.com/jenshenningmueller/"
    target="_blank"
  > */}
    <FaSquareXTwitter className="text-3xl text-primary" />
  {/* </Link> */}
</li>
<li>
  {/* <Link
    href="https://www.facebook.com/jenshenningmueller/"
    target="_blank"
  > */}
    <FaSquarePinterest className="text-3xl text-primary" />
  {/* </Link> */}
</li>
</>      
)
  return (
    <Container maxWidth="lg" className="px-0">
      <div className="py-8 ">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Image
            alt="company logo"
            src="/logo-web-transparent.png"
            width={500}
            height={500}
            className="w-8/12 sm:w-[18vw] md:w-[26vw] lg:w-[14vw] my-2"
          />
          <ul className="flex space-x-1">
              <li>
              <Link
                href="https://wa.me/message/YIAZ4BDZTLILI1"
                target="_blank"
              >
                <FaSquareWhatsapp className="text-3xl text-primary" />
                </Link>
              </li>
              <li>
              <Link
                href="http://www.linkedin.com/in/olivier-fargeon"
                target="_blank"
              >
                <FaLinkedin className="text-3xl text-primary" />
              </Link>
            </li>
            <li>
              {/* <Link
                href="http://www.linkedin.com/in/olivier-fargeon"
                target="_blank"
              > */}
                <Image src="/xing.png"width={80} height={60} className="object-fit" alt="xing"/>
              {/* </Link> */}
            </li>
            
          </ul>
        </div>
        {/* <hr className="w-8/12 m-auto my-4 lg:my-8 animate-pulse" />
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="w-full lg:w-4/12 py-6 lg:py-2">
            <Typography
              component="p"
              variant="body1"
              className="font-title pr-3"
            >
              {`Jens Müller is Professor of Inorganic Chemistry at the University of
Münster (Germany). In 1999, he received his PhD from TU Dortmund
University`}
            </Typography>
          </div>

          <div className="">
            <div className="flex flex-col sm:flex-row justify-between">
              <div className="w-full sm:w-7/12 mb-3 pl-6 sm:pl-3 ">
                <Typography
                  component="h6"
                  variant="h6"
                  className=" font-bold mb-2 text-primary font-title"
                >
                  Quick Links
                </Typography>
                <ul className="space-y-2">
                  {QuickLinksData.ReferenceList?.map((item) => (
                    <li key={item.links} className="list-disc ">
                      <Link
                        href={item.links}
                        target="_blank"
                        className="py-2 hover:text-primary hover:font-semibold "
                      >
                        <Typography
                          component="p"
                          variant="body2"
                          className="font-title"
                        >
                          {item.title}
                        </Typography>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pl-6 sm:pl-3">
                <Typography
                  component="h6"
                  variant="h6"
                  className=" font-bold mb-2 text-primary font-title"
                >
                  Contact Us
                </Typography>

                <Typography
                  variant="body2"
                  className="mb-4 text-left font-title flex justify-start"
                  component="address"
                >
                  {`${WebsiteData.address}`.split(" ").map((item) => (
                    <>
                      {item}
                      <br />
                    </>
                  ))}
                </Typography>
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
                  <FaPhone className="text-primary" />
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
            </div>
          </div>
        </div> */}
      </div>
      <hr />
      <div className="w-full flex justify-center py-2 bg-primary">
        <Typography variant="body2" className="font-title text-white">
          Copyright © DMT. All Rights Reserved
        </Typography>
      </div>
    </Container>
  );
}

export default Footer;
