import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Container,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import shieldTick from "../assests/shield-tick.png";
import profile from "../assests/dp.png";
import Information from "./Information";
import Header from "./Header";

const HomePage = () => {
  const caregivers = [
    {
      name: "Paula Mora",
      image: profile,
      rate: "$30-40/hr",
      experience: "5 yrs exp",
      location: "Mumbai, India",
      availability: "Full Time Available Caregiver",
      verified: true,
      rating: 4.5,
    },
    {
      name: "Paula Mora",
      image: profile,
      rate: "$30-40/hr",
      experience: "5 yrs exp",
      location: "Mumbai, India",
      availability: "Full Time Available Caregiver",
      verified: true,
      rating: 4.5,
    },
    {
      name: "Paula Mora",
      image: profile,
      rate: "$30-40/hr",
      experience: "5 yrs exp",
      location: "Mumbai, India",
      availability: "Full Time Available Caregiver",
      verified: true,
      rating: 4.5,
    },
    {
      name: "Paula Mora",
      image: profile,
      rate: "$30-40/hr",
      experience: "5 yrs exp",
      location: "Mumbai, India",
      availability: "Full Time Available Caregiver",
      verified: true,
      rating: 4.5,
    },
    {
      name: "Paula Mora",
      image: profile,
      rate: "$30-40/hr",
      experience: "5 yrs exp",
      location: "Mumbai, India",
      availability: "Full Time Available Caregiver",
      verified: true,
      rating: 4.5,
    },
    {
      name: "Paula Mora",
      image: profile,
      rate: "$30-40/hr",
      experience: "5 yrs exp",
      location: "Mumbai, India",
      availability: "Full Time Available Caregiver",
      verified: true,
      rating: 4.5,
    },
    {
      name: "Paula Mora",
      image: profile,
      rate: "$30-40/hr",
      experience: "5 yrs exp",
      location: "Mumbai, India",
      availability: "Full Time Available Caregiver",
      verified: true,
      rating: 4.5,
    },
  ];

  return (
    <>
      <Header />
      <Container
        maxWidth={false}
        sx={{
          p: 3,
          height: "calc(100vh - 64px)", // Adjust based on Header height
          boxSizing: "border-box",
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            height: "100%",
            width: "100%",
            margin: 0,
            alignItems: "stretch",
          }}
        >
          {/* Left Side - Information */}
          <Grid
            item
            xs={12}
            md={3}
            lg={4} // Increased slightly
            sx={{ display: "flex", flexDirection: "column",alignItems:"center",}}
          >
             <Box
    sx={{
      position: "sticky",
      top: 20,
      backgroundColor: "#fff",
      borderRadius: 2,
      boxShadow: 3,
      p: 2,
      boxSizing: "border-box",
      maxHeight: "calc(100vh - 40px)", // 40px offset for top spacing
      overflow: "scroll", // No scroll
    }}
  >
              <Information />
            </Box>
          </Grid>

          {/* Right Side - Caregiver List */}
          <Grid
            item
            xs={12}
            md={9}
            lg={8} // Reduced slightly to fit better
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Box
              sx={{
                flex: 1,
                boxShadow: 4,
                backgroundColor: "#f9f9f9",
                borderRadius: 2,
                p: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                Caregiver
              </Typography>

              <Box
                sx={{
                  overflowY: "auto",
                  flex: 1,
                  pr: 1,
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
                {caregivers.map((caregiver, index) => (
                  <Card
                    key={index}
                    sx={{
                      mb: 2,
                      borderRadius: 2,
                      boxShadow: 3,
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                          px: { xs: 1, md: 2 },
                          flexDirection: { xs: "column", sm: "row" },
                          gap: { xs: 2, sm: 0 },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            flex: 1,
                            width: { xs: "100%", sm: "auto" },
                          }}
                        >
                          <img
                            src={caregiver.image}
                            alt={caregiver.name}
                            style={{
                              width: 50,
                              height: 50,
                              borderRadius: "50%",
                              objectFit: "cover",
                              marginRight: 16,
                            }}
                          />
                          <Box>
                            <Typography variant="subtitle1" fontWeight="bold">
                              {caregiver.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {caregiver.location}
                            </Typography>
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: { xs: "flex-start", sm: "flex-end" },
                            minWidth: { sm: "150px" },
                            width: { xs: "100%", sm: "auto" },
                          }}
                        >
                          <Typography variant="body2" color="text.secondary">
                            {caregiver.rate} - {caregiver.experience}
                          </Typography>

                          <Button
                            variant="contained"
                            color="primary"
                            sx={{
                              mt: 1,
                              borderRadius: 40,
                              backgroundColor: "#003580",
                              "&:hover": { backgroundColor: "#002766" },
                              width: { xs: "100%", sm: "100px" },
                            }}
                          >
                            Book
                          </Button>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mt: 2,
                          px: { xs: 1, md: 2 },
                        }}
                      >
                        <Rating
                          value={caregiver.rating}
                          precision={0.5}
                          readOnly
                          size="small"
                        />
                        <Typography variant="body2" sx={{ ml: 1 }}>
                          ({caregiver.rating})
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mt: 1,
                          justifyContent: "space-between",
                          width: "100%",
                          px: { xs: 1, md: 2 },
                          flexDirection: { xs: "column", sm: "row" },
                          alignItems: { xs: "flex-start", sm: "center" },
                          gap: { xs: 1, sm: 0 },
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.primary",
                            px: 1,
                            borderRadius: 1,
                          }}
                        >
                          {caregiver.availability}
                        </Typography>

                        {caregiver.verified && (
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={shieldTick}
                              alt="Verified"
                              style={{
                                width: 16,
                                height: 16,
                                marginRight: 6,
                              }}
                            />
                            <Typography variant="caption">
                              Background check done
                            </Typography>
                          </Box>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
