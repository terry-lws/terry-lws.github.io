import { useEffect, useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  IconButton,
  Box,
  HStack,
  VStack,
  useToast,
  Tooltip,
  Collapse,
  useBreakpointValue,
  useDisclosure
} from "@chakra-ui/react";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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

  const handleItemClick = () => {
    onToggle();
  };

  //const headerRef = useRef(null);

  const { isOpen, onToggle } = useDisclosure();

  const toast = useToast()

  const isMobile = useBreakpointValue({ base: true, md: false });

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
          px={{ md: 16, base: 8 }}
          py={4}
          justifyContent={{ md: "space-between", base: "flex-start" }}
          alignItems={{ md: "center", base: "flex-start" }}
        >
          <nav>
            <HStack spacing={8}>
              <nav>
                {isMobile &&
                  <IconButton
                    size="md"
                    icon={
                      <FontAwesomeIcon
                        icon={faBars}
                      />
                    }
                    display={{ md: "none" }}
                    aria-label={isOpen ? "Close Menu" : "Open Menu"}
                    backgroundColor="white"
                    color="black"
                    _hover={{ backgroundColor: "whiteAlpha.800" }}
                    _active={{ backgroundColor: "whiteAlpha.900" }}
                    onClick={onToggle}
                  />}
                <Collapse in={isOpen} animateOpacity>
                  <Box
                    top="100%"
                    right={0}
                    mt={2}
                    py={2}
                    minWidth="max-content"
                    zIndex={1}
                  >
                    <HStack spacing={4}>
                      <Box pb={4} overflow="hidden" transition="0.3s ease">
                        <VStack spacing={4} alignItems="flex-start">
                          <CopyToClipboard text={socials.find(p => p.icon === faEnvelope).url}>
                            <div>
                              <Tooltip label='Copy email to clipboard'>
                                <FontAwesomeIcon onClick={() =>
                                  toast({
                                    title: 'Email copied!',
                                    status: 'success',
                                    duration: 1500,
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
                          <a href="#bio" onClick={handleClick("bio")}>
                            About Me
                          </a>
                          <a href="#skills" onClick={handleClick("skills")}>
                            Skills
                          </a>
                          <a href="#projects" onClick={handleClick("projects")}>
                            Projectss
                          </a>
                        </VStack>
                      </Box>
                    </HStack>
                  </Box>
                </Collapse>
              </nav>
              <HStack spacing={8} display={{ base: "none", md: "flex" }}>
                <CopyToClipboard text={socials.find(p => p.icon === faEnvelope).url}>
                  <div>
                    <Tooltip label='Copy email to clipboard'>
                      <FontAwesomeIcon onClick={() =>
                        toast({
                          title: 'Email copied!',
                          status: 'success',
                          duration: 1500,
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
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8} display={{ base: "none", md: "flex" }}>
              <a href="#bio" onClick={handleClick("bio")}>
                About Me
              </a>
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
      </Box>
    </Box>
  );
};
export default Header;
