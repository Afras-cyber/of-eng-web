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
            Zertifikate
          </Typography>
          {/* <div className="mb-5">
            <Typography variant="h6" component="h6" className="font-semibold">01.01.99</Typography>
            <Typography variant="subtitle1" className="pl-5 sm:pl-10">
              Freiberufliche Tätigkeit für verschiedene Auftraggeber
              entsprechend des Leistungsprofils ﻿
            </Typography>
          </div> */}

        </div>
      </Container>
    </Theme>
  );
}

export default page;
