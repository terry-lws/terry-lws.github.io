import { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  HStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const handleClick = (anchor, onToggle) => {
  const id = `${anchor}-section`;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setTimeout(onToggle, 1000); // delay the onToggle call by 1000ms
  }
};

const DropdownMenu = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position="relative">
      <Button onClick={onToggle}>Menu</Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          top="100%"
          right={0}
          mt={2}
          py={2}
          minWidth="max-content"
          backgroundColor="white"
          boxShadow="md"
          rounded="md"
          zIndex={1}
        >
          <HStack spacing={4} alignItems="center">
            <Text fontWeight="bold">Select an item:</Text>
            <a href="#bio" onClick={() => handleClick("bio", onToggle)}>
              Item 1
            </a>
          </HStack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default DropdownMenu;