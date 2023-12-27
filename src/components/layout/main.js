import { Helmet } from "react-helmet";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";

const Main = ({ children }) => {
  const currentPath = window.location.pathname;

  return (
    <Box as="main" pb={8}>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kelveen Raj</title>
      </Helmet>

      <Navbar path={currentPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
