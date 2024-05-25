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
            Fortbildung
          </Typography>
          {/* <div className="mb-5">
            <Typography variant="h6" component="h6" className="font-semibold">01.01.99</Typography>
            <Typography variant="subtitle1" className="pl-5 sm:pl-10">
              Freiberufliche Tätigkeit für verschiedene Auftraggeber
              entsprechend des Leistungsprofils ﻿
            </Typography>
          </div> */}
          <div className="mb-5">
            {/* <Typography variant="h6" component="h6" className="font-semibold">01.08.93 - 31.12.98</Typography>
            <Typography variant="subtitle1" className="pl-5 sm:pl-10">
            Projektingenieur in der Dr. Thomas Gesellschaft für Umwelt-System-Analyse mbH in Iserlohn mit folgenden Tätigkeitsfeldern:
            </Typography> */}
            <ul className="list-disc pl-10 sm:pl-20 py-4 space-y-2">
              <li>
                <Typography variant="body1">
                  Sachkundelehrgang "Sicherheit und Gesundheitsschutz bei
                  Arbeiten in kontaminierten Bereichen für Bauleiter und
                  Koordinatoren", Tiefbau-BG, November 1997
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Tagesseminar "Verwertungsmanagement für Bodenmaterial - eine
                  Zukunftsaufgabe für die Bau- und Entsorgungswirtschaft,
                  Kommunen und andere Dienstleister", DEKRA-Akademie, März 1999
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Tagesseminar "Sicherheitsplanungen nach TRGS 524 und ZH 1/183
                  - Baustellenverordnung", BEW-Bildungszentrum für die
                  Entsorgungs- und Wasserwirtschaft GmbH, Mai 1999
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Seminar "Sicherheits- und Gesundheitsschutzkoordinator (TAR)
                  nach der Baustellenverordnung (BaustellV)", TÜV-Akademie
                  Rheinland GmbH, April 2000
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Lehrgang "Sachverständige für Altlasten", Technische Akademie
                  Esslingen, Mai 2000
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Seminar "Gefährdungsabschätzung und Sanierung von Altlasten",
                  BEW-Bildungszentrum für die Entsorgungs- und Wasserwirtschaft
                  GmbH, September 2000
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Seminar "VOB-Seminar", Technische Akademie Esslingen, Oktober
                  2002
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Seminar "Künstliche Mineralfasern (KMF), KMF-Altprodukte,
                  Einstufung und Ermittlung von Schutzmaßnahmen", IGUTEC -
                  Ingenieurgemeinschaft für Umwelttechnologien GmbH, Oktober
                  2004
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Sachkundelehrgang: "TRGS 519 - Asbestabbruch, Sanierung und
                  Instandhaltung von Asbestzementprodukten im Hoch - und
                  Tiefbau", BAU-ABC Rostrup, März 2005
                </Typography>
              </li>
            </ul>
            <div className="mb-5">
              <Typography
                variant="h6"
                component="h6"
                className="font-semibold"
              >
                Veröffentlichung:
              </Typography>
              <Typography variant="subtitle1" className="pl-5 sm:pl-10">
                Erlebach, K.-J; Müller, J.-H. (1998): Innerstädtisches
                Flächenrecycling auf dem Gelände der ehemaligen Heidekaserne in
                Halle/Saale - Aufgaben des Projektmanagements. In: Verlag
                Glückauf GmbH (Hrsg.): BrachFlächenRecycling; 5. Jahrgang, 4/98,
                Essen ﻿
              </Typography>
            </div>
            <Typography
              variant="subtitle1"
              className="pl-5 sm:pl-10"
            ></Typography>
          </div>
        </div>
      </Container>
    </Theme>
  );
}

export default page;
