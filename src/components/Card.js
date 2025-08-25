import { Heading, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, degree, startDate, endDate, description }) => {
  return (
    <Box backgroundColor="white" borderRadius="12px" color="black" width="70%" mx="auto">
      <VStack spacing={5} p={[2, 4]} align="left">
        <Heading size="md">{title}</Heading>
        <Text >{degree}</Text>
        <Text color="grey">{startDate} - {endDate}</Text>
        <Text>{description}</Text>
        <Text
          fontWeight="600"
          _hover={{
            textDecoration: "underline",
          }}
        >
        </Text>
        {/* {webURL != "" && (
          <Text
            fontWeight="600"
            _hover={{
              textDecoration: "underline",
            }}
          >
            <a href={webURL} target="_blank">
              Website <FontAwesomeIcon icon={faArrowRight} size="x1" />
            </a>
          </Text>
        )} */}
      </VStack>
    </Box>
  );
};

export default Card;
