import React from "react";
import Theme from "@/lib/Theme";
import { Button, Container, Typography } from "@mui/material";
import { FaCloudDownloadAlt } from "react-icons/fa";

function page() {
  const content = [
    {
      title: `Probenehmer-Zertifikatslehrgang – Anforderungen an die Probenahme im gesetzlich geregelten Umweltbereich`,
      path: `/pdf/z1.pdf`,
    },
    {
      title: `Fachkraft für Boden- und Gebäudeschadstoffe - Umgang mit Abfällen auf Baustellen`,
      path: `/pdf/Fachkraft.pdf`,
    },
    {
      title: `Probenehmer nach LAGA PN 98`,
      path: `/pdf/Probenehmer.pdf`,
    },
    {
      title: "Sachkunde nach Nr. 2.7 Anlage 3 der TRSG 519",
      path: `/pdf/Sachkunde_nach.pdf`,
    },
    {
      title: "Sachkunde TRSG 521",
      path: `/pdf/Sachkunde_TRSG.pdf`,
    },
    {
      title: "Betriebsbeauftragter für Abfall",
      path: `/pdf/Betriebsbeauftragter.pdf`,
    },
    {
      title: `Fachkunde zum Umgang mit gefährlichen  Abfällen gemäß TRGS 520, Nr. 5.2 Abs. 2, Anlage 3`,
      path: "/pdf/Fachkunde.pdf",
    },
  ];

  const CertificateComponents = ({ data }: { data: { title: string; path: string } }) => {
    return (
      <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-4 group cursor-pointer shadow-xl rounded-b-2xl py-2 px-4 hover:scale-105 transform duration-400">
        <div className="flex flex-1">
          <Typography
            variant="body1"
            className="group-hover:text-primary font-semibold "
          >
            {data?.title}
          </Typography>
        </div>
        <div className="flex flex-row w-full sm:w-fit justify-center items-center gap-3">
          <a href={data?.path} download>
            <FaCloudDownloadAlt className="text-primary text-3xl" />
          </a>
          <a href={data?.path} target="_blank" rel="noopener noreferrer">
            <Button size="small" variant="contained">
              View
            </Button>
          </a>
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
            Zertifikate 
          </Typography>

          <div className="space-y-4">
            {content.map((item, index) => (
              <CertificateComponents data={item} key={index} />
            ))}
          </div>
        </div>
      </Container>
    </Theme>
  );
}

export default page;
