import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  Button,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

function TheProject({
  projectName,
  projectLink,
  projectDescription,
  technologiesUsed,
  status,
  projectDemo,
  projectImg,
}) {
  const projectProgress = status; // Change this value to "inProgress" or "complete"

  const getIconColor = () => {
    if (projectProgress === "inProgress") {
      return "#fbc02d"; // Yellow color for in progress
    } else {
      return "green"; // Green color for complete
    }
  };

  return (
    <Card style={{ width: "80%", margin: "16px", borderRadius: "16px", background:'#f8f3ed'}}>
      <CardContent>
        <Grid
          container
          spacing={2}
          alignItems="flex-start"
          justifyItems="start"
        >
          <Grid item xs={5}>
            <img
            src={projectImg}
              alt="Project"
              style={{ width: "100%", height: "auto", borderRadius:"8px" }}
            />
          </Grid>
          <Grid item xs={7} >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                align="left"
                style={{ marginBottom: "8px" }}
                sx={{
                  fontFamily: " 'Inter', sans-serif",
                  fontSize: "23px",
                  fontWeight: "700",
                  lineHeight: "1.6", // Adjust the line height value as needed
                }}
              >
                {projectName}
              </Typography>
            </div>
            <Typography
              variant="subtitle1"
              align="left"
              style={{ marginBottom: "8px" }}
            >
              <a href={projectLink}>{projectLink}</a>
            </Typography>
            <Typography
              variant="body1"
              align="left"
              style={{ marginBottom: "8px" }}
            >
              {projectDescription}
            </Typography>
            <Typography
              variant="h6"
              align="left"
              sx={{
                fontFamily: " 'Inter', sans-serif",
                fontSize: "24px",
                fontWeight: "400",
                lineHeight: "1.6", // Adjust the line height value as needed
                marginBottom: "8px", // Add margin bottom
                color:'#ec825a'
              }}
            >
              Technologies Used
            </Typography>

            <Box
              display="flex"
              flexWrap="wrap"
              alignItems="center"
              marginBottom="8px"
            >
              {technologiesUsed.map((skill, index) => (
                <Button
                  key={index}
                  variant="contained"
                  size="small"
                  sx={{
                    marginRight: "8px",
                    marginBottom: "8px",
                    backgroundColor: "#c67486",
                    color: "#ffffff",
                    "&:hover": {
                      backgroundColor: "#c67486", // Change to the desired color on hover
                    },
                  }}
                >
                  {skill}
                </Button>
              ))}
            </Box>

            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mr={1}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconButton color="inherit" aria-label="GitHub" href={projectLink}> 
                  <GitHubIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="Launch" href={projectDemo}>
                  <LaunchIcon />
                </IconButton>

              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FiberManualRecordIcon
                  style={{ color: getIconColor(), marginRight: "8px" }}
                />
                <Typography variant="h6">
                  {projectProgress === "inProgress"
                    ? "In Progress"
                    : "Complete"}
                </Typography>
              </div>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default TheProject;
