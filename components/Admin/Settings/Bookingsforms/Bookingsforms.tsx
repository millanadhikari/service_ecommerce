import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { GoChecklist } from "react-icons/go";
import JobChecklist from "./Checklist/JobChecklist";

const Bookingsforms = () => {
  const [objectState, setObjectState] = useState({
    checklist: false,
    quotePage: false,
  });
  const isAnyTrue = Object.values(objectState).some((value) => value === true);

  const handleChange = (property) => {
    setObjectState({
      ...objectState,
      [property]: !objectState[property],
    });
  };
  return (
    <Box py={4} px={3}>
      <Box>
        {!isAnyTrue && (
          <Heading fontSize="16" color="gray.500">
            Bookings forms, Customer portal & Checklist
          </Heading>
        )}
        {objectState.checklist ? (
          <Box onClick={() => handleChange("checklist")}>
            {" "}
            <JobChecklist handleChange={handleChange} />{" "}
          </Box>
        ) : (
          <Flex
            gap={6}
            color="gray.600"
            w="80"
            my={8}
            rounded="sm"
            border="1px solid gray"
            borderColor="gray.300"
            onClick={() => handleChange("checklist")}
            py={6}
            cursor="pointer"
            _hover={{ bg: "gray.200" }}
            px={6}
          >
            <Flex
              alignItems="center"
              justifyContent="center"
              fontSize="30"
              color="blue.700"
              bg="blue.50"
              px={3}
              rounded="lg"
              h="50px"
            >
              <GoChecklist />
            </Flex>
            <Box>
              <Text fontWeight="semibold">Checklist</Text>
              <Text fontSize="14" pt={2} lineHeight="1.7">
                Set a default checklist to show up for every job. You can
                edit/change the checkklist on each individual job.
              </Text>
            </Box>
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default Bookingsforms;
