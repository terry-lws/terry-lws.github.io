import React from "react";
import FullScreenSection from "./FullScreenSection";
import { VStack, Heading } from "@chakra-ui/react";
import Cards from "./Card";

const experiences = [
  {
    title: "Monash University",
    degree: "Master of Computer Science",
    startDate: "2025",
    endDate: "Current",
    description:
      "A simple calculator app with basic calculation functions constructed with React Hooks such as useState and useRef. The calculator has the four basic operators, i.e., addition, deduction, multiplication, and division, as well as a clear input and a clear all functions.",
  },
  {
    title: "Monash University",
    degree: "Graduate Diploma of Computer Science",
    startDate: "2023",
    endDate: "2025",
    description:
      "My first React project. A simple weather report web app constructed mainly with React and CSS. The app fetches real-time data of a location such as temperature, weather condition and wind speed from a third party online service using API.",
    
  },
  {
    title: "University of Canberra",
    degree: "Bachelor of Information Technology",
    startDate: "2019",
    endDate: "2022",
    description:
      "Written in Python. A coursework project that applied machine learning methods such as SVM and KNN, to predict potential diabetes diseases in patients using the Pima Indians Diabetes Database. Outcomes and findings of the experiments are documented in a research paper.",
    
  },
];

const ResumeSection = () => {
  return (
    <FullScreenSection
      id="resume-section"
      backgroundColor="#e6dace"
      px={8}
      py={20}
      spacing={8}
    >
      <Heading>Resume</Heading>
      <Heading size="md">Expereince</Heading>
        {experiences.map((experience) => (
          <Cards
            key={experience.title}
            title={experience.title}
            degree={experience.degree}
            startDate={experience.startDate}
            endDate={experience.endDate}
            description={experience.description}
          />
        ))}
    </FullScreenSection>
  );
};

export default ResumeSection;