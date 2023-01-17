import {
  Box,
  Button,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Stack,
} from "@chakra-ui/react";
import { FiPhoneIncoming, FiSearch } from "react-icons/fi";
import AddResidentBtn from "./buttons/AddResidentBtn";

export default function SearchBar() {
  return (
    <>
      <InputGroup w="100%" m="auto">
        <InputLeftElement
          pointerEvents="none"
          // eslint-disable-next-line react/no-children-prop
          children={<FiSearch color="gray.300" />}
        />
        <Input
          bg="white"
          borderRadius={"20px"}
          type="tel"
          placeholder="Procurar..."
        />
        <InputRightElement
          position={"relative"} 
          children={
            <IconButton
              aria-label="Search"
              icon={<FiSearch color="gray.300" />}
              border="1px solid #1111112e"
            />
          }
        />
      </InputGroup>

      {/* <Select placeholder="Recentes" w="300px">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select> */}

      {/* <Button colorScheme={"blue"}>Aplicar</Button> */}

      {/* <AddResidentBtn /> */}
    </>
  );
}
