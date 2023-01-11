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
  Flex,
} from "@chakra-ui/react";
import Layout from "../components/layouts/Layout";
import BreadCrumb from "../components/BreadCrumb";
import CardDash from "../components/CardDash";

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
            {/*breadcrumb*/}
            <CardDash justifyContent="start">
              <BreadCrumb items={links} />
            </CardDash>
            {/*breadcrumb*/}

            <SimpleGrid h="150px" columns={[1, 2, 2, 4]} gap={2}>
              <CardDash>
                <Text my="auto">Saldo</Text>
              </CardDash>
              <CardDash>
                <Text my="auto">Teste</Text>
              </CardDash>
              <CardDash>
                <Text my="auto">Teste</Text>
              </CardDash>
              <CardDash>
                <Text my="auto">Teste</Text>
              </CardDash>
            </SimpleGrid>

            <SimpleGrid h="150px" columns={[1, 2]} gap={2}>
              <CardDash>
                <Text my="auto">Teste</Text>
              </CardDash>
              <CardDash>
                <Text my="auto">Teste</Text>
              </CardDash>
            </SimpleGrid>
          </Stack>
        </Layout>
      </Sidebar>
    </>
  );
}
