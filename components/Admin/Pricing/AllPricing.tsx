import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import PriceTable from "./PriceTable";

const AllPricing = ({ product, onOpen, isOpen, onClose }) => {
  return (
    <Box>
      <Flex alignItems="center" gap={2} my={6}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" ml={3}>
            {" "}
            <SearchIcon color="purple.300" />
          </InputLeftElement>
          <Input
            pl="55px"
            rounded="full"
            type="tel"
            placeholder="Search Products"
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
            _placeholder={{
              color: "gray.300",
              fontWeight: "semibold",
              fontSize: "13px",
            }}
          />
        </InputGroup>
        <Button
          bg="blue.600"
          color="white"
          rounded="full"
          fontSize="14px"
          letterSpacing="1px"
          _hover={{ bg: "blue.400" }}
          px={10}
        >
          Search
        </Button>
      </Flex>
      <PriceTable
        product={product}
        onOpen={onOpen}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
};

export default AllPricing;
