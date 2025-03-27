import { Box, Stack, Typography, Button } from "@mui/material";
import "@fontsource/onest";
import "@fontsource/inter";
import D from "../assests/B.png";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";

function NeedsCare() {
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
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        <Box sx={{ height: "518px", width: "500px" }}>
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
              sx={{
                fontSize: "36px",
                fontWeight: 600,
                color: "#101828",
                fontFamily: "onest",
              }}
            >
              Who need care?
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 500,
                color: "#667085",
                fontFamily: "onest",
              }}
            >
              Enter Patient Details
            </Typography>
          </Stack>
          <Divider></Divider>
          <Stack
            sx={{
              width: "500px",
              height: "402px",
              padding: "24px",
              gap: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                color: "#024FAA",
                borderRadius: "12px",
                paddingtop: "10px",
                paddingBottom: "10px",
                paddingRight: "14px",
                paddingLeft: "14px",
                height: "58px",
                width: "452px",
                gap: "8px",
                borderColor: "#475467",
              }}
              onClick={() => navigate("/Info")}
            >
              {" "}
              <Typography
                sx={{
                  color: "#344054",
                  fontFamily: "onest,sans-serif",
                  textTransform: "none",
                  fontSize: "30px",
                }}
              >
                {" "}
                My Self
              </Typography>
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#024FAA",
                borderRadius: "12px",
                paddingtop: "10px",
                paddingBottom: "10px",
                paddingRight: "14px",
                paddingLeft: "14px",
                height: "58px",
                width: "452px",
                gap: "8px",
                borderColor: "#475467",
              }}
              onClick={() => navigate("/Info")}
            >
              {" "}
              <Typography
                sx={{
                  color: "#344054",
                  fontFamily: "onest,sans-serif",
                  textTransform: "none",
                  fontSize: "30px",
                }}
              >
                {" "}
                My Child
              </Typography>
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#024FAA",
                borderRadius: "12px",
                paddingtop: "10px",
                paddingBottom: "10px",
                paddingRight: "14px",
                paddingLeft: "14px",
                height: "58px",
                width: "452px",
                gap: "8px",
                borderColor: "#475467",
              }}
              onClick={() => navigate("/Info")}
            >
              {" "}
              <Typography
                sx={{
                  color: "#344054",
                  fontFamily: "onest,sans-serif",
                  textTransform: "none",
                  fontSize: "30px",
                }}
              >
                {" "}
                My Partner
              </Typography>
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#024FAA",
                borderRadius: "12px",
                paddingtop: "10px",
                paddingBottom: "10px",
                paddingRight: "14px",
                paddingLeft: "14px",
                height: "58px",
                width: "452px",
                gap: "8px",
                borderColor: "#475467",
              }}
              onClick={() => navigate("/Info")}
            >
              {" "}
              <Typography
                sx={{
                  color: "#344054",
                  fontFamily: "onest,sans-serif",
                  textTransform: "none",
                  fontSize: "30px",
                }}
              >
                {" "}
                My Client
              </Typography>
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#024FAA",
                borderRadius: "12px",
                paddingtop: "10px",
                paddingBottom: "10px",
                paddingRight: "14px",
                paddingLeft: "14px",
                height: "58px",
                width: "452px",
                gap: "8px",
                borderColor: "#475467",
              }}
              onClick={() => navigate("/Info")}
            >
              {" "}
              <Typography
                sx={{
                  color: "#344054",
                  fontFamily: "onest,sans-serif",
                  textTransform: "none",
                  fontSize: "30px",
                }}
              >
                Other
              </Typography>
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
export default NeedsCare;
