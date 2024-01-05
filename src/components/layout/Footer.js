import { Box, Text } from "@chakra-ui/react";

const Footer = ({text}) => {
  return (
    <Box mt={8} textAlign="center" color="#8892B0">
      <Text>{text}</Text>
    </Box>
  );
};

export default Footer;
