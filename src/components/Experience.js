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
            fontSize: "18px",
            fontWeight: 500,
            color: "#ccd6f6",
            paddingBottom: "18px",
          }}
        >
          Experience
        </Heading>
        {data.experience.map((item, index) => (
          <Flex key={index} mb={4} flexDirection="column">
            <Text
              style={{
                display: "flex",
                left: 0,
                fontSize: "14px",
                fontWeight: 500,
                color: "#8892B0",
                marginBottom: 1,
              }}
            >
              {item.year}
            </Text>
            <Link
              href={item.url}
              isExternal
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                left: 0,
                fontSize: "20px",
                fontWeight: 500,
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
                flexDirection: "column",
                left: 0,
                fontSize: "18px",
                color: "#8892B0",
                marginBottom: 1,
                fontWeight: 500,
              }}
            >
              {item.role.map((role, index) => (
                <span
                  key={index}
                  style={{
                    color: index === 0 ? "white" : null,
                    display: "flex",
                  }}
                >
                  {role}
                </span>
              ))}
            </Text>

            <Text
              style={{
                textAlign: "left",
                color: "#8892B0",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              {item.desc}
            </Text>
            <HStack marginTop="2" spacing="2" paddingBottom="18px">
              {item.stack.map((stack) => (
                <Tag
                  key={stack}
                  variant="outline"
                  fontSize="14px"
                  color="#64ffda"
                >
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
