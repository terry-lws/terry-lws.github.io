import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Cards from "./Card";

const projects = [
  {
    title: "React Calculator App (on-going)",
    description:
      "A simple calculator app with basic calculation functions constructed with React Hooks such as useState and useRef. The calculator has the four basic operators, i.e., addition, deduction, multiplication, and division, as well as a clear input and a clear all functions.",
    getImageSrc: () => require("../images/calculator.PNG"),
    projectURL: "https://github.com/terry-lws/weather-app",
  },
  {
    title: "React Weather App",
    description:
      "My first React project. A simple weather report web app constructed mainly with React and CSS. The app fetches real-time data of a location such as temperature, weather condition and wind speed from a third party online service using API.",
    getImageSrc: () => require("../images/weather.PNG"),
    projectURL: "https://github.com/terry-lws/weather-app",
  },
  {
    title: "Predicting Diabetes Using Machine Learning Methods",
    description:
      "Written in Python. A coursework project that applied machine learning methods such as SVM and KNN, to predict potential diabetes diseases in patients using the Pima Indians Diabetes Database. Outcomes and findings of the experiments are documented in a research paper.",
    getImageSrc: () => require("../images/prml.png"),
    projectURL: "https://github.com/terry-lws/Using-Machine-Learning-to-Predict-Diabetes.git",
  },
  {
    title: "Computer Vision - Bird Breeds Classification",
    description:
      "Written in MATLAB accompanied by the Deep Learning ToolBox. A coursework project that experimented with machine learning approaches such as SVM, HOG, and deep learning (CNN) to observe the classification performance of different ML approaches using the Caltech-UCSD Birds-200-2011 dataset.",
    getImageSrc: () => require("../images/bird_classification.png"),
    projectURL: "https://github.com/terry-lws/Bird-Breeds-Classification",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      id="projects-section"
      backgroundColor="#2A4365"
      isDarkBackground
      px={8}
      py={20}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1">
        Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ lg: "repeat(2,minmax(0,1fr))", md: "repeat(1,minmax(0,1fr))" }}
        gridGap={{ lg: 8, base: 10 }}
      >
        {projects.map((project) => (
          <Cards
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            projectURL={project.projectURL}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
