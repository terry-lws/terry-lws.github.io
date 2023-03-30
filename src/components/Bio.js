import React from "react";
import { Text, Heading, VStack, Grid, GridItem, Box } from "@chakra-ui/react";
import { Flex, Spacer } from '@chakra-ui/react'
import FullScreenSection from "./FullScreenSection";

const Bio = () => {
    return (
        <FullScreenSection
            backgroundColor="#2A4365"
            isDarkBackground
            px={8}
            py={20}
            alignItems="flex-start"
            spacing={8}
        >
            <VStack spacing={5}>
                <Heading>
                    About Me
                </Heading>
                <Flex color='white'>
  <Box bg='tomato' w='50%'>
    <Text>Box 3</Text>
  </Box>
  <Box bg='tomato' w='50%'>
    <Text>Box 3</Text>
  </Box>
</Flex>
            </VStack>
        </FullScreenSection>
    )
};

export default Bio;
