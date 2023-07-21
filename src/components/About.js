import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Box, Typography } from "@mui/material";
import TheButton from "./TheButton";
import SkillItem from "./SkillItem";

export default function About({
  title,
  description,
  buttonText,
  skills,
  profileImage,
  onTabClick,
}) {
  const handleTabClick = (tab) => {
    if (onTabClick) {
      onTabClick(tab);
    }
  };
  return (
    <div id="about-section"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "96px",
      }}
    >
      <Card
        style={{
          width: "70%",
          backgroundColor: "#f5eedd",
          height: "100%",
          borderRadius: "16px",
        }}
      >
        <CardContent>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                width: "170px",
                height: "170px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img
                src={profileImage}
                alt="Profile"
                style={{position:'relative', width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
          </div>
          <div>
            <Typography
              variant="h6"
              sx={{
                marginTop: "30px",
                fontFamily: " 'Inter', sans-serif",
                fontSize: "23px",
                fontWeight: "700",
                lineHeight: "1.6", // Adjust the line height value as needed
              }}
            >
              {title}
            </Typography>
          </div>
          <Typography
            variant="body1"
            component="div"
            sx={{ marginTop: "30px" }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <TheButton title={buttonText} onClick={() => handleTabClick("projects")}/>
        </CardActions>
        <CardContent>
          <div>
            <Typography
              variant="h6"
              sx={{
                marginTop: "30px",
                marginBottom: "30px",
                fontFamily: " 'Inter', sans-serif",
                fontSize: "23px",
                fontWeight: "500",
                lineHeight: "0.3", // Adjust the line height value as needed
                color:'#ec825a'
              }}
            >
              My Technical Skills
            </Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Box display="flex" flexWrap="wrap" justifyContent="center">
              {skills.map((skill, index) => (
                <SkillItem key={index} logo={skill.logo} text={skill.text} />
              ))}
            </Box>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
