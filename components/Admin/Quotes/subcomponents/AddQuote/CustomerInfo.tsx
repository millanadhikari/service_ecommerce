import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import StandardInput from "./StandardInput";

const CustomerInfo = ({ display, setDisplay }) => {
  const handleChange = (e) => {
    setDisplay({ ...display, [e.target.name]: e.target.value });
  };
  return (
    <Box fontFamily="sans-serif" mx={-3}>
      <Accordion allowToggle="true">
        <AccordionItem border="none">
          <h2>
            <AccordionButton
              _hover={{ bg: "none" }}
              _focus={{ outline: "none" }}
              _expanded={{ border: "none" }}
            >
              <Flex
                flex="1"
                textAlign="left"
                alignItems="center"
                gap={4}
                color="gray.600"
              >
                <AccordionIcon
                  fontSize="30px"
                  p={1}
                  bg="gray.200"
                  rounded="full"
                />
                <Text fontSize="15px" fontWeight="semibold">
                  {" "}
                  Customer Info
                </Text>
              </Flex>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <StandardInput
              title="Company Name"
              handleChange={handleChange}
              value={display.companyName}
              name="companyName"
            />{" "}
            <Flex gap={4} my={6}>
              <StandardInput
                title="First Name"
                handleChange={handleChange}
                value={display.firstName}
                name="firstName"
              />
              <StandardInput
                title="Last Name"
                handleChange={handleChange}
                value={display.lastName}
                name="lastName"
              />
            </Flex>
            <Flex gap={4} my={6}>
              <StandardInput
                title="Email"
                handleChange={handleChange}
                value={display.email}
                name="email"
              />

              <StandardInput
                title="Phone"
                handleChange={handleChange}
                value={display.phone}
                name="phone"
              />
            </Flex>
            <Flex gap={4} my={6}>
              <StandardInput
                title="Address line 1"
                handleChange={handleChange}
                value={display.address1}
                name="address1"
              />
              <StandardInput
                title="Address line 2 (apt/suite)"
                handleChange={handleChange}
                value={display.address2}
                name="address2"
              />
            </Flex>
            <Flex gap={2} my={6}>
              <StandardInput
                title="City"
                handleChange={handleChange}
                value={display.city}
                name="city"
              />
              <Select
                rounded="full"
                onChange={handleChange}
                value={display.state}
                name="state"
                size="sm"
                placeholder="Select State"
                fontSize="12px"
                cursor="pointer"
                borderColor="gray.400"
                px="2"
                color="gray.400"
              >
                {" "}
                <option value="New South Wales">New South Wales</option>
                <option value="Queensland">Queensland</option>
                <option value="Victoria">Victoria</option>{" "}
              </Select>
            </Flex>
            <StandardInput
              title="Post Code"
              handleChange={handleChange}
              value={display.postcode}
              name="postcode"
            />{" "}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default CustomerInfo;
