// components/Timeline.js
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { FaTrophy, FaGraduationCap } from "react-icons/fa";
import { MdSportsVolleyball } from "react-icons/md";
import "react-vertical-timeline-component/style.min.css";
import { Typography } from "@mui/material";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];
const Timeline = () => {
  const projectTimeLine = [
    {
      date: "2014",
      title: "Flächenrecycling eines ehemaligen Gießerei-Betriebes",
      description: `Gutachterliche Begleitung des Bodenmanagements und SiGeKo für die Hagedorn GmbH: Selektiver Rückbau von ehemaligen Produktions-, Verwaltungs- und Lagergebäuden; Vorerkundung von potenziellen Boden- und Grundwasserverunreinigungen; fachgerechte Sanierung verschiedener Bodenkontaminationen (PAK, MKW); Bergung unterirdischer Tanks; Recycling des unbelasteten Bauschutts vor Ort`,
      color: "#008088",
      textColor:"#fff",
      images: [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
      ],
    },
    {
      date: "2010-2011",
      title:
        "Sanierung eines Kupferschadens nach vorhergehendem Abbruch einer Industriebrache in Wuppertal",
      description: `Sanierungsbauleitung für die TVF Altwert GmbH: Selektiver Rückbau von ehemaligen Produktionsgebäuden; Entsorgung von 21 000 t Bauschutt (teilweise als RCL-Material vor Ort wieder eingebaut); Separierung und Entsorgung von 30 000 t Kupfer-belasteter Böden unter gleichzeitiger Sicherung einer Eisenbahnbrücke und der Wuppermauer; Wiederverfüllung der entstandenen Hohlform`,
      color: "gray",
      textColor:"#008088",
      images: [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
      ],
    },
    {
      date: "2008-2009",
      title: "Sanierung eines Gaswerkstandortes in Wuppertal",
      description: `Sanierungsbauleitung für die REMEX ProTerra GmbH: Rückbau von Teergruben und Fundamenten; Entsorgung von 24 000 t stark PAK-belasteter Böden unter gleichzeitiger Sicherung von Schwebebahnstützen`,
      color: "#008088",
      textColor:"#fff",
      images: [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
      ],
    },
  ];
  return (
    <>
      <VerticalTimeline animate={true} layout="1-column" lineColor="gray">
        {projectTimeLine?.map((item, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              visible={true}
              className="vertical-timeline-element--work"
              contentStyle={{ background: item.color, color: "#fff"}}
              contentArrowStyle={{
                borderRight: `7px solid ${item.color}`,
        
              }}
              date={item?.date}
              iconStyle={{ background: "#008088", color: "#fff"}}
              icon={<FaTrophy />}
            >
              <h3 className="vertical-timeline-element-title text-xl font-semibold">
                {item?.title}
              </h3>

              <Typography className="mb-3 text-xs" >
                {item?.description}
              </Typography>
              <div className="p-0 sm:p-6 mt-5 sm:mt-1">
                <ImageGallery items={item?.images} />
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
