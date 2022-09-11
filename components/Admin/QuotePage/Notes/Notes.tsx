import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";

const Notes = ({ notes, user}) => {

  return (
    <Flex justifyContent="space-between" mb={4}>
      <Flex gap={4}>
        <Flex
          alignItems="center"
          justifyContent="center"
          color="white"
          bg="blue.400"
          rounded="full"
          fontSize="16"
          fontWeight="semibold"
          minW="10"
          h="10"
          textAlign="center"
        >
          {notes?.name?.charAt(0)}
        </Flex>
        <Box>
          <Flex gap={3} alignItems="center">
            <Text fontWeight="semibold" fontSize="14">
              {notes?.name}
            </Text>
            <Text color="gray.500" fontSize="12">
              {" "}
              {/* 28 Sept 2020, 14:42{" "} */}
              {/* {removeLastWord(notes?.
              createdAt)} */}
              {notes?.createdAt?.split("", 25)}

            </Text>
          </Flex>
          <Text my={2}>{notes.title}</Text>
        </Box>
      </Flex>
     {user.user._id === notes.clientId &&  <Box cursor="pointer" fontSize="16">
        <FiMoreHorizontal />
      </Box>}
    </Flex>

  );
};

export default Notes;
