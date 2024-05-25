import Theme from "@/lib/Theme";
import { Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  const RouteList = [
    {
      side: "left",
      title: "Beruflicher Werdegang",
      image: "/career.png",
      route: "/about/career",
    },
    {
      side: "right",
      title: "Fortbildung",
      image: "/training.png",
      route: "/about/training",
    },
    {
      side: "left",
      title: "Zertifikate",
      image: "/certificate.png",
      route: "/about/certificate",
    },
    {
      side: "right",
      title: "Studium",
      image: "/study.png",
      route: "",
    },
    {
      side: "left",
      title: "Persönliches",
      image: "/personalize.png",
      route: "",
    },
  ];
  const ProfileComponents = ({
    side,
    title,
    image,
    route
  }: {
    side: string;
    title: string;
    image: string;
    route:string;
  }) => {
    return (
      <Link href={route} className="group">
        <div className="flex items-center w-full justify-center">
         {side=="left" && <div className="relative ">
            <div className="absolute top-0 w-24 h-24 rounded-full border-dashed border-2 border-white group-hover:animate-spin"></div>
            <Image
              src={image}
              alt="study image"
              width={100}
              height={100}
              className=" w-24 h-24 rounded-full bg-primary object-contain "
            />
          </div>}
          <div
            className={`${
              side == "left" ? "-ml-3 rounded-r-2xl pl-6 pr-2" : "-mr-3 rounded-l-2xl pr-6 pl-2"
            } w-6/12 h-14   bg-primary/25 flex items-center justify-start  group-hover:bg-primary group-hover:text-white`}
          >
            <Typography className="text-center text-sm sm:text-lg font-semibold" >
              {title}
            </Typography>
          </div>
          {side=="right" && <div className="relative ">
            <div className="absolute top-0 w-24 h-24 rounded-full border-dashed border-2 border-white group-hover:animate-spin"></div>
            <Image
              src={image}
              alt="study image"
              width={100}
              height={100}
              className=" w-24 h-24 rounded-full bg-primary object-contain "
            />
          </div>} 
        </div>
      </Link>
    );
  };
  return (
    <Theme>
      <Container className="py-4 sm:py-10 ">
        <Typography
          variant="h4"
          className=" font-bold text-start sm:text-center mb-4 text-2xl md:text-3xl"
        >
          Personal Journey
        </Typography>

        <div className="  flex flex-col justify-center">
          {RouteList?.map((item, index) => {
            return (
              <ProfileComponents
                key={index}
                side={item?.side}
                title={item?.title}
                image={item?.image}
                route={item?.route}
              />
            );
          })}
        </div>
      </Container>
    </Theme>
  );
}

export default page;
