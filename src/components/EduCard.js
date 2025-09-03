import { Heading, Text, Grid, Box, GridItem, VStack } from "@chakra-ui/react";
import React from "react";

const educations = [
  {
    institution: "Monash University",
    degree: "Master of Computer Science",
    major: "Specialise in Software Engineering",
    startDate: "2025",
    endDate: "Current",
    gpa: "",
  },
  {
    institution: "Monash University",
    degree: "Graduate Diploma of Computer Science",
    startDate: "2023",
    endDate: "2025",
    wam: "75.25",
    gpa: "3.25/4",
  },
  {
    institution: "University of Canberra",
    degree: "Bachelor of Information Technology",
    major: "Specialist Major in Robotics and AI",
    startDate: "2019",
    endDate: "2022",
    wam: "75.44",
    gpa: "5.64/7",
  },
];

const EduCard = () => {
  return (
    <>
      {educations.map((education) => (
        <Box
          key={education.level}
          backgroundColor="white"
          color="#18181b"
          mx="auto"
          boxShadow="rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;"
        >
          <Grid p={[20]} templateColumns="repeat(2, 1fr)" gap={4}>
            <GridItem colSpan={1}>
              <VStack alignItems="flex-start">
                <Heading size="md" color="teal">
                  {education.startDate} - {education.endDate}
                </Heading>
                <Text>{education.institution}</Text>
              </VStack>
            </GridItem>
            <GridItem colSpan={1}>
              <VStack alignItems="flex-start">
                <Text>{education.degree}</Text>
                <Text>{education.major}</Text>
                {education.wam && <Text>WAM: {education.wam}</Text>}
                {education.gpa && <Text>GPA: {education.gpa}</Text>}
              </VStack>
            </GridItem>
          </Grid>
        </Box>
      ))}
    </>
  );
};

export default EduCard;
