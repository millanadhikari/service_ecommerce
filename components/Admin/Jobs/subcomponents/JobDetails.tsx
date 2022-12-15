import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import Checklist from "./Checklist/Checklist";
import JobTimer from "./JobTimer";
import Notes from "./Notes/Notes";

const data = [
  {
    id: 1,
    title: "Clean House",
    description: "it's okay to run sometimes.",
  },
  {
    id: 2,
    title: "Clean Room",
    description: "it's okay to run sometimes.",
  },
];
const JobDetails = ({ details }) => {
  return (
    <Box>
      <Flex w="100%" justifyContent="space-between" mt={10} gap={8} pr={5}>
        <Flex w="100%" flexDirection="column" gap={6}>
          <Box bg="white" py={7} px={6} shadow="md">
            <Text color="blue.500" fontSize="16px" fontWeight="semibold">
              {details?.firstName}
            </Text>
            <Text fontSize="12px" mt={2} color="gray.500">
              78 Cannon Hill
            </Text>
            <Text fontSize="12px" color="gray.500">
              Brisbane, Queensland
            </Text>
            <Text fontSize="12px" color="gray.500">
              {" "}
              4182
            </Text>
            <Text fontSize="12px" color="gray.500">
              {details?.phone ? details.phone : "0416 129 129"}
            </Text>
            <Text fontSize="12px" color="gray.500">
              {details?.email}
            </Text>
          </Box>
          <JobTimer />
        </Flex>
        <Flex w="100%" flexDirection="column" gap={6}>
          <Flex bg="white" py={7} px={6} shadow="md" alignItems="center">
            <Text mr={1} color="blue.700" fontSize="15px" whiteSpace="nowrap">
              Quote status:
            </Text>
            <Menu>
              <Flex alignItems="center">
                <MenuButton
                  _focus={{ outline: "none", boxShadow: "none" }}
                  _hover={{ bg: "white" }}
                  _expanded={{ bg: "white" }}
                  size="sm"
                  bg="white"
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  <Flex alignItems="center" cursor="pointer">
                    <Text
                      whiteSpace="nowrap"
                      color="blue.500"
                      fontSize="15px"
                      fontWeight="semibold"
                      mr={2}
                    >
                      {details?.bookingStatus}
                    </Text>
                  </Flex>
                </MenuButton>
                <MenuList>
                  <MenuItem
                    color="blue.500"
                    fontWeight="semibold"
                    fontSize="13px"
                  >
                    Cancel
                  </MenuItem>
                  <MenuItem
                    color="blue.500"
                    fontWeight="semibold"
                    fontSize="13px"
                  >
                    Scheduled
                  </MenuItem>
                  <MenuItem
                    color="blue.500"
                    fontWeight="semibold"
                    fontSize="13px"
                  >
                    In Progress
                  </MenuItem>
                  <MenuItem
                    color="blue.500"
                    fontWeight="semibold"
                    fontSize="13px"
                  >
                    Completed
                  </MenuItem>
                </MenuList>
              </Flex>
            </Menu>
            <Icon
              cursor="pointer"
              _hover={{ fontSize: "16px", color: "blue.500" }}
              position="absolute"
              top={5}
              right="155px"
              ml={2}
              as={BiHelpCircle}
              color="gray.400"
              fontSize="14px"
            />
          </Flex>
          {detailsComp({ details })}
        </Flex>{" "}
        <Flex w="100%" flexDirection="column" gap={6}>
          <Flex bg="white" py={7} px={6} shadow="md">
            <Text mr={1} color="blue.700" fontSize="15px" whiteSpace="nowrap">
              Subscription:
            </Text>
            <Flex alignItems="center" cursor="pointer">
              <Text
                whiteSpace="nowrap"
                color="blue.500"
                fontSize="15px"
                fontWeight="semibold"
                mr={2}
              >
                One Time Cleaning
              </Text>
              <Icon fontSize="12px" fontWeight="bold" as={AiOutlineDown} />
            </Flex>
            <Icon
              cursor="pointer"
              _hover={{ fontSize: "16px", color: "blue.500" }}
              position="absolute"
              top={5}
              right="155px"
              ml={2}
              as={BiHelpCircle}
              color="gray.400"
              fontSize="14px"
            />
          </Flex>
          {paymentDetails({ details })}
          lkjsdfk
        </Flex>{" "}
      </Flex>
      <Checklist />
      {data.map((item) => (
        <Notes item={item} key={item.id} />
      ))}
    </Box>
  );
};

export default JobDetails;

