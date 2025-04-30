import CloseIcon from "@mui/icons-material/Close";
import "@fontsource-variable/onest";
import React from "react";
import { Box, Stack, Typography, IconButton, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FamilyMemberCard = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5", // optional for better contrast
      }}
    >
      <Box
        width="494px"
        bgcolor="white"
        fontFamily="OnestVariable"
        borderRadius="8px"
        padding="20px"
        border="1px solid #F2F4F7"
      >
        {/* Stack 1: Title + Close */}
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="600">
            Family Member Details
          </Typography>
          <IconButton onClick={() => navigate(-1)}>
  <CloseIcon />
</IconButton>

        </Stack>

        {/* Stack 2: Details */}
        <Stack sx={{ gap: "32px", margin: "20px 0 50px 0" }}>
          <Stack direction="row" gap="32px">
            <InfoBox label="Name" value="Kane William" />
            <InfoBox label="Age" value="5 years" />
          </Stack>

          <Stack direction="row" gap="32px">
            <InfoBox label="Gender" value="Male" />
            <InfoBox label="DOB" value="Jan 24th, 1997" />
          </Stack>
        </Stack>

        {/* Stack 3: Address */}
        <Box
          sx={{
            padding: "10px 20px",
            borderRadius: "8px",
            boxShadow: "2px 2px 15px 0px rgba(0,0,0,0.05)",
            width: "100%",
            height: "104px",
            border: "1px solid #F2F4F7",
            marginBottom: "20px",
          }}
        >
          <Typography sx={labelStyle}>Address</Typography>
          <Typography sx={valueStyle}>
            31, Xavir Colony, Akhbar nagar, Ahemdabad, Gujarat-382732
          </Typography>
        </Box>

        {/* Stack 4: Action Buttons */}
        <Stack direction="row" justifyContent="space-between">
          <Button
            variant="outlined"
            color="error"
            onClick={() => navigate(-1)}
            sx={{
              width: "48%",
              borderRadius: "24px",
              padding: "10px 0",
              fontWeight: "600",
            }}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0047FF",
              width: "48%",
              borderRadius: "24px",
              padding: "10px 0",
              fontWeight: "600",
            }}
            onClick={() => navigate("/changePassword")}
          >
            Edit
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

// InfoBox Component for reuse
const InfoBox = ({ label, value }) => (
  <Box
    sx={{
      padding: "10px 20px",
      borderRadius: "8px",
      boxShadow: "2px 2px 15px 0px #0000000D",
      width: "218px",
      height: "74px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      border: "1px solid #F2F4F7",
    }}
  >
    <Typography sx={labelStyle}>{label}</Typography>
    <Typography sx={valueStyle}>{value}</Typography>
  </Box>
);

// Typography styles
const labelStyle = {
  fontSize: "14px",
  color: "#101828",
  fontWeight: 400,
  fontFamily: "Onest",
};

const valueStyle = {
  fontSize: "20px",
  color: "#101828",
  fontWeight: 700,
  fontFamily: "Onest",
};

export default FamilyMemberCard;
