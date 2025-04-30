import { Input } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Typography,
  Divider,
  Button,
  Paper,
  Slider,
  IconButton,
  Chip,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { border, color } from "@mui/system";
import React from "react";
import "@fontsource-variable/onest";
import { Add, Remove } from "@mui/icons-material";

export default function Information() {
  const [preferences, setPreferences] = React.useState([]);
  const [languages, setLanguages] = React.useState([]);

  const [skills, setSkills] = React.useState([]);
  const [payrate, setPayrate] = React.useState(25);
  const [childCount, setChildCount] = React.useState(1);

  const [childAges, setChildAges] = React.useState([]);

  const [selectedRating, setSelectedRating] = React.useState(null);

  const handleRatingClick = (value) => {
    setSelectedRating(value === selectedRating ? null : value);
  };

  const handleAgeToggle = (value) => {
    setChildAges((prev) =>
      prev.includes(value) ? prev.filter((a) => a !== value) : [...prev, value]
    );
  };

  const services = [
    "Personals care",
    "Domestic Assistance",
    "Social Support & Community Participation",
    "Specialist Care",
    "Out and About Transport",
    "Relief Respite Care",
    "Coaching & Counselling",
    "Disability Products",
  ];

  const toggleSelection = (item, list, setList) => {
    setList((prev) =>
      prev.includes(item) ? prev.filter((val) => val !== item) : [...prev, item]
    );
  };

  return (
    <Box
      sx={{
        width: "438px",
        height: "800px", // Fixed height for the container
        borderRadius: "8px",
        border: "1px solid #ccc",
        display: "flex",
        flexDirection: "column",
        marginRight: "20px",
        marginLeft: "20px",
        marginTop: "10px",
        overflow: "hidden", // Hide overflow
      }}
    >
      {/* Header section - outside of scrollable area */}
      <Box
        sx={{
          width: "100%",
          padding: "16px",
          borderBottom: "1px solid #ccc",
        }}
      >
        <Box
          sx={{
            width: "343px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Typography
            sx={{
              color: "#344054",
              fontFamily: "Onest",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "30px",
              letterSpacing: 0,
              verticalAlign: "middle",
              mb: "4px",
            }}
          >
            Showing result for
          </Typography>

          <FormControl fullWidth sx={{ mt: 0 }}>
            <Select
              defaultValue="one-time sitter"
              sx={{
                width: "343px",
                height: "44px",
                borderRadius: "12px",
                border: "1px solid #ccc",
                paddingTop: "10px",
                paddingRight: "14px",
                paddingBottom: "10px",
                paddingLeft: "14px",
                gap: "8px",
              }}
            >
              <MenuItem value="one-time sitter">one-time sitter</MenuItem>
              <MenuItem value="Recurring sitter">Recurring sitter </MenuItem>
            </Select>
          </FormControl>

          <Typography
            sx={{
              color: "#344054",
              fontFamily: "Onest",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "30px",
              letterSpacing: 0,
              verticalAlign: "middle",
              mb: "4px",
            }}
          >
            Showing result for
          </Typography>

          <FormControl fullWidth sx={{ mt: 0 }}>
            <Select
              defaultValue="Where do you need care"
              sx={{
                width: "343px",
                height: "44px",
                borderRadius: "12px",
                border: "1px solid #ccc",
                paddingTop: "10px",
                paddingRight: "14px",
                paddingBottom: "10px",
                paddingLeft: "14px",
                gap: "8px",
              }}
            >
              <MenuItem value="Where do you need care">
                Where do you need care
              </MenuItem>
              <MenuItem value="Recurring sitter">Recurring sitter </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Filter header */}
      <Box
        sx={{
          width: "100%",
          padding: "16px 16px 0 16px",
        }}
      >
        <Box
          sx={{
            width: "343px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Onest",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "30px",
              letterSpacing: 0,
              verticalAlign: "middle",
            }}
          >
            Filter
          </Typography>

          <Button
            variant="outlined"
            sx={{
              borderRadius: "40px",
              border: "1px solid #ccc",
              padding: "4px 8px",
              minWidth: "76px",
              height: "26px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "none",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Onest",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "18px",
                letterSpacing: 0,
                textAlign: "center",
              }}
            >
              Clear filter
            </Typography>
          </Button>
        </Box>
      </Box>

      {/* Scrollable content area */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto", // Enable vertical scrolling
          padding: "16px",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
        }}
      >
        <Paper
          elevation={2}
          sx={{
            color: "#FFFFFF",
            width: "343px",
            margin: "0 auto",
            padding: "16px",
            gap: "16px",
            display: "flex",
            flexDirection: "column",
            borderRadius: 2,
            backgroundColor: "rgba(255,255,255,0.85)",
          }}
        >
          <Box
            sx={{
              width: "311px",
              display: "flex",
              flexDirection: "column",
              gap: "36px",
            }}
          >
            {/* Payrate Section */}
            <Box
              sx={{
                width: "311px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Onest, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  color: "#667085",
                }}
              >
                Payrate
              </Typography>
              <Box
                sx={{
                  width: "311px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Onest, sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    color: "#101828",
                    display: "flex",
                    alignItems: "center",
                    mb: "8px",
                  }}
                >
                  $15-$25 / hour
                </Typography>

                <Slider
                  value={payrate}
                  onChange={(e, newValue) => setPayrate(newValue)}
                  valueLabelDisplay="auto"
                  min={15}
                  max={25}
                  sx={{
                    width: "311px",
                    height: "8px",
                    direction: "rtl",
                    padding: "13px 0",
                    "& .MuiSlider-track": {
                      backgroundColor: "#FC91554D",
                      border: "none",
                      height: "8px",
                      borderRadius: "30px",
                    },
                    "& .MuiSlider-rail": {
                      backgroundColor: "#FC91554D",
                      opacity: 0.3,
                      height: "8px",
                      borderRadius: "30px",
                    },
                    "& .MuiSlider-thumb": {
                      width: "30px",
                      height: "30px",
                      backgroundColor: "#FC9155",
                      border: "2px solid white",
                      marginTop: "-1px",
                    },
                  }}
                />
              </Box>
            </Box>

            {/* Number of Child */}
            <Box
              sx={{
                width: "311px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Onest, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: 0,
                  display: "flex",
                  alignItems: "center",
                  mb: "8px",
                  color: "#667085",
                }}
              >
                Number of Child
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Onest, sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0%",
                    color: "#101828",
                  }}
                >
                  {childCount} {childCount === 1 ? "Child" : "Children"}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                  }}
                >
                  <IconButton
                    onClick={() => setChildCount(Math.max(1, childCount - 1))}
                    sx={{
                      backgroundColor: "#D0D5DD",
                      padding: "4px",
                      borderRadius: "50%",
                      "&:hover": {
                        backgroundColor: "#D0D5DD",
                      },
                    }}
                  >
                    <Remove />
                  </IconButton>
                  <Typography>{childCount}</Typography>
                  <IconButton
                    onClick={() => setChildCount(childCount + 1)}
                    sx={{
                      backgroundColor: "#024FAA",
                      padding: "4px",
                      borderRadius: "50%",
                      "&:hover": {
                        backgroundColor: "#024FAA",
                      },
                    }}
                  >
                    <Add sx={{ color: "white" }} />
                  </IconButton>
                </Box>
              </Box>
            </Box>

            {/* Child age ranges */}
            <Box
              sx={{
                width: "311px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Onest, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: 0,
                  display: "flex",
                  alignItems: "center",
                  mb: "8px",
                  color: "#667085",
                }}
              >
                Child age ranges
              </Typography>

              <Box display="flex" flexWrap="wrap" gap={1} mt={0}>
                <Box display="flex" flexWrap="wrap" gap={1} width="100%">
                  {["0-11 months", "1-3 Years"].map((age) => (
                    <Chip
                      key={age}
                      label={age}
                      clickable
                      color={childAges.includes(age) ? "primary" : "default"}
                      onClick={() => handleAgeToggle(age)}
                      sx={{
                        borderRadius: "999px",
                        border: "1px solid #667085",
                        mx: 1,
                      }}
                    />
                  ))}
                </Box>

                <Box display="flex" flexWrap="wrap" gap={1} width="100%">
                  {["4-5 Years", "10+ Years"].map((age) => (
                    <Chip
                      key={age}
                      label={age}
                      clickable
                      color={childAges.includes(age) ? "primary" : "default"}
                      onClick={() => handleAgeToggle(age)}
                      sx={{
                        borderRadius: "999px",
                        border: "1px solid #667085",
                        mx: 1,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Rating */}
            <Box
              sx={{
                width: "311px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Onest, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: 0,
                  display: "flex",
                  alignItems: "center",
                  mb: "4px",
                  color: "#667085",
                }}
              >
                Rating
              </Typography>

              <Box display="flex" flexDirection="column" gap={2}>
                <Box display="flex" gap={2}>
                  {[0, 1, 2].map((rating) => (
                    <Chip
                      key={rating}
                      label={
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mx: 1,
                          }}
                        >
                          <span>{rating}</span>
                          <span style={{ color: "#F7B500" }}> ★</span>
                        </Box>
                      }
                      clickable
                      variant="outlined"
                      onClick={() => handleRatingClick(rating)}
                      color={selectedRating === rating ? "primary" : "default"}
                      sx={{
                        borderRadius: "999px",
                        mx: 1,
                      }}
                    />
                  ))}
                </Box>

                <Box display="flex" gap={2}>
                  {[3, 4, 5].map((rating) => (
                    <Chip
                      key={rating}
                      label={
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mx: 1,
                          }}
                        >
                          <span>{rating}</span>
                          <span style={{ color: "#F7B500" }}> ★</span>
                        </Box>
                      }
                      clickable
                      variant="outlined"
                      onClick={() => handleRatingClick(rating)}
                      color={selectedRating === rating ? "primary" : "default"}
                      sx={{
                        borderRadius: "999px",
                        mx: 1,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Rest of the sections - removed for brevity but keep all your other components */}
            {/* Select service */}
            <Box
              sx={{
                width: "311px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Onest, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: 0,
                  display: "flex",
                  alignItems: "center",
                  mb: "0px",
                  color: "#667085",
                }}
              >
                Select service
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 0,
                }}
              >
                <FormGroup>
                  {services.map((label) => (
                    <FormControlLabel
                      key={label}
                      control={<Checkbox />}
                      label={
                        <Typography
                          sx={{
                            fontFamily: "Onest, sans-serif",
                            color: "#344054",
                          }}
                        >
                          {label}
                        </Typography>
                      }
                      labelPlacement="end"
                    />
                  ))}
                </FormGroup>
              </Box>
            </Box>

            {/* Date range */}
            <Box
              sx={{
                width: "311px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Onest, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: 0,
                  display: "flex",
                  alignItems: "center",
                  mb: "4px",
                  color: "#667085",
                }}
              >
                Date range
              </Typography>
              <Box display="flex" gap={1} mt={0}>
                <TextField
                  type="date"
                  size="small"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  type="date"
                  size="small"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Box>
            </Box>

            {/* Professional skills */}
            <Box
              sx={{
                width: "311px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Onest, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: 0,
                  display: "flex",
                  alignItems: "center",
                  mb: "4px",
                  color: "#667085",
                }}
              >
                Professional skills
              </Typography>

              <Box display="flex" flexWrap="wrap" gap={1} mt={0}>
                {["CR Training", "First Aid Training", "Special Need Care"].map(
                  (skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      clickable
                      onClick={() => toggleSelection(skill, skills, setSkills)}
                      color={skills.includes(skill) ? "primary" : "default"}
                      sx={{ borderRadius: "999px" }}
                    />
                  )
                )}
              </Box>
            </Box>

            {/* Preferences */}
            <Box>
              <Typography
                sx={{
                  fontFamily: "Onest, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: 0,
                  display: "flex",
                  alignItems: "center",
                  mb: "4px",
                  color: "#667085",
                }}
              >
                Preferences
              </Typography>
              <Box display="flex" flexWrap="wrap" gap={1} mt={0}>
                {["Comfort with pets", "Has own transport", "Non smoker"].map(
                  (pref) => (
                    <Chip
                      key={pref}
                      label={pref}
                      clickable
                      onClick={() =>
                        toggleSelection(pref, preferences, setPreferences)
                      }
                      color={preferences.includes(pref) ? "primary" : "default"}
                      sx={{ borderRadius: "999px" }}
                    />
                  )
                )}
              </Box>
            </Box>

            {/* Languages Know */}
            <Box>
              <Typography
                sx={{
                  fontFamily: "Onest, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: 0,
                  display: "flex",
                  alignItems: "center",
                  mb: "4px",
                  color: "#667085",
                }}
              >
                Languages Know
              </Typography>
              <Box display="flex" flexWrap="wrap" gap={1} mt={0}>
                {["Hindi", "English", "French"].map((lang) => (
                  <Chip
                    key={lang}
                    label={lang}
                    clickable
                    onClick={() => toggleSelection(lang, languages, setLanguages)}
                    color={languages.includes(lang) ? "primary" : "default"}
                    sx={{
                      borderRadius: "999px",
                      height: "25px",
                      fontSize: "14px",
                      padding: "5 15px",
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}