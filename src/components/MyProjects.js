import React from "react";
import TheProject from "./TheProject";
import { Typography } from "@mui/material";

export default function MyProjects() {
  return (
    <div id="projects-section"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background:
          "linear-gradient(0deg, rgba(198,116,134,1) 0%, rgba(118,94,141,1) 100%)",
        padding: "32px", // Add padding to the component
      }}
    >
      <div style={{ marginBottom: "30px", }}>
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
          My Projects
        </Typography>
      </div>
      <TheProject
        projectName={"My Portfolio"}
        projectLink={"https://github.com/PrinkaKumari1/my-portfolio"}
        projectDescription={"The application you're currently viewing serves as my portfolio web app project, designed to present and highlight my work in design and development. It has been built using React.js and Material UI, showcasing my skills and projects in an engaging manner."}
        technologiesUsed={["React", "Material UI"]}
        status={"Complete"}
        projectDemo={'https://my-portfolio-gxmx.vercel.app/'}
        projectImg={`${process.env.PUBLIC_URL}/images/portfolio.PNG`}

      />
      <TheProject
        projectName={"Todo-List"}
        projectLink={"https://github.com/PrinkaKumari1/todo-list"}
        projectDescription={"I created a React todo app with Tailwind CSS that fetches data from an API, enabling users to manage their todo list. Local storage was implemented for data persistence, ensuring users' todo items are saved and accessible after page refresh or app closure."}
        technologiesUsed={["React","Tailwind"]}
        status={"Complete"}
        projectDemo={'https://todo-list-red-two.vercel.app/'}
        projectImg={`${process.env.PUBLIC_URL}/images/Todo-list.PNG`}

      />
       <TheProject
        projectName={"Eat Curious"}
        projectLink={"https://github.com/PrinkaKumari1/eat-curious"}
        projectDescription={"I'm creating a clone of Eat Curious, demonstrating my expertise in React and Node.js. The project showcases full-stack API integration by seamlessly connecting the frontend and backend functionalities. Users can enjoy features such as recipe browsing, creation, modification, and deletion."}
        technologiesUsed={["React","Sass", "Bootstrap","Redux","Express", "Node","Mongo DB"]}
        status={"inProgress"}
        projectDemo={'https://prinkakumari1'}
        projectImg={`${process.env.PUBLIC_URL}/images/eat-curious.PNG`}

      />
    </div>
  );
}
