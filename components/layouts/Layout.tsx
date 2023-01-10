import { Box, useColorModeValue } from "@chakra-ui/react";
import { Children } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box p={5} rounded="md" bg={useColorModeValue("white", "gray.900")}>
      {children}
    </Box>
  );
}
