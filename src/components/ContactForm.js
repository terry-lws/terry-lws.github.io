import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Flex,
} from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <form
      className="contact-form"
      action="https://formsubmit.co/f77eaf22a2b91dffff78df92d97eb46f"
      method="POST"
    >
      <FormControl>
        <FormLabel>Full name</FormLabel>
        <Input
          className="input-field"
          placeholder="Full name"
          type="text"
          name="name"
          required
        />
        <FormLabel className="input-field">Email address</FormLabel>
        <Input
          className="input-field"
          placeholder="Email"
          type="email"
          name="email"
          required
        />
        <FormLabel className="input-field">Message</FormLabel>
        <Textarea
          className="input-field"
          placeholder="Type your message"
          type="text"
          name="message"
          required
        />
        <Button colorScheme="teal" type="submit">Send</Button>
      </FormControl>
    </form>
  );
};

export default ContactForm;
