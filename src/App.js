import React, { useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import TheHeader from "./components/TheHeader";
import TheProfile from "./components/TheProfile";
import MyContact from "./components/MyContact";
import About from "./components/About";
import MyProjects from "./components/MyProjects";
import "./App.css";
import { Element } from "react-scroll";

function App() {
  const handleTabClick = (tab) => {
    console.log(tab, "tab");
    scrollToSection(tab);
  };

  const BaseURL = process.env.PUBLIC_URL;

  const [showNavigationButton, setShowNavigationButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });

      sectionElement.classList.add("scrollable-section");

      const sections = document.getElementsByClassName("scrollable-section");
      Array.from(sections).forEach((section) => {
        if (section.id !== sectionId) {
          section.classList.remove("scrollable-section");
        }
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNavigationButton(true);
      } else {
        setShowNavigationButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const skills = [
    { logo: `${BaseURL}/images/js.png`, text: "JavaScript" },
    { logo: `${BaseURL}/images/react.png`, text: "React" },
    { logo: `${BaseURL}/images/vue.png`, text: "Vue" },
    { logo: `${BaseURL}/images/git.png`, text: "Git" },
    { logo: `${BaseURL}/images/github.svg`, text: "GitHub" },
    { logo: `${BaseURL}/images/nodejs-icon.svg`, text: "Node" },
    {
      logo: `${BaseURL}/images/bootstrap.png`,
      text: "Bootstrap",
    },
    { logo: `${BaseURL}/images/sass.png`, text: "Sass" },
    {
      logo: `${BaseURL}/images/tailwind-css-icon.svg`,
      text: "Tailwind",
    },
    { logo: `${BaseURL}/images/MUI.png`, text: "Material UI" },
  ];
  const profileImage = `${BaseURL}/images/Prinka.jpeg`;

  return (
    <div className="App">
      <TheHeader onTabClick={handleTabClick} />
      <TheProfile onTabClick={handleTabClick} />
      <Element id="about" name="about-section">
        <div id="about-section" className="scrollable-section">
          <About
            onTabClick={handleTabClick}
            title="Prinka Kumari"
            description="Hello, I'm Prinka Kumari, a frontend developer with a passion for creating beautiful and interactive web experiences. I specialize in crafting user interfaces that are not only visually appealing but also intuitive and user-friendly.
            With 1 year of experience in frontend development, I have a solid foundation in HTML, CSS, and JavaScript. I leverage the latest web technologies and frameworks like React and Vue.js to build responsive and dynamic websites."
            buttonText="See my Projects"
            skills={skills}
            profileImage={profileImage}
          />
        </div>
      </Element>
      <Element id="projects" name="projects-section">
        <div id="projects-section" className="scrollable-section">
          <MyProjects />
        </div>
      </Element>
      <Element id="contact" name="contact-section">
        <div id="contact-section" className="scrollable-section">
          <MyContact />
        </div>
      </Element>
      {showNavigationButton && (
        <div className="fabContainer">
          <Fab
            style={{ backgroundColor: "#00577f" }}
            className="fabButton"
            onClick={scrollToTop}
          >
            <NavigationIcon  style={{ color:"white"}}/>
          </Fab>
        </div>
      )}
    </div>
  );
}

export default App;
