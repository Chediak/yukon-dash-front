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
    { title: "Moradores", link: "/resident" },
  ];
  
  const residents = [
    { name: "Edgar Santiago", apartment: "132" },
    { name: "Anderson Pereira", apartment: "312" },
    { name: "Mattheus Chediak", apartment: "3224" },
    { name: "Larissa Anklam", apartment: "232" },
    { name: "Ronaldo Vieira", apartment: "534" },
    { name: "Sarah Augusto", apartment: "232" },
    { name: "Carlos Tavares", apartment: "325" },
    { name: "Paulo Ruas", apartment: "634" },
  ];
  
  export default function Resident() {
    return (
      <SimpleSidebar>
        <Layout>
          <Stack>
            {/*breadcrumb*/}
            <BreadCrumb items={links} />
            {/*breadcrumb*/}

            <CardDash>

            </CardDash>
          </Stack>
        </Layout>
      </SimpleSidebar>
    );
  }
  