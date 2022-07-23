import { Button, VStack, Divider } from "@chakra-ui/react";
import {
  FaInstagram,
  FaTwitter,
  FaGlobe,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export const Links = () => {
  return (
    <VStack spacing={4} direction="column" align="center" width="100%">
      <Button
        colorScheme="purple"
        size="lg"
        rightIcon={<FaTwitter />}
        onClick={() => window.open("https://twitter.com/JoshCStein", "_blank")}
        width="100%"
      >
        Twitter
      </Button>
      <Button
        colorScheme="purple"
        size="lg"
        rightIcon={<FaGlobe />}
        onClick={() => window.open("https://joshcs.lol", "_blank")}
        width="100%"
      >
        Portfolio
      </Button>
      <Button
        colorScheme="purple"
        size="lg"
        rightIcon={<FaGithub />}
        onClick={() => window.open("https://github.com/jcstein", "_blank")}
        width="100%"
      >
        GitHub
      </Button>
      <Button
        colorScheme="purple"
        size="lg"
        rightIcon={<FaLinkedin />}
        onClick={() =>
          window.open("https://linkedin.com/in/joshcstein", "_blank")
        }
        width="100%"
      >
        LinkedIn
      </Button>
      <Button
        colorScheme="purple"
        size="lg"
        rightIcon={<FaInstagram />}
        onClick={() =>
          window.open("https://www.instagram.com/joshcstein/", "_blank")
        }
        width="100%"
      >
        Instagram
      </Button>
      <Button
        colorScheme="purple"
        size="lg"
        rightIcon={<FaGithub />}
        onClick={() =>
          window.open("https://github.com/jcstein/vite-tree/generate", "_blank")
        }
        width="100%"
      >
        Use this Template
      </Button>
    </VStack>
  );
};
