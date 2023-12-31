import { Container, Box, Stack, Text } from "@chakra-ui/react";
import data from "../../utils/constants.json";
import Section from "../../components/Section";
import AnimatedText from "../../components/AnimatedText";
import Experience from "../../components/Experience";

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
        fontFamily={'"Poppins", sans-serif'}
        spacing={2}
      >
        {/* Heading */}
        <Stack>
          <AnimatedText text={data.hello} fontSize="36px" />
          <Section delay={1.3}>
            <Text fontSize={"18px"} fontWeight={600} color="#8892B0">
              {data.info}
            </Text>
          </Section>
        </Stack>

        {/* Experience */}
        <Section delay={1.8}>
          <Experience data={data} />
        </Section>
      </Box>
    </Container>
  );
};

export default About;
