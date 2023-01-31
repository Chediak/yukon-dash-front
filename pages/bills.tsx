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
  Icon,
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
import { MdSettings } from "react-icons/md";
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
          <CardDash justifyContent="right">
            <Button fontSize={"1xl"} colorScheme={"blue"}>Pagar</Button>
          </CardDash>
          <CardDash justifyContent="right">
            <Button fontSize={'1xl'} colorScheme={"blue"}>Pagar</Button>
          </CardDash>
          <CardDash justifyContent="right">
            <Button fontSize={"1xl"} colorScheme={"yellow"}>Pagar</Button>
          </CardDash>
        </Stack>
      </Layout>
    </SimpleSidebar>
  );
}
