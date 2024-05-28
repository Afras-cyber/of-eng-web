import Theme from "@/lib/Theme";
import { Typography, Container } from "@mui/material";

import React from "react";
import ProjectTable from './ProjectTable'

function page() {
  const ProjectComponents = () => {
    return (
      <div className="p-3 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <div></div>
          <Typography variant="caption">07th July 2010</Typography>
        </div>
        <Typography varient="body1" className="font-bold text-xl">
          Indoor air searches in stock
        </Typography>
        <div className="flex gap-3 flex-wrap my-3">
          <Typography className="text-xs py-1 px-3 bg-primary/25 text-black rounded-xl w-fit">
            Sapmpling
          </Typography>

          <Typography className="text-xs py-1 px-3 bg-primary/25 text-black rounded-xl w-fit">
            planning
          </Typography>
          <Typography className="text-xs py-1 px-3 bg-primary/25 text-black rounded-xl w-fit">
            estimate
          </Typography>
        </div>
        <Typography className="font-bold text-sm">
          Bad Salzuflen, Germany
        </Typography>
        <Typography className="mt-2 mb-1 text-xs   ">
          {`Das Projekt umfasst die Probenahme zur Identifikation von Schadstoffen, die Erstellung eines Risikogutachtens, die Anfertigung eines Schadstoffkatasters für das Gebäude sowie die detaillierte Abrissplanung und -dokumentation. Ziel ist es, alle gefährlichen Materialien sicher zu erfassen, zu bewerten und ordnungsgemäß zu entsorgen, um die Sicherheit der Arbeiter zu gewährleisten und die Umweltbelastung zu minimieren.`}
        </Typography>
        <Typography variant="caption" className="font-semibold text-primary">
          VMC, Bad Salzuflen
        </Typography>
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
            Referenz-Projekte
          </Typography>
          <section>
            <Typography variant="h6">Active Projects</Typography>
            <div className="grid grid-row-1  md:grid-cols-2 md:grid-flow-row gap-3">
              {[1, 2]?.map((_, index) => {
                return <ProjectComponents key={index} />;
              })}
            </div>
          </section>

          <section className="my-8">
            <Typography variant="h6">All Projects</Typography>
            <div className="py-4">

           <ProjectTable/>
            </div>
          </section>
        </div>
       
      </Container>
    </Theme>
  );
}

export default page;
