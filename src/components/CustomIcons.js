import React from "react";
import { Icon, Link } from "@chakra-ui/react";
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

const AnimatedIcon = ({ icon, link }) => {
  return (
    <Link href={link} isExternal>
      <Icon
        as={icon}
        boxSize={8}
        color="#8892B0"
        _hover={{ color: "#64ffda", animation: "bounce 1s infinite" }}
        sx={styles.icon}
      />
    </Link>
  );
};

export const GithubIcon = () => (
  <AnimatedIcon icon={FaGithub} link="https://github.com/KelveenRaj" />
);

export const LinkedinIcon = () => (
  <AnimatedIcon
    icon={FaLinkedin}
    link="https://www.linkedin.com/in/kelveenraj/"
  />
);

export const InstagramIcon = () => (
  <AnimatedIcon
    icon={FaInstagram}
    link="https://www.instagram.com/kelveen_raj/"
  />
);
