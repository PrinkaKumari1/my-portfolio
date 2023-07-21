import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function TheHeader({ onTabClick }) {
  const handleTabClick = (tab) => {
    if (onTabClick) {
      onTabClick(tab);
    }
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#00577F" }}>
        <Toolbar>
          <Typography
            sx={{
              marginRight: "20px",
              "&:hover": {
                color: "black",
              },
            }}
            onClick={() => handleTabClick("about")}
          >
            About
          </Typography>

          <Typography
            sx={{
              marginRight: "20px",
              "&:hover": {
                color: "black",
              },
            }}
            onClick={() => handleTabClick("projects")}
          >
            Projects
          </Typography>

          <Typography
            sx={{
              "&:hover": {
                color: "black",
              },
            }}
            onClick={() => handleTabClick("contact")}
          >
            Contact
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
