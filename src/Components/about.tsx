import { Avatar, Heading, Text, Link, VStack } from "@chakra-ui/react";

export const About = () => {
  return (
    <VStack>
      <Avatar src="/fibonacci.png" mx="auto" size="2xl" />
      <Heading pb="3">@Fibonacci_Genetics</Heading>
    </VStack>
  );
};
