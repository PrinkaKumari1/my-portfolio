import React from "react";
import TheButton from "./TheButton";
import { Typography } from "@mui/material";

export default function TheProfile({ onTabClick }) {
  const handleTabClick = (tab) => {
    if (onTabClick) {
      onTabClick(tab);
    }
  };
  return (
    <div
      id="TheProfile"
      style={{
        height: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: `linear-gradient(to bottom, #c67486, #ba6e8a, #ac698d, #9d658f, #8d628f, #7f6090, #705f8f, #615d8d, #505c8c, #3d5a89, #275985, #00577f)`,
      }}
    >
      <div
        style={{
          height: "240px",
          width: "240px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: `url(${process.env.PUBLIC_URL}/images/new.gif)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div>
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "'PT Serif Caption', serif",
            fontSize: "100px",
            fontStyle:"italic",
            fontWeight: "200",
            lineHeight: "0.8", // Adjust the line height value as needed
          }}
        >
          I'm Prinka Kumari
        </Typography>
      </div>
      <div>
        <Typography
          sx={{
            marginTop: "30px",
            fontFamily: "'Inter', sans-serif",
            fontSize: "23px",
            fontWeight: "700",
            lineHeight: "0.8", // Adjust the line height value as needed
          }}
        >
          a software developer
        </Typography>
      </div>
      <div style={{ marginTop: "48px" }}>
        <TheButton
          title="Know more about me"
          sx={{ marginTop: "18px" }}
          onClick={() => handleTabClick("about")}
        />
      </div>
    </div>
  );
}
