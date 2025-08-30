import React from "react";
import FullScreenSection from "./FullScreenSection";
import { VStack, Heading } from "@chakra-ui/react";
import EduCards from "./EduCard";
import SkillsCard from "./SkillsCard";

const educations = [
  {
    institution: "Monash University",
    level: "Master Degree",
    degree: "Master of Computer Science",
    major: "Specialise in Software Engineering",
    startDate: "2025",
    endDate: "Current",
    gpa: "",
  },
  {
    institution: "Monash University",
    level: "Graduate Diploma",
    degree: "Graduate Diploma of Computer Science",
    startDate: "2023",
    endDate: "2025",
    wam: "75.25",
    gpa: "3.25/4",
  },
  {
    institution: "University of Canberra",
    level: "Bachelor Degree",
    degree: "Bachelor of Information Technology",
    major: "Specialist Major in Robotics and AI",
    startDate: "2019",
    endDate: "2022",
    wam: "75.44",
    gpa: "5.64/7",
  },
];

const ResumeSection = () => {
  return (
    <FullScreenSection
      id="resume-section"
      backgroundColor="#e6dace"
      py={32}
      spacing={16}
    >
      <Heading>Resume</Heading>
      <VStack id="education" alignItems="stretch" gap={4} width={0.6}>
        <Heading marginRight="calc(70% - 100px)!important" size="lg">
          Education
        </Heading>
        {educations.map((education) => (
          <EduCards
            key={education.degree}
            institution={education.institution}
            degree={education.degree}
            startDate={education.startDate}
            endDate={education.endDate}
            wam={education.wam}
            gpa={education.gpa}
            major={education.major}
            level={education.level}
          />
        ))}
      </VStack>
      <VStack id="skills" alignItems="stretch" gap={4} width={0.6}>
        <Heading marginRight="calc(70% - 100px)!important" size="lg">
          Professional Skills
        </Heading>
        <SkillsCard />
      </VStack>
    </FullScreenSection>
  );
};

export default ResumeSection;
