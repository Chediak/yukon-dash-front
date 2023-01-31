import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Flex,
    SimpleGrid,
    theme,
  } from "@chakra-ui/react";
  
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
  
  import dynamic from "next/dynamic";
  import { motion } from "framer-motion";
  import ReactPaginate from "react-paginate";
  import BreadCrumb from "../components/BreadCrumb";
  import CardDash from "../components/CardDash";
  import Layout from "../components/layouts/Layout";
  import SearchBar from "../components/SearchBar";
  import SimpleSidebar from "../components/Sidebar";
  import Blog from "../components/Blog";
  import ServicesOrders from "../components/ServicesOrders";
  
  const links = [
    { title: "Início", link: "/" },
    { title: "Ordens de Serviço", link: "/services" },
  ];
  
  export default function Services() {
    return (
      <SimpleSidebar>
        <Layout>
          <BreadCrumb items={links} />
          <Box>
            <ServicesOrders/>
          </Box>
        </Layout>
      </SimpleSidebar>
    );
  }
  