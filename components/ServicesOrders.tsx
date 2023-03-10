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
  const bgColorLight = checked ? "#7DFDFE" : "#7DFDFE";

  const colorTextDark = checked ? "white" : "white.500";
  const bgColorDark = checked ? "#7DFDFE" : "#7DFDFE";

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
            <ListIcon as={FaCheckCircle} color="#7DFDFE" />
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
    <Box py={6} px={5}>
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
              Ordens de Servi??o <Text color="#7DFDFE">Condom??nio</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: "100%",
              md: "60%",
            }}
          >
            <Text textAlign={"center"}>
              Existem os seguintes tipos de ordem de sevi??o: Ordem de servi??o de
              manuten????o; Ordem de Inspe????o de Seguran??a; Ordem de Inspe????o de
              Propriedade; Ordem de Instala????o; Ordem de servi??o de evento; e
              Pedido de servi??o.
            </Text>
          </Stack>
        </Stack>
        <Divider />
        <PackageTier title={"Infiltra????o"} typePlan="R$2.500,00" options={options} />
        <Divider />
        <PackageTier
          title={"L??mpadas"}
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
