import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const LinkItem = ({ href, children }) => {
  return (
    <Link to={href}>
      <ChakraLink p={2} color={"white"}>
        {children}
      </ChakraLink>
    </Link>
  );
};

export default LinkItem;
