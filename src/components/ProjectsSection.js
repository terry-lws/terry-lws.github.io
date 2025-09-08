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
  Link,
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
      "This web app connects requesters with travelers who have spare luggage space, enabling seamless cross-border shopping and delivery. Requesters can post what they need, and travelers can accept requests, purchase items, and transport them in their unused baggage allowance.",
    getImageSrc: () => require("../images/ls.PNG"),
  },
  {
    title: "Australian Council of Education Research OS Test",
    description:
      "This project is a web development assessment/test provided by Australian Council of Education Research (ACER). This project is written in JavaScript (React). Instructions are provided to install and run the website.",
    getImageSrc: () => require("../images/acer.PNG"),
    github: "https://github.com/terry-lws/os-test",
  },
  {
    title: "Weather App",
    description:
      "My first React project. A simple weather report web app constructed with React and JavaScript. The app fetches real-time data of a location such as temperature, weather condition and wind speed from a third party online service using API.",
    getImageSrc: () => require("../images/weather.PNG"),
    github: "https://github.com/terry-lws/weather-app"
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
      <VStack className="bottom-to-top">
        {projects.map((project) => (
          <>
            <HStack
              className="project-hstack"
              sx={{ margin: "8 !important" }}
              gap={4}
              flexDirection={{ base: "column", lg: "row" }}
            >
              <Box width={{ base: "100%", lg: "50%" }}>
                <Image
                  w={450}
                  display={"block"}
                  margin={"auto"}
                  src={project.getImageSrc()}
                />
              </Box>
              <VStack
                width={{ base: "100%", lg: "50%" }}
                alignItems={"flex-start"}
              >
                <Heading size={"lg"} color={"teal"}>
                  {project.title}
                </Heading>
                <Text>{project.description}</Text>
                {project.github && (
                  <Link fontWeight={600} href={project.github} target="_blank">
                    Github Repository
                  </Link>
                )}
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
