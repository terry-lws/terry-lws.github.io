import React from "react";
import { Heading, VStack, Text, Box } from "@chakra-ui/react";
import gif from "../images/codingv2.gif";
import FullScreenSection from "./FullScreenSection";

const hero = "Hi, I'm Terry";
const subhero = "Front-end Web Developer specialises in React";

const LandingSection = () => {
  return (
    <Box
    display="flex"
      px={8}
      py={20}
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      color="white"
      bg={`linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${gif})`}
      bgSize="cover"
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
    </Box>
  )
};

export default LandingSection;
