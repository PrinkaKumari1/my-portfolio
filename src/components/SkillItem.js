import React from "react";
import { Box, Typography } from "@mui/material";

export default function SkillItem({ logo, text }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" m={2} style={{ gap: "15px" }} // Add a gap between items
    >
      <img src={logo} alt="Skill Logo" style={{ width: "50px", height: "50px" }} />
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
}
