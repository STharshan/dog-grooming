import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import LocationOn from '@mui/icons-material/LocationOn';
import Phone from '@mui/icons-material/Phone';
import Email from '@mui/icons-material/Email';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Certifications from "../Home/Certifications/Certifications";

export default function ContactPage() {
  return (
    <Box mt={5}>
      {/* Hero Section */}
      <Box
        sx={{
          mt:5,
          background: "linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ color: "#1976d2", fontWeight: 600, letterSpacing: 1 }}>
            Get in Touch
          </Typography>
          <Typography
            variant="h2"
            sx={{ color: "#1976d2", fontWeight: 700, mb: 3, fontSize: { xs: "2.5rem", md: "3.5rem" } }}
          >
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ color: "#666", maxWidth: 600, mx: "auto", lineHeight: 1.6 }}>
            Have questions about our dog grooming services?
          </Typography>
          <Typography variant="h6" sx={{ color: "#666", maxWidth: 700, mx: "auto", lineHeight: 1, mt:2 }}>
            We’d love to hear from you! Send us a message and we’ll get back to you as soon as possible to help you book or learn more.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
