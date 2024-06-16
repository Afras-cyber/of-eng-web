import BLODDATA from "@/lib/Data/BlogData";
import Theme from "@/lib/Theme";
import { Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Gallery from "./gallery";
function page({ params }: { params: { slug: string } }) {
  const thisContent = BLODDATA?.list?.filter((x) => x.slug == params?.slug)[0];

  return (
    <Theme>
      <Container maxWidth="md" className="p-0">
        <div className="p-1 sm:p-10">
          <Typography
            variant="h4"
            className=" font-bold text-start sm:text-center mb-4 text-2xl md:text-3xl"
          >
            {thisContent?.title}
          </Typography>

          {/* <Typography variant="body1" className="mb-2">
            Durchführung sämtlicher Koordinierungs- und Steuerungsleistungen zur
            Durchführung von Altlastenerkundung und -sanierung sowie Rückbau-
            und Flächenrecyclingmaßnahmen von ehemaligen Militärliegenschaften,
            Industriebrachen oder innerstädtischen Freiflächen im Rahmen
            städtebaulicher Entwicklungsmaßnahmen:
          </Typography> */}
          <ul className="list-disc pl-5 sm:pl-10 py-4 space-y-2">
            {thisContent?.content?.map((j, i) => (
              <li key={i}>
                <Typography variant="body1">{j.item}</Typography>
              </li>
            ))}
          </ul>
          {thisContent?.images && <Gallery Images={thisContent.images} />}
        </div>
      </Container>
    </Theme>
  );
}

export default page;
