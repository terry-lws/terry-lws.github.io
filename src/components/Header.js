import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  IconButton,
  Box,
  HStack,
  VStack,
  useToast,
  Collapse,
  useBreakpointValue,
  useDisclosure,
  Heading,
  Text,
} from "@chakra-ui/react";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const ReturnToTop = () => {
  window.scroll(0, 0);
};

const navItemStyles = ({ isActive }) => ({
  color: isActive ? "teal" : "#18181b",
});

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

  const toast = useToast();

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
      backgroundColor="#ffffffff"
      zIndex="1"
    >
      <Box color="#18181b" maxWidth="1280px" margin="0 auto" fontWeight={600}>
        <HStack
          px={{ md: 16, base: 8 }}
          py={6}
          justifyContent={{ md: "space-between", base: "flex-start" }}
          alignItems={{ md: "center", base: "flex-start" }}
        >
          <nav>
            <HStack spacing={8}>
              <nav>
                {isMobile && (
                  <HStack>
                    <IconButton
                      size="md"
                      icon={<FontAwesomeIcon icon={faBars} />}
                      display={{ md: "none" }}
                      aria-label={isOpen ? "Close Menu" : "Open Menu"}
                      backgroundColor="white"
                      color="black"
                      _hover={{ backgroundColor: "whiteAlpha.800" }}
                      _active={{ backgroundColor: "whiteAlpha.900" }}
                      onClick={onToggle}
                    />
                    <Heading fontWeight="900">
                      <NavLink onClick={ReturnToTop} to="/">
                        Terry Lam
                      </NavLink>
                    </Heading>
                  </HStack>
                )}
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
                          <NavLink
                            style={navItemStyles}
                            onClick={() => {
                              ReturnToTop();
                              handleItemClick();
                            }}
                            to="/"
                          >
                            About Me
                          </NavLink>
                          <NavLink
                            style={navItemStyles}
                            onClick={() => {
                              ReturnToTop();
                              handleItemClick();
                            }}
                            to="/resume"
                          >
                            Resume
                          </NavLink>
                          <NavLink
                            style={navItemStyles}
                            onClick={() => {
                              ReturnToTop();
                              handleItemClick();
                            }}
                            to="/projects"
                          >
                            Projects
                          </NavLink>
                          <NavLink
                            style={navItemStyles}
                            onClick={() => {
                              ReturnToTop();
                              handleItemClick();
                            }}
                            to="/contact"
                          >
                            Contact
                          </NavLink>
                        </VStack>
                      </Box>
                    </HStack>
                  </Box>
                </Collapse>
              </nav>
              <HStack spacing={8} display={{ base: "none", md: "flex" }}>
                <Heading fontWeight="900">
                  <NavLink onClick={ReturnToTop} to="/">
                    Terry Lam
                  </NavLink>
                </Heading>
              </HStack>
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8} display={{ base: "none", md: "flex" }}>
              <NavLink style={navItemStyles} onClick={ReturnToTop} to="/">
                About Me
              </NavLink>
              <NavLink style={navItemStyles} onClick={ReturnToTop} to="/resume">
                Resume
              </NavLink>
              <NavLink
                style={navItemStyles}
                onClick={ReturnToTop}
                to="/projects"
              >
                Projects
              </NavLink>
              <NavLink
                style={navItemStyles}
                onClick={ReturnToTop}
                to="/contact"
              >
                Contact
              </NavLink>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
