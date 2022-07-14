import { Flex, Heading, Progress, Skeleton, Spacer, Text } from "@chakra-ui/react";
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
import { GiHomeGarage } from "react-icons/gi";
import { FaToilet } from "react-icons/fa";
import { useAppSelector } from "../Admin/app/hooks";

const ServiceSummary = ({bloading}) => {
  const price = useAppSelector((state) => state.cBookings.price);
  const addonPrice = useAppSelector(
    (state) => state.cBookings.cBookings.addonsPrice
  );
  const isLoading = useAppSelector((state) => state.cBookings.isLoading);
  const cBookings = useAppSelector((state) => state.cBookings.cBookings);

  return (
    <Box
      w="100%"
      position="fixed"
      backgroundColor="gray.200"
      h="68px"
      p={4}
      zIndex="999"
      shadow="xl"
    >
      <Flex  alignItems="center">
      <Flex alignItems="center" position="absolute" top="2" >
        <Flex
          alignItems="center"
          justifyContent="right"
          fontWeight="extrabold"
          fontFamily="Arial, sans-serif"
          backgroundColor="#f9bf16"
          rounded="100%"
          color="gray.700"
          h={'54px'}
          w={'54px'}
          
          fontSize="15px"
        >
          WeDo
        </Flex>
        <Text
          fontWeight="bold"
          fontSize="16px"
          letterSpacing="1px"
          ml={0.5}
          mt={0.5}
          color={"#3182ce"}
        >
          CLEANING
        </Text>
      </Flex>
        <Spacer />
        <Accordion allowMultiple w={60}>
          <AccordionItem>
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
                _expanded={{ base: "false" }}
                // _expanded={{ w: "80px", backgroundColor: "gray.300" }}
                backgroundcolor="red"
              >
                <Box flex="1" textAlign="left">
                  {isLoading ? (
                    "Loading"
                  ) : (
                    <Flex
                      alignItems="center"
                      fontSize="14px"
                      fontWeight="semibold"
                    >
                      {" "}
                      Total: $ {" "}
                      <Text
                        fontSize="15px"
                        ml="2"
                        fontWeight="bold"
                        color="blue.700"
                      >
                        {" "}
                        {isLoading ? <Skeleton startColor='pink.500' endColor='orange.500' weight="4px" height='6px'/> : price + addonPrice}

                      </Text>
                    
                    </Flex>
                  )}
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
              <Heading fontSize={16} py={3} px={5}>
                Your Order
              </Heading>
              <Flex
                borderTop="1px solid gray"
                borderBottom="1px solid gray"
                borderColor="gray.200"
                py={4}
                px="4"
              >
                <Flex
                  alignItems="center"
                  justify="center"
                  backgroundColor="gray.50"
                  w="120px"
                  h="55px"
                  rounded="md"
                  color="blue.500"
                >
                  <GiHomeGarage fontSize="26" />
                </Flex>
                <Spacer mr={5} />
                <Box minWidth="120px">
                  <Heading fontSize="15px" ml="3px">
                    {cBookings.bedrooms.id} Bedroom
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
                        {cBookings.toilets.id}
                      </Text>
                    </Flex>
                    <Spacer mr={5} />
                    {/* <Flex fontSize="14px">
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
                    </Flex> */}
                  </Flex>
                  <Spacer my="2px" />
                  <Flex fontSize="14px">
                    <Flex alignItems="center" justify="center">
                      <Box fontWeight="bold" color="gray.600">
                        $ {price}
                      </Box>
                      <Box color="gray.400" ml={2}>
                        x 01
                      </Box>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
              <Box
                fontSize="13px"
                color="gray.500"
                fontWeight="semibold"
                py={4}
                px={5}
              >
                <Flex>
                  <Text>Addons</Text>
                  <Spacer />
                  <Text>$ {addonPrice}</Text>
                </Flex>
                <Spacer my={2} />
                <Flex>
                  <Text>Discount</Text>
                  <Spacer />
                  <Text>-$40</Text>
                </Flex>
              </Box>
              <Flex
                p={5}
                bottom="0"
                alignItems="center"
                justify="center"
                py={4}
                backgroundColor="gray.200"
              >
                <Heading fontWeight="semibold" fontSize={20}>
                  Total
                </Heading>
                <Spacer />
                <Text fontWeight="semibold">$ {price + addonPrice} .00</Text>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
        <Progress position="absolute" zIndex="-1" top="68px" left="0" size='xs' w="100%" isIndeterminate = {bloading} value={!bloading && 100}/>
    </Box>
  );
};

export default ServiceSummary;