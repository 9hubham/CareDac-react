import {
  Box,
  Typography,
  Stack,
  TextField,
  InputAdornment,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";
import * as React from "react";
import Image from "../assests/image.png";
import "@fontsource/onest";
import Calender from "../assests/calendar 1.png";
import location from "../assests/Group 1.png";
import Call from "../assests/call.png";
import Profile from "../assests/profile.png";
import { useNavigate } from "react-router-dom";

function Member() {
  const [state, setState] = React.useState("");
  const handleChange = (event) => {
    setState(event.target.value);
  };
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "500px" }}>
        <Stack
          sx={{
            padding: "0 24px",
            height: "100px",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: 600,
              color: "#101828",
              fontFamily: "onest",
            }}
          >
            Edit Member Details
          </Typography>
        </Stack>

        <Stack
          sx={{
            width: "100%",
            gap: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img src={Profile} alt="profile" width="100px" height="97px" />
          </Box>

          {[
            { label: "Full Name", placeholder: "Enter Full name", icon: Image },
            { label: "Date of Birth", placeholder: "DD//MM//YY", icon: Calender },
            { label: "Mobile number", placeholder: "Enter Mobile number", icon: Call },
            {
              label: "Emergency Mobile number",
              placeholder: "Enter Emergency Mobile number",
              icon: Call,
            },
          ].map(({ label, placeholder, icon }, idx) => (
            <Stack key={idx} sx={{ gap: "6px", width: "100%", maxWidth: "420px" }}>
              <Typography
                sx={{
                  fontFamily: "onest",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "_Gray/700",
                }}
              >
                {label}
              </Typography>
              <TextField
                variant="outlined"
                placeholder={placeholder}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    height: "44px",
                    paddingX: "14px",
                    borderColor: "#475467",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={icon} alt="icon" height="20px" width="20px" />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          ))}

          <Stack sx={{ width: "100%", maxWidth: "420px", gap: "6px" }}>
            <Typography
              sx={{
                fontFamily: "onest",
                fontWeight: 500,
                fontSize: "14px",
                color: "_Gray/700",
              }}
            >
              Gender
            </Typography>
            <RadioGroup sx={{ flexDirection: "row" }}>
              {["Female", "Male", "Non-Binary"].map((gender) => (
                <FormControlLabel
                  key={gender}
                  value={gender.toLowerCase()}
                  label={gender}
                  control={<Radio />}
                />
              ))}
            </RadioGroup>
          </Stack>

          <Stack sx={{ width: "100%", maxWidth: "420px", gap: "16px" }}>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "12px",
                color: "#344054",
                border: "1px solid #D0D5DD",
                height: "55px",
                justifyContent: "space-between",
                paddingX: "16px",
                backgroundColor: "#FFFFFF",
                fontWeight: 500,
                fontSize: "16px",
                fontFamily: "Onest",
                textTransform: "none",
              }}
            >
              Use my current location
              <img src={location} alt="location" height="40px" />
            </Button>

            {["Address line 1", "Address line 2"].map((label, idx) => (
              <React.Fragment key={idx}>
                <Typography
                  sx={{
                    fontFamily: "onest",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "_Gray/700",
                  }}
                >
                  {label}
                </Typography>
                <TextField
                  variant="outlined"
                  placeholder="Enter Address"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      height: "44px",
                      paddingX: "14px",
                      borderColor: "#475467",
                    },
                  }}
                />
              </React.Fragment>
            ))}

            <Stack direction="row" spacing={2}>
              <Stack sx={{ width: "50%", gap: "6px" }}>
                <Typography
                  sx={{
                    fontFamily: "onest",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "_Gray/700",
                  }}
                >
                  City
                </Typography>
                <TextField
                  variant="outlined"
                  placeholder="Enter City"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      height: "44px",
                      paddingX: "14px",
                      borderColor: "#475467",
                    },
                  }}
                />
              </Stack>
              <Stack sx={{ width: "50%", gap: "6px" }}>
                <Typography
                  sx={{
                    fontFamily: "onest",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "_Gray/700",
                  }}
                >
                  State
                </Typography>
                <FormControl fullWidth>
                  <InputLabel>Select State</InputLabel>
                  <Select value={state} onChange={handleChange} label="Select State">
                    {[
                      "Andhrapradesh",
                      "Bihar",
                      "Goa",
                      "Gujarat",
                      "Kolkata",
                      "Maharashtra",
                      "Uttarpradesh",
                    ].map((s) => (
                      <MenuItem key={s} value={s}>
                        {s}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
            </Stack>

            <Stack sx={{ gap: "6px" }}>
              <Typography
                sx={{
                  fontFamily: "onest",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "_Gray/700",
                }}
              >
                Pin Code
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Enter pin code"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    height: "44px",
                    paddingX: "14px",
                    borderColor: "#475467",
                  },
                }}
              />
            </Stack>
          </Stack>

          <Stack direction="row" spacing={2} mt={2}>
            <Button
              variant="outlined"
              onClick={() => navigate("/patientDetails")}
              sx={{
                color: "#024FAA",
                borderRadius: "40px",
                width: "203px",
                height: "52px",
                textTransform: "none",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  fontFamily: "Onest,sans-serif",
                }}
              >
                Cancel
              </Typography>
            </Button>

            <Button
              variant="contained"
              onClick={() => navigate("/patientDetails")}
              sx={{
                color: "#fff",
                backgroundColor: "#024FAA",
                borderRadius: "40px",
                width: "203px",
                height: "52px",
                textTransform: "none",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  fontFamily: "Onest,sans-serif",
                }}
              >
                Save
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Member;
