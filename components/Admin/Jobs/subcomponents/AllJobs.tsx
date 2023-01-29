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
import JobsTable from "./JobsTable";
import Calendar from "react-calendar";

const AllJobs = ({
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
            placeholder="Search Jobs"
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
      <Flex alignItems="center" gap={3} my={6}>
        <Text fontSize="15px" fontWeight="semibold">
          Sort By
        </Text>
        <Select w={44} fontSize="14px" color="gray.500">
          <option value="option1">Service Date Z-{">"} A</option>
          <option value="option2">Service Date A-{">"} Z</option>
          <option value="option2">Created Date Z-{">"} A</option>
          <option value="option2">Created Date A-{">"} Z</option>
          <option value="option2">Status Z-{">"} A</option>
          <option value="option2">Status A-{">"} Z</option>
        </Select>
        <Flex alignItems="center">
          <Menu>
            <MenuButton
              as={Button}
              fontSize="13"
              color="gray.700"
              fontWeight="normal"
              bg="white"
              rightIcon={<ChevronDownIcon />}
            >
              {date[0] ? (
                <Box>{date[0].toString().split(0, 1)} - {date[1].toString().split(0, 1)}</Box>
              ) : (
                "Select Dates"
              )}
            </MenuButton>
            <MenuList>
              <Calendar
                onChange={onDateChange}
                value={date}
                showNeighboringMonth={false}
                locale={"en-US"}
                selectRange={true}
              />
            </MenuList>
          </Menu>
          <Button
            bg="blue.600"
            color="white"
            rounded="full"
            fontSize="14px"
            ml="10"
            onClick={onDateFilter}
            letterSpacing="1px"
            _hover={{ bg: "blue.400" }}
            px={10}
          >
            Filter
          </Button>
          <Text
            ml={8}
            color="blue.800"
            cursor="pointer"
            _hover={{ color: "blue.500" }}
            textDecor="underline"
            onClick={() => setDate(new Date())}
          >
            Reset
          </Text>
        </Flex>
      </Flex>
      <Flex gap={4} my={10}>
        <Button
          isDisabled={selected.length < 1}
          _focus={{ outline: "none" }}
          _hover={{ bg: "blue.800", color: "white" }}
          rounded="md"
          bg="white"
          color="blue.700"
          border="1px solid gray"
          borderColor="gray.300"
          px={8}
          letterSpacing="1px"
          fontSize="13px"
        >
          {selected.length ? selected.length : 0} Selected
        </Button>
        <Button
          isDisabled={selected.length < 1}
          _focus={{ outline: "none" }}
          _hover={{ bg: "blue.800" }}
          rounded="full"
          bg="blue.700"
          onClick={() => setConfirmDelete(!confirmDelete)}
          color="white"
          px={6}
          letterSpacing="1px"
          fontSize="13px"
        >
          {selected.length <= 1 ? "Delete job" : "Delete jobs"}
        </Button>
        <Button
          isDisabled={selected.length < 1}
          _focus={{ outline: "none" }}
          _hover={{ bg: "blue.800" }}
          rounded="full"
          bg="blue.700"
          color="white"
          px={6}
          letterSpacing="1px"
          fontSize="13px"
        >
          Cancel Jobs
        </Button>
        <Button
          isDisabled={selected.length < 1}
          _focus={{ outline: "none" }}
          _hover={{ bg: "blue.800" }}
          rounded="full"
          bg="blue.700"
          color="white"
          px={6}
          letterSpacing="1px"
          fontSize="13px"
        >
          Charge
        </Button>
      </Flex>
      <JobsTable selected={selected} setSelected={setSelected} />
    </Box>
  );
};

export default AllJobs;
