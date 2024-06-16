import React from "react";
import Theme from "@/lib/Theme";
import { Container, Typography } from "@mui/material";

function page() {
  const content = [
    {
      date: "05.2024",
      content: `Fachkraft für Boden- und Gebäudeschadstoffe – Umgang mit Abfälle auf Baustellen, Umweltinstitut Offenbach GmbH`,
    },
    {
      date: "03.2023",
      content: `Probenahme LAGA PN 98, Umweltinstitut Offenbach GmbH`,
    },
    {
      date: "02.2023",
      content: `Sachkunde nach Nr. 2.7 Anlage 3 der TRGS 519, BauAkademie`,
    },
    {
      date: "02.2023",
      content: `Fachkunde TRGS 521, BauAkademie`,
    },
    {
      date: "01.2023",
      content: `Betriebsbeauftragter für Abfall zum Erhalt der Fachkunde, IWA`,
    },
    {
      date: "11.2021",
      content: `Fachkunde nach TRGS 520, Nr.5.2 Abs. 2, Anlage 3, TÜV SÜD`,
    },
  ];
  return (
    <Theme>
      <Container maxWidth="md" className="p-0">
        <div className="p-1 sm:p-10">
          <Typography
            variant="h4"
            className=" font-bold text-start sm:text-center mb-4 text-2xl md:text-3xl capitalize"
          >
            {` Fortbildung`}
          </Typography>
          {content?.map((item, index) => (
            <div className="mb-5" key={index}>
              <Typography variant="body1" component="h6" className="font-semibold">
                {item?.date}
              </Typography>
              <Typography variant="subtitle1" className="pl-5 sm:pl-10">
                {item?.content}
              </Typography>
            </div>
          ))}
        </div>
      </Container>
    </Theme>
  );
}

export default page;
