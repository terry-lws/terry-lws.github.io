import React from "react";
import FullScreenSection from "./FullScreenSection";
import {
  Box,
  Heading,
  VStack,
  Image,
  HStack,
  Text,
  Divider,
} from "@chakra-ui/react";

const projects = [
  //   {
  //     title: "Claire Yau's personal portfolio (in development)",
  //     description:
  //       "A personal web portfolio for Claire Yau, a Psychology Graduate. By reading the portfolio, you will get to know more about Claire, her achievements, and professional career goal as a psychologist. This webpage is written in React, accompanied by the Chakra UI library.",
  //     getImageSrc: () => require("../images/test.png"),
  //     projectURL: "https://github.com/claireyau5/claireyau5.github.io",
  //   },
  //   {
  //     title: "React Calculator App",
  //     description:
  //       "A simple calculator app with basic calculation functions constructed with React Hooks such as useState and useRef. The calculator has the four basic operators, i.e., addition, deduction, multiplication, and division, as well as a clear input and a clear all functions.",
  //     getImageSrc: () => require("../images/calculator.PNG"),
  //     projectURL: "https://github.com/terry-lws/calculator",
  //   },
  {
    title: "LuggyShare",
    description:
      "A web app that allows user to buy",
    getImageSrc: () => require("../images/wdp.png"),
  },
  {
    title: "Canberra Restaurant",
    description:
      "A simple website written in jQuery. The website recommands local restaurants in Canberra. Users are able to leave and like comments. Comments and likes are stored and managed in a database.",
    getImageSrc: () => require("../images/wdp.png"),
  },
  {
    title: "Weather App",
    description:
      "My first React project. A simple weather report web app constructed with React and JavaScript. The app fetches real-time data of a location such as temperature, weather condition and wind speed from a third party online service using API.",
    getImageSrc: () => require("../images/weather.PNG"),
  },
  {
    title: "Predicting Diabetes Using Machine Learning Methods",
    description:
      "Written in Python. A project that applies machine learning methods such as support vector machine and k-nearest neighbors algorithm, to predict potential diabetes diseases in patients using the Pima Indians Diabetes Database. Outcomes and findings are documented in a research paper.",
    getImageSrc: () => require("../images/prml.png"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      id="projects-section"
      backgroundColor="#d2f2f9"
      py={32}
      spacing={16}
    >
      <Heading>Projects</Heading>
      <VStack>
        {projects.map((project) => (
          <>
            <HStack
              className="project-hstack"
              sx={{ margin: "8 !important" }}
              gap={4}
            >
              <Box width={"50%"}>
                <Image
                  w={450}
                  display={"block"}
                  margin={"auto"}
                  src={project.getImageSrc()}
                />
              </Box>
              <VStack width={"50%"} alignItems={"flex-start"}>
                <Heading size={"lg"}>{project.title}</Heading>
                <Text>{project.description}</Text>
              </VStack>
            </HStack>
            <Divider borderColor={"black"} />
          </>
        ))}
      </VStack>
    </FullScreenSection>
  );
};

export default ProjectsSection;
