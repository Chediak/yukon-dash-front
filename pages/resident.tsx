import {
  Box,
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
  Tr,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";
import BreadCrumb from "../components/BreadCrumb";
import CardDash from "../components/CardDash";
import Layout from "../components/layouts/Layout";
import SimpleSidebar from "../components/Sidebar";

const links = [
  { title: "Início", link: "/" },
  { title: "Dashboard", link: "/dashboard" },
];

const residents = [
  { name: "Edgar", apartment: "212" },
  { name: "Gabriel", apartment: "312" },
  { name: "Chediak", apartment: "3224" },
  { name: "Edgar clone", apartment: "232" },
  { name: "Matheus", apartment: "232" },
  { name: "Ronaldo", apartment: "232" },
  { name: "Fdc", apartment: "232" },
  { name: "Krl é um teste", apartment: "232" },
];

export default function Resident() {
  return (
    <SimpleSidebar>
      <Layout>
        <Stack>
          {/*breadcrumb*/}
          <CardDash justifyContent="start">
            <BreadCrumb items={links} />
          </CardDash>
          {/*breadcrumb*/}

          <CardDash justifyContent="start">
            <Box>
              <Text fontSize="xl">Residentes</Text>
            </Box>
          </CardDash>
          <CardDash justifyContent="space-between">
            <TableContainer w="100%">
              <Table variant="simple">
                <TableCaption>Lista de residentes</TableCaption>
                {/*cabeça*/}
                <Thead>
                  <Tr>
                    <Th>Nome</Th>
                    <Th>Apartamento</Th>
                    <Th>multiply by</Th>
                    <Th>multiply by</Th>
                  </Tr>
                </Thead>
                {/*cabeça*/}

                {/*corpo*/}
                <Tbody>
                  {residents.map((resident) => (
                    <Tr
                      as={motion.tr}
                      whileHover={{
                        backgroundColor: "#111111",
                        color: "#fafafa",
                        cursor: "pointer",
                      }}
                      transition="ease-in-out"
                    >
                      <Td>{resident.name}</Td>
                      <Td>{resident.apartment}</Td>
                      <Td>{resident.name}</Td>
                      <Td>{resident.name}</Td>
                    </Tr>
                  ))}
                </Tbody>
                {/*corpo*/}
              </Table>
            </TableContainer>
          </CardDash>
          <CardDash>
            <ReactPaginate
              containerClassName={"pagination"}
              activeClassName={"active"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              onPageChange={() => console.log("teste")}
              pageRangeDisplayed={5}
              pageCount={100}
              previousLabel="< previous"
            />
          </CardDash>
        </Stack>
      </Layout>
    </SimpleSidebar>
  );
}
