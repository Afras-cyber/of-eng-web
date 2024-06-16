import React from "react";
import Theme from "@/lib/Theme";
import { Button, Container, Typography } from "@mui/material";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Image from "next/image";
function page() {
  const content = [
    {
      date: "11.2016",
      title: `Master of Engineering in Applied  Life Sciences, Hochschule Emden/Leer Schwerpunkte: Nachhaltige Verfahrensentwicklung und Biotechnologie`,
    },
    {
      date: "08.2014",
      title: `Bachelor of Engineering in Energieeffizienz, Hochschule Emden/ Leer Schwerpunkt: Optimierung chemischer Prozesse`,
    },
  ];
  const CertificateComponents = ({
    data,
  }: {
    data: { date: string; title: string };
  }) => {
    return (
      <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-4 group cursor-pointer shadow-lg rounded-b-md py-2 px-4 ">
        {/* <div>
          <Image src="/m1.png" width={100} height={100} alt="uni logo" />
        </div>
        <div className="w-full sm:w-[2px] h-[2px] sm:h-16 bg-primary my-3 " /> */}
        <div className="flex flex-col w-full sm:w-fit  items-start gap-1">
          <Typography variant="caption" className="">
          {data?.date}
          </Typography>
          <Typography
            variant="body1"
            className="group-hover:text-primary  "
          >
            {data?.title}
          </Typography>
          {/* <Typography variant="body2" className="">
            {`    Hauptfach: Geographie (Landschaftsökologie) Nebenfächer: Geologie,
            Mineralogie`}
          </Typography> */}
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

          <div className="space-y-4">
            {content.map((item, index) => (
              <CertificateComponents key={index} data={item} />
            ))}
          </div>
        </div>
      </Container>
    </Theme>
  );
}

export default page;
