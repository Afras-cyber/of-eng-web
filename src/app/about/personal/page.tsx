import React from "react";
import Theme from "@/lib/Theme";
import { Container, Typography } from "@mui/material";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

function page() {
  return (
    <Theme>
      <Container maxWidth="md" className="p-0">
        <div className="p-4">
          <Image
            src="/profile.png"
            alt="profile image"
            width={200}
            height={200}
            className="sm:hidden w-full object-contain rounded-lg shadow-2xl"
          />
        </div>
        <Typography
            variant="h4"
            className=" font-bold text-start sm:text-center mb-4 text-2xl md:text-3xl capitalize"
          >
            Persönliches
          </Typography>
        <div className="grid grid-cols-12 grid-flow-row">
          <div className="col-span-12 sm:col-span-8">
            {/* <Typography className="text-2xl sm:text-5xl font-bold text-primary">
              Jens-Henning Müller
            </Typography>
            <div className="flex items-center gap-2">
              <Typography className="text-lg sm:text-2  xl">
                Diplom-Geograph
              </Typography>
              <Link href="https://www.linkedin.com/" target="_blank">
                <FaLinkedin className="text-xl text-primary" />
              </Link>
            </div>
            <Typography variant="body2" className="mt-3">
            {`  Dr. Anna Müller is a distinguished chemical engineer based in
              Germany, renowned for her exceptional talent and comprehensive
              education. With a Ph.D. in Chemical Engineering from the Technical
              University of Munich, Anna has consistently demonstrated her
              expertise in developing innovative solutions for complex
              industrial processes. Her extensive experience spans across
              leading-edge research in sustainable materials, advanced
              catalysis, and process optimization. Anna's work has been widely
              published in prestigious journals, and she frequently presents at
              international conferences. Her dedication to excellence and her
              passion for driving technological advancements make her a valuable
              asset to the field of chemical engineering.`}
            </Typography> */}
            <table className="my-3">
              <tbody>
                <tr>
                  <td>
                    <Typography component="div" variant="body1" className="">
                      <b>Name</b>
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      component="div"
                      variant="body1"
                      className="pl-3 mb-1"
                    >
                      {`Fargeon`}
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography component="div" variant="body1" className="">
                      <b>Vorname</b>
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      component="div"
                      variant="body1"
                      className="pl-3 mb-1"
                    >
                      {`Olivier`}
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography component="div" variant="body1" className="">
                      <b>Adresse</b>
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      component="div"
                      variant="body1"
                      className="pl-3 mb-1"
                    >
                      {`Humboldtstraße 9, 84453 Mühldorf am Inn`}
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography component="div" variant="body1" className="">
                      <b>Geburtsdatum</b>
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="body1" className="pl-3 mb-1">
                      {`13.08.1987`}
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography variant="body1" className="">
                      <b>Familienstand</b>
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="body1" className="pl-3 mb-1">
                      {`verheiratet, 3 Kinder`}
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography variant="body1" className="">
                      <b>Hobbies</b>
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="body1" className="pl-3 mb-1">
                      {`Sport, aktiv: Fußball, Taekwondo`}
                    </Typography>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="hidden col-span-4  sm:flex justify-center items-start">
            <Image
              src="/profile.png"
              alt="profile image"
              width={200}
              height={200}
              className="w-56 h-56 rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </Theme>
  );
}

export default page;
