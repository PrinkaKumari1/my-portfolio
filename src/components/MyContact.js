import React, { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import GetAppIcon from "@mui/icons-material/GetApp";
import IconButton from "@mui/material/IconButton";
import BirdAnimation from "./BirdAnimation";
import "./BirdAnimation.css"; // Import the CSS file for the animation

function MyContact() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Add your logic to handle form submission and send data to the server

    // Set the submitted state to true
    setSubmitted(true);
  };

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/PrinkaKumari-Resume.pdf`;
    link.target = "_blank"; // Open the link in a new tab
    link.download = "PrinkaKumari-Resume.pdf"; // Specify the desired file name for the download
    link.click(); // Simulate a click on the link to initiate the download
  };

  return (
    <div
      id="contact-section"
      style={{
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "96px",
      }}
    >
      <Card
        style={{
          padding: "20px",
          width: "70%",
          margin: "16px",
          borderRadius: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(0deg, rgba(245,173,146,1) 0%, rgba(237,113,127,1) 100%)",
        }}
      >
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={6}
                style={{
                  marginTop: "12px",
                  marginBottom: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <div>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "left",
                      fontFamily: "Sacramento, cursive",
                      fontSize: "50px",
                      lineHeight: "0.8",
                      fontWeight: "700",
                    }}
                  >
                    get in touch!
                  </Typography>
                </div>
                <div
                  style={{
                    marginTop: "auto",
                    marginBottom: "16px",
                    textAlign: "left",
                  }}
                >
                  <div className="bird-animation-container">
                    <BirdAnimation />
                  </div>
                  <Typography variant="subtitle1">Prinka Kumari</Typography>
                  <Typography variant="subtitle1" sx={{ fontSize: "small" }}>
                    prinka.kumaari@gmail.com
                  </Typography>
                  <div
                    style={{
                      marginTop: "12px",
                      marginBottom: "12px",
                      display: "flex",
                    }}
                  >
                    <a
                      href="https://www.linkedin.com/in/prinka-kumari-43b4631b2/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <LinkedInIcon
                        style={{
                          marginRight: "8px",
                          transition: "transform 0.5s, font-size 0.5s",
                          transformOrigin: "center",
                          fontSize: "25px",
                          color: "#00577f",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = "rotate(360deg)";
                          e.target.style.fontSize = "27px";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = "rotate(0deg)";
                          e.target.style.fontSize = "25px";
                        }}
                      />
                    </a>
                    <a
                      href="https://github.com/PrinkaKumari1"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <GitHubIcon
                        style={{
                          transition: "transform 0.5s, font-size 0.5s",
                          transformOrigin: "center",
                          fontSize: "23px",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = "rotate(360deg)";
                          e.target.style.fontSize = "27px";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = "rotate(0deg)";
                          e.target.style.fontSize = "25px";
                        }}
                      />
                    </a>
                    <IconButton
                      color="primary"
                      onClick={handleDownload}
                      title="Download Resume"
                      style={{ position: "relative", top: "-7px" }}
                    >
                      <GetAppIcon />
                    </IconButton>
                  </div>
                </div>
              </Grid>

              <Grid item xs={6}>
                {submitted && (
                  <Typography variant="h6" style={{ fontFamily: "cursive" }}>
                    Thank you! We'll get connected shortly.
                  </Typography>
                )}
                <TextField
                  label="Name"
                  fullWidth
                  variant="outlined"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: focused ? "#00577f" : undefined,
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: focused ? "#00577f" : undefined,
                      },
                    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#00577f",
                      },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#00577f",
                      },
                  }}
                  InputProps={{
                    style: {
                      color: "#00577f",
                    },
                  }}
                  margin="dense"
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                />
                <TextField
                  label="Email"
                  href="mailto:prinka.kumaari@gmail.com"
                  fullWidth
                  variant="outlined"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: focused ? "#00577f" : undefined,
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#00577f",
                      },
                    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#00577f",
                      },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#00577f",
                      },
                  }}
                  InputProps={{
                    style: {
                      color: "#00577f",
                    },
                  }}
                  margin="dense"
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                />
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  variant="outlined"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: focused ? "#00577f" : undefined,
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: focused ? "#00577f" : undefined,
                      },
                    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#00577f",
                      },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#00577f",
                      },
                  }}
                  InputProps={{
                    style: {
                      color: "#00577f",
                    },
                  }}
                  margin="dense"
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ marginTop: "16px" }}
                  style={{ backgroundColor: "#00577f" }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default MyContact;
