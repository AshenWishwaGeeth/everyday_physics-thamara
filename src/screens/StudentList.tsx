import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
} from "@mui/material";
import Header from "../components/Header.tsx";
import PersonIcon from "@mui/icons-material/Person";

// Sample data
const students = [
  { name: "Ashen Geeth", reg: "PHY123", contact: "0712345678", email: "ashen@mail.com", year: "01" },
  { name: "Nuwan Perera", reg: "PHY456", contact: "0779876543", email: "nuwan@mail.com", year: "02" },
  { name: "Sachini Silva", reg: "PHY789", contact: "0751122334", email: "sachini@mail.com", year: "03" },
  { name: "Tharindu Jayasuriya", reg: "PHY101", contact: "0769988776", email: "tharindu@mail.com", year: "01" },
];

const StudentList: React.FC = () => {
  const { year } = useParams();

  const filtered = students.filter((s) => s.year === year);

  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f0f4f8 0%, #d9e2ef 100%)",
          py: 6,
          px: 3,
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          fontWeight={700}
          color="primary"
          textAlign="center"
          mb={6}
        >
          Year {year} - Student List
        </Typography>

        {/* Students Container */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 5,
          }}
        >
          {filtered.map((student, index) => (
            <Card
              key={index}
              sx={{
                width: 320,
                borderRadius: 4,
                background: "#fff",
                boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-12px)",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.18)",
                },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
              }}
            >
              {/* Year Badge */}
              <Chip
                label={`Year ${student.year}`}
                color="primary"
                sx={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  fontWeight: 700,
                }}
              />

              <CardContent sx={{ textAlign: "center", py: 4 }}>
                <Avatar
                  sx={{
                    bgcolor: "#1976d2",
                    width: 70,
                    height: 70,
                    mx: "auto",
                    mb: 2,
                    border: "3px solid #bbdefb",
                  }}
                >
                  <PersonIcon fontSize="large" />
                </Avatar>

                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{ mb: 1, color: "#0d47a1" }}
                >
                  {student.name}
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: "0.9rem", mb: 0.5 }}>
                  <strong>Reg No:</strong> {student.reg}
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: "0.9rem", mb: 0.5 }}>
                  <strong>Contact:</strong> {student.contact}
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: "0.9rem" }}>
                  <strong>Email:</strong> {student.email}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* No Students */}
        {filtered.length === 0 && (
          <Typography
            textAlign="center"
            color="text.secondary"
            mt={10}
            fontWeight={500}
            fontSize="1.2rem"
          >
            No students found for this year.
          </Typography>
        )}
      </Box>
    </>
  );
};

export default StudentList;
