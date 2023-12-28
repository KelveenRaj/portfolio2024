import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Box, Container } from "@chakra-ui/react";
import data from "../../utils/constants.json";
import Navbar from "../Navbar";

const MainLayout = () => {
  const currentPath = window.location.pathname;

  return (
    <Box
      as="main"
      pb={8}
      maxW={"36rem"}
      marginLeft={"auto"}
      marginRight={"auto"}
    >
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{data.name}</title>
      </Helmet>

      <Navbar path={currentPath} />

      <Container maxW="container.md" pt={14}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default MainLayout;
