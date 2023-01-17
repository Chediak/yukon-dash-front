import { Flex, useColorModeValue } from "@chakra-ui/react";

export default function CardDash({ children, justifyContent = "center" }: any) {
  return (
    <Flex
      px={4}
      py={4}
      borderRadius={"20px"}
      border="1px solid #fafafa"
      bg={useColorModeValue("gray.50", "gray.50")}
      justifyContent={justifyContent}
    >
      {children}
    </Flex>
  );
}
