import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import Header from "../components/Header.tsx";

const RegisterStudent: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    regNumber: "",
    contact: "",
    email: "",
    alYear: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Student Added:", form);
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: "90vh",
          width: "100%",
          background: "linear-gradient(to bottom, #e3f2fd, #bbdefb)",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          p: 3,
          pt: 8,
        }}
      >
        <Paper
          elevation={6}
          sx={{
            width: "90%",
            maxWidth: 1000,
            borderRadius: 4,
            p: 5,
            backgroundColor: "#fff",
          }}
        >
          {/* Title */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#1565c0",
              mb: 2,
            }}
          >
            Add New Student
          </Typography>

          <Divider
            sx={{
              borderBottomWidth: 2,
              borderColor: "#90caf9",
              mb: 4,
              width: "100%",
            }}
          />

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              {/* Row 1 — 3 Inputs */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 3,
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, color: "#1565c0", mb: 1 }}
                  >
                    Student Name
                  </Typography>
                  <TextField
                    placeholder="Enter full name"
                    name="name"
                    fullWidth
                    value={form.name}
                    onChange={handleChange}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        backgroundColor: "#f5f5f5",
                      },
                    }}
                  />
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, color: "#1565c0", mb: 1 }}
                  >
                    Registration Number
                  </Typography>
                  <TextField
                    placeholder="Enter reg number"
                    name="regNumber"
                    fullWidth
                    value={form.regNumber}
                    onChange={handleChange}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        backgroundColor: "#f5f5f5",
                      },
                    }}
                  />
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, color: "#1565c0", mb: 1 }}
                  >
                    Contact Number
                  </Typography>
                  <TextField
                    placeholder="Enter contact"
                    name="contact"
                    fullWidth
                    value={form.contact}
                    onChange={handleChange}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        backgroundColor: "#f5f5f5",
                      },
                    }}
                  />
                </Box>
              </Box>

              {/* Row 2 — 2 Inputs */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 3,
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, color: "#1565c0", mb: 1 }}
                  >
                    Email
                  </Typography>
                  <TextField
                    placeholder="Enter email"
                    name="email"
                    type="email"
                    fullWidth
                    value={form.email}
                    onChange={handleChange}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        backgroundColor: "#f5f5f5",
                      },
                    }}
                  />
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, color: "#1565c0", mb: 1 }}
                  >
                    A/L Year
                  </Typography>
                  <TextField
                    placeholder="Enter A/L year"
                    name="alYear"
                    fullWidth
                    value={form.alYear}
                    onChange={handleChange}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        backgroundColor: "#f5f5f5",
                      },
                    }}
                  />
                </Box>
              </Box>

              {/* Submit */}
              <Button
                type="submit"
                variant="contained"
                sx={{
                  alignSelf: "flex-start",
                  mt: 2,
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 600,
                  backgroundColor: "#1976d2",
                  boxShadow: "0 4px 12px rgba(25, 118, 210, 0.2)",
                  "&:hover": {
                    backgroundColor: "#1565c0",
                  },
                }}
              >
                Add Student
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </>
  );
};

export default RegisterStudent;
