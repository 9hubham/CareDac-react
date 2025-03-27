import D from "../assests/B.png";
import {
  Box,
  Stack,
  TextField,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Button,
  InputAdornment,
} from "@mui/material";
import "@fontsource/onest";
import "@fontsource/inter";
import Divider from "@mui/material/Divider";
import Lockk from "../assests/lock 1.png";
import Mail from "../assests/mail.png";
import Calender from "../assests/calendar 1.png";
import Call from "../assests/call.png";
import Image from "../assests/image.png";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    full_name: "Nitish",
    email: "nitish@yopmail.com",
    mobile_number: "+91 9974571780",
    password: "Test@123",
    confirm_Password: "Test@123",
    dob: "2002-03-15",
    gender: "male",
    role: "patient",
    termsAccepted: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_Password) {
      alert("password do not match");
      return;
    }
    if (!formData.termsAccepted) {
      alert("please accept terms and conditions");
      return;
    }

    try {
      const response = await axios.post(
        "https://dev.caredac.com/api/v1/auth/register",
        {
          full_name: formData.full_name,
          email: formData.email,
          mobile_number: formData.mobile_number,
          password: formData.password,
          gender: formData.gender,
          dob: formData.dob,
          role: formData.role,
        }
      );
      alert(response.data.message);
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed,try again.");
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            backgroundImage: `url(${D})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0",
            padding: "0",
            minHeight: "100vh",
            minWidth: "100vw",
          }}
        >
          <Box
            sx={{
              width: "500px",
              height: "926px",
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
                justifyContent: "flex-start",
              }}
            >
              <Typography
                sx={{ fontSize: "36px", fontWeight: 600, color: "#101828" }}
              >
                Sign Up
              </Typography>
              <Typography
                sx={{ fontSize: "20px", fontWeight: 500, color: "#667085" }}
              >
                Welcome to CareDac
              </Typography>
            </Stack>
            <Divider sx={{ width: "452px" }}></Divider>

            <Stack
              sx={{
                width: "452px",
                height: "762px",
                gap: "6px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
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
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                required
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
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
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
              <Typography
                sx={{
                  fontFamily: "onest",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "_Gray/700",
                }}
              >
                Email
              </Typography>
              <TextField
                Variant="Outlined"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
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
                      <img src={Mail} alt="lock" height="20px" width="20px" />
                    </InputAdornment>
                  ),
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
                Mobile Number
              </Typography>
              <TextField
                Variant="Outlined"
                placeholder="Enter mobile number"
                name="mobile_number"
                value={formData.mobile_number}
                onChange={handleChange}
                required
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
              <Typography
                sx={{
                  fontFamily: "onest",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "_Gray/700",
                }}
              >
                Password
              </Typography>
              <TextField
                Variant="Outlined"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
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
                      <img src={Lockk} alt="lock" height="20px" width="20px" />
                    </InputAdornment>
                  ),
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
                Confirm Password
              </Typography>
              <TextField
                Variant="Outlined"
                placeholder="Confirm password"
                name="confirm_Password"
                value={formData.confirm_Password}
                onChange={handleChange}
                required
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
                      <img src={Lockk} alt="lock" height="20px" width="20px" />
                    </InputAdornment>
                  ),
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
                Gender
              </Typography>
              <RadioGroup
                sx={{ display: "flex", flexDirection: "row" }}
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
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
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      borderRadius: "30px",
                    }}
                    name="termsAccepted"
                    value={formData.termsAccepted}
                    onChange={handleChange}
                  />
                }
                label="By Continuing, you agree to our Terms and conditions"
              />
              <Button
                variant="contained"
                type="submit"
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
                  Sign Up
                </Typography>
              </Button>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{ fontSize: "14px", fontWeight: 400, color: "#667085" }}
                >
                  Already have an account?
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#024FAA",
                    fontFamily: "Inter",
                    textTransform: "none",
                  }}
                >
                  Login
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </form>
    </>
  );
}
export default Signup;
