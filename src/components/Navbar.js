import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  useDisclosure,
  VStack,
  CloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex="1"
    >
    <Box bg="gray.100" maxWidth="1280px" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={onOpen}
        />
        <HStack spacing={8} 
        justifyContent="space-between"
          alignItems="center">
          <Box>Logo</Box>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
          </HStack>
        </HStack>
        <HStack spacing={4} alignItems="center">
          <Link href="#">Login</Link>
          <Link href="#">Sign Up</Link>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4}>
          <VStack as="nav" spacing={4}>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
          </VStack>
          <CloseButton onClick={onClose} />
        </Box>
      ) : null}
    </Box>
    </Box>
  );
};

export default Navbar;