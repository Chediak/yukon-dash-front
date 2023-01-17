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

          <CardDash justifyContent="start">
            <Text fontSize="xl">Residentes</Text>
          </CardDash>

          <CardDash justifyContent="start">
            <Stack direction={"row"}>
              <Box>
                <SearchBar />
              </Box>
              <Box>
                <Select placeholder="Filtrar por" bg="white">
                  <option value="option1">Nome</option>
                  <option value="option2">Apartamento</option>
                </Select>
              </Box>
              <Box>
                <Select placeholder="Tipo" bg="white">
                  <option value="option1">Ascendente</option>
                  <option value="option2">Descendente</option>
                </Select>
              </Box>
            </Stack>
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
                    // eslint-disable-next-line react/jsx-key
                    <Tr
                      as={motion.tr}
                      whileHover={{
                        backgroundColor: "#111111",
                        color: "#fafafa",
                        cursor: "block",
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
