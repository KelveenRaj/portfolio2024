import React from "react";
import { Icon } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const styles = {
  icon: {
    "@keyframes bounce": {
      "0%, 20%, 50%, 80%, 100%": {
        transform: "translateY(0)",
      },
      "40%": {
        transform: "translateY(-20px)",
      },
      "60%": {
        transform: "translateY(-10px)",
      },
    },
  },
};

export const GithubIcon = () => (
  <Icon
    as={FaGithub}
    boxSize={8}
    color="#8892B0"
    _hover={{ color: "#64ffda", animation: "bounce 1s infinite" }}
    sx={styles.icon}
  />
);

export const LinkedinIcon = () => (
  <Icon
    as={FaLinkedin}
    boxSize={8}
    color="#8892B0"
    _hover={{ color: "#64ffda", animation: "bounce 1s infinite" }}
    sx={styles.icon}
  />
);

export const InstagramIcon = () => (
  <Icon
    as={FaInstagram}
    boxSize={8}
    color="#8892B0"
    _hover={{ color: "#64ffda", animation: "bounce 1s infinite" }}
    sx={styles.icon}
  />
);

