import {
  Heading,
  Text,
  Grid,
  Box,
  GridItem,
  VStack,
  UnorderedList,
  ListItem,
  Square,
} from "@chakra-ui/react";

const experiences = [
  {
    company: "LuggyShare",
    position: "Junior Full-Stack Developer",
    startDate: "Feb 2025",
    endDate: "July 2025",
    stack: ["Angular", "TypeScript", "ASP.NET", "C#", "DBMS", "GitHub", "Agile development"],
    description: [
      "Developed and implemented new features to enhance application functionality",
      "Diagnosed and resolve software bugs to maintain high system reliability",
      "Optimised code for performance and efficiency, improving load time",
      "Used Git to document code changes and support effective team collaboration in version control",
      "Actively participated in Scrum meetings to align with project goals and support agile development",
    ],
  },
  {
    company: "Support Asian Women Friendship's Association Inc.",
    position: "Computer Class Facilitator",
    startDate: "Feb 2024",
    endDate: "Nov 2024",
    stack: ["Class facilitation", "Microsoft Office 365"],
    description: [
      "Developed appropriate materials for the class, ensuring they align with the learning objectives",
      "Delivered classes, demonstrations, and hands-on activities to teach students various computer skills and concepts",
      "Managed classroom environment to ensure a productive and supportive learning atmosphere",
    ],
  },
  {
    company: "Vpply",
    position: "Front-end Web Developer Intern",
    startDate: "Sept 2023",
    endDate: "Dec 2023",
    stack: ["Vue.js", "Nuxt", "TypeScript", "Go", "Jira", "Agile development"],
    description: [
      "Designed and implemented responsive solutions, enhancing user experience across various platforms and devices",
      "Enhanced website aesthetics and layout to optimize user experience and visual appeal",
      "Developed and conducted User Acceptance Test to ensure stringent quality standards",
      "Collaborated with designers and backend developers to achieve objectives, ensuring successful project delivery",
      "Investigated and troubleshot userreported technical issues through API-level fixes",
      "Participated in Scrum meetings to align with project goals and support agile development"
    ],
  },
];

const ExpCard = () => {
  return (
    <>
      {experiences.map((experience) => (
        <Box
          backgroundColor="white"
          color="#18181b"
          mx="auto"
          boxShadow="rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;"
        >
          <Grid p={[20]} templateColumns="repeat(2, 1fr)" gap={4}>
            <GridItem colSpan={1}>
              <VStack alignItems="flex-start">
                <Heading size="md" color="teal">
                  {experience.startDate} - {experience.endDate}
                </Heading>
                <Heading size="md" fontWeight={"normal"}>{experience.position}</Heading>
                <Text>{experience.company}</Text>
                {experience.stack && <Text fontWeight={600}>Stack/Skills: {experience.stack.join(", ")}</Text>}
              </VStack>
            </GridItem>
            <GridItem colSpan={1}>
              <VStack alignItems="flex-start">
                <UnorderedList spacing={3} listStyleType={"square"}>
                  {experience.description &&
                    experience.description.map((index) => (
                      <ListItem fontSize="0.9em" className="experience-item">
                        {index}
                      </ListItem>
                    ))}
                </UnorderedList>
              </VStack>
            </GridItem>
          </Grid>
        </Box>
      ))}
    </>
  );
};

export default ExpCard;
