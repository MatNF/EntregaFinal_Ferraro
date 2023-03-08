import { SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

const SeachBar = () => {
  return (
    <>
      <InputGroup w="20rem" h="auto">
        <InputRightElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          placeholder="Buscar Producto..."
          borderRadius="full"
          bg="#f5f7f9"
          variant="filled"
          w="20rem"
          _focus={{ bg: "gray.200" }}
        />
      </InputGroup>
    </>
  );
};

export default SeachBar;
