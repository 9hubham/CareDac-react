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
  Avatar,
} from "@mui/material";

import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import FemaleIcon from "@mui/icons-material/Female";
import CheckIcon from "../assests/check-circle 1.png";
import Woman from "../assests/woman.png";
import Man from "../assests/man.png";
import { useNavigate } from "react-router-dom";
import Profile from "../assests/profile.png";
import Editmember from "./editMember";
import Header from "./Header";

function Profile2() {
  const navigate = useNavigate();
  const cardData = [
    {
      title: "My Condition",
      editable: true,
      items: ["Improvement of Heath Fitness", "Covid 19 recovery"],
      useCheckIcon: true,
      route: "/myCondition"
    },
    {
      title: "Special Needs",
      editable: true,
      items: ["Bathing", "Walk on morning", "Personal care"],
      route: "/specialNeeds"
    },
    {
      title: "Services I need",
      editable: true,
      items: [
        "Personals care",
        "Domestic Assistance",
        "Out and About Transport",
      ],
      route: "/servicesneed"
    },
  ];
  return (
    <>
      <Header/>
      <Box
        sx={{
          width: "1142px",
          height: "234px",
          gap: "16px",
          border: "1px solid #F2F4F7",
          borderRadius: "8px",
          paddingTop: "28px",
          paddingRight: "38px",
          paddingBottom: "28px",
          paddingLeft: "38px",
          boxShadow: "2px 2px 15px 0px #0000000D",
          marginTop: "141px",
          marginLeft: "149px",
        }}
      >
        <Stack
          sx={{
            height: "178px",
            width: "894px",
            gap: "20px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{}}>
            <img
              src={Profile}
              alt="John Doe"
              sx={{ width: 114, height: 114 }}
            />
          </Box>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "178px",
              width: "760px",
              gap: "13px",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                height: "30px",
                width: "760px",
                gap: "13px",
              }}
            >
              <Typography
                sx={{ fontFamily: "Onest", fontWeight: 700, fontSize: "20px" }}
              >
                John Doe
              </Typography>

              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  fontFamily: "Onest",
                  color: "#667085",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FemaleIcon
                  sx={{ height: "24px", width: "24px" }}
                  color="action"
                />
                Female
              </Typography>
            </Stack>
            <Stack
              sx={{
                height: "30px",
                width: "760px",
                gap: "13px",
                flexDirection: "row",
              }}
            >
              <Typography
                sx={{
                  color: "#667085",
                  fontWeight: 500,
                  fontSize: "16px",
                  fontFamily: "Onest",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PhoneIcon color="action" />
                +91 987654322
              </Typography>
              <Typography
                sx={{
                  color: "#667085",
                  fontWeight: 500,
                  fontSize: "16px",
                  fontFamily: "Onest",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <EmailIcon color="action" />
                abc@gmail.com
              </Typography>
            </Stack>

            <Stack
              sx={{
                height: "30px",
                width: "760px",
                gap: "13px",
                flexDirection: "row",
              }}
            >
              <Typography
                color="text.secondary"
                fontWeight={600}
                sx={{
                  fontSize: "16px",
                  fontFamily: "Onest",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "2px",
                }}
              >
                <CalendarTodayIcon
                  color="action"
                  sx={{ height: "24px", width: "24px" }}
                />
                Date of Birth
              </Typography>
              <Typography
                fontWeight={600}
                sx={{ fontSize: "16px", fontFamily: "Onest" }}
              >
                Jan 24th 1997
              </Typography>
            </Stack>

            <Stack
              sx={{
                height: "30px",
                width: "760px",
                gap: "13px",
                flexDirection: "row",
              }}
            >
              <Typography
                color="text.secondary"
                sx={{
                  fontFamily: "Onest",
                  fontSize: "16px",
                  fontWeight: 600,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {" "}
                <PermPhoneMsgIcon color="action" /> Emergency contact
              </Typography>
              <Typography fontWeight={500} sx={{ color: "#667085" }}>
                +91 987654322
              </Typography>
            </Stack>

            <Stack
              sx={{
                height: "30px",
                width: "760px",
                gap: "13px",
                flexDirection: "row",
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Onest",
                  fontSize: "16px",
                }}
              >
                <LocationOnIcon fontSize="small" color="action" />
                Address
              </Typography>
              <Typography
                variant="body2"
                fontWeight={600}
                sx={{ fontFamily: "Onest", fontSize: "16px", color: "#101828" }}
              >
                2323 Dancing Dove Lane, Long Island City, NY 11101
              </Typography>
            </Stack>
          </Stack>
          <Stack
            sx={{ display: "flex", flexDirection: "row", marginTop: "50px" }}
          >
            <Button
              variant="outlined"
              sx={{
                color: "#024FAA",
                boxShadow: "0px 1px 2px 0px #1018280D",
                height: "52px",
                width: "156px",
                borderRadius: "40px",
              }}
              onClick={() => navigate("/EditMember")}
            >
              Edit Profile
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Stack
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          mt={2}
          mb={4}
          sx={{ height: "172px", width: "1142px" }}
        >
          {cardData.map((card, index) => (
            <Box
              key={index}
              sx={{
                flex: 1,
                border: "1px solid #E4E7EC",
                borderRadius: "12px",
                p: 2,
                minWidth: 250,
                height: "172px",
                width: "367.33px",
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={1}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: "#344054",
                    fontFamily: "Onest",
                  }}
                >
                  {card.title}
                </Typography>
                {card.editable && (
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#024FAA",
                      fontWeight: 500,
                      cursor: "pointer",
                      fontFamily: "Onest",
                    }}
                    onClick={() => navigate(card.route)}
                  >
                    Edit
                  </Typography>
                )}
              </Stack>

              <Stack spacing={1}>
                {card.items.map((item, i) => (
                  <Stack
                    key={i}
                    direction="row"
                    alignItems="center"
                    spacing={1}
                  >
                    {card.useCheckIcon ? (
                      <Box
                        component="img"
                        src={CheckIcon}
                        alt="check"
                        sx={{ width: 16, height: 16 }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          bgcolor: "#667085",
                          borderRadius: "50%",
                        }}
                      />
                    )}
                    <Typography
                      variant="body2"
                      sx={{ color: "#667085", fontFamily: "Onest" }}
                    >
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Stack>
      <Stack
        sx={{
          flexDirection: "row",
          gap: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            height: "250px",
            width: "561px",
            borderRadius: "8px",
            padding: "16px",
            gap: "18px",
            border: "1px Solid #F2F4F7",
            backgroundColor: "white",
            flexDirection: "column",
            marginTop: "10px",
          }}
        >
          <Stack
            sx={{
              height: "30px",
              width: "529px",
              gap: "18px",
              flexDirection: "row",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Onest",
                fontSize: "20px",
                fontWeight: 600,
                color: "#344054",
              }}
            >
              Family Member Details
            </Typography>
            <Typography
              sx={{
                fontFamily: "Onest",
                fontSize: "20px",
                fontWeight: 600,
                color: "#024FAA",
                display: "flex",
                marginLeft: "100px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/familyMemberCard")}
            >
              Add new member
            </Typography>
          </Stack>
          <Stack sx={{ gap: "5px" }}>
            <Box
              sx={{
                width: "529px",
                height: "76px",
                borderRadius: "8px",
                padding: "16px",
                gap: "4px",
                boxShadow: "2px 2px 15px 0px #0000000D",
              }}
            >
              <Stack
                sx={{
                  width: "442px",
                  height: "44px",
                  gap: "12px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {" "}
                <Avatar
                  sx={{
                    backgroundColor: "#D1E6FF",
                    color: "#024FAA",
                    fontSize: "14px",
                    fontWeight: 500,
                    height: "32px",
                    width: "32px",
                  }}
                >
                  OR
                </Avatar>
                <Stack
                  sx={{
                    height: "44px",
                    width: "398px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#101828",
                      fontFamily: "Onest",
                      fontWeight: 500,
                      fontSize: "16x",
                    }}
                  >
                    Olivia Rhye
                  </Typography>
                  <Typography
                    sx={{
                      color: "#101828",
                      fontFamily: "Onest",
                      fontWeight: 400,
                      fontSize: "14x",
                    }}
                  >
                    21 years
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    height: "20px",
                    width: "67px",
                    gap: "4px",
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: "60px",
                  }}
                >
                  <img src={Man} alt="woman" height="16px" width="16px" />
                  <Typography
                    sx={{
                      color: "#667085",
                      fontFamily: "Onest",
                      fontWeight: 400,
                      fontSize: "14x",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Male
                  </Typography>
                </Stack>
              </Stack>
            </Box>
            <Box
              sx={{
                width: "529px",
                height: "76px",
                borderRadius: "8px",
                padding: "16px",
                gap: "4px",
                boxShadow: "2px 2px 15px 0px #0000000D",
              }}
            >
              <Stack
                sx={{
                  width: "442px",
                  height: "44px",
                  gap: "12px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {" "}
                <Avatar
                  sx={{
                    backgroundColor: "#D1E6FF",
                    color: "#024FAA",
                    fontSize: "14px",
                    fontWeight: 500,
                    height: "32px",
                    width: "32px",
                  }}
                >
                  OR
                </Avatar>
                <Stack
                  sx={{
                    height: "44px",
                    width: "398px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#101828",
                      fontFamily: "Onest",
                      fontWeight: 500,
                      fontSize: "16x",
                    }}
                  >
                    Olivia Rhye
                  </Typography>
                  <Typography
                    sx={{
                      color: "#101828",
                      fontFamily: "Onest",
                      fontWeight: 400,
                      fontSize: "14x",
                    }}
                  >
                    21 years
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    height: "20px",
                    width: "67px",
                    gap: "4px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#667085",
                      fontFamily: "Onest",
                      fontWeight: 400,
                      fontSize: "14x",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={Woman}
                      alt="woman"
                      height="16px"
                      width="16px"
                      sx={{ gap: "4px" }}
                    />
                    Female
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            height: "250px",
            width: "561px",
            borderRadius: "8px",
            padding: "16px",
            gap: "18px",
            border: "1px Solid #F2F4F7",
            backgroundColor: "white",
            flexDirection: "column",
            marginTop: "10px",
          }}
        >
          <Stack
            sx={{
              height: "30px",
              width: "529px",
              gap: "18px",
              flexDirection: "row",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Onest",
                fontSize: "20px",
                fontWeight: 600,
                color: "#344054",
              }}
            >
              Payment Details
            </Typography>
            <Typography
              sx={{
                fontFamily: "Onest",
                fontSize: "20px",
                fontWeight: 600,
                color: "#024FAA",
                display: "flex",
                marginLeft: "200px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/addpaymentdetails")}
            >
              Add new
            </Typography>
          </Stack>
          <Stack sx={{ gap: "5px" }}>
            <Box
              sx={{
                width: "529px",
                height: "76px",
                borderRadius: "8px",
                padding: "16px",
                gap: "4px",
                boxShadow: "2px 2px 15px 0px #0000000D",
                cursor: "pointer",
              }}
              
            >
              <Stack
                sx={{
                  width: "442px",
                  height: "44px",
                  gap: "12px",
                  display: "flex",
                  flexDirection: "row",
                }}
                onClick={() => navigate("/editPaymentdetails")}
              >
                {" "}
                <Avatar
                  sx={{
                    backgroundColor: "#D1E6FF",
                  }}
                ></Avatar>
                <Stack
                  sx={{
                    height: "44px",
                    width: "398px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#101828",
                      fontFamily: "Onest",
                      fontWeight: 500,
                      fontSize: "16x",
                    }}
                  >
                    Samarth Patel
                  </Typography>
                  <Typography
                    sx={{
                      color: "#101828",
                      fontFamily: "Onest",
                      fontWeight: 400,
                      fontSize: "14x",
                    }}
                  >
                    1234-XXXX-XXXX-1234
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    height: "20px",
                    width: "67px",
                    gap: "4px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      height: "26px",
                      width: "60px",
                      border: "1px Solid #024FAA",
                      borderRadius: "40px",
                      display: "flex",
                      boxShadow: "0px 1px 2px 0px #1018280D",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 500,
                        fontFamily: "Onest",
                        textTransform: "none",
                      }}
                    >
                      Primary
                    </Typography>
                  </Button>
                  <Typography
                    sx={{
                      color: "#667085",
                      fontFamily: "Onest",
                      fontWeight: 400,
                      fontSize: "14x",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "4px",
                    }}
                  >
                    12/25
                  </Typography>
                </Stack>
              </Stack>
            </Box>
            <Box
              sx={{
                width: "529px",
                height: "76px",
                borderRadius: "8px",
                padding: "16px",
                gap: "4px",
                boxShadow: "2px 2px 15px 0px #0000000D",
                cursor: "pointer",
              }}
              onClick={() => navigate("/editpaymentdetails")}
            >
              <Stack
                sx={{
                  width: "442px",
                  height: "44px",
                  gap: "12px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {" "}
                <Avatar
                  sx={{
                    backgroundColor: "#D1E6FF",
                    color: "#024FAA",
                    fontSize: "14px",
                    fontWeight: 500,
                    height: "32px",
                    width: "32px",
                  }}
                >
                  OR
                </Avatar>
                <Stack
                  sx={{
                    height: "44px",
                    width: "398px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#101828",
                      fontFamily: "Onest",
                      fontWeight: 500,
                      fontSize: "16x",
                    }}
                  >
                    Samarth Patel
                  </Typography>
                  <Typography
                    sx={{
                      color: "#101828",
                      fontFamily: "Onest",
                      fontWeight: 400,
                      fontSize: "14x",
                    }}
                  >
                    1234-XXXX-XXXX-1234
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    height: "20px",
                    width: "67px",
                    gap: "4px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#667085",
                      fontFamily: "Onest",
                      fontWeight: 400,
                      fontSize: "14x",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "70px",
                    }}
                  >
                    12/25
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
export default Profile2;