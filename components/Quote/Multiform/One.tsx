import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { FaBed, FaToilet } from "react-icons/fa";
import { GiDogHouse, GiHouseKeys } from "react-icons/gi";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";

interface Props {
  display: any;
  setDisplay: any;
}

const One = ({ display, setDisplay }: Props) => {
  const totalBedrooms = display.products.find(
    (item) => item.title == "Bedrooms"
  );
  const totalBathrooms = display.products.find(
    (item) => item.title == "Bathrooms"
  );
  const handleAdd = (maya) => {
    let sewAdd = display?.products.find((item) => item.title === maya);
    let dewAdd = { ...sewAdd, quantity: sewAdd.quantity + 1 };
    let replaced = [
      dewAdd,
      ...display?.products.filter((i) => i._id !== dewAdd._id),
    ];
    replaced.sort(function (a, b) {
      if (a._id !== b._id) {
        return a._id - b._id;
      }
      if (a.title === b.title) {
        return 0;
      }
      return a.title > b.title ? 1 : -1;
    });
    setDisplay({ ...display, products: replaced });
  };

  const handleDelete = (maya) => {
    let sewAdd = display?.products.find((item) => item.title === maya);
    let dewAdd = { ...sewAdd, quantity: sewAdd.quantity - 1 };
    let replaced = [
      dewAdd,
      ...display?.products.filter((i) => i._id !== dewAdd._id),
    ];
    replaced.sort(function (a, b) {
      if (a._id !== b._id) {
        return a._id - b._id;
      }
      if (a.title === b.title) {
        return 0;
      }
      return a.title > b.title ? 1 : -1;
    });
    setDisplay({ ...display, products: replaced });
    console.log(display);
  };
  return (
    <Box color="gray.500">
      <Heading fontSize="16" fontWeight="semibold">
        Select Service(s)
      </Heading>
      <Flex
        gap={8}
        color="gray.400"
        alignItems="center"
        my={4}
        justifyContent="center"
      >
        <Flex
          gap={2}
          alignItems="center"
          flexDirection="column"
          border="1px solid gray"
          shadow={display.service === "end of lease" ? "2xl" : "none"}
          borderColor={
            display.service === "end of lease" ? "blue.700" : "gray.200"
          }
          color={display.service === "end of lease" ? "blue.700" : "gray.200"}
          onClick={() =>
            setDisplay(
              { ...display, service: "end of lease" },
              console.log(display)
            )
          }
          textAlign="center"
          px={3}
          py={4}
          w={130}
        >
          <Box fontSize="50">
            <GiHouseKeys />
          </Box>
          <Text
            fontSize="13"
            fontWeight={
              display.service === "end of lease" ? "bold" : "semibold"
            }
            color={display.service === "end of lease" ? "blue.600" : "gray.200"}
          >
            End of Lease Cleaning
          </Text>
        </Flex>
        <Flex
          gap={2}
          alignItems="center"
          flexDirection="column"
          border="1px solid gray"
          shadow={display.service === "general clean" ? "2xl" : "none"}
          borderColor={
            display.service === "general clean" ? "blue.700" : "gray.200"
          }
          color={display.service === "general clean" ? "blue.700" : "gray.200"}
          onClick={() => setDisplay({ ...display, service: "general clean" })}
          textAlign="center"
          px={3}
          py={4}
          w={130}
        >
          <Box fontSize="50">
            <GiDogHouse />
          </Box>
          <Text fontSize="13" fontWeight="semibold">
            General House Cleaning
          </Text>
        </Flex>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" my={6} mt={10}>
        <Flex alignItems="center" gap={4}>
          <Box fontSize="24" color="blue.700">
            <FaBed />
          </Box>
          <Heading fontSize="16" color="blue.700" fontWeight="semibold">
            Bedrooms
          </Heading>
        </Flex>
        <Flex alignItems="center" gap={3}>
          <Text
            onClick={() =>
              totalBedrooms?.quantity > 0 && handleDelete("Bedrooms")
            }
            fontSize={14}
            backgroundColor="gray.100"
            px={2.5}
            py={2.5}
            rounded="md"
          >
            <GrFormSubtract />
          </Text>
          <Text color="blue.700" fontWeight="semibold">
            {totalBedrooms?.quantity}
          </Text>
          <Text
            // onClick={() => setBedroom(bedroom + 1)}
            onClick={() => handleAdd("Bedrooms")}
            fontSize={14}
            backgroundColor="gray.100"
            px={2.5}
            py={2.5}
            rounded="md"
          >
            <GrFormAdd />
          </Text>
        </Flex>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" my={6}>
        <Flex alignItems="center" gap={4}>
          <Box fontSize="24" color="blue.700">
            <FaToilet />
          </Box>
          <Heading fontSize="16" color="blue.700" fontWeight="semibold">
            Toilets
          </Heading>
        </Flex>
        <Flex alignItems="center" gap={3}>
          <Text
            onClick={() =>
              totalBathrooms.quantity > 1 && handleDelete("Bathrooms")
            }
            fontSize={14}
            backgroundColor="gray.100"
            px={2.5}
            py={2.5}
            rounded="md"
          >
            <GrFormSubtract />
          </Text>
          <Text color="blue.700" fontWeight="semibold">
            {totalBathrooms?.quantity}
          </Text>
          <Text
            onClick={() => handleAdd("Bathrooms")}
            fontSize={14}
            backgroundColor="gray.100"
            px={2.5}
            py={2.5}
            rounded="md"
          >
            <GrFormAdd />
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default One;
