import { Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { BsHouseFill } from "react-icons/bs";
import { GiHomeGarage } from "react-icons/gi";
import { FaToilet } from "react-icons/fa";

const ServiceSummary = () => {
  return (
    <Box
      w="100%"
      position="fixed"
      backgroundColor="gray.200"
      h="68px"
      p={4}
      zIndex="999"
    >
      <Flex alignItems="center">
        <Text position="absolute" top="6" fontSize="16px" fontWeight="semibold">
          Service Summary
        </Text>
        <Spacer />
        <Accordion  allowMultiple w={60} >
          <AccordionItem >
            <h2
              style={{
                display: "flex",
                justifyContent: "right",
                width: "160px",
                marginLeft: "auto",
              }}
            >
              <AccordionButton
                _focus={{ borderColor: "none" }}
                display="flex"
                justify="center"
                maxWidth="160px"
                
                _expanded={{base:"false"}}
                // _expanded={{ w: "80px", backgroundColor: "gray.300" }}
                backgroundcolor="red"
              >
                <Box flex="1" textAlign="left">
                  Total: $500
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              mt={1}
              backgroundColor="white"
              border="1px solid gray"
              borderColor="gray.100"
              boxShadow="lg"
              p={1}
              rounded="md"
            >
              <Heading fontSize={16} py={3} px={5}>Your Order</Heading>
              <Flex
                
                borderTop="1px solid gray"
                borderBottom="1px solid gray"

                borderColor="gray.200"
                py={4}
                px={5}
              >
                <Flex
                  alignItems="center"
                  justify="center"
                  backgroundColor="blue.600"
                  w="120px"
                  h="55px"
                  rounded="md"
                >
                  <GiHomeGarage color="white" fontSize="26" />
                </Flex>
                <Spacer mr={5} />
                <Box minWidth="120px">
                  <Heading fontSize="15px" ml="3px">
                    2 Bedroom
                  </Heading>
                  <Spacer my={1.5} />
                  <Flex alignItems="center">
                    <Flex fontSize="14px">
                      <Flex
                        alignItems="center"
                        color="gray.500"
                        fontWeight="semibold"
                      >
                        <FaToilet size="16px" />
                        <span style={{ marginLeft: "2px" }}>:</span>
                      </Flex>
                      <Text ml="4px" fontWeight="semibold" fontSize="15px">
                        2
                      </Text>
                    </Flex>
                    <Spacer mr={5} />
                    <Flex fontSize="14px">
                      <Flex
                        alignItems="center"
                        color="gray.500"
                        fontWeight="semibold"
                      >
                        <FaToilet size="18px" />
                        <span style={{ marginLeft: "2px" }}>:</span>
                      </Flex>
                      <Text ml="4px" fontWeight="semibold" fontSize="16px">
                        2
                      </Text>
                    </Flex>
                  </Flex>
                  <Spacer my="2px" />
                  <Flex fontSize="14px">
                    <Flex alignItems="center" justify="center">
                      <Box fontWeight="bold" color="gray.600">$39.00</Box>
                      <Box color="gray.400" ml={2}>
                        x 01
                      </Box>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
              <Box fontSize="13px" color="gray.500" fontWeight="semibold" py={4} px={5} >
                <Flex>
                  <Text>Delivery</Text>
                  <Spacer/>
                  <Text>$20</Text>
                </Flex>
                <Spacer my={2}/>
                <Flex>
                    <Text>Discount</Text>
                    <Spacer/>
                    <Text>-$40</Text>
                </Flex>
              </Box>
              <Flex p={5} bottom="0" alignItems="center" justify="center" py={4} backgroundColor="gray.200">
                  <Heading fontSize={20}>Total</Heading>
                  <Spacer/>
                  <Text fontWeight="semibold">$177.00</Text>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Box>
  );
};

export default ServiceSummary;
