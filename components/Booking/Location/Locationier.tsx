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
import { addContact } from "../customerBookingSlice";
import { useAppDispatch } from "../../Admin/app/hooks";

interface Location {
  id: number;
  fullname: string;
  phone: string;
  email: string;
  buildingNumber: string;
  streetName: string;
  postcode: string;
}
interface Props {
  location: Location;
  setLocation: React.Dispatch<React.SetStateAction<Location>>;
  postcode: string;
  setPostCode: React.Dispatch<React.SetStateAction<string>>;
}


const Locationier = ({
  location,
  setLocation,
  postcode,
  setPostCode,
}: Props) => {
  const [menu, setMenu] = useState<boolean>(false);
  const [address, setAddress] = useState<boolean>(false);
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(addContact({...location, postcode:postcode}))
  }, [location])
  return (
    <Box
      rounded="md"
      py={{ base: 8, md: 16 }}
      px={{ base: "3", md: "16" }}
      my={{ md: 10 }}
      w="100%"
      backgroundColor="gray.100"
    >
      <Flex alignItems="center" color="gray.600" mb={3}>
        <BsPersonCircle size="20px" color="gray.700" />
        <Flex alignItems="center" fontWeight="bold" ml={3} fontSize={18}>
          <Text fontSize="16px">
            Contact Details
          </Text>
          {menu && (
            <AiOutlineEdit onClick={() => setMenu(!menu)} cursor="pointer" />
          )}
        </Flex>
      </Flex>

      <Box>
        <Box>
          {!menu ? (
            <Box>
              <Flex w="100%" alignItems="center" px={8} pt={5} >
                <Flex fontWeight="semibold" fontSize="14px" mr={10} >
                  Name{" "}
                  <Text ml={1} color="red.300">
                    *
                  </Text>
                </Flex>
                <Input
                  value={location.fullname}
                  onChange={(e) =>
                    setLocation({ ...location, fullname: e.target.value })
                  }
                  placeholder="e.g. John Doe"
                  _placeholder={{ color: "gray.300", fontSize: "14px" }}
                  backgroundColor="white"
                  fontSize="16px"
                  size="sm"
                  _focus={{ border: "none" }}
                />
              </Flex>
              <Flex w="100%" alignItems="center" px={8} py={3}>
                <Flex fontWeight="semibold" fontSize="14px" mr="38px" >
                  Phone
                  <Text ml={1} color="red.300">
                    *
                  </Text>
                </Flex>
                <Input
                  placeholder="Landline or mobile"
                  _placeholder={{ color: "gray.300", fontSize: "14px" }}
                  backgroundColor="white"
                  fontSize="16px"
                  _focus={{ border: "none" }}
                  size="sm"
                  value={location.phone}
                  onChange={(e) =>
                    setLocation({ ...location, phone: e.target.value })
                  }
                />
              </Flex>
              <Flex w="100%" alignItems="center" px={8} py={1} justifyContent="between">
                <Flex fontWeight="semibold" fontSize="14px" mr="43px">
                  Email
                  <Text ml={1} color="red.300">
                    *
                  </Text>
                </Flex>
                <Input
                  placeholder="johndoe@gmail.com"
                  _placeholder={{ color: "gray.300", fontSize: "14px" }}
                  backgroundColor="white"
                  fontSize="16px"
                  _focus={{ border: "none" }}
                  size="sm"
                  value={location.email}
                  onChange={(e) =>
                    setLocation({ ...location, email: e.target.value })
                  }
                />
              </Flex>
              <Button
                onClick={() => setMenu(!menu)}
                backgroundColor="blue.600"
                size="sm"
                color="white"
                ml={190}
                mt={5}
                _hover={{ backgroundColor: "blue.400" }}
                isDisabled={
                  location.fullname === "" ||
                  location.phone === "" ||
                  location.email === ""
                }
              >
                Save
              </Button>
            </Box>
          ) : (
            <Box w="100%" px={8} py={3} textAlign="left">
              <Flex fontWeight="semibold" fontSize="16px" mr={3}>
                Full Name:{" "}
                <Text color="gray.600" ml={10} fontWeight="light">
                  {location.fullname}
                </Text>
              </Flex>
              <Spacer my="3" />
              <Flex fontWeight="semibold" fontSize="16px">
                Phone:{" "}
                <Text color="gray.600" ml={16} fontWeight="light">
                  {location.phone}
                </Text>
              </Flex>
              <Spacer my="3" />
              <Flex fontWeight="semibold" fontSize="16px" mr={3}>
                Email:
                <Text ml="70px" fontWeight="light">
                  {location.email}
                </Text>
              </Flex>
            </Box>
          )}
          <Box alignItems="center" color="gray.600" mt={5}>
            <Flex>
              <HiLocationMarker size="20px" color="gray.700" />
              <Flex alignItems="center" fontSize={18}>
                <Heading ml={3} mr={3} fontSize={15} mb={4} textAlign="left">
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
                <Flex direction="column" my={2}>
                  <Input
                    backgroundColor="white"
                    size="sm"
                    _focus={{ border: "none" }}
                    my={1.5}
                    placeholder="Flat/Unit/Building number"
                    value={location.buildingNumber}
                    onChange={(e) =>
                      setLocation({
                        ...location,
                        buildingNumber: e.target.value,
                      })
                    }
                  />
                  <Input
                    backgroundColor="white"
                    _focus={{ border: "none" }}
                    size="sm"
                    my={1.5}
                    placeholder="Street name"
                    value={location.streetName}
                    onChange={(e) =>
                      setLocation({ ...location, streetName: e.target.value })
                    }
                  ></Input>
                  <Input
                    backgroundColor="white"
                    _focus={{ border: "none" }}
                    my={1.5}
                    placeholder="Postcode"
                    value={postcode}
                    w="230px"
                    size="sm"
                    onChange={(e) => setPostCode(e.target.value)}
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
                      location.streetName === "" ||
                      location.buildingNumber === ""
                    }
                  >
                    Save
                  </Button>
                </Flex>
              ) : (
                <Flex my={3} px="8">
                  <Text fontSize="15px" fontWeight="semibold" textAlign="left">
                    Address:{" "}
                  </Text>
                  <Box ml={12} textAlign="left" fontSize="15">
                    <Text>{location.buildingNumber}</Text>

                    <Text>{location.streetName}</Text>
                    <Text>{postcode}</Text>
                  </Box>
                </Flex>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Locationier;
