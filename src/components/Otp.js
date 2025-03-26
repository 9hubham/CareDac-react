import { Box, Stack, Typography, Button } from "@mui/material";
import { TextField } from "@mui/material";
import C from "../assests/B.png";
import { useNavigate } from "react-router-dom";
import Divider from '@mui/material/Divider';

function Otp() {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
                  backgroundImage: `url(${C})`,
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
        <Box sx={{ height: "500px", width: "368px" }}>
          <Stack
            sx={{
              paddingTop: "16px",
              paddingBottom: "16px",
              paddingRight: "24px",
              paddingLeft: "24px",
              Gap: "10px",
              borderBottomColor: "#EAECF0",
            }}
          >
            <Typography
              sx={{ color: "#101828", fontSize: "36px", fontWeight: "600" }}
            >
              OTP Verification
            </Typography>
            <Typography
              sx={{ fontSize: "20px", fontWeight: "500", color: "#667085" }}
            >
              Enter the OTP sent to your email here
            </Typography>
          </Stack>
          <Divider sx={{width:"500px"}}></Divider>
          <Stack
            sx={{
              padding: "24px",
              gap: "24px",
              height: "252px",
              width: "500px",
            }}
          >
            <Stack sx={{ gap: "6px", hright: "72px", width: "452px" }}>
              <Typography
                sx={{ color: "#3A3F50", fontWeight: "500", fontSize: "14px" }}
              >
                OTP code
              </Typography>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                  height: "50px",
                  width: "452px",
                  justifyContent: "center",
                }}
              >
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      width: "107px",
                      height: "50px",
                    },
                  }}
                  Variant="Outlined"
                />
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      width: "107px",
                      height: "50px",
                    },
                  }}
                  Variant="Outlined"
                />
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      width: "107px",
                      height: "50px",
                    },
                  }}
                  Variant="Outlined"
                />
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      width: "107px",
                      height: "50px",
                    },
                  }}
                  Variant="Outlined"
                />
              </Stack>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "40px",
                  color: "#024FAA",
                  border: "1px",
                  borderColor: "#024FAA",
                  paddingTop: "16px",
                  paddingRight: "18px",
                  paddingBottom: "16px",
                  paddingLeft: "18px",
                  gap: "8px",
                  height: "56px",
                  width: "452px",
                }}
                onClick={() => navigate("/ForgotPassword")}
              >
                <Typography
                  sx={{ color: "#FFFFFF", fontSize: "16px", fontWeight: "600" }}
                >
                  verify
                </Typography>
              </Button>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography>Didn't receive OTP?</Typography>
                <Button variant="text" size="small" sx={{}}>
                  Resend
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
export default Otp;
