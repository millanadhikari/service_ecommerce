import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { fetchAllQuotes } from "../../QuotePage/quoteAction";
import PromptLayout from "./Prompt/PromptLayout";
import QuotesTable from "./QuotesTable";

const AllQuotes = ({
  confirmDelete,
  setConfirmDelete,
  selected,
  setSelected,
  search,
  setSearch,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();

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
            placeholder="Search Quotes"
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
          onClick={() => setConfirmDelete(!confirmDelete)}
          bg="blue.700"
          color="white"
          px={6}
          letterSpacing="1px"
          fontSize="13px"
        >
          {selected.length <= 1 ? "Delete quote" : "Delete quotes"}
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
          {selected.length <= 1 ? "Cancel quote" : "Cancel quotes"}
        </Button>
        <Button
          isDisabled={selected.length !== 1}
          _focus={{ outline: "none" }}
          _hover={{ bg: "blue.800" }}
          rounded="full"
          bg="blue.700"
          color="white"
          px={6}
          letterSpacing="1px"
          fontSize="13px"
        >
          Convert to booking
        </Button>
      </Flex>
      <QuotesTable selected={selected} setSelected={setSelected} />
      {/* <PromptLayout isOpen={isOpen} onClose={onClose} /> */}
    </Box>
  );
};

export default AllQuotes;
