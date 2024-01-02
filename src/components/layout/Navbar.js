import { Link, useLocation } from "react-router-dom";
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
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "./Logo";
import LinkItem from "./LinkItem";
import { useEffect, useState } from "react";

const BoxStyles = {
  position: "fixed",
  as: "nav",
  width: "100%",
  maxWidth: "36rem",
  padding: "2rem 1rem",
  background: "blackAlpha.50",
  backdropFilter: "blur(10px)",
  zIndex: 1,
};
const ContainerStyles = {
  display: "flex",
  padding: 2,
  maxWidth: "container.md",
  wrap: "wrap",
  align: "center",
  justify: "space-between",
};

const Navbar = ({ ...props }) => {
  const location = useLocation();
  const { pathname } = location;
  const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");
  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    setIsActive(pathname);
  }, [pathname]);

  return (
    <Box style={BoxStyles} {...props}>
      <Container style={ContainerStyles}>
        <Flex align="center" justify="space-between" width="100%">
          <Flex align="center">
            <Logo isActive={isActive} />
          </Flex>

          {isLargerThanMd ? (
            <Stack direction="row" spacing={4}>
              <Box flex={1} />
              <LinkItem href="/contact" isActive={isActive}>
                Contact
              </LinkItem>
            </Stack>
          ) : (
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
                    <Link to="/contact" passHref>
                      <MenuItem as={ChakraLink}>Contact</MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
              </Box>
            </Box>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
