import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import data from "../utils/constants.json";

const Logo = () => {
  return (
    <Link to="/">
      <a>
        <Text
          color={"gray.800"}
          fontFamily='"Poppins", sans-serif'
          fontWeight="bold"
          fontSize={"18px"}
          ml={3}
        >
          {data.name}
        </Text>
      </a>
    </Link>
  );
};

export default Logo;
