import { Flex, useColorModeValue } from "@chakra-ui/react";

export default function CardDash({ children, justifyContent = "center" }: any) {
  return (
    <Flex
      p={2}
      rounded="md"
      border="1px solid #fafafa"
      bg={useColorModeValue("gray.100", "gray.900")}
      justifyContent={justifyContent}
    >
      {children}
    </Flex>
  );
}
