import { Heading, Text, Grid, Box, GridItem, VStack } from "@chakra-ui/react";
import React from "react";

const EduCard = ({
  institution,
  degree,
  startDate,
  endDate,
  wam,
  gpa,
  major,
  level,
}) => {
  return (
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
              {startDate} - {endDate}
            </Heading>
            <Text>{institution}</Text>
            <Text>{level}</Text>
          </VStack>
        </GridItem>
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start">
            <Text>{degree}</Text>
            <Text>{major}</Text>
            {wam && <Text>WAM: {wam}</Text>}
            {gpa && <Text>GPA: {gpa}</Text>}
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default EduCard;
