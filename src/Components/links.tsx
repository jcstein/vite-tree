import { Button, Stack, VStack, Icon } from "@chakra-ui/react";
import { FaTelegram, FaInstagram, FaDiscord } from "react-icons/fa";

export const Links = () => {
  return (
    <VStack>
      <Stack spacing={4} direction="column" align="center">
        <Button
          colorScheme="green"
          size="lg"
          rightIcon={<FaInstagram />}
          onClick={() =>
            window.open("https://www.instagram.com/charasdmv/", "_blank")
          }
        >
          CharasDMV
        </Button>
        <Button
          colorScheme="green"
          size="lg"
          rightIcon={<FaInstagram />}
          onClick={() =>
            window.open(
              "https://www.instagram.com/fibonacci_genetics/",
              "_blank"
            )
          }
        >
          Fibonacci Genetics
        </Button>
        <Button
          colorScheme="green"
          size="lg"
          rightIcon={<FaTelegram />}
          onClick={() =>
            window.open("https://t.me/+PMgxkjL3jX43ZTVh", "_blank")
          }
        >
          Telegram
        </Button>
        <Button
          colorScheme="green"
          size="lg"
          rightIcon={<FaDiscord />}
          onClick={() => window.open("https://discord.gg/txxzBeetBr", "_blank")}
        >
          Discord
        </Button>
      </Stack>
    </VStack>
  );
};
