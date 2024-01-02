import {
  Box,
  Stack,
  Text,
  Heading,
  Flex,
  Link,
  HStack,
  Tag,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Experience = ({ data }) => {
  return (
    <Stack>
      <Box>
        <Heading
          style={{
            display: "flex",
            left: 0,
            fontSize: "26px",
            color: "#ccd6f6",
            paddingBottom: 10,
          }}
        >
          Experience
        </Heading>
        {data.experience.map((item, index) => (
          <Flex key={index} mb={4} flexDirection="column">
            <Link
              href={item.url}
              isExternal
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                left: 0,
                fontSize: "22px",
                fontWeight: "bold",
                color: "#64ffda",
                textDecoration: "none",
                alignItems: "center",
              }}
            >
              {item.company}
              <ChevronRightIcon />
            </Link>
            <Text
              style={{
                display: "flex",
                left: 0,
                fontSize: "16px",
                color: "gray.500",
                marginBottom: 1,
                fontWeight: "bold",
              }}
            >
              {item.year}
            </Text>
            <Text style={{ textAlign: "justify", color: "#8892B0" }}>
              {item.desc}
            </Text>
            <HStack marginTop="2" spacing="2">
              {item.stack.map((stack) => (
                <Tag key={stack} variant="outline">
                  {stack}
                </Tag>
              ))}
            </HStack>
          </Flex>
        ))}
      </Box>
    </Stack>
  );
};

export default Experience;
