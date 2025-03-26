import {
  Box,
  Paper,
  Container,
  Typography,
  Divider,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import React from "react";
import E from "../assests/B.png";
import "@fontsource/onest";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Info() {
  const navigate = useNavigate();

  const [helpOption, setHelpOption] = useState("");

  return (
    <Box
      sx={{
        backgroundImage: `url(${E})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0",
        padding: "0",
        width: "1440px",
        height: "900px",
        minHeight: "100vh",
        minWidth: "100vw",
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
            Info
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
            Enter patient details
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Box component="form" sx={{ mt: 3 }}>
            <Typography variant="body2" align="left" gutterBottom>
              Age
            </Typography>

            <TextField
              fullWidth
              Variant="Outlined"
              label="Enter Age"
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
              Postcode
            </Typography>

            <TextField
              fullWidth
              Variant="Outlined"
              label="Enter Postcode"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                },
              }}
            />
            <FormControl component="fieldset" sx={{ mb: 3 }}>
              <FormLabel
                component="legend"
                sx={{
                  color: "black",
                }}
              >
                Need help to
              </FormLabel>
              <RadioGroup
                value={helpOption}
                onChange={(e) => setHelpOption(e.target.value)}
              >
                <FormControlLabel
                  value="find"
                  control={<Radio />}
                  label="Find a provider"
                />
                <FormControlLabel
                  value="ready"
                  control={<Radio />}
                  label="Be ready for a plan"
                />
                <FormControlLabel
                  value="apply"
                  control={<Radio />}
                  label="Apply for NDIS   "
                />
              </RadioGroup>
            </FormControl>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              sx={{
                mt: 3,
                mb: 2,
                borderRadius: "20px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                },
              }}
              onClick={()=>navigate("/services")}
            >
              Next
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
