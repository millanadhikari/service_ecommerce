import { ChatIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Input, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdGroupWork } from "react-icons/md";
import StandardInput from "../Quotes/subcomponents/AddQuote/StandardInput";

const data = [
  { id: 1, title: MdGroupWork },
  { id: 2, title: ChatIcon },
];
const ProductInfo = ({ item, setLaya }) => {
  const handleChange = () => {};
  const [icon, setIcon] = useState([]);
  return (
    <Box>
      <Text fontWeight="semibold">Product Info</Text>
      <Box my={3}>
        <Text>Title</Text>
        <Input
          size="sm"
          borderColor="gray.400"
          rounded="full"
          fontSize="13px"
          fontWeight="semibold"
          p={4}
          my={2}
          bg="gray.200"
          _placeholder={{ fontSize: "12px", px: "2", color: "gray.400" }}
          onChange={(e) => setLaya([{ ...item[0], title: e.target.value }])}
          value={item[0]?.title}
          name="title"
        />
      </Box>
      <Box my={3}>
        <Flex alignItems="center" gap={2}>
          <Text>Price</Text>
          <Box color="gray.500" cursor="pointer" _hover={{ color: "blue.600" }}>
            <AiOutlineQuestionCircle />
          </Box>
        </Flex>
        <Input
          size="sm"
          borderColor="gray.400"
          rounded="full"
          fontSize="13px"
          fontWeight="semibold"
          p={4}
          my={2}
          _placeholder={{ fontSize: "12px", px: "2", color: "gray.400" }}
          onChange={(e) => setLaya([{ ...item[0], price: e.target.value }])}
          value={item[0]?.price}
        />
      </Box>
      <Box my={3}>
        <Flex alignItems="center" gap={2}>
          <Text>Status</Text>
          <Box color="gray.500" cursor="pointer" _hover={{ color: "blue.600" }}>
            <AiOutlineQuestionCircle />
          </Box>
        </Flex>
        <Select
          my={2}
          rounded="full"
          onChange={(e) => setLaya([{ ...item[0], status: e.target.value }])}
          value={item[0]?.status}
          name="state"
          size="sm"
          fontSize="12px"
          cursor="pointer"
          borderColor="gray.400"
          color="gray.400"
        >
          {" "}
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </Select>
      </Box>
      {/* <Box my={3}>
        <Flex alignItems="center" gap={2}>
          <Text>Icon 1</Text>
          <Box color="gray.500" cursor="pointer" _hover={{ color: "blue.600" }}>
            <AiOutlineQuestionCircle />
          </Box>
        </Flex>
        <Box
          border="1px solid gray"
          p={5}
          rounded="full"
          borderColor="gray.400"
          my={2}
          mx={10}
        >
          {data.map((item) => (
            <Icon as={item?.title} w={8} h={8} color="blue.600" onClick={()=> setIcon(item)} />
          ))}
        </Box>
      </Box> */}
    </Box>
  );
};

export default ProductInfo;
