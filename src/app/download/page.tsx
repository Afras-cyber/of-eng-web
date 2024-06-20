import React from "react";
import Theme from "@/lib/Theme";
import { Container, IconButton, Typography } from "@mui/material";
import { FaCloudDownloadAlt } from "react-icons/fa";

function page() {
  const content = [
    {
      title: `Anlage 1.1 Unternehmensbezogene Anzeige zu Tätigkeiten mit asbesthaltigen Materialien`,
      subtitle: `(gemäß Anhang I Nr. 2.4.2 GefStoffV und Nummer 3.2 TRGS 519) – Microsoft Word`,
      path: "/pdf/TRGS-519-Anlage-1-1.doc",
    },
    {
      title: `Anlage 1.2 Ergänzende Anzeige von Ort und Zeit zur unternehmensbezogenen Anzeige für Tätigkeiten geringen Umfangs mit asbesthaltigen Materialien`,
      subtitle: `(gemäß Anhang I Nr. 2.4.2 GefStoffV und Nummer 3.2 TRGS 519) – Microsoft Word`,
      path: "/pdf/TRGS-519-Anlage-1-2.doc",
    },
    {
      title: `Anlage 1.3 Objektbezogene Anzeige zu Tätigkeiten mit asbesthaltigen  Materialien`,
      subtitle: `(gemäß Anhang I Nr. 2.4.2 GefStoffV und Nummer 3.2 TRGS 519) – Microsoft Word`,
      path: "/pdf/TRGS-519-Anlage-1-3.doc",
    },
  ];
  const CertificateComponents = ({
    data,
  }: {
    data: { title: string; subtitle: string; path: string };
  }) => {
    return (
      <div className="flex flex-col sm:flex-row items-start cursor-pointer py-2 px-4 ">
        <div className="flex flex-1 flex-col">
          <Typography
            variant="body1"
            className="text-base sm:text-lg font-semibold mb-1"
          >
            {data?.title}
          </Typography>
          <Typography variant="body2" className="">
            {data?.subtitle}
          </Typography>
        </div>
        <div className="w-full sm:w-[2px] h-[2px] sm:h-10 bg-primary my-3 sm:my-0 sm:mx-3 " />
        <div className="flex flex-row w-full sm:w-fit justify-center items-center gap-3">
          <a href={data?.path} download>
            <IconButton>
              <FaCloudDownloadAlt className="text-primary text-3xl" />
            </IconButton>
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
            className=" font-bold text-start sm:text-center mb-2 text-2xl md:text-3xl capitalize"
          >
            Downloads
          </Typography>

          {/* <Typography
            variant="body1"
            className="  text-start sm:text-center mb-4"
          >
            Here I would like to make some documents available for download
          </Typography> */}
        </div>
        <section>
          <Typography variant="body2" className="  text-start mb-4">
            Muster, Informationen{" "}
          </Typography>
          {content?.map((item, j) => {
            return <CertificateComponents key={j} data={item} />;
          })}
        </section>
      </Container>
    </Theme>
  );
}

export default page;
