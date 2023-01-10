import { useState } from "react";
import { ChevronDownIcon, PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import DatePicker from "../../QuotePage/SubComp/DatePicker";
import Calendar from "react-calendar";
import TechniciansTable from "./TechniciansTable";

const AllTechnicians = ({
  confirmDelete,
  setConfirmDelete,
  confirmBook,
  setConfirmBook,
  onDateFilter,
  selected,
  setSelected,
  search,
  setSearch,
  date,
  setDate,
  onDateChange,
}) => {
  return (
    <Box>
      <Flex alignItems="center" gap={2} my={3}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" ml={3}>
            {" "}
            <SearchIcon color="puprle.300" />
          </InputLeftElement>
          <Input
            pl="55px"
            rounded="full"
            type="tel"
            placeholder="Search Technicians"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
          onClick={onDateFilter}
        >
          Search
        </Button>
      </Flex>
   
      <TechniciansTable selected={selected} setSelected={setSelected} />
    </Box>
  );
};

export default AllTechnicians;
