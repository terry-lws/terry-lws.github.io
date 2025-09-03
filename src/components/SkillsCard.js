import { Heading, Text, Grid, Box, GridItem, VStack } from "@chakra-ui/react";
import React from "react";

const skills = [
  {
    category: "Web Development",
    set: ["HTML", "CSS","JavaScript","TypeScript","Bootstrap", "Angular", "React", "Vue.js", "ASP.NET", "WordPress"],
  },
  {
    category: "Other Programming Languages",
    set: ["Python", "Java", "C++", "C#"],
  },
  {
    category: "Database Management System",
    set: ["SQL Server Management Studio", "Microsoft Access"],
  },
  {
    category: "Interface/Graphic Design",
    set: ["Figma", "Canva"],
  },
  {
    category: "Cloud Computing",
    set: ["Azure", "AWS"],
  },
  {
    category: "Languages",
    set: ["English", "Mandarin", "Cantonese"],
  },
];

const SkillsCard = () => {
  return (
    <Box
      backgroundColor="white"
      color="#18181b"
      mx="auto"
      boxShadow="rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;"
    >
      <Grid p={[20]} templateColumns="repeat(2, 1fr)" rowGap={6} columnGap={4}>
        {skills.map((skill) => 
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start">
            <Heading size={"sm"} color={"teal"}>{skill.category}</Heading>
            <Text>{skill.set.join(', ')}</Text>
          </VStack>
        </GridItem>
        )}
      </Grid>
    </Box>
  );
};

export default SkillsCard;
