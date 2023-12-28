import { Link } from "react-router-dom";
import {
  Container,
  Box,
  Link as ChakraLink,
  Stack,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "./Logo";
import LinkItem from "./LinkItem";

const Navbar = (props) => {
  const { path } = props;
  return (
    <Box
      as="header"
      w="100%"
      bg={"blackAlpha.50"}
      padding={"4rem 1rem"}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Logo />
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/test" path={path}>
            Test
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon boxSize={6} />}
                colorScheme="white"
              />
              <MenuList>
                <Link to="/" passHref>
                  <MenuItem as={ChakraLink}>About</MenuItem>
                </Link>
                <Link to="/test" passHref>
                  <MenuItem as={ChakraLink}>Test</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
