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
import D from "../assests/B.png";
import Image from "../assests/image.png";
import "@fontsource/onest";
import Calender from "../assests/calendar 1.png";
import location from "../assests/Group 1.png";
import Call from "../assests/call.png";
import { useNavigate } from "react-router-dom";

function Member() {
  const [state, setState] = React.useState("");
  const handleChange = (event) => {
    setState(event.target.value);
  };
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${D}) `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        <Box
          sx={{
            width: "500px",
            height: "995px",
          }}
        >
          <Stack
            sx={{
              gap: "10px",
              paddingTop: "16px",
              paddingRight: "24px",
              paddingBottom: "16px",
              paddingLeft: "24px",
              height: "116px",
              width: "500px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                fontSize: "36px",
                fontWeight: 600,
                color: "#101828",
                fontFamily: "onest",
              }}
            >
              Enter Member Details
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 500,
                color: "#667085",
                fontFamily: "onest",
              }}
            >
              Need to add perfect details
            </Typography>
          </Stack>

          <Stack
            sx={{
              width: "452px",
              height: "831px",
              gap: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Stack sx={{ gap: "6px" }}>
              <Typography
                sx={{
                  fontFamily: "onest",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "_Gray/700",
                }}
              >
                Full Name
              </Typography>
              <TextField
                Variant="Outlined"
                placeholder="Enter Full name"
                sx={{
                  borderRadius: "30px",
                  "& .MuiOutlinedInput-root": {
                    border: "1px",
                    borderRadius: "12px",
                    height: "44px",
                    width: "452px",
                    gap: "8px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "14px",
                    paddingRight: "14px",
                    borderColor: "#475467",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={Image} alt="lock" height="20px" width="20px" />
                    </InputAdornment>
                  ),
                }}
              />
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
                Date of Birth
              </Typography>
              <TextField
                Variant="Outlined"
                placeholder="DD//MM//YY"
                sx={{
                  borderRadius: "30px",
                  "& .MuiOutlinedInput-root": {
                    border: "1px",
                    borderRadius: "12px",
                    height: "44px",
                    width: "452px",
                    gap: "8px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "14px",
                    paddingRight: "14px",
                    borderColor: "#475467",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        src={Calender}
                        alt="lock"
                        height="20px"
                        width="20px"
                      />
                    </InputAdornment>
                  ),
                }}
              />
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
                Phone number
              </Typography>
              <TextField
                Variant="Outlined"
                placeholder="1234567890"
                sx={{
                  borderRadius: "30px",
                  "& .MuiOutlinedInput-root": {
                    border: "1px",
                    borderRadius: "12px",
                    height: "44px",
                    width: "452px",
                    gap: "8px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "14px",
                    paddingRight: "14px",
                    borderColor: "#475467",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={Call} alt="lock" height="20px" width="20px" />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
            <Stack sx={{ gap: "2px" }}>
              {" "}
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
              <RadioGroup sx={{ display: "flex", flexDirection: "row" }}>
                <FormControlLabel
                  value="female"
                  label="Female"
                  control={<Radio />}
                />
                <FormControlLabel
                  value="male"
                  label="Male"
                  control={<Radio />}
                />
                <FormControlLabel
                  value="non-Binary"
                  label="Non-Binary"
                  control={<Radio />}
                />
              </RadioGroup>
            </Stack>
            <Stack sx={{ gap: "16px" }}>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "12px",
                  color: "#344054",
                  border: "1px solid #D0D5DD",
                  height: "55px",
                  width: "452px",
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
                  height="55px"
                  width="120px"
                />
              </Button>
              <Typography
                sx={{
                  fontFamily: "onest",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "_Gray/700",
                }}
              >
                Address line 1
              </Typography>
              <TextField
                Variant="Outlined"
                placeholder="Enter Address"
                sx={{
                  borderRadius: "30px",
                  "& .MuiOutlinedInput-root": {
                    border: "1px",
                    borderRadius: "12px",
                    height: "44px",
                    width: "452px",
                    gap: "8px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "14px",
                    paddingRight: "14px",
                    borderColor: "#475467",
                  },
                }}
              />
              <Typography
                sx={{
                  fontFamily: "onest",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "_Gray/700",
                }}
              >
                Address line 2
              </Typography>
              <TextField
                Variant="Outlined"
                placeholder="Enter Address"
                sx={{
                  borderRadius: "30px",
                  "& .MuiOutlinedInput-root": {
                    border: "1px",
                    borderRadius: "12px",
                    height: "44px",
                    width: "452px",
                    gap: "8px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "14px",
                    paddingRight: "14px",
                    borderColor: "#475467",
                  },
                }}
              />
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  height: "70px",
                  width: "452px",
                  gap: "20px",
                }}
              >
                <Stack sx={{ height: "70px", width: "216px", gap: "6px" }}>
                  <Typography
                    sx={{
                      fontFamily: "onest",
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "_Gray/700",
                    }}
                  >
                    Country
                  </Typography>
                  <TextField
                    Variant="Outlined"
                    placeholder="Select Country"
                    sx={{
                      borderRadius: "30px",
                      "& .MuiOutlinedInput-root": {
                        border: "1px",
                        borderRadius: "12px",
                        height: "44px",
                        width: "216px",
                        gap: "8px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        paddingLeft: "14px",
                        paddingRight: "14px",
                        borderColor: "#475467",
                      },
                    }}
                  />
                </Stack>
                <Stack sx={{ height: "70px", width: "216px", gap: "6px" }}>
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
                  <FormControl
                    sx={{
                      borderRadius: "30px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        height: "44px",
                        width: "216px",
                        gap: "8px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        paddingLeft: "14px",
                        paddingRight: "14px",
                        borderColor: "#475467",
                      },
                    }}
                  >
                    <InputLabel>Select State</InputLabel>
                    <Select
                      value={state}
                      onChange={handleChange}
                      label="Select State"
                    >
                      <MenuItem value={"Andhrapradesh"}>Andhrapradesh</MenuItem>
                      <MenuItem value={"Bihar"}>Bihar</MenuItem>
                      <MenuItem value={"Goa"}>Goa</MenuItem>
                      <MenuItem value={"Gujarat"}>Gujarat</MenuItem>
                      <MenuItem value={"Kolkata"}>Kolkata</MenuItem>
                      <MenuItem value={"Maharashtra"}>Maharashtra</MenuItem>
                      <MenuItem value={"Uttarpradesh"}>Uttarpradesh</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  height: "70px",
                  width: "452px",
                  gap: "16px",
                }}
              >
                <Stack sx={{ height: "70px", width: "216px", gap: "6px" }}>
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
                    Variant="Outlined"
                    placeholder="Enter City"
                    sx={{
                      borderRadius: "30px",
                      "& .MuiOutlinedInput-root": {
                        border: "1px",
                        borderRadius: "12px",
                        height: "44px",
                        width: "216px",
                        gap: "8px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        paddingLeft: "14px",
                        paddingRight: "14px",
                        borderColor: "#475467",
                      },
                    }}
                  />
                </Stack>
                <Stack sx={{ height: "70px", width: "216px", gap: "6px" }}>
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
                    Variant="Outlined"
                    placeholder="Enter pin code"
                    sx={{
                      borderRadius: "30px",
                      "& .MuiOutlinedInput-root": {
                        border: "1px",
                        borderRadius: "12px",
                        height: "44px",
                        width: "216px",
                        gap: "8px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        paddingLeft: "14px",
                        paddingRight: "14px",
                        borderColor: "#475467",
                      },
                    }}
                  />
                </Stack>
              </Stack>
            </Stack>
            <Button
              variant="contained"
              sx={{
                color: "#024FAA",
                borderRadius: "40px",
                paddingtop: "16px",
                paddingBottom: "16px",
                paddingRight: "18px",
                paddingLeft: "18px",
                height: "56px",
                width: "452px",
                gap: "8px",
              }}
              onClick={() => navigate("/patientDetails")}
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
    </>
  );
}
export default Member;
