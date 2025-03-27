import {
  Box,
  Stack,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import D from "../assests/B.png";
import "@fontsource/onest";
import { useNavigate } from "react-router-dom";
import Divider from '@mui/material/Divider';

function Services() {
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
          minHeight: "100vh",
          minWidth: "100vw",
          margin: "0",
          padding: "0",
        }}
      >
        <Box sx={{ height: "496px", width: "500px" }}>
          <Stack
            sx={{
              height: "116px",
              width: "500px",
              paddingTop: "16px",
              paddingBottom: "16px",
              paddingRight: "24px",
              paddingLeft: "24px",
              gap: "10px",
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
              Service I need
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "onest",
                color: "#667085",
                fontWeight: 500,
              }}
            >
              Enter patient details
            </Typography>
          </Stack>
          <Divider></Divider>
          <Stack
            sx={{
              height: "324px",
              width: "500px",
              padding: "24px",
              Gap: "24px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Stack sx={{ height: "24px", width: "452px", }}>
              <FormControlLabel control={<Checkbox /> } label="Personals care" sx={{color:"#344054"}} />
              <FormControlLabel
                control={<Checkbox />}
                label="Domestic Assistance"
                sx={{color:"#344054"}}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Social Support & Community Participation"
                sx={{color:"#344054"}}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Specialist Care"
                sx={{color:"#344054"}}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Out and About Transport"
                sx={{color:"#344054"}}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Relief Respite Care"
                sx={{color:"#344054"}}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Coaching & Counselling"
                sx={{color:"#344054"}}
              />
              <FormControlLabel
                control={<Checkbox  />}
                label="Disability Products"
                sx={{color:"#344054"}}
              />
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
              width: "500px",
              gap: "8px",
            }}
            onClick={() => navigate("/Memberdetails")}
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
              Next
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
}
export default Services;
