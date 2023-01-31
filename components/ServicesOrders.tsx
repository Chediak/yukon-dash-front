import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const options = [
  { id: 1, desc: "1 lorem ipsum" },
  { id: 2, desc: "Lorem, ipsum dolor." },
  { id: 3, desc: "Monthly Updates" },
];
interface PackageTierProps {
  title: string;
  options: Array<{ id: number; desc: string }>;
  typePlan: string;
  checked?: boolean;
}
const PackageTier = ({
  title,
  options,
  typePlan,
  checked = false,
}: PackageTierProps) => {
  const colorTextLight = checked ? "white" : "white.600";
  const bgColorLight = checked ? "blue.400" : "blue.300";

  const colorTextDark = checked ? "white" : "white.500";
  const bgColorDark = checked ? "blue.400" : "blue.300";

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: "flex-start",
        md: "space-around",
      }}
      direction={{
        base: "column",
        md: "row",
      }}
      alignItems={{ md: "center" }}
    >
      <Heading size={"md"}>{title}</Heading>
      <List spacing={3} textAlign="start">
        {options.map((desc, id) => (
          <ListItem key={desc.id}>
            <ListIcon as={FaCheckCircle} color="blue.400" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={"xl"}>{typePlan}</Heading>
      <Stack>
        <Button
          size="md"
          color={useColorModeValue(colorTextLight, colorTextDark)}
          bgColor={useColorModeValue(bgColorLight, bgColorDark)}
        >
         Ver Ordem
        </Button>
      </Stack>
    </Stack>
  );
};
const ThreeTierPricingHorizontal = () => {
  return (
    <Box py={6} px={5} min={"100vh"}>
      <Stack spacing={4} width={"100%"} direction={"column"}>
        <Stack
          p={5}
          alignItems={"center"}
          justifyContent={{
            base: "flex-start",
            md: "space-around",
          }}
          direction={{
            base: "column",
            md: "row",
          }}
        >
          <Stack
            width={{
              base: "100%",
              md: "40%",
            }}
            textAlign={"center"}
          >
            <Heading size={"lg"}>
              Ordens de Serviço <Text color="blue.400">Condomínio</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: "100%",
              md: "60%",
            }}
          >
            <Text textAlign={"center"}>
              Existem os seguintes tipos de ordem de seviço: Ordem de serviço de
              manutenção; Ordem de Inspeção de Segurança; Ordem de Inspeção de
              Propriedade; Ordem de Instalação; Ordem de serviço de evento; e
              Pedido de serviço.
            </Text>
          </Stack>
        </Stack>
        <Divider />
        <PackageTier title={"Infiltração"} typePlan="R$2.500,00" options={options} />
        <Divider />
        <PackageTier
          title={"Lâmpadas"}
          checked={true}
          typePlan="R$320.00"
          options={options}
        />
        <Divider />
        <PackageTier title={"Mangueira"} typePlan="R$75.00" options={options} />
      </Stack>
    </Box>
  );
};

export default ThreeTierPricingHorizontal;
