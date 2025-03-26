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

function Signup() {
  const navigate = useNavigate();
  return (
    <>
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
          <Divider
            sx={{ width: "452px",}}
          ></Divider>
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
                    <img src={Calender} alt="lock" height="20px" width="20px" />
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
            <RadioGroup sx={{ display: "flex", flexDirection: "row" }}>
              <FormControlLabel
                value="female"
                label="Female"
                control={<Radio />}
              />
              <FormControlLabel value="male" label="Male" control={<Radio />} />
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
                />
              }
              label="By Continuing, you agree to our Terms and conditions"
            />
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
              onClick={() => navigate("/NeedsCare")}
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
                onClick={() => navigate("/login")}
              >
                Login
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
export default Signup;
