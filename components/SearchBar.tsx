import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
} from "@chakra-ui/react";
import { FiPhoneIncoming, FiSearch } from "react-icons/fi";
import AddResidentBtn from "./buttons/AddResidentBtn";

export default function SearchBar() {
  return (
    <Stack direction="row">
      <InputGroup bg="white">
        <InputLeftElement
          pointerEvents="none"
          children={<FiSearch color="gray.300" />}
        />
        <Input type="tel" placeholder="Procurar residente" />
      </InputGroup>

      <Select placeholder="Recentes" w="300px">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>

      <Button colorScheme={"blue"}>Aplicar</Button>

      <AddResidentBtn />
    </Stack>
  );
}
