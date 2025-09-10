import ContactForm from "./ContactForm";
import FullScreenSection from "./FullScreenSection";
import { Heading } from "@chakra-ui/react";

const Contact = () => {
  return (
    <FullScreenSection
      id="contact-section"
      backgroundColor="#e6dace"
      py={32}
      justifyContent="center"
      spacing={8}
      w={"100%"}
    >
      <Heading px={4} textAlign={"center"}>Contact Me / Request a CV</Heading>
      <ContactForm w={"100%"}></ContactForm>
    </FullScreenSection>
  );
};

export default Contact;
