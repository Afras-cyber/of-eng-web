import React from "react";
import Theme from "@/lib/Theme";
import { Button, Container, Typography } from "@mui/material";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Image from "next/image";
function page() {
  const CertificateComponents = () => {
    return (
      <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-4 group cursor-pointer shadow-lg rounded-b-md py-2 px-4 ">
        <div>
          <Image src="/m1.png" width={100} height={100} alt="uni logo" />
          {/* <Typography variant="body1" className="group-hover:text-primary font-semibold ">
        Sicherheit und Gesundheitsschutz 
      </Typography>
      <Typography variant="body2" className="">
        Sicherheit und Gesundheitsschutz bei Arbeiten in kontaminierten
        Bereichen für Bauleiter und Koordinatoren 
        Sicherheit und Gesundheitsschutz bei Arbeiten in kontaminierten
        Bereichen für Bauleiter und Koordinatoren </Typography>
      <Typography variant="caption" className="">2023/06/05</Typography> */}
        </div>
        <div className="w-full sm:w-[2px] h-[2px] sm:h-16 bg-primary my-3 " />
        <div className="flex flex-col w-full sm:w-fit  items-start gap-1">
          <Typography variant="caption" className="">
            Oktober 1987
          </Typography>
          <Typography
            variant="body1"
            className="group-hover:text-primary font-semibold "
          >
        {`    Immatrikulation an der Westfälischen Wilhelms-Universität, Münster`}
          </Typography>
          <Typography variant="body2" className="">
        {`    Hauptfach: Geographie (Landschaftsökologie) Nebenfächer: Geologie,
            Mineralogie`}
          </Typography>
        </div>
      </div>
    );
  };
  return (
    <Theme>
      <Container maxWidth="md" className="p-0">
        <div className="p-1 sm:p-10">
          <Typography
            variant="h4"
            className=" font-bold text-start sm:text-center mb-4 text-2xl md:text-3xl capitalize"
          >
            Studium
          </Typography>
          {/* <div className="mb-5">
            <Typography variant="h6" component="h6" className="font-semibold">01.01.99</Typography>
            <Typography variant="subtitle1" className="pl-5 sm:pl-10">
              Freiberufliche Tätigkeit für verschiedene Auftraggeber
              entsprechend des Leistungsprofils ﻿
            </Typography>
          </div> */}
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((item ,index) => (
              <CertificateComponents key={index} />
            ))}
          </div>
        </div>
      </Container>
    </Theme>
  );
}

export default page;
