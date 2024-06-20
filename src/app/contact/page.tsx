"use client";
import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Button, Container, TextField, Typography, Box } from "@mui/material";
import Theme from "@/lib/Theme";

// Define the form data type
interface IFormInput {
  name: string;
  company: string;
  address: string;
  email: string;
  telephone: string;
  fax?: string;
  message: string;
}

// Validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  company: Yup.string().required("Company is required"),
  address: Yup.string().required("Address is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  telephone: Yup.string().required("Telephone is required"),
  fax: Yup.string(), // Fax is optional
  message: Yup.string().required("Message is required"),
});

const Page: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <Theme>
      <div className="p-1 sm:p-10">
        <Typography
          variant="h4"
          className="font-bold text-start sm:text-center mb-4 text-2xl md:text-3xl capitalize"
        >
          Contact Us
        </Typography>

        <Typography className="text-xs sm:text-sm mb-5 text-justify">
          {`Wir würden uns freuen, von Ihnen zu hören! Ob Sie Fragen, Feedback oder Ideen haben, die Sie mit uns teilen möchten, unsere "Kontaktieren Sie uns"-Seite macht es Ihnen leicht, uns zu erreichen. Bitte füllen Sie das Formular mit Ihrem Namen, Ihrer Firma, Ihrer Adresse, Ihrer E-Mail, Ihrer Telefonnummer und Ihrer Nachricht aus. Ihr Beitrag ist uns wichtig, und wir freuen uns darauf, Ihre Gedanken und Ideen zu hören. Zögern Sie nicht, uns zu kontaktieren!`}
        </Typography>
        <Container maxWidth="sm" className="p-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box mb={2}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    variant="outlined"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name ? errors.name.message : ""}
                  />
                )}
              />
            </Box>
            <Box mb={2}>
              <Controller
                name="company"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Company"
                    variant="outlined"
                    fullWidth
                    error={!!errors.company}
                    helperText={errors.company ? errors.company.message : ""}
                  />
                )}
              />
            </Box>
            <Box mb={2}>
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Address"
                    variant="outlined"
                    fullWidth
                    error={!!errors.address}
                    helperText={errors.address ? errors.address.message : ""}
                  />
                )}
              />
            </Box>
            <Box mb={2}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ""}
                  />
                )}
              />
            </Box>
            <Box mb={2}>
              <Controller
                name="telephone"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Telephone"
                    variant="outlined"
                    fullWidth
                    error={!!errors.telephone}
                    helperText={
                      errors.telephone ? errors.telephone.message : ""
                    }
                  />
                )}
              />
            </Box>
            <Box mb={2}>
              <Controller
                name="fax"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Fax"
                    variant="outlined"
                    fullWidth
                    error={!!errors.fax}
                    helperText={errors.fax ? errors.fax.message : ""}
                  />
                )}
              />
            </Box>
            <Box mb={2}>
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    error={!!errors.message}
                    helperText={errors.message ? errors.message.message : ""}
                  />
                )}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="py-2"
            >
              Submit
            </Button>
          </form>
        </Container>
      </div>
    </Theme>
  );
};

export default Page;
