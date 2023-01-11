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
  { name: "Teste", apartment: "232" },
  { name: "Teste", apartment: "232" },
  { name: "Teste", apartment: "232" },
  { name: "Teste", apartment: "232" },
  { name: "Teste", apartment: "232" },
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
                    <Th isNumeric>multiply by</Th>
                    <Th isNumeric>multiply by</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Thead>
                {/*cabeça*/}

                {/*corpo*/}
                <Tbody>
                  {residents.map((resident) => (
                    <Tr>
                      <Td>{resident.name}</Td>
                      <Td>{resident.apartment}</Td>
                    </Tr>
                  ))}
                </Tbody>
                {/*corpo*/}
                <Tfoot>
                  <Tr>
                    <Th>Nome</Th>
                    <Th>Apartamento</Th>
                    <Th isNumeric>multiply by</Th>
                    <Th isNumeric>multiply by</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </CardDash>
        </Stack>
      </Layout>
    </SimpleSidebar>
  );
}
