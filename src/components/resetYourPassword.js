import React, { useState } from "react";
import D from "../assests/B.png";
import {
  Box,
  Paper,
  Container,
  Typography,
  Divider,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import HttpsSharpIcon from "@mui/icons-material/HttpsSharp";
import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";
import "@fontsource/onest";
import { useNavigate } from "react-router-dom";

const ResetYourPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
    } else {
      setError("");
      alert("Password successfully reset!");
      // You can add API request here for password reset
    }
  };
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
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper
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
              fontFamily: "onest",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "30px",
            }}
            gutterBottom
          >
            Reset your Password
          </Typography>
          <Typography
            variant="body1"
            align="left"
            color="textSecondary"
            sx={{
              fontFamily: "onest",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "24px",
            }}
            gutterBottom
          >
            Change your password
          </Typography>

          <Divider sx={{ my: 2 }} />

          <form onSubmit={handleSubmit}>
            {/* Password Field */}
            <Typography variant="body2" gutterBottom>
              Password
            </Typography>
            <TextField
              type={showPassword ? "text" : "password"}
              variant="outlined"
              margin="normal"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                maxWidth: { xs: "100%", sm: "400px" },
                borderRadius: "20px",
                "& .MuiOutlinedInput-root": { borderRadius: "20px" },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HttpsSharpIcon color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      <VisibilitySharpIcon
                        color={showPassword ? "primary" : "disabled"}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Confirm Password Field */}
            <Typography variant="body2" gutterBottom>
              Confirm Password
            </Typography>
            <TextField
              type={showConfirmPassword ? "text" : "password"}
              variant="outlined"
              margin="normal"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{
                maxWidth: { xs: "100%", sm: "400px" },
                borderRadius: "20px",
                "& .MuiOutlinedInput-root": { borderRadius: "20px" },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HttpsSharpIcon color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      edge="end"
                    >
                      <VisibilitySharpIcon
                        color={showConfirmPassword ? "primary" : "disabled"}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={Boolean(error)}
              helperText={error}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                mt: 4,
                mb: 5,
                borderRadius: "40px",
              }}
              onClick={() => navigate("/login")}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default ResetYourPassword;
