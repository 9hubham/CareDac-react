import {
  Toolbar,
  AppBar,
  Typography,
  Button,
  Box,
  Stack,
  MenuItem,
  FormControl,
  Select,
  InputAdornment,
} from "@mui/material";
import Profileimg from "../assests/bodylogo.png";
import Logo from "../assests/logo.png";
import Arrow from "../assests/arrow-down.png";
import Down from "../assests/Icon.png";
import Search from "../assests/search 1.png";
import "@fontsource-variable/onest";
import Dp from "../assests/dp.png";
import Profile1 from "../assests/profile(1).png"
import Alex from "../assests/profile(2).png";
import React from "react";
import firstIcon from "../assests/language-square.png";
import secondIcon from "../assests/Icon.png";
import BodyLogo from "../assests/bodylogo.png";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {  InputLabel } from "@mui/material";
import Information from "./Information";
import Header from "./Header";

function Bookings() {
  const navigate = useNavigate();
  
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [location, setLocation] = React.useState("Thane, Mumbai");
  
    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };

  return (
    <>
      
      <Header/>
      <Box
        sx={{
          height: "1142px",
          width: "1288px",
          display: "flex",
          alignItems: "center",
          marginTop: "162px",
          marginLeft: "149px",
          marginRight: "149px",
          marginBottom: "162px",
        }}
      >
        <Box
          sx={{
            height: "1142px",
            width: "1188px",
            gap: "16px",
            borderRadius: "8px",
            paddingTop: "28px",
            paddingRight: "38px",
            paddingLeft: "38px",
            paddingBottom: "28px",
            border: "1px Solid #F2F4F7",
            boxShadow: "2px 2px 15px 0 #0000000D",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            
          }}
        >
          <Stack
            sx={{
              height: "30px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontFamily: "Onest",
                fontSize: 20,
              }}
            >
              Current Booking
            </Typography>
          </Stack>
          <Stack
            sx={{
              height: "96px",
              width: "1066px",
              borderRadius: "8px",
              padding: "16px",
              gap: "8px",
              border: "1px Solid #F2F4F7",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <img
                src={Dp}
                alt="Profile"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "12px",
                  border: "1.5px Solid #FC9155",
                }}
              />
            </Box>
            <Stack
              sx={{
                height: "52px",
                width: "834px",
                gap: "8px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack
                sx={{
                  height: "24px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Onest",
                    fontSize: "16px",
                  }}
                >
                  Paula Mora
                </Typography>
              </Stack>
              <Stack
                sx={{
                  height: "20px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Onest",
                    fontSize: "14px",
                  }}
                >
                  Oct 17, 2023 1:55 am
                </Typography>
              </Stack>
            </Stack>
            <Box
              sx={{
                height: 64,
                width: 56,
                border: "1px Solid #F2F4F7",
                paddingTop: "4px",
                paddingRight: "15px",
                paddingBottom: "4px",
                paddingLeft: "14px",
                gap: "4px",
                display: "flex",
                boxShadow: "2px 0px 15px 0.05px #0000000D",
                borderRadius: "8px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack sx={{}}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    fontFamily: "Onest",
                    color: "#475467",
                  }}
                >
                  2 hr
                </Typography>
              </Stack>
            </Box>
            <Box
              sx={{
                height: 64,
                width: 56,
                border: "1px Solid #F2F4F7",
                paddingTop: "4px",
                paddingRight: "15px",
                paddingBottom: "4px",
                paddingLeft: "14px",
                gap: "4px",
                display: "flex",
                boxShadow: "2px 0px 15px 0.05px #0000000D",
                borderRadius: "8px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack sx={{}}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    fontFamily: "Onest",
                    color: "#475467",
                  }}
                >
                  Call
                </Typography>
              </Stack>
            </Box>
          </Stack>

          <Stack sx={{ height: "30px", display: "flex", flexDirection: "row" }}>
            <Typography
              sx={{ fontWeight: 700, fontFamily: "Onest", fontSize: 20 }}
            >
              Previous Booking
            </Typography>
          </Stack>
          <Stack
            sx={{
              height: "96px",
              width: "1066px",
              borderRadius: "8px",
              padding: "16px",
              gap: "8px",
              border: "1px Solid #F2F4F7",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <img
                src={Profile1}
                alt="Profile"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "12px",
                  border: "1.5px Solid #FC9155",
                }}
              />
            </Box>
            <Stack
              sx={{
                height: "52px",
                width: "834px",
                gap: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "5px",
              }}
            >
              <Stack
                sx={{
                  height: "24px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Onest",
                    fontSize: "16px",
                  }}
                >
                  Stephanie Sharkey
                </Typography>
              </Stack>
              <Stack
                sx={{
                  height: "20px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Onest",
                    fontSize: "14px",
                  }}
                >
                  Oct 17, 2023 1:55 am
                </Typography>
              </Stack>
            </Stack>

            <Stack
              sx={{
                display: "flex",
                marginLeft: "50px",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  height: 64,
                  width: 56,
                  border: "1px Solid #F2F4F7",
                  paddingTop: "4px",
                  paddingRight: "15px",
                  paddingBottom: "4px",
                  paddingLeft: "14px",
                  gap: "4px",
                  display: "flex",
                  boxShadow: "2px 0px 15px 0.05px #0000000D",
                  borderRadius: "8px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack sx={{}}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      fontFamily: "Onest",
                      color: "#475467",
                    }}
                  >
                    Call
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
          <Stack
            sx={{
              height: "96px",
              width: "1066px",
              borderRadius: "8px",
              padding: "16px",
              gap: "8px",
              border: "1px Solid #F2F4F7",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <img
                src={Dp}
                alt="Profile"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "12px",
                  border: "1.5px Solid #FC9155",
                }}
              />
            </Box>
            <Stack
              sx={{
                height: "52px",
                width: "834px",
                gap: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "5px",
              }}
            >
              <Stack
                sx={{
                  height: "24px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Onest",
                    fontSize: "16px",
                  }}
                >
                  Paula Mora
                </Typography>
              </Stack>
              <Stack
                sx={{
                  height: "20px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Onest",
                    fontSize: "14px",
                  }}
                >
                  Oct 17, 2023 1:55 am
                </Typography>
              </Stack>
            </Stack>

            <Stack
              sx={{
                display: "flex",
                marginLeft: "50px",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  height: 64,
                  width: 56,
                  border: "1px Solid #F2F4F7",
                  paddingTop: "4px",
                  paddingRight: "15px",
                  paddingBottom: "4px",
                  paddingLeft: "14px",
                  gap: "4px",
                  display: "flex",
                  boxShadow: "2px 0px 15px 0.05px #0000000D",
                  borderRadius: "8px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack sx={{}}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      fontFamily: "Onest",
                      color: "#475467",
                    }}
                  >
                    Call
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
          <Stack
            sx={{
              height: "96px",
              width: "1066px",
              borderRadius: "8px",
              padding: "16px",
              gap: "8px",
              border: "1px Solid #F2F4F7",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <img
                src={Alex}
                alt="Profile"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "12px",
                  border: "1.5px Solid #FC9155",
                }}
              />
            </Box>
            <Stack
              sx={{
                height: "52px",
                width: "834px",
                gap: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "5px",
              }}
            >
              <Stack
                sx={{
                  height: "24px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Onest",
                    fontSize: "16px",
                  }}
                >
                  Alex Buckmaster
                </Typography>
              </Stack>
              <Stack
                sx={{
                  height: "20px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Onest",
                    fontSize: "14px",
                  }}
                >
                  Oct 17, 2023 1:55 am
                </Typography>
              </Stack>
            </Stack>

            <Stack
              sx={{
                display: "flex",
                marginLeft: "50px",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  height: 64,
                  width: 56,
                  border: "1px Solid #F2F4F7",
                  paddingTop: "4px",
                  paddingRight: "15px",
                  paddingBottom: "4px",
                  paddingLeft: "14px",
                  gap: "4px",
                  display: "flex",
                  boxShadow: "2px 0px 15px 0.05px #0000000D",
                  borderRadius: "8px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack sx={{}}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      fontFamily: "Onest",
                      color: "#475467",
                    }}
                  >
                    Call
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
          <Stack
            sx={{
              height: "96px",
              width: "1066px",
              borderRadius: "8px",
              padding: "16px",
              gap: "8px",
              border: "1px Solid #F2F4F7",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <img
                src={Profile1}
                alt="Profile"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "12px",
                  border: "1.5px Solid #FC9155",
                }}
              />
            </Box>
            <Stack
              sx={{
                height: "52px",
                width: "834px",
                gap: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "5px",
              }}
            >
              <Stack
                sx={{
                  height: "24px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Onest",
                    fontSize: "16px",
                  }}
                >
                  Stephanie Sharkey
                </Typography>
              </Stack>
              <Stack
                sx={{
                  height: "20px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Onest",
                    fontSize: "14px",
                  }}
                >
                  Oct 17, 2023 1:55 am
                </Typography>
              </Stack>
            </Stack>

            <Stack
              sx={{
                display: "flex",
                marginLeft: "50px",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  height: 64,
                  width: 56,
                  border: "1px Solid #F2F4F7",
                  paddingTop: "4px",
                  paddingRight: "15px",
                  paddingBottom: "4px",
                  paddingLeft: "14px",
                  gap: "4px",
                  display: "flex",
                  boxShadow: "2px 0px 15px 0.05px #0000000D",
                  borderRadius: "8px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack sx={{}}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      fontFamily: "Onest",
                      color: "#475467",
                    }}
                  >
                    Call
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
          <Stack
            sx={{
              height: "96px",
              width: "1066px",
              borderRadius: "8px",
              padding: "16px",
              gap: "8px",
              border: "1px Solid #F2F4F7",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <img
                src={Alex}
                alt="Profile"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "12px",
                  border: "1.5px Solid #FC9155",
                }}
              />
            </Box>
            <Stack
              sx={{
                height: "52px",
                width: "834px",
                gap: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "5px",
              }}
            >
              <Stack
                sx={{
                  height: "24px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Onest",
                    fontSize: "16px",
                  }}
                >
                  Alex Buckmaster
                </Typography>
              </Stack>
              <Stack
                sx={{
                  height: "20px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Onest",
                    fontSize: "14px",
                  }}
                >
                  Oct 17, 2023 1:55 am
                </Typography>
              </Stack>
            </Stack>

            <Stack
              sx={{
                display: "flex",
                marginLeft: "50px",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  height: 64,
                  width: 56,
                  border: "1px Solid #F2F4F7",
                  paddingTop: "4px",
                  paddingRight: "15px",
                  paddingBottom: "4px",
                  paddingLeft: "14px",
                  gap: "4px",
                  display: "flex",
                  boxShadow: "2px 0px 15px 0.05px #0000000D",
                  borderRadius: "8px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack sx={{}}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      fontFamily: "Onest",
                      color: "#475467",
                    }}
                  >
                    Call
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
          <Stack
            sx={{
              height: "96px",
              width: "1066px",
              borderRadius: "8px",
              padding: "16px",
              gap: "8px",
              border: "1px Solid #F2F4F7",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <img
                src={Dp}
                alt="Profile"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "12px",
                  border: "1.5px Solid #FC9155",
                }}
              />
            </Box>
            <Stack
              sx={{
                height: "52px",
                width: "834px",
                gap: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "5px",
              }}
            >
              <Stack
                sx={{
                  height: "24px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Onest",
                    fontSize: "16px",
                  }}
                >
                  Paula Mora
                </Typography>
              </Stack>
              <Stack
                sx={{
                  height: "20px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Onest",
                    fontSize: "14px",
                  }}
                >
                  Oct 17, 2023 1:55 am
                </Typography>
              </Stack>
            </Stack>

            <Stack
              sx={{
                display: "flex",
                marginLeft: "50px",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  height: 64,
                  width: 56,
                  border: "1px Solid #F2F4F7",
                  paddingTop: "4px",
                  paddingRight: "15px",
                  paddingBottom: "4px",
                  paddingLeft: "14px",
                  gap: "4px",
                  display: "flex",
                  boxShadow: "2px 0px 15px 0.05px #0000000D",
                  borderRadius: "8px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack sx={{}}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      fontFamily: "Onest",
                      color: "#475467",
                    }}
                  >
                    Call
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
          <Stack
            sx={{
              height: "96px",
              width: "1066px",
              borderRadius: "8px",
              padding: "16px",
              gap: "8px",
              border: "1px Solid #F2F4F7",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <img
                src={Profile1}
                alt="Profile"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "12px",
                  border: "1.5px Solid #FC9155",
                }}
              />
            </Box>
            <Stack
              sx={{
                height: "52px",
                width: "834px",
                gap: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "5px",
              }}
            >
              <Stack
                sx={{
                  height: "24px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Onest",
                    fontSize: "16px",
                  }}
                >
                  Stephanie Sharkey
                </Typography>
              </Stack>
              <Stack
                sx={{
                  height: "20px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Onest",
                    fontSize: "14px",
                  }}
                >
                  Oct 17, 2023 1:55 am
                </Typography>
              </Stack>
            </Stack>

            <Stack
              sx={{
                display: "flex",
                marginLeft: "50px",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  height: 64,
                  width: 56,
                  border: "1px Solid #F2F4F7",
                  paddingTop: "4px",
                  paddingRight: "15px",
                  paddingBottom: "4px",
                  paddingLeft: "14px",
                  gap: "4px",
                  display: "flex",
                  boxShadow: "2px 0px 15px 0.05px #0000000D",
                  borderRadius: "8px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack sx={{}}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      fontFamily: "Onest",
                      color: "#475467",
                    }}
                  >
                    Call
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
export default Bookings;
