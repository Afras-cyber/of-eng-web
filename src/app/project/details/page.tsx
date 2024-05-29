"use client";
import Theme from "@/lib/Theme";
import { Container, Typography } from "@mui/material";
import React from "react";
import Timeline from "./Timeline";

function Page() {
  return (
    <Theme>
      <Container maxWidth="md" className="p-0">
        <div className="pt-10">
          <Typography
            variant="h4"
            className=" font-bold text-start sm:text-center mb-4 text-2xl md:text-3xl capitalize"
          >
         Bilder ausgewählter Projekte
          </Typography>
        </div>
      </Container>
      <Timeline />
    </Theme>
  );
}

export default Page;
