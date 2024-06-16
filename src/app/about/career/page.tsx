import React from "react";
import Theme from "@/lib/Theme";
import { Container, Typography } from "@mui/material";

function page() {
  return (
    <Theme>
      <Container maxWidth="md" className="p-0">
        <div className="p-1 sm:p-10">
          <Typography
            variant="h4"
            className=" font-bold text-start sm:text-center mb-4 text-2xl md:text-3xl capitalize"
          >
            Beruflicher Werdegang
          </Typography>
          <div className="mb-5">
            <Typography variant="h6" component="h6" className="font-semibold">
              {`Seit 01.08.2023`}
            </Typography>
            <Typography variant="subtitle1" className="pl-5 sm:pl-10">
              {` Freiberufliche Tätigkeit für verschiedene Auftraggeber entsprechend des Leistungsprofils`}
            </Typography>
          </div>
          <div className="mb-5">
            <Typography variant="h6" component="h6" className="font-semibold">
              {`Seit 01.10.2020`}
            </Typography>
            <Typography variant="subtitle1" className="pl-5 sm:pl-10">
              {` Betriebsbeauftragter für Abfall, Gewässerschutz und Altlasten bei der BayernChemie Gesellschaft für flugchemische Antriebe mbH`}
            </Typography>
          </div>
          <div className="mb-5">
            <Typography variant="h6" component="h6" className="font-semibold">
              {`01.07.2018 – 30.09.2020`}
            </Typography>
            <Typography variant="subtitle1" className="pl-5 sm:pl-10">
              {` Qualitäts- und Konfigurationsmanager bei der Bayern-Chemie Gesellschaft für flugchemische Antriebe mbH`}
            </Typography>
          </div>
        </div>
      </Container>
    </Theme>
  );
}

export default page;
