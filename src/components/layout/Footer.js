import { Box, Text } from "@chakra-ui/react";

const Footer = ({footerText, tradeMark}) => {
  return (
    <Box mt={8} textAlign="center" color="#8892B0">
      <Text>{footerText}</Text>
      <Text>{tradeMark}</Text>
    </Box>
  );
};

export default Footer;
