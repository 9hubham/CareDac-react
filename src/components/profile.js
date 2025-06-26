import "@fontsource-variable/onest";
import {
  Typography,
  Button,
  Box,
  Stack,
  InputAdornment,
  Rating,
  Modal,
  List,
  ListItem,
  TextField,
  Avatar,
} from "@mui/material";
import Woman from "../assests/woman.png";

import Calender from "../assests/calendar 1(1).png";
//import Lang from "../assests/language-square@2x.png";

import Dp from "../assests/dp.png";
import Tick from "../assests/shield-tick.png";
import Dates from "../assests/DAte.png";
import Clock from "../assests/clock 1.png";
import Check from "../assests/check-circle 1.png";
import * as React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  // const [lang, setLang] = React.useState("");
  // const handleChange = (event) => {
  //   setLang(event.target.value);
  // };
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const [navigateAfterClose, setNavigateAfterClose] = React.useState(null);

  // Watch for modal close and trigger navigation
  React.useEffect(() => {
    if (!open && navigateAfterClose) {
      navigate(navigateAfterClose);
      setNavigateAfterClose(null); // Reset
    }
  }, [open, navigateAfterClose, navigate]);

  // Modal style
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "477px",
    maxHeight: "90vh",
    bgcolor: "background.paper",
    borderRadius: "10px",
    padding: "32px",
    boxShadow: 2,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "auto",
  };

  return (
    <>
      <Box
        sx={{
          height: "1142px",
          width: "1288px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "140px",
          marginLeft: "149px",
          marginRight: "149px",
          marginBottom: "140px",
        }}
      >
        <Box
          sx={{
            height: "1142px",
            width: "1288px",
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
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              height: "176px",
              width: "1066px",
              borderRadius: "8px",
              borderColor: "#F2F4F7",
              gap: "8px",
              padding: "16px",
              border: "1px solid #F2F4F7",
              backgroundColor: "white",
            }}
          >
            <Stack
              sx={{
                height: "144px",
                width: "1034px",
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Stack
                sx={{
                  height: "877px",
                  width: "144px",
                  gap: "20px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box
                  sx={{
                    height: "145px",
                    width: "145px",
                    borderRadius: "12px",
                    border: "1.5px Solid #FC9155",
                  }}
                >
                  <img
                    src={Dp}
                    alt="Profile"
                    style={{
                      width: "144px",
                      height: "144px",
                      borderRadius: "12px",
                    }}
                  />
                </Box>
                <Stack
                  sx={{
                    width: "713px",
                    height: "128px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      fontFamily: "Onest",
                      color: "#101828",
                    }}
                  >
                    PART-TIME
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      fontFamily: "Onest",
                      color: "#101828",
                    }}
                  >
                    Paula Mora
                  </Typography>
                  <Typography sx={{ display: "flex", flexDirection: "row" }}>
                    <Rating
                      name="no-value"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                    (5)
                  </Typography>
                  <Stack sx={{ height: "24px", width: "713px", gap: "4px" }}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: "Onest",
                        color: "#667085",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <img
                        src={Tick}
                        alt="Shield Tick"
                        height="24px"
                        width="24px"
                      />
                      Background check done
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack
                sx={{
                  height: "52px",
                  width: "157px",
                  gap: "14px",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "50px",
                }}
              >
                <Button
                  variant="contained"
                  onClick={handleOpen}
                  sx={{
                    color: "#024FAA",
                    borderRadius: "40px",
                    paddingtop: "12px",
                    paddingBottom: "10px",
                    height: "52px",
                    width: "157px",
                    gap: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#FFFFFF",
                      fontFamily: "Onest,sans-serif",
                      textTransform: "none",
                    }}
                  >
                    Book Paula
                  </Typography>
                </Button>

                {/* Fixed Modal Implementation */}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="booking-modal"
                  aria-describedby="booking-details-modal"
                >
                  <Box sx={modalStyle}>
                    <Stack sx={{ height: "63px", width: "413px", gap: "11px" }}>
                      <Typography
                        sx={{
                          color: "#024FAA",
                          fontFamily: "Onest",
                          fontWeight: 600,
                          fontSize: "18px",
                        }}
                      >
                        Book For?
                      </Typography>
                      <Typography
                        sx={{
                          color: "#73787E",
                          fontFamily: "Onest",
                          fontWeight: 400,
                          fontSize: "16px",
                        }}
                      >
                        Select Patient for the care
                      </Typography>
                    </Stack>
                    <Stack
                      sx={{
                        height: "206px",
                        width: "413px",
                        gap: "12px",
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "20px",
                      }}
                    >
                      <Box
                        sx={{
                          height: "132px",
                          width: "413px",
                          gap: "8px",
                          padding: "16px",
                          border: "1px Solid #F2F4F7",
                          borderRadius: "8px",
                        }}
                      >
                        <Stack
                          sx={{
                            height: "100px",
                            width: "381px",
                            gap: "20px",
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <Box
                            sx={{
                              height: "80px",
                              width: "80px",
                              border: "1.5px Solid #FC9155",
                              borderRadius: "12px",
                            }}
                          >
                            <img
                              src={Dp}
                              alt="Profile"
                              style={{
                                width: "80px",
                                height: "80px",
                                borderRadius: "12px",
                              }}
                            />
                          </Box>
                          <Stack
                            sx={{
                              width: "270px",
                              height: "100px",
                              display: "flex",
                              flexDirection: "column",
                              gap: "8px",
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "14px",
                                fontWeight: 400,
                                fontFamily: "Onest",
                                color: "#101828",
                              }}
                            >
                              PART-TIME
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "20px",
                                fontWeight: 700,
                                fontFamily: "Onest",
                                color: "#101828",
                              }}
                            >
                              Paula Mora
                            </Typography>
                            <Typography
                              sx={{ display: "flex", flexDirection: "row" }}
                            >
                              <Rating
                                name="modal-rating"
                                value={value}
                                onChange={(event, newValue) => {
                                  setValue(newValue);
                                }}
                              />
                              (5)
                            </Typography>
                            <Stack
                              sx={{
                                height: "24px",
                                width: "250px",
                                gap: "4px",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: 500,
                                  fontFamily: "Onest",
                                  color: "#667085",
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                <img
                                  src={Tick}
                                  alt="Shield Tick"
                                  height="24px"
                                  width="24px"
                                />
                                Background check done
                              </Typography>
                            </Stack>
                          </Stack>
                        </Stack>
                      </Box>
                      <Box
                        sx={{
                          width: "413px",
                          height: "60px",
                          borderRadius: "8px",
                          border: "1px Solid #F2F4F7",
                          gap: "8px",
                          padding: "16px",
                        }}
                      >
                        <Stack
                          sx={{ height: "30px", width: "381px", gap: "8px" }}
                        >
                          <Typography
                            sx={{
                              color: "#101828",
                              fontSize: "20px",
                              fontWeight: 700,
                              fontFamily: "Onest",
                            }}
                          >
                            $59/hr
                          </Typography>
                        </Stack>
                      </Box>
                      <Box
                        sx={{
                          width: "413px",
                          height: "188px",
                          border: "1px Solid #F2F4F7",
                          borderRadius: "8px",
                          padding: "16px",
                          gap: "20px",
                        }}
                      >
                        <Stack
                          sx={{
                            width: "381px",
                            height: "70px",
                            gap: "6px",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#344054",
                              fontSize: "14px",
                              fontWeight: 500,
                              fontFamily: "Onest",
                            }}
                          >
                            Booking Date
                          </Typography>
                          <TextField
                            variant="outlined"
                            placeholder="Select Date"
                            sx={{
                              color: "#667085",
                              "& .MuiOutlinedInput-root": {
                                border: "1px #475467",
                                borderRadius: "12px",
                                height: "44px",
                                width: "381px",
                                gap: "8px",
                                paddingTop: "10px",
                                paddingBottom: "10px",
                                paddingLeft: "14px",
                                paddingRight: "14px",
                              },
                            }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <img
                                    src={Calender}
                                    alt="calendar"
                                    height="20px"
                                    width="20px"
                                  />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Stack>
                        <Stack
                          sx={{
                            color: "#344054",
                            fontSize: "14px",
                            fontFamily: "Onest",
                            fontWeight: 500,
                            display: "flex",
                            flexDirection: "column",
                            gap: "6px",
                            marginTop: "10px",
                          }}
                        >
                          <Typography>Booking Time</Typography>
                          <Stack
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "5px",
                              marginTop: "5px",
                            }}
                          >
                            <Box
                              sx={{
                                height: "40px",
                                width: "89px",
                                border: "1px Solid #F2F4F7",
                                paddingTop: "10px",
                                paddingBottom: "10px",
                                paddingRight: "20px",
                                paddingLeft: "20px",
                                gap: "4px",
                                borderRadius: "8px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Typography
                                sx={{
                                  color: "#101828",
                                  fontFamily: "Onest",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                }}
                              >
                                1:55 am
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                height: "40px",
                                width: "89px",
                                border: "1px Solid #F2F4F7",
                                paddingTop: "10px",
                                paddingBottom: "10px",
                                paddingRight: "20px",
                                paddingLeft: "20px",
                                gap: "4px",
                                borderRadius: "8px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Typography
                                sx={{
                                  color: "#101828",
                                  fontFamily: "Onest",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                }}
                              >
                                2:55 am
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                height: "40px",
                                width: "89px",
                                border: "1px Solid #F2F4F7",
                                paddingTop: "10px",
                                paddingBottom: "10px",
                                paddingRight: "20px",
                                paddingLeft: "20px",
                                gap: "4px",
                                borderRadius: "8px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Typography
                                sx={{
                                  color: "#101828",
                                  fontFamily: "Onest",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                }}
                              >
                                3:55 am
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                height: "40px",
                                width: "89px",
                                border: "1px Solid #F2F4F7",
                                paddingTop: "10px",
                                paddingBottom: "10px",
                                paddingRight: "20px",
                                paddingLeft: "20px",
                                gap: "4px",
                                borderRadius: "8px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Typography
                                sx={{
                                  color: "#101828",
                                  fontFamily: "Onest",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                }}
                              >
                                4:55 am
                              </Typography>
                            </Box>
                          </Stack>
                        </Stack>
                      </Box>

                      <Stack
                        sx={{
                          height: "352px",
                          width: "413px",
                          gap: "16px",
                          marginTop: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#344054",
                            fontFamily: "Onest",
                            fontWeight: 600,
                            fontSize: "16px",
                          }}
                        >
                          Select Patient
                        </Typography>
                        <Box
                          sx={{
                            height: "76px",
                            width: "413px",
                            gap: "4px",
                            borderRadius: "8px",
                            padding: "16px",
                            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Stack
                            sx={{
                              width: "380px",
                              height: "44px",
                              gap: "12px",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
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
                                width: "266px",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Typography
                                sx={{
                                  color: "#101828",
                                  fontFamily: "Onest",
                                  fontWeight: 500,
                                  fontSize: "16px",
                                }}
                              >
                                Olivia Rhye
                              </Typography>
                              <Typography
                                sx={{
                                  color: "#101828",
                                  fontFamily: "Onest",
                                  fontWeight: 400,
                                  fontSize: "14px",
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
                                alignItems: "center",
                              }}
                            >
                              <img
                                src={Woman}
                                alt="woman"
                                height="16px"
                                width="16px"
                              />
                              <Typography
                                sx={{
                                  color: "#667085",
                                  fontFamily: "Onest",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                }}
                              >
                                Female
                              </Typography>
                            </Stack>
                          </Stack>
                        </Box>

                        <Box
                          sx={{
                            height: "76px",
                            width: "413px",
                            gap: "4px",
                            borderRadius: "8px",
                            padding: "16px",
                            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Stack
                            sx={{
                              width: "380px",
                              height: "44px",
                              gap: "12px",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
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
                                width: "266px",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Typography
                                sx={{
                                  color: "#101828",
                                  fontFamily: "Onest",
                                  fontWeight: 500,
                                  fontSize: "16px",
                                }}
                              >
                                Olivia Rhye
                              </Typography>
                              <Typography
                                sx={{
                                  color: "#101828",
                                  fontFamily: "Onest",
                                  fontWeight: 400,
                                  fontSize: "14px",
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
                                alignItems: "center",
                              }}
                            >
                              <img
                                src={Woman}
                                alt="woman"
                                height="16px"
                                width="16px"
                              />
                              <Typography
                                sx={{
                                  color: "#667085",
                                  fontFamily: "Onest",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                }}
                              >
                                Female
                              </Typography>
                            </Stack>
                          </Stack>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: 500,
                              color: "#024FAA",
                              textAlign: "center",
                              marginBottom: "20px",
                            }}
                          >
                            Add new Patient
                          </Typography>

                          <Box
                            sx={{ display: "flex", gap: "16px", width: "100%" }}
                          >
                            <Button
                              variant="outlined"
                              onClick={() => {
                                setNavigateAfterClose(-1); // Navigate back
                                setOpen(false); // Close modal
                              }}
                              sx={{
                                color: "#024FAA",
                                borderColor: "#024FAA",
                                borderRadius: "40px",
                                padding: "10px 20px",
                                height: "52px",
                                width: "100%",
                                fontFamily: "Onest,sans-serif",
                                textTransform: "none",
                              }}
                            >
                              Cancel
                            </Button>

                            <Button
                              variant="contained"
                              onClick={() => {
                                setNavigateAfterClose(-1); // Navigate back
                                setOpen(false); // Close modal
                              }}
                              sx={{
                                color: "#FFFFFF",
                                backgroundColor: "#024FAA",
                                borderRadius: "40px",
                                padding: "10px 20px",
                                height: "52px",
                                width: "100%",
                                fontFamily: "Onest,sans-serif",
                                textTransform: "none",
                              }}
                            >
                              Book
                            </Button>
                          </Box>
                        </Box>
                      </Stack>
                    </Stack>
                  </Box>
                </Modal>
              </Stack>
            </Stack>
          </Box>

          <Box
            sx={{
              width: 1066,
              height: 196,
              gap: "8px",
              padding: "16px",
              borderRadius: "8px",
              border: "1px solid #F2F4F7",
              backgroundColor: "white",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                fontFamily: "Onest",
                color: "#344054",
              }}
            >
              About paula
            </Typography>
            <Stack
              sx={{
                gap: "26px",
                height: "30px",
                width: "1034",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  fontFamily: "Onest",
                  color: "#98A2B3",
                }}
              >
                Hourly rate
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 700,
                  fontFamily: "Onest",
                  color: "#101828",
                }}
              >
                $30-40{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  fontFamily: "Onest",
                  color: "#98A2B3",
                }}
              >
                years exp.
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 700,
                  fontFamily: "Onest",
                  color: "#101828",
                }}
              >
                5
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  fontFamily: "Onest",
                  color: "#101828",
                  marginLeft: "250px",
                  gap: "16px",
                }}
              >
                33yers Female Speaking English
              </Typography>
            </Stack>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                fontFamily: "Onest",
                color: "#344054",
              }}
            >
              I am a 22-year-old graduate student pursuing my Master's in Social
              Work. I have 5 years of experience caring for children from
              newborn - 7 years. I am an animal lover, so pets are no problem! I
              have my own vehicle and am willing to drive children if necessary.
              I am more than happy to help with housework while watching your
              children! I am a non-smoker and have received my COVID-19 vaccine!
            </Typography>
          </Box>
          <Box
            sx={{
              width: 1066,
              height: 142,
              gap: "8px",
              padding: "16px",
              borderRadius: "8px",
              border: "1px solid #F2F4F7",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Stack
              sx={{
                height: 30,
              }}
            >
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: 600,
                  fontFamily: "Onest",
                  color: "#344054",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                Connect Paula
              </Typography>
            </Stack>
            <Stack
              sx={{
                gap: "26px",
                height: 30,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  fontFamily: "Onest",
                  color: "#98A2B3",
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                <img src={Dates} alt="calendar" height="20px" width="20px" />
                Availability Dates
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 700,
                  fontFamily: "Onest",
                  color: "#101828",
                }}
              >
                Jan 24th to 9th Feb
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  fontFamily: "Onest",
                  color: "#98A2B3",
                  display: "flex",
                  flexDirection: "row",
                  gap: "4px",
                }}
              >
                <img src={Clock} alt="clock" height="20px" width="20px" />
                Time
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 700,
                  fontFamily: "Onest",
                  color: "#101828",
                }}
              >
                9:00 AM to 5:00 PM
              </Typography>
            </Stack>
            <Stack
              sx={{
                height: 24,

                display: "flex",
                flexDirection: "row",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  fontFamily: "Onest",
                  color: "#344054",
                }}
              >
                Send Paula Message
              </Typography>
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  fontFamily: "Onest",
                  color: "#FC9155",
                }}
              >
                here.
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              width: 1066,
              height: 462,
              gap: "8px",
              padding: "16px",
              borderRadius: "8px",
              border: "1px solid #F2F4F7",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Stack
              sx={{
                height: "70px",
                width: "1034px",
                gap: "8px",
              }}
            >
              <Stack
                sx={{
                  height: 30,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 600,
                    fontFamily: "Onest",
                    color: "#344054",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  Reviews
                </Typography>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 700,
                    fontFamily: "Onest",
                    color: "#101828",
                  }}
                >
                  5.0
                </Typography>
                <Typography sx={{ display: "flex", flexDirection: "row" }}>
                  <Rating
                    name="no-value"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  (5)
                </Typography>
              </Stack>
            </Stack>
            <Stack
              sx={{
                height: "316px",
                width: "1034px",
                gap: "12px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: 1034,
                  height: 84,
                  borderRadius: "8px",
                  gap: "8px",
                  padding: "8px",
                  border: "1px solid #F2F4F7",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <Stack sx={{ display: "flex", flexDirection: "row" }}>
                  <Typography
                    sx={{
                      color: "#344054",
                      fontFamily: "Onest",
                      fontSize: 16,
                      fontWeight: 400,
                    }}
                  >
                    Reviewed by{" "}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#101828",
                      fontFamily: "Onest",
                      fontSize: 16,
                      fontWeight: 600,
                      marginLeft: 1,
                    }}
                  >
                    Kim A.
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    color: "#344054",
                    fontFamily: "Onest",
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  Donec dictum tristique porta. Etiam convallis lorem lobortis
                  nulla molestie, nec tincidunt ex ullamcorper..
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 1034,
                  height: 84,
                  borderRadius: "8px",
                  gap: "8px",
                  padding: "8px",
                  border: "1px solid #F2F4F7",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <Stack sx={{ display: "flex", flexDirection: "row" }}>
                  <Typography
                    sx={{
                      color: "#344054",
                      fontFamily: "Onest",
                      fontSize: 16,
                      fontWeight: 400,
                    }}
                  >
                    Reviewed by{" "}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#101828",
                      fontFamily: "Onest",
                      fontSize: 16,
                      fontWeight: 600,
                      marginLeft: 1,
                    }}
                  >
                    Kim A.
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    color: "#344054",
                    fontFamily: "Onest",
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  Donec dictum tristique porta. Etiam convallis lorem lobortis
                  nulla molestie, nec tincidunt ex ullamcorper..
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 1034,
                  height: 84,
                  borderRadius: "8px",
                  gap: "8px",
                  padding: "8px",
                  border: "1px solid #F2F4F7",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <Stack sx={{ display: "flex", flexDirection: "row" }}>
                  <Typography
                    sx={{
                      color: "#344054",
                      fontFamily: "Onest",
                      fontSize: 16,
                      fontWeight: 400,
                    }}
                  >
                    Reviewed by{" "}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#101828",
                      fontFamily: "Onest",
                      fontSize: 16,
                      fontWeight: 600,
                      marginLeft: 1,
                    }}
                  >
                    Kim A.
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    color: "#344054",
                    fontFamily: "Onest",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  Vanessa is THE only person outside of family that I have
                  trusted with my children. She is truly amazing! She is
                  attentive, keeps my rowdy children accountable, and has great
                  communication. Also, it was an added perk that she loves our
                  dog! I wouldn't hesitate to welcome Vanessa into your
                  children's lives.
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Stack
            sx={{
              width: "1066px",
              height: "204px",
              gap: "30px",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Stack
              sx={{
                width: "518px",
                height: "204px",
                gap: "12px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "518px",
                  height: "204px",
                  gap: "8px",
                  padding: "16px",

                  border: "1px solid #F2F4F7",
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "8px",
                }}
              >
                <Typography
                  sx={{
                    color: "#344054",
                    fontFamily: "Onest",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  Highlights
                </Typography>
                <Stack
                  sx={{
                    width: "486px",
                    height: "126px",
                    gap: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Stack
                    sx={{
                      width: "486px",
                      height: "24px",
                      gap: "8px",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <img
                      src={Check}
                      alt="checkSymbol"
                      height="16px"
                      width="16px"
                    />
                    <Typography
                      sx={{
                        color: "#344054",
                        fontFamily: "Onest",
                        fontSize: "16px",
                        fontWeight: 600,
                      }}
                    >
                      Comfortable with pats
                    </Typography>
                  </Stack>
                  <Stack
                    sx={{
                      width: "486px",
                      height: "24px",
                      gap: "8px",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <img
                      src={Check}
                      alt="checkSymbol"
                      height="16px"
                      width="16px"
                    />
                    <Typography
                      sx={{
                        color: "#344054",
                        fontFamily: "Onest",
                        fontSize: "16px",
                        fontWeight: 600,
                      }}
                    >
                      Non-Smoker
                    </Typography>
                  </Stack>
                  <Stack
                    sx={{
                      width: "486px",
                      height: "24px",
                      gap: "8px",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <img
                      src={Check}
                      alt="checkSymbol"
                      height="16px"
                      width="16px"
                    />
                    <Typography
                      sx={{
                        color: "#344054",
                        fontFamily: "Onest",
                        fontSize: "16px",
                        fontWeight: 600,
                      }}
                    >
                      Alzheimers or dementia experince
                    </Typography>
                  </Stack>
                  <Stack
                    sx={{
                      width: "486px",
                      height: "24px",
                      gap: "8px",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <img
                      src={Check}
                      alt="checkSymbol"
                      height="16px"
                      width="16px"
                    />
                    <Typography
                      sx={{
                        color: "#344054",
                        fontFamily: "Onest",
                        fontSize: "16px",
                        fontWeight: 600,
                      }}
                    >
                      Hospice experience
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
            <Stack
              sx={{
                width: "518px",
                height: "204px",
                gap: "12px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "518px",
                  height: "204px",
                  gap: "8px",
                  padding: "16px",
                  border: "1px solid #F2F4F7",
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "8px",
                }}
              >
                <Typography
                  sx={{
                    color: "#344054",
                    fontFamily: "Onest",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  Can also with
                </Typography>
                <List marker="disc" sx={{ height: "126px", width: "486px" }}>
                  <ListItem
                    sx={{
                      color: "#667085",
                      fontFamily: "Onest",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    Bathing
                  </ListItem>
                  <ListItem
                    sx={{
                      color: "#667085",
                      fontFamily: "Onest",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    Live in Home Care
                  </ListItem>
                  <ListItem
                    sx={{
                      color: "#667085",
                      fontFamily: "Onest",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    Personal Care
                  </ListItem>
                  <ListItem
                    sx={{
                      color: "#667085",
                      fontFamily: "Onest",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    Covid Safety
                  </ListItem>
                </List>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default Profile;
