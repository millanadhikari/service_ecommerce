import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Extras from "./Extras";
import ScheduleTier from "./ScheduleTier";
import StandardInput from "./StandardInput";

const newObj = {
  bedroom: 1,
  bathroom: 1,
  startTime: "09",
  startMinutes: "00",
  endTime: "12",
  endMinutes: "00",
  startMode: "PM",
  endMode: "PM",
};

const data = [
  {
    id: 1,
    title: "Balcony",
    price: 40,
    quantity: 0,
  },
  {
    id: 2,
    title: "Separate Toilet",
    price: 60,
    quantity: 1,
  },
  {
    id: 3,
    title: "Study Room",
    price: 40,
    quantity: 0,
  },
  {
    id: 4,
    title: "Wall Wash",
    price: 40,
    quantity: 0,
  },
  {
    id: 5,
    title: "Fridge/Freezer",
    price: 40,
    quantity: 0,
  },
  {
    id: 6,
    title: "Garage",
    price: 40,
    quantity: 0,
  },
  {
    id: 7,
    title: "Blinds",
    price: 40,
    quantity: 0,
  },
  {
    id: 8,
    title: "Carpet Steam Stairs",
    price: 40,
    quantity: 0,
  },
  {
    id: 9,
    title: "Carpet Steam Living Room",
    price: 40,
    quantity: 0,
  },
  {
    id: 10,
    title: "Carpet Steam Stairs",
    price: 40,
    quantity: 0,
  },
  {
    id: 11,
    title: "Carpet Steam Hallway",
    price: 40,
    quantity: 0,
  },
];
const JobAccor = ({ display, setDisplay }) => {
  const [quote, setQuote] = useState(newObj);
  const [extras, setExtras] = useState(data);
  const [showHalf, setShowHalf] = useState([]);

  let BedValue = display.products.find((item) => item.title === "Bedrooms");
  let bed = BedValue.quantity;

  const handleAdd = (e) => {
    let sewAdd = display?.products.find((item) => item.title === "Bedrooms");
    let dewAdd = { ...sewAdd, quantity: e.target.value };
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

  const handleBathroom = (e) => {
    let sewAdd = display?.products.find((item) => item.title === "Bathrooms");
    let dewAdd = { ...sewAdd, quantity: e.target.value };
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
  useEffect(() => {
    console.log(display);
  }, [display]);
  return (
    <Box fontFamily="sans-serif" mx={-3} my={4}>
      <Accordion allowToggle={true}>
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
                  Quote
                </Text>
              </Flex>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Flex
              gap={4}
              mb={6}
              mx={2}
              alignItems="center"
              justifyContent="space-between"
              borderTop="1px solid gray"
              borderBottom="1px solid gray"
              borderColor="gray.300"
              py={6}
            >
              <Box w="50%">
                <Text
                  fontSize="15px"
                  w={40}
                  mb={3}
                  fontWeight="semibold"
                  color="gray.600"
                  fontFamily="sans-serif"
                >
                  Bedrooms
                </Text>
                <Select
                  rounded="full"
                  mx={-1}
                  fontSize="12px"
                  type="number"
                  cursor="pointer"
                  value={bed}
                  name="bedrooms"
                  onChange={(e) => handleAdd(e)}
                  borderColor="gray.400"
                  size="md"
                  color="gray.600"
                >
                  {" "}
                  <option value={0}>0 Bedroom</option>
                  <option value={1}>1 Bedroom</option>
                  <option value={2}>2 Bedroom</option>
                  <option value={3}>3 Bedroom</option>
                  <option value={4}>4 Bedroom</option>
                  <option value={5}>5 Bedroom</option>
                </Select>
              </Box>
              <Box w="50%">
                <Text
                  fontSize="15px"
                  w={40}
                  mb={3}
                  fontWeight="semibold"
                  color="gray.600"
                  fontFamily="sans-serif"
                >
                  {" "}
                  Bathroom
                </Text>
                <Select
                  rounded="full"
                  mx={-2}
                  type="number"
                  name="bathrooms"
                  size="md"
                  fontSize="12px"
                  onChange={(e) => handleBathroom(e)}
                  cursor="pointer"
                  borderColor="gray.400"
                  px="1"
                  color="gray.600"
                >
                  {" "}
                  <option value={1}>1 Bathroom</option>
                  <option value={2}>2 Bathroom</option>
                  <option value={3}>3 Bathroom</option>
                  <option value={4}>4 Bathroom</option>
                  <option value={5}>5 Bathroom</option>
                </Select>
              </Box>
            </Flex>
            <Flex
              gap={4}
              alignItems="center"
              justifyContent="space-between"
              borderBottom="1px solid gray"
              borderColor="gray.300"
              mx={2}
              pb={6}
            >
              <Flex gap={4} w="100%">
                <Box fontSize="13px" w="50%">
                  <Text
                    mb={3.5}
                    fontSize="14px"
                    fontWeight="semibold"
                    color="gray.600"
                  >
                    Start time
                  </Text>
                  <Flex
                    rounded="full"
                    px={3}
                    h="40px"
                    border="1px solid gray"
                    fontSize="12px"
                    borderColor="gray.400"
                    alignItems="center"
                  >
                    <Flex alignItems="center" px={2}>
                      <Input
                        _focus={{ outline: "none" }}
                        size="sm"
                        border="none"
                        maxLength={2}
                        name={"startHour"}
                        min={2}
                        w="20px"
                        p={0}
                        value={display.startHour}
                        onChange={(e) =>
                          setDisplay({
                            ...display,
                            [e.target.name]: e.target.value,
                          })
                        }
                      ></Input>
                      <Text mr={1}>:</Text>
                      <Input
                        _focus={{ outline: "none" }}
                        size="sm"
                        border="none"
                        maxLength={2}
                        name={"startMin"}
                        min={2}
                        w="20px"
                        p={0}
                        value={display.startMin}
                        onChange={(e) =>
                          setDisplay({
                            ...display,
                            [e.target.name]: e.target.value,
                          })
                        }
                      ></Input>
                    </Flex>

                    <Text fontSize="12px">:</Text>
                    <Select
                      _focus={{ outline: "none" }}
                      fontSize="12px"
                      pt={1}
                      value={display.startMode}
                      name="startMode"
                      onChange={(e) =>
                        setDisplay({
                          ...display,
                          [e.target.name]: e.target.value,
                        })
                      }
                      border="none"
                      w={20}
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </Select>
                  </Flex>
                </Box>
                <Box fontSize="13px" w="50%">
                  <Text
                    mb={3.5}
                    fontSize="14px"
                    fontWeight="semibold"
                    color="gray.600"
                  >
                    End time
                  </Text>
                  <Flex
                    rounded="full"
                    h="40px"
                    px={3}
                    border="1px solid gray"
                    fontSize="12px"
                    borderColor="gray.400"
                    alignItems="center"
                  >
                    <Flex alignItems="center" px={2}>
                      <Input
                        _focus={{ outline: "none" }}
                        size="xs"
                        border="none"
                        maxLength={2}
                        w="20px"
                        px={0}
                        value={display.endHour}
                        name={"endHour"}
                        onChange={(e) =>
                          setDisplay({
                            ...display,
                            [e.target.name]: e.target.value,
                          })
                        }
                      ></Input>
                      <Text mr={1}>:</Text>
                      <Input
                        _focus={{ outline: "none" }}
                        size="sm"
                        maxLength={2}
                        border="none"
                        value={display.endMin}
                        name={"endMin"}
                        onChange={(e) =>
                          setDisplay({
                            ...display,
                            [e.target.name]: e.target.value,
                          })
                        }
                        w="19px"
                        p={0}
                      ></Input>
                    </Flex>

                    <Text fontSize="12px">:</Text>
                    <Select
                      icon="none"
                      _focus={{ outline: "none" }}
                      fontSize="12px"
                      value={display.endMode}
                      name="endMode"
                      onChange={(e) =>
                        setDisplay({
                          ...display,
                          [e.target.name]: e.target.value,
                        })
                      }
                      border="none"
                      pt={1}
                      w={20}
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </Select>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
            <Box my={4}>
              <Heading fontSize="15px" color="gray.600">
                Extras
              </Heading>
              {display?.products.map((item) => (
                <Extras
                  key={item._id}
                  item={item}
                  display={display}
                  setDisplay={setDisplay}
                />
              ))}
              <Flex justifyContent="center" gap={2}>
                <Text>Show More</Text>+
              </Flex>
            </Box>
            <ScheduleTier display={display} setDisplay={setDisplay} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default JobAccor;
