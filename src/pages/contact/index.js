import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  FormControl,
  Input,
  Textarea,
  Button,
  VStack,
  Heading,
  Spinner,
} from "@chakra-ui/react";

const Contact = () => {
  const form = useRef();
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setMessage("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          setMessage("Error sending message. Please try again later.");
          console.log(error.text);
        }
      )
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Box w="100%" maxW="350px" m="auto" mt={10} color="white">
      <Heading
        style={{
          display: "flex",
          fontSize: "18px",
          fontWeight: 500,
          color: "#ccd6f6",
          paddingBottom: "18px",
        }}
      >
        Contact Me
      </Heading>
      <form ref={form} onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl>
            <Input type="text" placeholder="Name" name="from_name" required />
          </FormControl>

          <FormControl>
            <Input
              type="email"
              placeholder="Email"
              name="from_email"
              required
            />
          </FormControl>

          <FormControl>
            <Input
              type="text"
              placeholder="Subject"
              name="from_subject"
              required
            />
          </FormControl>

          <FormControl>
            <Textarea placeholder="Message" rows={4} name="message" required />
          </FormControl>

          {message && <div>{message}</div>}

          {submitting ? (
            <Spinner size="md" color="teal" speed="0.65s" thickness="4px" />
          ) : (
            <Button type="submit" colorScheme="teal">
              Submit
            </Button>
          )}
        </VStack>
      </form>
    </Box>
  );
};

export default Contact;
