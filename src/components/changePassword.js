import {
  Box,
  Typography,
  Stack,
  TextField,
  Button
} from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
 const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9", // optional background
      }}
    >
      <Box>
        <Stack
          sx={{
            gap: "10px",
            padding: "16px 24px",
            width: "500px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontSize: "36px",
              fontWeight: 600,
              color: "#101828",
              fontFamily: "Onest",
            }}
          >
            Change Password
          </Typography>

          <Stack sx={{ gap: "6px" }}>
            <Typography sx={labelStyle}>Old Password</Typography>
            <TextField placeholder="Enter Password" sx={inputStyle} />
          </Stack>

          <Stack sx={{ gap: "6px" }}>
            <Typography sx={labelStyle}>New Password</Typography>
            <TextField placeholder="Enter Password" sx={inputStyle} />
          </Stack>

          <Stack sx={{ gap: "6px" }}>
            <Typography sx={labelStyle}>Confirm Password</Typography>
            <TextField placeholder="Enter Password" sx={inputStyle} />
          </Stack>

          <Stack direction="row" spacing={2} mt={2}>
            <Button variant="outlined" sx={outlinedBtnStyle} onClick={() => navigate(-2)}>
              <Typography sx={cancelTextStyle}>Cancel</Typography>
            </Button>
            <Button variant="contained" sx={containedBtnStyle} onClick={() => navigate(-2)}>
              <Typography sx={saveTextStyle}>Save</Typography>
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

// Shared Styles
const labelStyle = {
  fontFamily: "Onest",
  fontWeight: 500,
  fontSize: "14px",
  color: "#475467",
};

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    height: "44px",
    width: "420px",
    padding: "0 14px",
  },
};

const outlinedBtnStyle = {
  color: "#024FAA",
  borderRadius: "40px",
  height: "52px",
  width: "203px",
};

const containedBtnStyle = {
  backgroundColor: "#024FAA",
  borderRadius: "40px",
  height: "52px",
  width: "203px",
};

const cancelTextStyle = {
  fontSize: "14px",
  fontWeight: 500,
  color: "#024FAA",
  fontFamily: "Onest, sans-serif",
  textTransform: "none",
};

const saveTextStyle = {
  fontSize: "16px",
  fontWeight: 600,
  color: "#FFFFFF",
  fontFamily: "Onest, sans-serif",
  textTransform: "none",
};

export default ChangePassword;
