import { Box, Button, Input, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAppSelector } from "../app/hooks";

const ProfileInfo = () => {
  const user = useAppSelector((state) => state.user.user);
  const [data, setData] = useState(user)


  return (
    <Box px={5} my={5}>
      <Text mb={5} fontWeight="semibold" fontSize="16" color="blue.700">
        Profile Info{" "}
      </Text>
      <Box>
        <Box bg="white" px={5} pt={3} shadow="md">
          <Text fontWeight="semibold" fontSize="14" color="gray.500">
            First name
          </Text>
          <Input my={2} bg="white" value={data.firstName} onChange={(e) => setData({...data, firstName:e.target.value})} size="sm" rounded="full" />
        </Box>
        <Box bg="white" px={5} pt={3} shadow="md">
          <Text fontWeight="semibold" fontSize="14" color="gray.500">
            Last name
          </Text>
          <Input my={2}  value={data.lastName} onChange={(e) => setData({...data, lastName:e.target.value})} bg="white" size="sm" rounded="full" />
        </Box>
        <Box bg="white" px={5} pt={3} shadow="md">
          <Text fontWeight="semibold" fontSize="14" color="gray.500">
            Phone number
          </Text>
          <Input
            my={2}
            value={data.phone} onChange={(e) => setData({...data, phone:e.target.value})}
            bg="white"
            size="sm"
            rounded="full"
          />
        </Box>
        <Box bg="white" px={5} pt={3} shadow="md">
          <Text fontWeight="semibold" fontSize="14" color="gray.500">
            Email
          </Text>
          <Input
            my={2}
            bg="white"
            size="sm"
            value={data.email} onChange={(e) => setData({...data, email:e.target.value})}
            rounded="full"
          />
        </Box>
        <Box bg="white" px={5} pt={3} shadow="md">
          <Text fontWeight="semibold" fontSize="14" color="gray.500">
            Username
          </Text>
          <Input my={2} bg="white" size="sm" rounded="full" />
        </Box>
        <Box bg="white" px={5} pt={3} shadow="md">
          <Text fontWeight="semibold" fontSize="14" color="gray.500">
            Password
          </Text>
          <Input my={2} bg="white" size="sm" rounded="full" />
        </Box>
        <Box bg="white" px={5} pt={3} shadow="md">
          <Text fontWeight="semibold" fontSize="14" color="gray.500">
            Password confirmation
          </Text>
          <Input my={2} bg="white" size="sm" rounded="full" />
        </Box>
        <Box bg="white" px={5} pt={3} shadow="md">
          <Text fontWeight="semibold" fontSize="14" color="gray.500">
            Address
          </Text>
          <Input my={2} bg="white" size="sm" rounded="full" />
        </Box>
        <Box bg="white" px={5} pt={3} shadow="md">
          <Text fontWeight="semibold" fontSize="14" color="gray.500">
            State
          </Text>
          <Select
            rounded="full"
            //   onChange={handleChange}
            //   value={display.state}
            name="state"
            size="sm"
            placeholder="Select State"
            fontSize="12px"
            cursor="pointer"
            borderColor="gray.400"
            px="2"
            mt={2}
            color="gray.400"
          >
            {" "}
            <option value="New South Wales">New South Wales</option>
            <option value="Queensland">Queensland</option>
            <option value="Victoria">Victoria</option>{" "}
          </Select>
        </Box>
        <Box bg="white" px={5} py={4} shadow="md">
          <Text fontWeight="semibold" fontSize="14" color="gray.500">
            Post code
          </Text>
          <Input my={2} bg="white" size="sm" rounded="full" />
        </Box>
      </Box>
      <Button
        _hover={{ bg: "blue.800" }}
        my={6}
        bg="blue.700"
        rounded="full"
        px={6}
        color="white"
      >
        Save
      </Button>
    </Box>
  );
};

export default ProfileInfo;
