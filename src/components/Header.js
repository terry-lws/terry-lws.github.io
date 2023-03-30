import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { CloseButton, IconButton, Box, HStack, VStack, useToast, Tooltip } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const socials = [
  {
    icon: faEnvelope,
    url: "terrylam299@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/terry-lws",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/wai-shun-terence-lam-0a5b3b20b/",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast()

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
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent={{ md: "space-between", base: "center" }}
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              <IconButton
                size="md"
                icon={<HamburgerIcon />}
                aria-label="Open Menu"
                display={{ md: "none" }}
                backgroundColor="white"
                color="black"
                onClick={onOpen}
              />
              <CopyToClipboard text={socials.find(p => p.icon === faEnvelope).url}>
                <div>
                  <Tooltip label='Copy email to clipboard'>
                    <FontAwesomeIcon onClick={() =>
                      toast({
                        title: 'Email copied!',
                        status: 'success',
                        duration: 2500,
                        position: 'top',
                        isClosable: true,
                      })
                    }
                      icon={socials.find(p => p.icon === faEnvelope).icon}
                      size="2x"
                      style={{ cursor: 'pointer' }} />
                  </Tooltip>
                </div>
              </CopyToClipboard>

              <a href={socials.find(p => p.icon === faGithub).url} target='blank'>
                <Tooltip label='GitHub'>
                  <FontAwesomeIcon icon={socials.find(p => p.icon === faGithub).icon} size="2x" />
                </Tooltip>
              </a>
              <a href={socials.find(p => p.icon === faLinkedin).url} target='blank'>
                <Tooltip label='LinkedIn'>
                  <FontAwesomeIcon icon={socials.find(p => p.icon === faLinkedin).icon} size="2x" />
                </Tooltip>
              </a>
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8} display={{ base: "none", md: "flex" }}>
              <a href="#skills" onClick={handleClick("skills")}>
                Skills
              </a>
              <a href="#projects" onClick={handleClick("projects")}>
                Projects
              </a>
              {/* <a href="#contactme" onClick={handleClick("contactme")}>
                Contact
              </a> */}
            </HStack>
          </nav>
        </HStack>

        {isOpen ? (
          <Box pb={4}>
            <VStack spacing={4}>
              <a href="#skills" onClick={handleClick("skills")}>
                Skills
              </a>
              <a href="#projects" onClick={handleClick("projects")}>
                Projectss
              </a>
              <CloseButton onClick={onClose} />
            </VStack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
export default Header;
