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
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebaseConfig";

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

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  company: Yup.string().required("Firma is required"),
  address: Yup.string().required("Adresse is required"),
  email: Yup.string()
    .email("E-Mail-Adresse is invalid")
    .required("E-Mail-Adresse is required"),
  message: Yup.string().required("Nachricht is required"),
});

const ContactForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });

  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<any>();

  const SendMail = async (formData: any) => {
    const emailResponse = await fetch("/api/submit-form", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (emailResponse.ok) {
      setOpenDialog(true);
     
    } else {
      console.error("Email submission failed.");
    }
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // if (!recaptchaValue) {
      try {
        if (uploadedFile) {
          const storageRef = ref(storage, `emails/${uploadedFile.name}`);
          const uploadTask = uploadBytesResumable(storageRef, uploadedFile);
          await uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log(progress);
            },
            (error) => {
              console.error("Upload failed:", error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                const formData = {
                  name: data.name,
                  company: data.company,
                  address: data.address,
                  email: data.email,
                  telephone: data.telephone || "",
                  fax: data.fax || "",
                  message: data.message,
                  documentUrl: downloadURL,
                };
                console.log(JSON.stringify(formData, null, 2));
                SendMail(formData);
              });
            }
          );
        } else {
          const formData = {
            name: data.name,
            company: data.company,
            address: data.address,
            email: data.email,
            telephone: data.telephone || "",
            fax: data.fax || "",
            message: data.message,
            documentUrl: null,
          };
          console.log(JSON.stringify(formData, null, 2));
          SendMail(formData);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    // } else {
    //   alert("Please complete the reCAPTCHA");
    // }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    reset(); // Clear the form
    window.location.reload();
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
                      type="file"
                      onChange={(e: any) => setUploadedFile(e.target.files[0])}
                    />
                  </div>
                )}
              />
            </Box>
            <Box mb={2}>
              <ReCAPTCHA
                sitekey="6LdwYAwqAAAAAOOVGxbzgJpr8NC2tLWBok3y5rNh"
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

export default ContactForm;
