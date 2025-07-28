import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  Checkbox,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Certifications from "../Home/Certifications/Certifications";
import DogGroomingForm from "../Services/DogGroomingForm";

export default function BookNow() {
  const [course, setCourse] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <Box mt={5}>
      {/* Hero Section */}
      <DogGroomingForm />
    </Box>
  );
}
