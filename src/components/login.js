import {
  Box,
  Container,
  Paper,
  TextField,
  Typography,
  Link,
  Button,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import D from "../assests/B.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HttpsSharpIcon from "@mui/icons-material/HttpsSharp";
import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

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
      <Container component="main" maxWidth="xs">
        <Paper
          color="white"
          elevation={0}
          sx={{
            padding: 4,
            borderRadius: 2,
            backgroundColor: "rgba(255,255,255,0.85)",
            width: "100%",
            maxWidth: "500px",
            mx: "auto",
          }}
        >
          <Typography
            variant="h5"
            align="left"
            sx={{
              fontFamily: "unset",
              weight: "500",
              size: "20px",
              lineHeight: "30px",
            }}
            gutterBottom
          >
            Log In
          </Typography>
          <Typography
            variant="body1"
            align="left"
            color="textSecondary"
            sx={{
              fontFamily: "unset",
              weight: "500",
              size: "20px",
              lineHeight: "30px",
            }}
            gutterBottom
          >
            Welcome to CareDac
          </Typography>

          {/* Divider (Boundary) Added Below */}
          <Divider sx={{ my: 2 }} />

          <Box component="form" sx={{ mt: 2 }}>
            <Typography variant="body2" align="left" gutterBottom>
              Email
            </Typography>

            <TextField
              fullWidth
              //label="Email"
              variant="outlined"
              margin="normal"
              sx={{
                borderRadius: "20px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Typography variant="body2" align="left" gutterBottom>
              Password
            </Typography>
            <TextField
              //label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              margin="normal"
              //sx={{ maxWidth: "500px" }} // Set max width

              sx={{
                width: "100%",
                maxWidth: "400px",
                borderRadius: "20px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HttpsSharpIcon color="action" />
                  </InputAdornment>
                ),

                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? (
                        <VisibilitySharpIcon color="primary" />
                      ) : (
                        <VisibilitySharpIcon color="disabled" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box display="flex" justifyContent="center" sx={{ mt: 1 }}>
              <Link
                href="#"
                variant="body2"
                color="primary"
                onClick={() => navigate("/Otp")}
              >
                Forgot password?
              </Link>
            </Box>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                mt: 3,
                mb: 2,
                borderRadius: "20px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                },
              }}
              onClick={() => navigate("/needsCare")}
            >
              Log In
            </Button>
          </Box>
          <Typography
            variant="body2"
            align="center"
            color="textSecondary"
            sx={{ mt: 2 }}
          >
            Don’t have an account?{" "}
            <Link color="primary" onClick={() => navigate("/signup")}>
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

/*example
import React from "react";
import { TextField, Button, Box, Typography, Link, Container, Paper } from "@mui/material";

const Login = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('https://source.unsplash.com/random')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 4, borderRadius: 2, backgroundColor: "rgba(255, 255, 255, 0.85)" }}>
          <Typography variant="h5" align="center" gutterBottom>
            Log In
          </Typography>
          <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
            Welcome to CareDac
          </Typography>
          <Box component="form" sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
            />
            <Box display="flex" justifyContent="flex-end" sx={{ mt: 1 }}>
              <Link href="#" variant="body2" color="primary">
                Forgot Password?
              </Link>
            </Box>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Log in
            </Button>
          </Box>
          <Typography variant="body2" align="center" color="textSecondary" sx={{ mt: 2 }}>
            Don’t have an account? <Link href="#" color="primary">Sign Up</Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login; */
