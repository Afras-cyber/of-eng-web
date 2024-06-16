import React from "react";
import Theme from "@/lib/Theme";
import { Button, Container, Typography } from "@mui/material";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Link from "next/link";
function page() {
  const LinkArray = [
    {
      url: "http://www.itv-altlasten.de",
      description:
        "Ingenieurtechnischer Verband für Altlastenmanagement und Flächenrecycling",
    },
    {
      url: "http://www.umweltbundesamt.de",
      description: "Viele und umfassende Informationen zu allen Umweltthemen",
    },
    {
      url: "http://www.bgbau.de",
      description: "Berufsgenossenschaft der Bauwirtschaft",
    },
    {
      url: "http://www.baua.de",
      description: "Bundesanstalt für Arbeitsschutz und Arbeitsmedizin",
    },
    {
      url: "http://www.laga-online.de",
      description: "Bund-/Länder-Arbeitsgemeinschaft Abfall",
    },
    {
      url: "https://www.gesamtverband-schadstoff.de/",
      description: "FAS – Fachverband Schadstoffsanierung",
    },
  ];
  const LinkComponents = ({ item }: any) => {
    return (
      <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 group cursor-pointer shadow-xl rounded-b-2xl py-2 px-4 hover:scale-105 transform duration-400 justify-between">
        <div>
          <Typography className="group-hover:text-primary font-semibold text-xs sm:text-lg">
            {item?.url}
          </Typography>
          <Typography variant="body2" className="">
            {item.description}
          </Typography>
        </div>
        {/* <div className="w-full sm:w-[2px] h-[2px] sm:h-10 bg-primary my-3 " /> */}
        <div className="bg-gray-100 flex flex-row w-full sm:w-fit justify-center items-center gap-3">
          <Link href={item?.url} target="_blank">
            <Button size="small" variant="contained">
              Visit
            </Button>
          </Link>
        </div>
      </div>
    );
  };
  return (
    <Theme>
      <Container maxWidth="sm" className="p-0">
        <div className="p-1 sm:p-10">
          <Typography
            variant="h4"
            className=" font-bold text-start sm:text-center mb-4 text-2xl md:text-3xl capitalize"
          >
            Links
          </Typography>

          <div className="space-y-4">
            {LinkArray.map((item, index) => (
              <LinkComponents key={index} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </Theme>
  );
}

export default page;
