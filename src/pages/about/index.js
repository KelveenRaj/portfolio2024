import { Container, Box, Stack, Text, HStack } from "@chakra-ui/react";
import data from "../../utils/constants.json";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
} from "../../components/CustomIcons";
import Section from "../../components/Section";
import AnimatedText from "../../components/AnimatedText";
import Experience from "../../components/Experience";

const About = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        p={3}
        align="center"
        boxSize="auto"
        color="white"
        fontFamily={'"Poppins", sans-serif'}
        spacing={2}
      >
        <Stack>
          {/* Heading */}
          <AnimatedText text={data.hello} fontSize="36px" />
          <Section delay={1.3}>
            <Text fontSize={"18px"} fontWeight={600} color="#8892B0">
              {data.info}
            </Text>
          </Section>

          {/* Social Links */}
          <Section delay={1.6}>
            <HStack spacing={4} align="center" justify="center">
              <LinkedinIcon />
              <GithubIcon />
              <InstagramIcon />
            </HStack>
          </Section>

          {/* Experience */}
          <Section delay={1.9}>
            <Experience data={data} />
          </Section>
        </Stack>
      </Box>
    </Container>
  );
};

export default About;
