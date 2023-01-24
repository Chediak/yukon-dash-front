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
    { title: "Início", link: "/employees" },
    { title: "Funcionários", link: "/employees" },
  ];
  
  const employees = [
    { name: "Edvaldo Siqueira", cpf: "12342432", salario: "1500,00", carga: "40" },
    { name: "Alex Alves", cpf: "31242424", salario: "1500,00", carga: "40" },
    { name: "Allison Da Graça", cpf: "3224242424", salario: "1500,00", carga: "40" },
    { name: "Walmir Santos", cpf: "232424242", salario: "1500,00", carga: "40" },

  ];
  
  export default function Employee() {
    return (
      <SimpleSidebar>
        <Layout>
          <Stack>
            {/*breadcrumb*/}
            <BreadCrumb items={links} />
            {/*breadcrumb*/}
  
            <CardDash justifyContent="start">
              <Text fontSize="xl">Funcionários</Text>
            </CardDash>
  
            <CardDash justifyContent="start">
              <Stack direction={"row"}>
                <Box>
                  <SearchBar />
                </Box>
                <Box>
                  <Select placeholder="Filtrar por" bg="white">
                    <option value="option1">Nome</option>
                    <option value="option2">CPF</option>
                    <option value="option1">Salário</option>
                    <option value="option1">Carga Horária</option>
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
                  <TableCaption>Lista de funcionários</TableCaption>
                  {/*cabeça*/}
                  <Thead>
                    <Tr>
                      <Th>Nome</Th>
                      <Th>CPF</Th>
                      <Th>Salário</Th>
                      <Th>Carga Horária (Horas)</Th>
                    </Tr>
                  </Thead>
                  {/*cabeça*/}
  
                  {/*corpo*/}
                  <Tbody>
                    {employees.map((employees) => (
                      // eslint-disable-next-line react/jsx-key
                      <Tr
                        as={motion.tr}
                        whileHover={{
                          backgroundColor: "#111111",
                          color: "#7DFDFE",
                          cursor: "block",
                        }}
                        transition="ease-in-out"
                      >
                        <Td>{employees.name}</Td>
                        <Td>{employees.cpf}</Td>
                        <Td>{employees.salario}</Td>
                        <Td>{employees.carga}</Td>
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
  