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

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const links = [
  { title: "Início", link: "/financialdemo" },
  { title: "Demonstrações Financeiras", link: "/financialdemo" },
];

export default function financialdemo() {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tootip: {
      enabled: false,
    },
    xasis: {
      type: "datetime",
      axisBorder: {
        color: theme.colors.gray[100],
      },
      axisTicks: {
        color: theme.colors.gray[100],
      },
      categories: [
        "2022-05-25T11:15:56.000Z",
        "2022-05-26T11:15:56.000Z",
        "2022-05-27T22:25:56.000Z",
        "2022-05-28T13:04:56.000Z",
        "2022-05-29T11:15:56.000Z",
        "2022-05-30T01:15:56.000Z",
        "2022-05-31T11:15:56.000Z",
      ],
    },
    fill: {
      opacity: 0.3,
      type: "gradient",
      gradient: {
        shade: "dark",
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
  };

  const series = [{ name: "series1", data: [101, 120, 10, 208, 154, 204] }];

  return (
    <SimpleSidebar>
      <Layout>
        <BreadCrumb items={links} />
        <Box>
          <CardDash>
            <Stack direction={"row"}>
              <SimpleGrid columns={1}>
                <Box
                  p={["6", "8"]}
                  bg="transparent"
                  borderRadius={8}
                  pb="4"
                  alignItems={"flex-end"}
                >
                  <Text fontSize="lg" mb="4">
                    Gastos Semanais
                  </Text>
                  <Chart
                    type="area"
                    width="200%"
                    height="160"
                    options={options}
                    series={series}
                  />
                </Box>
              </SimpleGrid>
            </Stack>
          </CardDash>
        </Box>
      </Layout>
    </SimpleSidebar>
  );
}
