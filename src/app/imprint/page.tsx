import React from "react";
import Theme from "@/lib/Theme";
import { Button, Container, Divider, Typography } from "@mui/material";
import { FaCloudDownloadAlt, FaPhone, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import WebsiteData from "@/lib/Data/WebsiteData";
import QuickLinksData from "@/lib/Data/QuickLinksData";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";
function page() {
  return (
    <Theme>
      <Container maxWidth="sm" className="p-0">
        <div className="p-1 sm:px-2 sm:mb-10">
          <Typography
            variant="h4"
            className=" font-bold text-start sm:text-center mb-4 text-2xl md:text-3xl capitalize"
          >
            Impressum
          </Typography>

          <div className="">
            {/* <Typography variant="body1" className="font-semibold">
              Address :
            </Typography> */}
            <Typography
              variant="body1"
              className="mb-4 text-left font-title flex justify-start"
              //   component="address"
            >
              {`Olivier Fargeon`} <br />
             {` Humboldtstraße 9 `}<br />
             {` 84453 Mühldorf am Inn`}
            </Typography>
          </div>
          <div className="flex items-center space-x-1">
            <Typography>Telefon:</Typography>
            {/* <TbDeviceLandlinePhone className="text-primary" />{" "} */}
            <Typography
              component="p"
              variant="body1"
              className="px-2 font-title"
            >
              {WebsiteData.tel}
            </Typography>{" "}
          </div>
          <div className="flex items-center space-x-1">
            <Typography>Mobil:</Typography>
            {/* <FaPhoneAlt className="text-primary" /> */}
            <Typography
              component="p"
              variant="body1"
              className="px-2 font-title"
            >
              {WebsiteData.mobile}
            </Typography>
          </div>
          <div className="flex items-center space-x-1 ">
            <Typography>E-Mail:</Typography>
            {/* <IoIosMail className="text-xl text-primary" /> */}
            <Typography
              component="p"
              variant="body1"
              className="px-2 font-title"
            >
              {WebsiteData.email}
            </Typography>{" "}
          </div>
        </div>
        <div className="border-2 border-dashed  border-gray-400" />
        <Typography
          component="p"
          variant="body1"
          className="px-2 my-3 font-title"
        >
         Ust-IdNr.: DE364189355
        </Typography>
        <div className="mb-6">
          <Typography className="font-bold" variant="body1">
            Haftungshinweis:
          </Typography>
          <Typography variant="body1" className="p-2">
           {` Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
            Haftung für die Inhalte externer Links. Für den Inhalt der
            verlinkten Seiten sind ausschließlich deren Betreiber
            verantwortlich.`}
          </Typography>
        </div>
        <div>
          <Typography className="font-bold" variant="body1">
            {`Erklärung zum Datenschutz:`}
          </Typography>
          <Typography variant="body1" className="p-2">
        {`    Personenbezogene Daten: Innerhalb dieser Internetpräsenz besteht die
            Möglichkeit, uns personenbezogene Daten zu übermitteln.
            "Personenbezogene Daten" sind Informationen, die genutzt werden
            können, um Ihre Identität zu erfahren. Darunter fallen Informationen
            wie Ihr Name, Adresse, Postanschrift, Telefonnummer, Email-Adresse.`}
            <br/>
            <br/>
           {` Hinsichtlich Ihrer personenbezogenen Daten weisen wir darauf hin,
            dass diese nach Maßgabe der anwendbaren Datenschutzbestimmungen
            gespeichert und/oder übertragen werden. Im Übrigen werden
            personenbezogene Daten absolut vertraulich behandelt und nur mit
            gesonderter Zustimmung an Dritte weitergeleitet. Wir weisen Sie
            ausdrücklich darauf hin, dass der Datenschutz in offenen Netzen wie
            dem Internet nach dem derzeitigen Stand der Technik nicht
            vollständig gewährleistet werden kann. Wir wissen das Vertrauen zu
            schätzen, das Sie uns entgegenbringen, und wenden äußerste Sorgfalt
            an, um Ihre persönlichen Angaben zu schützen. Wenn Sie Fragen haben,
            können Sie sich auch direkt an uns wenden.`}
          </Typography>
        </div>
      </Container>
    </Theme>
  );
}

export default page;
