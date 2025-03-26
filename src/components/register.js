import Box from "@mui/material/Box";
import { Typography, Stack, Container,Divider } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ll from "../assests/แ.png";
import D from "../assests/B.png";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
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
        width: "1440px",
        height: "900px",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <Container sx={{ height: "508px", width: "500px" }}>
        <Stack
          sx={{
            width: "500px",
            height: "116px",
            paddingTop: "16px",
            paddingRight: "24px",
            paddingBottom: "16px",
            paddingLeft: "24px",
            gap: "10px",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <Typography sx={{ fontSize: "36px", fontWeight: "600" }}>
            Select app language
          </Typography>
          <Typography
            sx={{ fontSize: "20px", fontWeight: "500", color: "#667085" }}
          >
            Select language for your entire application
          </Typography>
        </Stack>
        <Divider sx={{}}></Divider>
        <Stack
          sx={{
            width: "500px",
            height: "392px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            padding: "24px",
            gap: "24px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#EA6D35",
              borderRadius: "16px",
              width: "160px",
              height: "160px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              cursor: "pointer",
            }}
            onClick={() => navigate("/login")}
          >
            <Typography
              sx={{
                color: "white",
                position: "absolute",
                top: 10,
                left: 10,
                fontSize: "14px",
              }}
            >
              English
            </Typography>
            <CheckCircleRoundedIcon
              sx={{
                color: "white",
                position: "absolute",
                top: 10,
                right: 10,
              }}
            />
            <Typography
              sx={{ color: "white", fontSize: "72px", fontWeight: "500" }}
            >
              A
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "#EA6D35",
              borderRadius: "16px",
              width: "160px",
              height: "160px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              cursor: "pointer",
            }}
            onClick={() => navigate("/login")}
          >
            <Typography
              sx={{
                color: "white",
                position: "absolute",
                top: 10,
                left: 10,
                fontSize: "14px",
              }}
            >
              Malaysian
            </Typography>
            <CheckCircleRoundedIcon
              sx={{
                color: "white",
                position: "absolute",
                top: 10,
                right: 10,
              }}
            />
            <Typography
              sx={{ color: "white", fontSize: "70px", fontWeight: "500" }}
            >
              M
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "#EA6D35",
              borderRadius: "16px",
              width: "160px",
              height: "160px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              cursor: "pointer",
            }}
            onClick={() => navigate("/login")}
          >
            <Typography
              sx={{
                color: "white",
                position: "absolute",
                top: 10,
                left: 10,
                fontSize: "14px",
              }}
            >
              Thai
            </Typography>
            <CheckCircleRoundedIcon
              sx={{
                color: "white",
                position: "absolute",
                top: 10,
                right: 10,
              }}
            />
            <Box component="img" src={ll} />
          </Box>

          <Box
            sx={{
              backgroundColor: "#EA6D35",
              borderRadius: "16px",
              width: "160px",
              height: "160px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              cursor: "pointer",
            }}
            onClick={() => navigate("/login")}
          >
            <Typography
              sx={{
                color: "white",
                position: "absolute",
                top: 10,
                left: 10,
                fontSize: "18px",
                fontWeight: "400",
              }}
            >
              Indonesian
            </Typography>
            <CheckCircleRoundedIcon
              sx={{
                color: "white",
                position: "absolute",
                top: 10,
                right: 10,
              }}
            />
            <Typography
              sx={{ color: "white", fontSize: "70px", fontWeight: "500" }}
            >
              I
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Register;
