import { Avatar, VStack, Link, Divider } from "@chakra-ui/react";
import { Buttons } from "./Components/buttons";
import { About } from "./Components/about";
import { Links } from "./Components/links";

function App() {
  return (
    <div>
      <Buttons />
      <VStack p="8" height="screen">
        <About />
        <Links />
        <Divider pt="7" />
        <Link href="/" pt="8">
          <Avatar src="/fibonacci.jpeg" mx="auto" size="md" />
        </Link>
      </VStack>
    </div>
  );
}

export default App;
