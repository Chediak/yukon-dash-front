import { Flex, useColorModeValue } from "@chakra-ui/react";

export default function CardDash({ children, justifyContent = "center" }: any) {
  return (
    <Flex
      px={4}
      py={4}
      borderRadius={"20px"}
      border="1px solid #fafafa"
      bg={useColorModeValue("gray.100", "gray.900")}
      justifyContent={justifyContent}
    >
      {children}
    </Flex>
  );
}
