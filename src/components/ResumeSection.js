import React from "react";
import FullScreenSection from "./FullScreenSection";
import { VStack, Heading } from "@chakra-ui/react";
import EduCards from "./EduCard";
import SkillsCard from "./SkillsCard";
import ExpCards from "./ExpCard";

const ResumeSection = () => {
  return (
    <FullScreenSection
      id="resume-section"
      backgroundColor="#e6dace"
      py={32}
      spacing={16}
    >
      <Heading>Resume</Heading>
      <VStack id="experience" alignItems="stretch" gap={4} width={{base:0.8, lg:0.6}}>
        <Heading marginRight="calc(70% - 100px)!important" size="lg">
          Experience
        </Heading>
        <ExpCards />
        </VStack>
        <VStack id="education" alignItems="stretch" gap={4} width={{base:0.8, lg:0.6}}>
        <Heading marginRight="calc(70% - 100px)!important" size="lg">
          Education
        </Heading>
        <EduCards />
      </VStack>
      <VStack id="skills" alignItems="stretch" gap={4} width={{base:0.8, lg:0.6}}>
        <Heading marginRight="calc(70% - 100px)!important" size="lg">
          Professional Skills
        </Heading>
        <SkillsCard />
      </VStack>
    </FullScreenSection>
  );
};

export default ResumeSection;
