import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const LinkStyle = {
  padding: 2,
  fontFamily: '"Poppins", sans-serif',
  textDecoration: 'none'
};

const LinkItem = ({ href, isActive, children }) => {
  return (
    <Link to={href}>
      <ChakraLink
        style={LinkStyle}
        color={isActive !== "/" ? "#319795" : "#FFFFFF"}
      >
        {children}
      </ChakraLink>
    </Link>
  );
};

export default LinkItem;
