import {
  Box,
  Typography,
  Stack,
  TextField,
  InputAdornment,
  FormControlLabel,
  Switch,
  Button,
} from "@mui/material";
import * as React from "react";
import Image from "../assests/image.png";
import "@fontsource/onest";
import Calender from "../assests/calendar 1.png";
import Card from "../assests/card.png";
import { useNavigate } from "react-router-dom";

function AddPaymentdetails() {
  const navigate=useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Onest",
      }}
    >
      <Stack
        sx={{
          gap: "10px",
          width: "500px",
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: 600,
            color: "#101828",
            fontFamily: "onest",
          }}
        >
          Add Payment details
        </Typography>

        {/* Form Section */}
        <Stack
          sx={{
            width: "468px",
            height: "auto",
            padding: "26px",
            gap: "24px",
          }}
        >
          <Stack sx={{ gap: "20px" }}>
            <Stack sx={{ gap: "16px" }}>
              {/* Name on Card */}
              <Stack sx={{ gap: "6px" }}>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#344054",
                  }}
                >
                  Name on card
                </Typography>
                <TextField
                  variant="outlined"
                  placeholder="Parth Patel"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      height: "44px",
                      width: "420px",
                      paddingLeft: "14px",
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img
                          src={Image}
                          alt="lock"
                          height="20px"
                          width="20px"
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>

              {/* Card Number */}
              <Stack sx={{ gap: "6px" }}>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#475467",
                  }}
                >
                  Card Number
                </Typography>
                <TextField
                  variant="outlined"
                  placeholder="1234-1234-1234-1234"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      height: "44px",
                      width: "420px",
                      paddingLeft: "14px",
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Card} alt="card" height="20px" width="20px" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>

              {/* Expiry and CVV */}
              <Stack direction="row" gap="16px">
                <Stack sx={{ gap: "6px", width: "304px" }}>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "#344054",
                    }}
                  >
                    Expiry Date
                  </Typography>
                  <TextField
                    variant="outlined"
                    placeholder="23/25"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        height: "44px",
                        paddingLeft: "14px",
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img
                            src={Calender}
                            alt="calendar"
                            height="20px"
                            width="20px"
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Stack>
                <Stack sx={{ gap: "6px", width: "100px" }}>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "#344054",
                    }}
                  >
                    CVV
                  </Typography>
                  <TextField
                    variant="outlined"
                    placeholder="XXX"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        height: "44px",
                        paddingLeft: "14px",
                      },
                    }}
                  />
                </Stack>
              </Stack>
            </Stack>

            {/* Switch */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                height: "44px",
                width: "420px",
                borderBottom: "1px solid #D0D5DD",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#344054",
                }}
              >
                Set as primary card
              </Typography>
              <Switch defaultChecked />
            </Stack>

            {/* Buttons */}
            <Stack direction="row" gap="14px">
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "40px",
                  height: "52px",
                  width: "203px",
                }}
                onClick={() => navigate(-1)}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#024FAA",
                    fontFamily: "Onest,sans-serif",
                    textTransform: "none",
                  }}
                >
                  Cancel
                </Typography>
              </Button>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "40px",
                  height: "52px",
                  width: "203px",
                  backgroundColor: "#024FAA",
                }}
                onClick={() => navigate(-1)}
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
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default AddPaymentdetails;
