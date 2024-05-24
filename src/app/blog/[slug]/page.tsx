import Theme from "@/lib/Theme";
import { Container, Typography } from "@mui/material";
import React from "react";

function page() {
  return (
    <Theme>
      <Container maxWidth="md" className="p-0">
        <div className="p-1 sm:p-10">
          <Typography
            variant="h4"
            className=" font-bold text-start sm:text-center mb-4 text-2xl md:text-3xl"
          >
            Projektmanagement
          </Typography>

          <Typography variant="body1" className="mb-2">
            Durchführung sämtlicher Koordinierungs- und Steuerungsleistungen zur
            Durchführung von Altlastenerkundung und -sanierung sowie Rückbau-
            und Flächenrecyclingmaßnahmen von ehemaligen Militärliegenschaften,
            Industriebrachen oder innerstädtischen Freiflächen im Rahmen
            städtebaulicher Entwicklungsmaßnahmen:
          </Typography>
          <ul className="list-disc pl-5 sm:pl-10 py-4 space-y-2">
            <li>
              <Typography variant="body1">
                Fachtechnische Begleitung und zielorientierte Planung der
                Gesamtmaßnahme
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Auswahlentscheidungen über die ökologisch und ökonomisch
                zweckmäßigsten Untersuchungs-, Sanierungs- und Rückbauverfahren
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Interdisziplinäre Steuerung aller notwendigen Einzelaktivitäten
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Erstellung von Maßnahmen-, Zeit- und Kostenplänen
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Erarbeitung und Abstimmung von Rückbau-, Sanierungs- und
                Sicherungskonzepten
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Durchführung der erforderlichen Genehmigungs- und
                Ausführungsplanung in direktem Kontakt mit den entsprechenden
                Fachbehörden
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Vorbereitung von Ausschreibungen und Mitwirkung bei der Vergabe
              </Typography>
            </li>
          </ul>
        </div>
      </Container>
      
    </Theme>
  );
}

export default page;
