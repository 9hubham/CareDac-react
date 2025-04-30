import React, { useState } from "react";
import F from "../assests/B.png";
import "@fontsource/onest";
import {
  Box,
  Container,
  Paper,
  Typography,
  Divider,
  Button,
  TextField,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import location from "../assests/Group 1.png";
import { useNavigate } from "react-router-dom";

export default function PatientDetails() {
  const navigate = useNavigate();
  const [state, setState] = useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const [country, setCountry] = useState("");

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${F})`,

        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        objectFit: "contain",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper
          color="white"
          elevation={0}
          sx={{
            padding: 4,
            borderRadius: 2,
            backgroundColor: "rgba(255,255,255,0.85)",
            width: "100%",
            maxWidth: "500px",
            mx: "auto",
          }}
        >
          <Typography
            variant="h5"
            align="left"
            sx={{
              fontFamily: "onest",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "30px",
            }}
            gutterBottom
          >
            Enter Patient Details
          </Typography>
          <Typography
            variant="body1"
            align="left"
            color="textSecondary"
            sx={{
              fontFamily: "onest",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "24px",
            }}
            gutterBottom
          >
            Need to add perfect details
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Box component="form" sx={{ mt: 3, maxWidth: "500px", mx: "auto" }}>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "12px",
                color: "#344054",
                border: "1px solid #D0D5DD",
                //height: "55px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingX: "16px",
                backgroundColor: "#FFFFFF",
                textTransform: "none",
                fontWeight: "500",
                fontSize: "16px",
                fontFamily: "Onest",
              }}
            >
              Use my current location
              <img
                src={location}
                alt="location icon"
                height="45px"
                width="100px"
              />
            </Button>

            <Typography
              variant="body2"
              align="left"
              sx={{ mt: 2 }}
              gutterBottom
            >
              Address Line 1
            </Typography>

            <TextField
              fullWidth
              Variant="Outlined"
              label="Enter Address"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                },
              }}
            />

            <Typography
              variant="body2"
              align="left"
              sx={{ mt: 2 }}
              gutterBottom
            >
              Address Line 2
            </Typography>

            <TextField
              fullWidth
              Variant="Outlined"
              label="Enter Address"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                },
              }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
                mt: 2,
              }}
            >
              <Box sx={{ width: "50%" }}>
                <Typography variant="body2" align="left" gutterBottom>
                  Country
                </Typography>
                <FormControl
                  placeholder="Select Country"
                  fullWidth
                  sx={{
                    borderRadius: "30px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      height: "44px",
                    },
                  }}
                >
                  <Select
                    value={country}
                    onChange={handleCountryChange}
                    placeholder="Country"
                  >
                    <MenuItem value={"India"}>India</MenuItem>
                    <MenuItem value={"China"}>China</MenuItem>
                    <MenuItem value={"Russia"}>Russia</MenuItem>
                    <MenuItem value={"Thailand"}>Thailand</MenuItem>
                    <MenuItem value={"Japan"}>Japan</MenuItem>
                    <MenuItem value={"Dubai"}>Dubai</MenuItem>
                    <MenuItem value={"South Korea"}>South Korea</MenuItem>
                    <MenuItem value={"Nepal"}>Nepal</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ width: "50%" }}>
                <Typography variant="body2" align="left" gutterBottom>
                  State
                </Typography>
                <FormControl
                  placeholder="Select State"
                  fullWidth
                  sx={{
                    borderRadius: "30px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      height: "44px",
                    },
                  }}
                >
                  <Select
                    value={state}
                    onChange={handleChange}
                    placeholder="State"
                  >
                    <MenuItem value={"Andhrapradesh"}>Andhrapradesh</MenuItem>
                    <MenuItem value={"Bihar"}>Bihar</MenuItem>
                    <MenuItem value={"Goa"}>Goa</MenuItem>
                    <MenuItem value={"Gujarat"}>Gujarat</MenuItem>
                    <MenuItem value={"Kolkata"}>Kolkata</MenuItem>
                    <MenuItem value={"Maharashtra"}>Maharashtra</MenuItem>
                    <MenuItem value={"Uttarpradesh"}>Uttarpradesh</MenuItem>
                    <MenuItem value={"Tamilnadu"}>Tamilnadu</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
                mt: 2,
              }}
            >
              <Box sx={{ width: "50%" }}>
                <Typography variant="body2" align="left" gutterBottom>
                  City
                </Typography>
                <TextField
                  Variant="Outlined"
                  placeholder="Enter City"
                  fullWidth
                  sx={{
                    borderRadius: "30px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      height: "44px",
                    },
                  }}
                />
              </Box>

              <Box sx={{ width: "50%" }}>
                <Typography variant="body2" align="left" gutterBottom>
                  Pin Code
                </Typography>
                <TextField
                  Variant="Outlined"
                  placeholder="Enter pin Code"
                  fullWidth
                  sx={{
                    borderRadius: "30px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      height: "44px",
                    },
                  }}
                />
              </Box>
            </Box>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate("/homepage")}
              sx={{
                mt: 3,
                mb: 2,
                borderRadius: "20px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                },
              }}
            >
              Save
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
