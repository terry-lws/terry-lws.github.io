import {
  Heading,
  Text,
  VStack,
  Avatar,
  Tooltip,
  Card,
  CardBody,
  CardFooter,
  ButtonGroup,
  useToast,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import pfp from "../images/pfp2.jpg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const ReturnToTop = () => {
  window.scroll(0, 0);
};

const navItemStyles = ({ isActive }) => ({
  color: isActive ? "teal" : "#18181b",
});


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
    url: "https://www.linkedin.com/in/terry-l-0a5b3b20b/",
  },
];

const NameCard = () => {
  const toast = useToast();
  return (
    <Card
      backgroundColor="#f4ece64d"
      alignItems="center"
      height="fit-content"
      padding="20px 0 0 0"
      width="350px"
      flexDirection="column"
      boxShadow="rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;"
    >
      <CardBody>
        <VStack spacing={5} p={[2, 4]} align="center">
          <Avatar size="2xl" src={pfp} />
          <Heading size="md">Terry Lam</Heading>
          <Text>Software Developer</Text>
        </VStack>
      </CardBody>
      <CardFooter bgColor="white" width="100%" justifyContent="center">
        <ButtonGroup spacing="3">
          <a href={socials.find((p) => p.icon === faGithub).url} target="blank">
            <Tooltip label="GitHub">
              <FontAwesomeIcon
                icon={socials.find((p) => p.icon === faGithub).icon}
                size="2x"
              />
            </Tooltip>
          </a>
          <a
            href={socials.find((p) => p.icon === faLinkedin).url}
            target="blank"
          >
            <Tooltip label="LinkedIn">
              <FontAwesomeIcon
                icon={socials.find((p) => p.icon === faLinkedin).icon}
                size="2x"
              />
            </Tooltip>
          </a>
          <NavLink style={navItemStyles} onClick={ReturnToTop} to="/contact">
            <Tooltip label="Send me a message">
              <FontAwesomeIcon
                icon={socials.find((p) => p.icon === faEnvelope).icon}
                size="2x"
                style={{ cursor: "pointer" }}
              />
            </Tooltip>
          </NavLink>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default NameCard;
