import Theme from "@/lib/Theme";
import { Container, Typography } from "@mui/material";

import Link from "next/link";
import React from "react";

function page() {
  return (
    <Theme>
      <Container maxWidth="md" className="p-0">
        <div className="p-1 sm:p-10">
          {/* <Typography
            variant="h4"
            className=" font-bold text-start sm:text-center mb-4 text-2xl md:text-3xl capitalize"
          >
            Projekte
          </Typography>
          <Typography variant="body1" className="mt-3 mb-6">
            {`Dr. Anne ist eine angesehene Chemieingenieurin, die an einer Vielzahl von wegweisenden Projekten arbeitet. Ihre Forschung konzentriert sich auf die Entwicklung nachhaltiger chemischer Prozesse und innovativer Technologien zur Umwandlung von Abfallstoffen in wertvolle Ressourcen. Dr. Anne hat bedeutende Beiträge zur Verbesserung der Effizienz von Katalysatoren geleistet, was zu umweltfreundlicheren und kostengünstigeren Produktionsmethoden in der chemischen Industrie führt. Darüber hinaus engagiert sie sich in der Entwicklung von Materialien für die Energiespeicherung und -umwandlung, einschließlich fortschrittlicher Batterien und Brennstoffzellen. Ihre Arbeiten haben international Anerkennung gefunden und bieten vielversprechende Lösungen für einige der drängendsten Umweltprobleme unserer Zeit.`}
          </Typography> */}
          <div className="">
            {/* <Typography className="font-bold mb-2" variant="h6">
              Choose :
            </Typography> */}
            <Link href="/project/reference">
              <Typography
                variant="body1"
                className="w-full rounded-lg bg-primary text-white text-center py-2 px-5 cursor-pointer hover:bg-primary/75 mb-3"
              >
                Referenz-Projekte
              </Typography>
            </Link>
            <Link href="/project/details">
              <Typography
                variant="body1"
                className="w-full rounded-lg border-1 border-primary text-primary text-center py-2 px-5 cursor-pointer hover:bg-primary/75 hover:text-white"
              >
                Bilder ausgewählter Projekte
              </Typography>
            </Link>
          </div>
        </div>
      </Container>
    </Theme>
  );
}

export default page;
