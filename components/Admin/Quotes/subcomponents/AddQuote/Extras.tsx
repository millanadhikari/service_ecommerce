import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { MdOutlineBalcony } from "react-icons/md";

const Extras = ({ item, display, setDisplay }) => {
  const [quan, setQuan] = useState(0);

  const handleAdd = () => {
    let dewAdd = { ...item, quantity: item.quantity + 1 };
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

  const handleDelete = () => {
    let dewAdd = { ...item, quantity: item.quantity - 1 };
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
    item.quantity > 0 && setDisplay({ ...display, products: replaced });
  };

  return (
    <Box>
      {item.title === "Bedrooms" || item.title !== "Bathrooms" && (
        <Flex
          alignItems="center"
          justifyContent="space-between"
          my={2}
          pr={10}
          mt={4}
        >
          <Flex alignItems="center">
            <Box>
              <Flex
                alignItems="center"
                gap={2}
                fontSize="14"
                color="gray.700"
                fontWeight="semibold"
              >
                {item.title}
                <Box fontSize="11px" color="gray.400">
                  <BsInfoCircleFill />
                </Box>
              </Flex>
              {/* <Text>$99</Text> */}
            </Box>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
              cursor={"pointer"}
              onClick={handleDelete}
            >
              <GrFormSubtract />
            </Text>
            <Text color="blue.700" fontWeight="semibold">
              {item.quantity}
            </Text>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              cursor={"pointer"}
              px={2.5}
              py={2.5}
              rounded="md"
              onClick={handleAdd}
            >
              <GrFormAdd />
            </Text>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default Extras;
