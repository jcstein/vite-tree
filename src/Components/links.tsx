import { Button, Stack, VStack } from "@chakra-ui/react";
import {
  FaInstagram,
  FaTwitter,
  FaGlobe,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export const Links = () => {
  return (
    <VStack>
      <Stack spacing={4} direction="column" align="center">
        <Button
          colorScheme="purple"
          size="lg"
          rightIcon={<FaTwitter />}
          onClick={() =>
            window.open("https://twitter.com/JoshCStein", "_blank")
          }
        >
          Twitter
        </Button>
        <Button
          colorScheme="purple"
          size="lg"
          rightIcon={<FaGlobe />}
          onClick={() => window.open("https://joshcs.lol", "_blank")}
        >
          Portfolio
        </Button>
        <Button
          colorScheme="purple"
          size="lg"
          rightIcon={<FaGithub />}
          onClick={() => window.open("https://github.com/jcstein", "_blank")}
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
        >
          Instagram
        </Button>
      </Stack>
    </VStack>
  );
};
