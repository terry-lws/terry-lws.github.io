import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const hero = "Hi, I'm Terry Lam";
const subhero = "A Front-end Web Developer specialises in React";

const LandingSection = () => {
  return (
    <FullScreenSection
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
