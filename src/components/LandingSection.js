import React from "react";
import { Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const hero = "Hi, I'm Terry";
const subhero = "Front-end Web Developer specialises in React";

const LandingSection = () => {
  return (
    <FullScreenSection
      px={8}
      py={20}
      justifyContent="center"
      alignItems="center"
      backgroundColor="#dddddd"
      textAlign="center"
    >
      <VStack spacing={5} position="relative" bottom="10vh">
        <Heading size={'2xl'}>
          {hero}
        </Heading>
        <Text fontSize={'2xl'}>
          {subhero}
        </Text>
      </VStack>
    </FullScreenSection>
  )
};

export default LandingSection;
