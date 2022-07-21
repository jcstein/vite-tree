import { Avatar, VStack, Link, Divider, Flex } from "@chakra-ui/react";
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
        <VStack p="8">
          <About />
          <Links />
        </VStack>
      </Flex>
    </div>
  );
}

export default App;
