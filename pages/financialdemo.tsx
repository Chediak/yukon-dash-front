import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
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
import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";
import BreadCrumb from "../components/BreadCrumb";
import CardDash from "../components/CardDash";
import Layout from "../components/layouts/Layout";
import SearchBar from "../components/SearchBar";
import SimpleSidebar from "../components/Sidebar";

const links = [
  { title: "Início", link: "/financialdemo" },
  { title: "Demonstrações Financeiras", link: "/financialdemo" },
];

export default function financialdemo() {
  return (
    <SimpleSidebar>
      <Layout>
        <BreadCrumb items={links} />

        <Box>
          <CardDash>
            <Stack direction={"row"}>
              <StatGroup>
                <Stat mt={"25px"}>
                  <StatLabel>Saldo Total</StatLabel>
                  <StatNumber>35.670,00</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    23.36%
                  </StatHelpText>
                </Stat>

                <Stat mt={"25px"}>
                  <StatLabel>Dívida</StatLabel>
                  <StatNumber>5.090,00</StatNumber>
                  <StatHelpText>
                    <StatArrow type="decrease" />
                    9.05%
                  </StatHelpText>
                </Stat>
              </StatGroup>
            </Stack>
          </CardDash>
        </Box>
      </Layout>
    </SimpleSidebar>
  );
}
