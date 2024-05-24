'use client'
import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#008088",
    }
  },
  typography:{

    fontFamily: "\"Poppins\", \"Helvetica\", \"Arial\", sans-serif"
  }
});
function Theme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
