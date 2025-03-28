import { Box, Stack, Typography, Button } from "@mui/material";
import { TextField } from "@mui/material";
import C from "../assests/B.png";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import "@fontsource/roboto/700.css";
import "@fontsource/onest";
import "@fontsource/inter";

function Otp() {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${C})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0",
          padding: "0",
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        <Box sx={{ height: "368px", width: "500px" }}>
          <Stack
            sx={{
              height: "116px",
              width: "500px",
              gap: "10px",
              paddingTop: "16px",
              paddingBottom: "16px",
              paddingRight: "24px",
              paddingLeft: "24px",
            }}
          >
            <Stack
              sx={{
                width: "360px",
                height: "84px",
                Gap: "10px",
                borderBottomColor: "#EAECF0",
              }}
            >
              <Typography
                sx={{
                  color: "#101828",
                  fontSize: "36px",
                  fontWeight: 600,
                  fontFamily: "Onest,sans-serif",
                }}
              >
                OTP Verification
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#667085",
                  fontFamily: "Onest,sans-serif",
                }}
              >
                Enter the OTP sent to your email here
              </Typography>
            </Stack>
          </Stack>
          <Divider></Divider>

          <Stack
            sx={{
              padding: "24px",
              gap: "24px",
              height: "252px",
              width: "500px",
            }}
          >
            <Stack sx={{ gap: "24px", height: "204px", width: "452px" }}>
              <Stack sx={{ width: "452px", height: "204px", gap: "24px" }}>
                <Stack sx={{ width: "452px", height: "72px", gap: "6px" }}>
                  <Typography
                    sx={{
                      color: "#3A3F50",
                      fontWeight: 500,
                      fontSize: "14px",
                      fontFamily: "Roboto",
                    }}
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
                    }}
                  >
                    <TextField
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px",
                          width: "107px",
                          height: "50px",
                          padding: "14px",
                          gap: "8px",
                          borderColor: "#475467",
                        },
                      }}
                      inputProps={{
                        maxlength: 1,
                        style: {
                          textAlign: "center",
                          fontSize: "16px",
                          fontWeight: 400,
                          fontFamily: "Roboto",
                        },
                      }}
                    />
                    <TextField
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px",
                          width: "107px",
                          height: "50px",
                          padding: "14px",
                          gap: "8px",
                          borderColor: "#475467",
                        },
                      }}
                      inputProps={{
                        maxlength: 1,
                        style: {
                          textAlign: "center",
                          fontSize: "16px",
                          fontWeight: 400,
                          fontFamily: "Roboto",
                        },
                      }}
                      Variant="Outlined"
                    />
                    <TextField
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px",
                          width: "107px",
                          height: "50px",
                          padding: "14px",
                          gap: "8px",
                          borderColor: "#475467",
                        },
                      }}
                      inputProps={{
                        maxlength: 1,
                        style: {
                          textAlign: "center",
                          fontSize: "16px",
                          fontWeight: 400,
                          fontFamily: "Roboto",
                        },
                      }}
                      Variant="Outlined"
                    />
                    <TextField
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px",
                          width: "107px",
                          height: "50px",
                          padding: "14px",
                          gap: "8px",
                          borderColor: "#475467",
                        },
                      }}
                      inputProps={{
                        maxlength: 1,
                        style: {
                          textAlign: "center",
                          fontSize: "16px",
                          fontWeight: 400,
                          fontFamily: "Roboto",
                        },
                      }}
                      Variant="Outlined"
                    />
                  </Stack>
                </Stack>

                <Stack sx={{ height: "56px", width: "452px" }}>
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
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "16px",
                        fontWeight: 600,
                        fontFamily: "Onest,sans-serif",
                      }}
                    >
                      verify
                    </Typography>
                  </Button>
                </Stack>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "452px",
                    height: "28px",
                    gap: "24px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#667085",
                      fontWeight: 400,
                      fontFamily: "Onest,sans-serif",
                    }}
                  >
                    Didn't receive OTP?
                  </Typography>
                  <Button variant="text">
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#024FAA",
                        fontFamily: "Inter",
                        textTransform: "none",
                      }}
                    >
                      Resend
                    </Typography>
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
export default Otp;
