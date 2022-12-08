import {
  Box,
  Checkbox,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  toast,
  Tr,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import DrawerLayout from "../UI/DrawerLayout";
import ProductInfo from "./ProductInfo";

const PriceTable = ({ product, onOpen, isOpen, onClose }) => {
  const [isLoading, setLoading] = useState<Boolean>(false);
  const ltf = React.useRef();
  const [laya, setLaya] = useState([]);
  const toast = useToast();

  const onSubmit = async () => {
    setLoading(true);

    const newProduct = {
      title: laya[0].title,
      price: laya[0].price,
      status: laya[0].status,
    };
    const result = await axios.put(
      `https://wedo-backend.herokuapp.com/v1/product/${laya[0]._id}`,
      newProduct
    );
    console.log("hey", result.data.status);
    if (result.data.status === "success") {
      toast({
        position: "bottom-left",
        render: () => (
          <Box w={"250px"} bg="white" rounded="xl" mt={4}>
            <Text
              color="white"
              py={2}
              fontWeight="semibold"
              roundedTop={"xl"}
              bg="blue.700"
              textAlign="center"
            >
              Alert
            </Text>
            <Text fontSize="13px" py={4} px={4}>
              Successfully edited product.
            </Text>
          </Box>
        ),
        duration: 6000,
        isClosable: true,
      });

      setLoading(false);

      onClose();
      location.reload();
    }
  };
  const onLaya = ({ item }) => {
    console.log(item);
    onOpen();
    setLaya([item]);
  };

  useEffect(() => {
    console.log("adam", laya);
  }, [laya]);

  return (
    <TableContainer
      sx={{
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Table variant="simple">
        <Thead>
          <Tr color="gray.900">
            <Th color="white">lkjdf</Th>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Status</Th>
            <Th>Type</Th>
            <Th>Price</Th>
          </Tr>
        </Thead>
        {product &&
          product.map((item) => (
            <Tbody key={item._id} onClick={() => onLaya({ item })}>
              <Tr fontSize="14px" cursor="pointer" _hover={{ bg: "gray.100" }}>
                <Td>
                  <Text
                    border="2px solid gray"
                    fontWeight="semibold"
                    rounded="full"
                    textAlign="center"
                    w="12"
                    p={3}
                    borderColor="blue.600"
                  >
                    BP
                  </Text>
                </Td>
                <Td fontWeight="semibold" fontSize="14px" color="blue.600">
                  {item.title}
                </Td>
                <Td fontSize="14px">Base Price for all {item.title}</Td>
                <Td fontSize="14px">
                  <Text
                    border="1px solid gray"
                    textAlign="center"
                    px={2}
                    fontSize="12px"
                    fontWeight="semibold"
                    py={1}
                    rounded="full"
                    borderColor={
                      item?.status === "Active" ? "blue.600" : "red.500"
                    }
                    color={item?.status === "Active" ? "blue.600" : "red.500"}
                  >
                    {item?.status}
                  </Text>
                </Td>
                <Td fontSize="14px" color="blue.700">Standard</Td>
                <Td fontSize="14px">
                  <Flex alignItems="center" gap={4}>
                    <Text>$ {item.price}</Text>
                    <AiOutlineQuestionCircle fontSize="18px" />
                  </Flex>
                </Td>
              </Tr>
            </Tbody>
          ))}
        <DrawerLayout
          isOpen={isOpen}
          onClose={onClose}
          ref={ltf}
          title="Manage Product"
          onSubmit={onSubmit}
          isLoading={isLoading}
          setLoading={setLoading}
        >
          {" "}
          <ProductInfo item={laya} setLaya={setLaya} />
        </DrawerLayout>
      </Table>
    </TableContainer>
  );
};

export default PriceTable;
