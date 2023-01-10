import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Sidebar from "../components/Sidebar";
import {
  Box,
  Stack,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Layout from "../components/layouts/Layout";
import BreadCrumb from "../components/BreadCrumb";

const inter = Inter({ subsets: ["latin"] });

const links = [
  { title: "Início", link: "/" },
  { title: "Dashboard", link: "/dashboard" },
];

export default function Home() {
  return (
    <>
      <Sidebar>
        <Layout>
          <Stack>
            <CardDash>
              <BreadCrumb items={links} />
            </CardDash>
            <SimpleGrid h="150px" columns={[1, 2, 2, 4]} gap={2}>
              <CardDash>Saldo</CardDash>
              <CardDash>teste</CardDash>
              <CardDash>teste</CardDash>
              <CardDash>teste</CardDash>
            </SimpleGrid>

            <SimpleGrid h="150px" columns={[1, 2]} gap={2}>
              <CardDash>teste</CardDash>
              <CardDash>teste</CardDash>
            </SimpleGrid>
          </Stack>
        </Layout>
      </Sidebar>
    </>
  );
}

export function CardDash({ children }: any) {
  return (
    <Box
      p={2}
      rounded="md"
      border="1px solid #fafafa"
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      {children}
    </Box>
  );
}
