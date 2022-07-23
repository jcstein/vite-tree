import { VStack, Flex, Link, Avatar } from "@chakra-ui/react";
import { Buttons } from "./Components/buttons";
import { About } from "./Components/about";
import { Links } from "./Components/links";

function App() {
  return (
    <div>
      <Buttons />
      <Flex
        justifyContent="center"
        alignItems="center"
        alignSelf="center"
        minHeight="90vh"
      >
        <VStack p="8" width="100%">
          <About />
          <Links />
          <Link href="/" pt="8">
            <Avatar src="/jcs.png" mx="auto" size="md" />
          </Link>
        </VStack>
      </Flex>
    </div>
  );
}

export default App;
