import React from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function ServicesNeed() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          width: "500px",
          bgcolor: "#ffffff",
          borderRadius: "16px",
          p: 4,
          boxShadow: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: 600,
            color: "#101828",
            fontFamily: "Onest, sans-serif",
            mb: 3,
          }}
        >
          Service I Need
        </Typography>

        <Stack spacing={1.5} sx={{ mb: 4 }}>
          {[
            "Personals care",
            "Domestic Assistance",
            "Social Support & Community Participation",
            "Specialist Care",
            "Out and About Transport",
            "Relief Respite Care",
            "Coaching & Counselling",
            "Disability Products",
          ].map((label, i) => (
            <FormControlLabel
              key={i}
              control={<Checkbox />}
              label={label}
              sx={{ color: "#344054" }}
            />
          ))}
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="outlined"
            onClick={handleBack}
            sx={{
              color: "#024FAA",
              borderRadius: "40px",
              py: "16px",
              px: "42px",
              width: "203px",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: "Onest,sans-serif",
                textTransform: "none",
              }}
            >
              Cancel
            </Typography>
          </Button>
          <Button
            variant="contained"
            onClick={handleBack}
            sx={{
              backgroundColor: "#024FAA",
              borderRadius: "40px",
              py: "16px",
              px: "42px",
              width: "203px",
              "&:hover": {
                backgroundColor: "#01377a",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#FFFFFF",
                fontFamily: "Onest,sans-serif",
                textTransform: "none",
              }}
            >
              Save
            </Typography>
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default ServicesNeed;
