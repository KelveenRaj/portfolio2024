import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import data from "../utils/constants.json";

const Logo = () => {
  return (
    <Link to="/">
      <a>
        <Text
          color={"white"}
          fontFamily='"Poppins", sans-serif'
          fontWeight="bold"
          fontSize={"18px"}
          ml={3}
        >
          {data.logo}
        </Text>
      </a>
    </Link>
  );
};

export default Logo;