const detailsComp = ({ details }) => {
  return (
    <Box bg="white" py={7} px={6} shadow="md" mb={3}>
      <Flex
        justifyContent="space-between"
        borderBottom="1px solid gray"
        borderColor="gray.300"
        pb={3.5}
      >
        <Text
          mr={1}
          color="blue.700"
          fontSize="15px"
          fontWeight="semibold"
          whiteSpace="nowrap"
        >
          Quote details
        </Text>
        <Flex alignItems="center" cursor="pointer">
          <Text
            whiteSpace="nowrap"
            color="blue.300"
            fontSize="13px"
            fontWeight="semibold"
            mr={2}
          >
            Add custom item
          </Text>
          <Icon
            fontSize="12px"
            color="gray.400"
            fontWeight="bold"
            as={BiHelpCircle}
          />
        </Flex>
        <Icon
          cursor="pointer"
          _hover={{ fontSize: "16px", color: "blue.500" }}
          position="absolute"
          top={5}
          right="155px"
          ml={2}
          as={BiHelpCircle}
          color="gray.400"
          fontSize="14px"
        />
      </Flex>
      <Box
        py={4}
        fontSize="13px"
        color="blue.500"
        borderBottom="1px solid gray"
        borderColor="gray.300"
      >
        <Text cursor="pointer" mb={2}>
          Assign technician/team
        </Text>
        <Text cursor="pointer">Adjust pay</Text>
      </Box>
      <Box
        py={4}
        fontSize="13px"
        color="blue.700"
        fontWeight="semibold"
        borderBottom="1px solid gray"
        borderColor="gray.300"
      >
        <Text cursor="pointer" mb={2}>
          {details?.bedrooms}bd | {details?.bathrooms}ba |
        </Text>
        <Flex justifyContent="space-between">
          <Text cursor="pointer">Service Type</Text>
          <Text>
            {" "}
            {details?.service === "endoflease"
              ? "End of Lease"
              : "General Clean"}
          </Text>
        </Flex>
      </Box>
      <Box
        py={4}
        fontSize="13px"
        color="blue.700"
        fontWeight="semibold"
        borderBottom="1px solid gray"
        borderColor="gray.300"
      >
        <Flex justifyContent="space-between">
          <Text cursor="pointer">Job duration</Text>
          <Text> 1.00 hours(s)</Text>
        </Flex>
        <Flex justifyContent="space-between" mt={2}>
          <Text cursor="pointer">Job time</Text>
          <Text> 11:00am - 12:00pm</Text>
        </Flex>
      </Box>
      <Box
        py={4}
        fontSize="13px"
        color="blue.700"
        fontWeight="semibold"
        borderBottom="1px solid gray"
        borderColor="gray.300"
      >
        <Flex justifyContent="space-between">
          <Text cursor="pointer">Arrival time</Text>
          <Text> 11:00am - 12:00pm</Text>
        </Flex>
      </Box>
      <Box
        py={4}
        fontSize="13px"
        color="blue.700"
        fontWeight="semibold"
        borderBottom="1px solid gray"
        borderColor="gray.300"
      >
        <Box>
          <Text cursor="pointer">Extras</Text>
          <Text mt={0.5}>No extras</Text>
        </Box>
      </Box>
      <Box
        py={4}
        fontSize="13px"
        color="blue.700"
        fontWeight="semibold"
        borderBottom="1px solid gray"
        borderColor="gray.300"
      >
        <Box>
          <Text cursor="pointer">Customer booking notes</Text>
          <Text mt={0.5}>No notes</Text>
        </Box>
      </Box>
      <Box
        py={4}
        fontSize="13px"
        color="blue.700"
        fontWeight="semibold"
        borderColor="gray.300"
      >
        <Box>
          <Text cursor="pointer">Customer item</Text>
          <Text mt={0.5}>No custom item</Text>
        </Box>
      </Box>
    </Box>
  );
};

const paymentDetails = ({ details }) => {
  return (
    <Box bg="white" py={7} px={6} shadow="md" mb={3}>
      <Flex
        justifyContent="space-between"
        borderBottom="1px solid gray"
        borderColor="gray.300"
        pb={3.5}
      >
        <Text
          mr={1}
          color="blue.700"
          fontSize="15px"
          fontWeight="semibold"
          whiteSpace="nowrap"
        >
          Payment details
        </Text>

        <Icon
          cursor="pointer"
          _hover={{ fontSize: "16px", color: "blue.500" }}
          position="absolute"
          top={5}
          right="155px"
          ml={2}
          as={BiHelpCircle}
          color="gray.400"
          fontSize="14px"
        />
      </Flex>
      <Box
        py={4}
        fontSize="13px"
        color="blue.500"
        borderBottom="1px solid gray"
        borderColor="gray.300"
      >
        <Text cursor="pointer">Cash</Text>
      </Box>

      <Box
        py={4}
        fontSize="13px"
        color="blue.700"
        fontWeight="semibold"
        borderBottom="1px solid gray"
        borderColor="gray.300"
      >
        <Flex justifyContent="space-between">
          <Text cursor="pointer">Sub Total</Text>
          <Text>
            $ {details?.subtotal.toString().substring(0, 3)}
            .00
          </Text>
        </Flex>
        <Flex justifyContent="space-between" mt={2}>
          <Text cursor="pointer">Total</Text>
          <Text>
            {" "}
            $ {details?.subtotal.toString().substring(0, 3)}
            .00
          </Text>
        </Flex>
      </Box>
      <Box
        py={4}
        fontSize="13px"
        color="blue.700"
        fontWeight="semibold"
        borderColor="gray.300"
      >
        <Flex justifyContent="space-between">
          <Text cursor="pointer">To be paid by customer</Text>
          <Text>
            $ {details?.subtotal.toString().substring(0, 3)}
            .00
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
