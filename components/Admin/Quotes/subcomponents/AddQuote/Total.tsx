import { Box, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

const data = [];
const Total = ({ display, setDisplay }) => {

  const handleChange = (e, index) => {
    const newValue = e.target.value;

    setDisplay(prevState => {
      let totals = [...prevState.totals]
      totals[index].amount = newValue
      return {totals}
    })
  }
  return (
    <Box mx={2} borderTop="1px solid gray" borderColor="gray.500" pt={4}>
      <Text fontWeight="semibold"> Totals</Text>
      <Text my={2}> Job details</Text>
      {display?.totals?.map((item, index) => (
        <Flex
          justifyContent="space-between"
          my={3}
          borderBottom="1px solid gray"
          borderColor="gray.300"
          key={item?._id}
          pb={4}
        >
          <Text fontWeight="semibold" color="blue.600">
           {item.title}
          </Text>
          <Input
            border="1px solid gray"
            w={20}
            
            borderColor="gray.300"
            fontSize="14"
            value={item?.amount}
            name={item.title}
            onChange={(e) => handleChange(e, index)}
          
            py={1}
            px={4}
          >
            
          </Input>
        </Flex>
      ))}

      {/* <Flex
        justifyContent="space-between"
        alignItems="center"
        my={3}
        borderBottom="1px solid gray"
        borderColor="gray.300"
        pb={4}
      >
        <Box fontWeight="semibold" color="blue.600">
          <Text>1 Bedroom</Text>
          <Text>1 Bathroom</Text>
        </Box>
        <Text
          border="1px solid gray"
          px={16}
          borderColor="gray.300"
          fontSize="14"
          py={1}
        >
          
          $100.00
        </Text>
      </Flex>
      <Flex
        justifyContent="space-between"
        my={3}
        borderBottom="1px solid gray"
        borderColor="gray.300"
        pb={4}
      >
        <Text fontWeight="semibold" color="blue.600">
          Extras
        </Text>
        <Text
          border="1px solid gray"
          px={16}
          borderColor="gray.300"
          fontSize="14"
          py={1}
        >
          $0.00
        </Text>
      </Flex>
      <Flex justifyContent="space-between" my={3} pb={4}>
        <Text fontWeight="semibold" color="gray.600">
          Sub Total
        </Text>
        <Text px={16} fontSize="14" fontWeight="semibold" py={1}>
          $100.00
        </Text>
      </Flex>
      <Flex justifyContent="space-between" my={3} pb={4}>
        <Text fontWeight="semibold" color="gray.600">
          Discounts
        </Text>
        <Text
          border="1px solid gray"
          px={16}
          borderColor="gray.300"
          fontSize="14"
          color="red.600"
          py={1}
        >
          $0.00
        </Text>{" "}
      </Flex>
      <Flex
        justifyContent="space-between"
        my={3}
        borderBottom="1px solid gray"
        borderColor="gray.300"
        pb={4}
      >
        <Text fontWeight="semibold" color="blue.600">
          Tip
        </Text>
        <Text
          border="1px solid gray"
          px={16}
          borderColor="gray.300"
          fontSize="14"
          bg="gray.200"
          py={1}
        >
          $0.00
        </Text>
      </Flex>
      <Flex
        justifyContent="space-between"
        my={3}
        borderBottom="1px solid gray"
        borderColor="gray.300"
        pb={4}
      >
        <Text fontWeight="semibold" color="gray.700">
          To be paid by customer
        </Text>
        <Text
          border="1px solid gray"
          px={16}
          borderColor="gray.300"
          fontSize="14"
          py={1}
        >
          $0.00
        </Text>
      </Flex> */}
    </Box>
  );
};

export default Total;
