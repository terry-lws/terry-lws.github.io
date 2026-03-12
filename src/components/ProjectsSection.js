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
  Tag,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "LuggyShare",
    description:
      "This web app connects requesters with travelers who have spare luggage space, enabling seamless cross-border shopping and delivery. Requesters can post what they need, and travelers can accept requests, purchase items, and transport them in their unused baggage allowance.",
    getImageSrc: () => require("../images/ls.PNG"),
  },
  {
    title: "React UI Implementation",
    description:
      "Implemented a responsive marketing landing page based on a Figma design. The project focuses on translating a UI design into a functional web interface using React components and modern CSS layout techniques.",
    getImageSrc: () => require("../images/acer.PNG"),
    stack: ["React", "JavaScript", "Chakra UI", "CSS", "HTML"],
    github: "https://github.com/terry-lws/react-ui-implementation",
    demo: "https://react-ui-implementation-demo.vercel.app",
  },
  {
    title: "Weather App",
    description:
      "My first React project. A simple weather report web app constructed with React and JavaScript. The app fetches real-time data of a location such as temperature, weather condition and wind speed from a third party online service using API.",
    getImageSrc: () => require("../images/weather.PNG"),
    github: "https://github.com/terry-lws/weather-app",
  },
  {
    title: "Freelance WordPress Business Website",
    description:
      "Written in Python. A project that applies machine learning methods such as support vector machine and k-nearest neighbors algorithm, to predict potential diabetes diseases in patients using the Pima Indians Diabetes Database. Outcomes and findings are documented in a research paper.",
    getImageSrc: () => require("../images/Speedmedia.PNG"),
    stack: ["WordPress", "Kubio", "CSS", "HTML"],
    site: "https://speedmedia.com.hk/",
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
                <HStack>
                  {project.stack &&
                    project.stack.map((st) => (
                      <Tag key={st} variant="solid" colorScheme="teal">
                        {st}
                      </Tag>
                    ))}
                </HStack>
                {project.github && (
                  <Link fontWeight={600} href={project.github} target="_blank">
                    <Text>
                      {" "}
                      Github Repository{" "}
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </Text>
                  </Link>
                )}
                <Link fontWeight={600} href={project.demo} target="_blank">
                  {project.demo && (
                    <Text>
                      View demo <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </Text>
                  )}
                </Link>
                <Link fontWeight={600} href={project.site} target="_blank">
                  {project.site && (
                    <Text>
                      View website <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </Text>
                  )}
                </Link>
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
