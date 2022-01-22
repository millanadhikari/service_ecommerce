import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
interface Props {
  location: Location[];
  setLocation: React.Dispatch<React.SetStateAction<Location[]>>;
  postcode: number;
  setPostCode: React.Dispatch<React.SetStateAction<number>>;
}

interface Location {
  id: number;
  fullname: string;
  phone: string;
  email: string;
  buildingNumber: string;
  streetName: string;
  postcode: number;
}

const Locationier = ({
  location,
  setLocation,
  postcode,
  setPostCode,
}: Props) => {
  const [menu, setMenu] = useState<boolean>(false);
  const [address, setAddress] = useState<boolean>(false);
  return (
    <Box py={6} px={4} my={2} backgroundColor="gray.100">
      <Flex alignItems="center" color="gray.600">
        <BsPersonCircle size="20px" color="gray.700" />
        <Flex alignItems="center" fontWeight="bold" ml={3} fontSize={18}>
          <Text mr={3}>Contact Details</Text>
          {menu && (
            <AiOutlineEdit onClick={() => setMenu(!menu)} cursor="pointer" />
          )}
        </Flex>
      </Flex>

      <Box>
        {location.map((contact: Location) => (
          <Box>
            {!menu ? (
              <Box key={contact.id} textAlign="right">
                <Flex w="100%" alignItems="center" px={8} pt={5}>
                  <Text fontWeight="semibold" fontSize="16px" mr={3}>
                    Full Name*
                  </Text>
                  <Input
                    w="240px"
                    value={contact.fullname}
                    onChange={(e) =>
                      setLocation([
                        {
                          id: Math.random(),
                          fullname: e.target.value,
                          phone: contact.phone,
                          email: contact.email,
                          buildingNumber: contact.buildingNumber,
                          streetName: contact.streetName,
                          postcode: contact.postcode,
                        },
                      ])
                    }
                    placeholder="e.g. John Doe"
                    backgroundColor="white"
                    fontSize="16px"
                    _focus={{ border: "none" }}
                  />
                </Flex>
                <Flex w="100%" alignItems="center" px={8} py={3}>
                  <Text fontWeight="semibold" fontSize="16px" mr="45px">
                    Phone
                  </Text>
                  <Input
                    w="240px"
                    placeholder="Landline or mobile"
                    backgroundColor="white"
                    fontSize="16px"
                    _focus={{ border: "none" }}
                    value={contact.phone}
                    onChange={(e) =>
                      setLocation([
                        {
                          id: Math.random(),
                          fullname: contact.fullname,
                          phone: e.target.value,
                          email: contact.email,
                          buildingNumber: contact.buildingNumber,
                          streetName: contact.streetName,
                          postcode: contact.postcode,
                        },
                      ])
                    }
                  />
                </Flex>
                <Flex w="100%" alignItems="center" px={8} py={1}>
                  <Text fontWeight="semibold" fontSize="16px" mr="45px">
                    Email*
                  </Text>
                  <Input
                    w="240px"
                    placeholder="johndoe@gmail.com"
                    backgroundColor="white"
                    fontSize="16px"
                    _focus={{ border: "none" }}
                    value={contact.email}
                    onChange={(e) =>
                      setLocation([
                        {
                          id: Math.random(),
                          fullname: contact.fullname,
                          phone: contact.phone,
                          email: e.target.value,
                          buildingNumber: contact.buildingNumber,
                          streetName: contact.streetName,
                          postcode: contact.postcode,
                        },
                      ])
                    }
                  />
                </Flex>
                <Button
                  onClick={() => setMenu(!menu)}
                  backgroundColor="blue.600"
                  color="white"
                  mr={20}
                  mt={3}
                  _hover={{ backgroundColor: "blue.400" }}
                  isDisabled={
                    contact.fullname === "" ||
                    contact.phone === "" ||
                    contact.email === ""
                  }
                >
                  Save
                </Button>
              </Box>
            ) : (
              <Box w="100%" px={8} py={3} textAlign="left">
                <Flex fontWeight="semibold" fontSize="16px" mr={3}>
                  Full Name:{" "}
                  <Text color="gray.600" ml={3} fontWeight="bold">
                    {contact.fullname}
                  </Text>
                </Flex>
                <Spacer my="3" />
                <Flex fontWeight="semibold" fontSize="16px">
                  Phone:{" "}
                  <Text color="gray.600" mr={3} ml="38px" fontWeight="bold">
                    {contact.phone}
                  </Text>
                </Flex>
                <Spacer my="3" />
                <Flex fontWeight="semibold" fontSize="16px" mr={3}>
                  Email:
                  <Text ml="45px" color="gray.600" fontWeight="bold">
                    {contact.email}
                  </Text>
                </Flex>
              </Box>
            )}
            <Box alignItems="center" color="gray.600" mt={5}>
              <Flex>
                <HiLocationMarker size="20px" color="gray.700" />
                <Flex alignItems="center" fontSize={18}>
                  <Heading ml={3} mr={3} fontSize={18}>
                    Where should we serve you?
                  </Heading>
                  {!address && (
                    <AiOutlineEdit
                      onClick={() => setAddress(!address)}
                      cursor="pointer"
                    />
                  )}
                </Flex>
              </Flex>
              <Box>
                {address ? (
                  <Box my={2}>
                    <Input
                      backgroundColor="white"
                      _focus={{ border: "none" }}
                      my={1.5}
                      placeholder="Flat/Unit/Building number"
                      value={contact.buildingNumber}
                      onChange={(e) =>
                        setLocation([
                          {
                            id: Math.random(),
                            fullname: contact.fullname,
                            phone: contact.phone,
                            email: contact.email,
                            buildingNumber: e.target.value,
                            streetName: contact.streetName,
                            postcode: contact.postcode,
                          },
                        ])
                      }
                    />
                    <Input
                      backgroundColor="white"
                      _focus={{ border: "none" }}
                      my={1.5}
                      placeholder="Street name"
                      value={contact.streetName}
                      onChange={(e) =>
                        setLocation([
                          {
                            id: Math.random(),
                            fullname: contact.fullname,
                            phone: contact.phone,
                            email: contact.email,
                            buildingNumber: contact.buildingNumber,
                            streetName: e.target.value,
                            postcode: contact.postcode,
                          },
                        ])
                      }
                    ></Input>
                    <Input
                      backgroundColor="white"
                      _focus={{ border: "none" }}
                      my={1.5}
                      placeholder="Postcode"
                      value={postcode}
                      onChange={(e) => setPostCode(parseInt(e.target.value))}
                    ></Input>
                    <Button
                      onClick={() => setAddress(!address)}
                      backgroundColor="blue.600"
                      color="white"
                      mr={20}
                      placeholder={!postcode && "Postcode"}
                      mt={3}
                      _hover={{ backgroundColor: "blue.400" }}
                      isDisabled={
                        contact.streetName === "" ||
                        contact.buildingNumber === ""
                      }
                    >
                      Save
                    </Button>
                  </Box>
                ) : (
                  <Flex alignItems="center" my={3}>
                    <Text
                      fontSize="16px"
                      fontWeight="semibold"
                      textAlign="left"
                    >
                      Address:{" "}
                    </Text>
                    <Flex ml={12}>
                      <Text mx={1}>{contact.buildingNumber}</Text>

                      {contact.streetName}
                      <Text ml={2}>{postcode}</Text>
                    </Flex>
                  </Flex>
                )}
              </Box>
            </Box>
          </Box>
        ))}{" "}
      </Box>
    </Box>
  );
};

export default Locationier;
