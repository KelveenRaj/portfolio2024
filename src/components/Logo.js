import { Link as Navigate } from "react-router-dom";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform rotate(20deg);
  }
`;

const Logo = () => {
  const footPrintImg = `/images/footprint${useColorModeValue("", "-dark")}.png`;

  return (
    <Navigate href="/">
      <a>
        <LogoBox>
          <img  src={footPrintImg} width={20} height={20} alt="logo" />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Kelveen Raj
          </Text>
        </LogoBox>
      </a>
    </Navigate>
  );
};

export default Logo;
