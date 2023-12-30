import { Link } from "react-router-dom";
import { Container, Box, Stack, Text, Heading, Button } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from "../../components/Section"
import Paragraph from "../../components/Paragraph"
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
        
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>Steven theodore is a software enginner, currently working in AIA Singapore. Has keen interest in Web Development and Machine Learning</Paragraph>
          <Box align="center" my={4}>
            <Link to="/test">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </Link>
          </Box>
        </Section>
      </Box>
    </Container>
  );
};

export default About;
