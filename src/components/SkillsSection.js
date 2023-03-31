import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Wrap } from "@chakra-ui/react";
import Skills from './SkillsCard'

const webSkills = [
    {
        title: "HTML",
        getImageSrc: () => require("../images/html5.png"),
    },
    {
        title: "CSS",
        getImageSrc: () => require("../images/css3.png"),
    },
    {
        title: "Bootstrap",
        getImageSrc: () => require("../images/bootstrap.png"),
    },
    {
        title: "JavaScript",
        getImageSrc: () => require("../images/javascript.png"),
    },
    {
        title: "React",
        getImageSrc: () => require("../images/react.png"),
    },
];

const softwareSkills = [
    {
        title: "Python",
        getImageSrc: () => require("../images/python.png"),
    },
    {
        title: "Java",
        getImageSrc: () => require("../images/java.png"),
    },
    {
        title: "C/C++",
        getImageSrc: () => require("../images/cpp.png"),
    },
    {
        title: "MATLAB",
        getImageSrc: () => require("../images/matlab.png"),
    },
];

const cloudSkills = [
    {
        title: "AWS",
        getImageSrc: () => require("../images/aws.png"),
    },
    {
        title: "Azure",
        getImageSrc: () => require("../images/azure.png"),
    },
];

const cadSkills = [
    {
        title: "SoildWorks",
        getImageSrc: () => require("../images/solidworks.png"),
    },
];

const scSkills = [
    {
        title: "Git",
        getImageSrc: () => require("../images/git.png"),
    },
    {
        title: "GitHub",
        getImageSrc: () => require("../images/github.png"),
    },
];

const SkillsSection = () => {
    return (
        <FullScreenSection
            id="skills-section"
            //backgroundColor="#FFFFFF"
            backgroundColor="#dddddd"
            px={8}
            py={20}
            alignItems="center"
            spacing={8}
            textAlign="center"
        >
            <Heading as="h1">
                Skills
            </Heading>
            <Box>
                <Heading as="h2" size="lg">Web Developement</Heading>
                <Wrap spacing='50px' justify='center' pt="6" pb="10">
                    {webSkills.map((skill) => (
                        <Skills
                            key={skill.title}
                            title={skill.title}
                            imageSrc={skill.getImageSrc()}
                        />
                    ))}
                </Wrap>
            </Box>
            <Box>
                <Heading as="h2" size="lg">Programming Languages</Heading>
                <Wrap spacing='50px' justify='center' pt="6" pb="10">
                    {softwareSkills.map((skill) => (
                        <Skills
                            key={skill.title}
                            title={skill.title}
                            imageSrc={skill.getImageSrc()}
                        />
                    ))}
                </Wrap>
            </Box>
            <Box>
                <Heading as="h2" size="lg">Cloud Computing</Heading>
                <Wrap spacing='50px' justify='center' p="6" pb="10">
                    {cloudSkills.map((skill) => (
                        <Skills
                            key={skill.title}
                            title={skill.title}
                            imageSrc={skill.getImageSrc()}
                        />
                    ))}
                </Wrap>
            </Box>
            <Box>
                <Heading as="h2" size="lg">Computer Aided Design</Heading>
                <Wrap spacing='50px' justify='center' p="6" pb="10">
                    {cadSkills.map((skill) => (
                        <Skills
                            key={skill.title}
                            title={skill.title}
                            imageSrc={skill.getImageSrc()}
                        />
                    ))}
                </Wrap>
            </Box>
            <Box>
                <Heading as="h2" size="lg">Source Control</Heading>
                <Wrap spacing='50px' justify='center' p="6" pb="10">
                    {scSkills.map((skill) => (
                        <Skills
                            key={skill.title}
                            title={skill.title}
                            imageSrc={skill.getImageSrc()}
                        />
                    ))}
                </Wrap>
            </Box>
        </FullScreenSection>
    );
};

export default SkillsSection;
