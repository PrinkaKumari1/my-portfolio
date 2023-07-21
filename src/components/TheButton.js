import React from "react";
import Button from "@mui/material/Button";

function TheButton({ title, type, onClick }) {
  return (
    <Button
      style={{ backgroundColor: "#C67486" }}
      onClick={onClick}
      variant="contained"
      type={type}
      sx={{
        borderRadius: "6px",
        "&:hover": {
          transform: "scale(1.1)", // Increase the button size on hover
          color: "black", // Change the font color on hover
        },
      }}
    >
      {title}
    </Button>
  );
}

export default TheButton;
