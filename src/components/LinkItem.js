import { Link } from "react-router-dom";
import { Link as ChakraLink, useColorModeValue } from "@chakra-ui/react";

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");

  return (
    <Link to={href}>
      <ChakraLink
        p={2}
        bg={active ? "glassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
      >
        {children}
      </ChakraLink>
    </Link>
  );
};

export default LinkItem;
