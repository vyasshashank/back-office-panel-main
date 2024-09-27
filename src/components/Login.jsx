import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import "@fontsource/poppins";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.1)", // Updated to match the transparent background style
        fontFamily: "Poppins",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          background: "linear-gradient(90deg, #ffffff, #cccccc)", // Lighter gradient for the title
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "bold",
          fontSize: "3rem",
          textAlign: "center",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
        }}
      >
        BACK OFFICE PANEL
      </Typography>
      <Box
        sx={{
          width: "350px",
          padding: "30px",
          borderRadius: "15px",
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark, semi-transparent background for the login panel
          boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.5)", // Stronger shadow for depth
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          textAlign={"center"}
          sx={{ color: "#ffffff" }} // White text color for the "Login" heading
        >
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            InputProps={{
              style: {
                color: "#ffffff", // White input text color
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#ffffff", // White border for input fields
                },
                "&:hover fieldset": {
                  borderColor: "#7dd3fc", // Lighter blue on hover
                },
              },
              "& .MuiInputLabel-root": {
                color: "#ffffff", // White label color
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#7dd3fc", // Blue label color when focused
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              style: {
                color: "#ffffff", // White input text color
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#ffffff", // White border for input fields
                },
                "&:hover fieldset": {
                  borderColor: "#7dd3fc", // Lighter blue on hover
                },
              },
              "& .MuiInputLabel-root": {
                color: "#ffffff", // White label color
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#7dd3fc", // Blue label color when focused
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              marginTop: "20px",
              backgroundColor: "#eee6e5",
              color: "#000000",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#ffffff", // Darker red on hover
                transform: "scale(1.05)",
                transition: "all 0.3s ease",
              },
            }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
