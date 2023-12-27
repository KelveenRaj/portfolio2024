import { Container, Box, Image, Stack, Heading, Text } from "@chakra-ui/react";
import profile from "../../assets/img/profile.jpg";
import data from "../../utils/constants.json";

const About = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        // bg={"#FFFAF0"}
        p={3}
        mb={6}
        align="center"
        boxSize="auto"
      >
        <Image
          borderRadius="full"
          border={"2px solid black"}
          boxSize="3xs"
          src={profile}
          alt={data.name}
          mb={3}
        />
        <Stack fontFamily={'"Poppins", sans-serif'} spacing={2}>
          <Text color={"#555555"} fontSize={"16px"} fontWeight={600}>
            {data.hello}
          </Text>
          <Heading fontSize={"32px"}>{data.name}</Heading>
          <Text color={"#555555"} fontSize={"20px"} fontWeight={600}>
            {data.role}
          </Text>
        </Stack>
      </Box>
    </Container>
  );
};

export default About;
