import { Container, Box, Stack, Text } from "@chakra-ui/react";
import AnimatedText from "../../components/AnimatedText";
import data from "../../utils/constants.json";

const About = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        p={3}
        mb={6}
        align="center"
        boxSize="auto"
        color="white"
      >
        <Stack fontFamily={'"Poppins", sans-serif'} spacing={2}>
          <AnimatedText text={data.hello} fontSize="30px" />
          <Text fontSize={"20px"} fontWeight={600} color="#FFFFFF99">
            {data.info}
          </Text>
        </Stack>
      </Box>
    </Container>
  );
};

export default About;
