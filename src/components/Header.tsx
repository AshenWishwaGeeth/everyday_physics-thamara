import React, { useMemo } from "react";
import { AppBar, Toolbar, Box, Typography, Button, Container, Stack, Avatar } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const Header: React.FC = () => {
  // Get current date and time, update only on mount (static for header)
  const now = useMemo(() => {
    const d = new Date();
    return d.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={6}
      sx={{
        background: "linear-gradient(135deg, #1e88e5 0%, #1565c0 100%)",
        color: "#fff",
        boxShadow: "0 4px 20px rgba(30, 136, 229, 0.3)",
      }}
    >
      <Box sx={{ background: "rgba(0,0,0,0.08)", py: 0.5 }}>
        <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Stack direction="row" spacing={3} alignItems="center">
            <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              📧 thamaraphysics@gmail.com
            </Typography>
            <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              📞 +94 77 123 4567
            </Typography>
          </Stack>
          <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
           {now}
          </Typography>
        </Container>
      </Box>
      <Toolbar sx={{ py: 2 }}>
        <Container maxWidth="xl" sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              sx={{
                bgcolor: "#fff",
                color: "#1e88e5",
                width: 56,
                height: 56,
                borderRadius: 2,
                boxShadow: 2,
                fontSize: 36,
              }}
            >
              <SchoolIcon fontSize="large" />
            </Avatar>
            <Box>
              <Typography variant="h5" fontWeight={700} sx={{ color: "#fff", mb: 0.2 }}>
                EveryDay Physics
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "#e3f2fd" }}>
                Advanced Level Excellence
              </Typography>
            </Box>
          </Box>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                borderColor: "rgba(255,255,255,0.5)",
                fontWeight: 600,
                px: 3,
                borderRadius: 2,
                background: "rgba(255,255,255,0.08)",
                "&:hover": {
                  background: "#fff",
                  color: "#1e88e5",
                  borderColor: "#fff",
                },
                transition: "all 0.3s",
                backdropFilter: "blur(10px)",
              }}
            >
              Home
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                borderColor: "rgba(255,255,255,0.5)",
                fontWeight: 600,
                px: 3,
                borderRadius: 2,
                background: "rgba(255,255,255,0.08)",
                "&:hover": {
                  background: "#fff",
                  color: "#1e88e5",
                  borderColor: "#fff",
                },
                transition: "all 0.3s",
                backdropFilter: "blur(10px)",
              }}
            >
              About
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                borderColor: "rgba(255,255,255,0.5)",
                fontWeight: 600,
                px: 3,
                borderRadius: 2,
                background: "rgba(255,255,255,0.08)",
                "&:hover": {
                  background: "#fff",
                  color: "#1e88e5",
                  borderColor: "#fff",
                },
                transition: "all 0.3s",
                backdropFilter: "blur(10px)",
              }}
            >
              Contact
            </Button>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
