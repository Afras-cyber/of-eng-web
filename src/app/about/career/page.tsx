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
            beruflicher Werdegang
          </Typography>
          <div className="mb-5">
            <Typography variant="h6" component="h6" className="font-semibold">01.01.99</Typography>
            <Typography variant="subtitle1" className="pl-5 sm:pl-10">
              Freiberufliche Tätigkeit für verschiedene Auftraggeber
              entsprechend des Leistungsprofils ﻿
            </Typography>
          </div>
          <div className="mb-5">
            <Typography variant="h6" component="h6" className="font-semibold">01.08.93 - 31.12.98</Typography>
            <Typography variant="subtitle1" className="pl-5 sm:pl-10">
            Projektingenieur in der Dr. Thomas Gesellschaft für Umwelt-System-Analyse mbH in Iserlohn mit folgenden Tätigkeitsfeldern:
            </Typography>
            <ul className="list-disc pl-10 sm:pl-20 py-4 space-y-2">
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
        </div>
      </Container>
    </Theme>
  );
}

export default page;
