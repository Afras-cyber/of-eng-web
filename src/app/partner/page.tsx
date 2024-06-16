import React from "react";
import Theme from "@/lib/Theme";
import { Button, Container, IconButton, Typography } from "@mui/material";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Link from "next/link";
function page() {
 
  return (
    <Theme>
      <Container maxWidth="md" className="p-0">
        <div className="p-1 sm:p-10">
          <Typography
            variant="h4"
            className=" font-bold text-start sm:text-center mb-2 text-2xl md:text-3xl capitalize"
          >
            Partner
          </Typography>

          {/* <Typography
            variant="body1"
            className="  text-start sm:text-center mb-4"
          >
            Here I would like to make some documents available for download
          </Typography> */}
        </div>

        <section>
          <Typography variant="body1" className="text-xl  text-start mb-4">
            GBA Analytical Services GmbH{" "}
            <Link target="_blank" className="text-primary mx-3  font-semibold " href="https://www.gba-group.com/environment/standorte/vaterstetten/">View the page</Link>
          </Typography>
        </section>
      </Container>
    </Theme>
  );
}

export default page;
