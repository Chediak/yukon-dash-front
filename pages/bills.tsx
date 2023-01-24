import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Select,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";
import BreadCrumb from "../components/BreadCrumb";
import CardDash from "../components/CardDash";
import Layout from "../components/layouts/Layout";
import SearchBar from "../components/SearchBar";
import SimpleSidebar from "../components/Sidebar";

const links = [
  { title: "Início", link: "/" },
  { title: "Boletos", link: "/bills" },
];

export default function Bills() {
  return (
    <SimpleSidebar>
      <Layout>
        <Stack>
          {/*breadcrumb*/}
          <BreadCrumb items={links} />
          {/*breadcrumb*/}
          <CardDash>Boleto</CardDash>
          <CardDash>Boleto</CardDash>
          <CardDash>Boleto</CardDash>
          <CardDash>Boleto</CardDash>
          <CardDash>Boleto</CardDash>
        </Stack>
      </Layout>
    </SimpleSidebar>
  );
}
