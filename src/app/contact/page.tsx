"use client";
import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  Button,
  Container,
  TextField,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import Theme from "@/lib/Theme";

// Define the form data type
interface IFormInput {
  name: string;
  company: string;
  address: string;
  email: string;
  telephone?: string;
  fax?: string;
  message: string;
  document?: FileList;
}

// Validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  company: Yup.string().required("Firma is required"),
  address: Yup.string().required("Adresse is required"),
  email: Yup.string()
    .email("E-Mail-Adresse is invalid")
    .required("E-Mail-Adresse is required"),
  // telephone: Yup.string().required("Telephone is required"),
  // fax: Yup.string(), // Fax is optional
  message: Yup.string().required("Nachricht is required"),
  // document: Yup.mixed().required("Document is required"), // Uncomment if the document is mandatory
});

const Page: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });

  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (recaptchaValue) {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("company", data.company);
      formData.append("address", data.address);
      formData.append("email", data.email);
      formData.append("telephone", data.telephone || "");
      formData.append("fax", data.fax || "");
      formData.append("message", data.message);
      if (data.document && data.document.length > 0) {
        formData.append("document", data.document[0]);
      }

      // Handle form submission (e.g., send the data to your backend)
      try {
        const response = await fetch("/api/submit-form", {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          setOpenDialog(true);
        } else {
          console.error("Form submission failed.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      alert("Please complete the reCAPTCHA");
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Theme>
      <div className="p-1 sm:p-10">
        <Typography
          variant="h4"
          className="font-bold text-start sm:text-center mb-4 text-2xl md:text-3xl capitalize"
        >
          Kontakt
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
                    label="Name*"
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
                    label="Firma*"
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
                    label="Adresse*"
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
                    label="E-Mail-Adresse*"
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
                    label="Telefon"
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
                    label="Nachricht*"
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
            <Box mb={2}>
              <Controller
                name="document"
                control={control}
                render={({ field }) => (
                  <div className="flex flex-row gap-6">
                    <Typography>Bilder</Typography>
                    <input
                      {...field}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => field.onChange(e.target.files)}
                    />
                  </div>
                )}
              />
            </Box>
            <Box mb={2}>
              <ReCAPTCHA
                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                onChange={(value) => setRecaptchaValue(value)}
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

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Success</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Your message has been successfully sent.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Theme>
  );
};

export default Page;
