import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { BsCalendar2RangeFill, BsFillPhoneVibrateFill } from "react-icons/bs";
import { FaInternetExplorer } from "react-icons/fa";
import {
  Badge,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BiCurrentLocation } from "react-icons/bi";
import { useRouter } from "next/router";
import RequestQuote from "../Quote/RequestQuote";

const data = [
  {
    id: 1,
    icon: <BsCalendar2RangeFill />,
    title: "Setup a Cleaning Plan",
    des: "Choose a weekly, biweekly, or monthly cleaning plan. We schedule your recurring.",
  },
  {
    id: 1,
    icon: <FaInternetExplorer />,
    title: "Manage Online",
    des: "Rescheduling, contacting your professional, and tipping are just a tap away.",
  },
  {
    id: 1,
    icon: <AiFillLike />,
    title: "Sit Back and Relax",
    des: "An experienced, fully-equipped housekeeping professional will be there.",
  },
];

const Ways = ({ quote, setQuote }) => {
  const [serviceChoosed, setServiceChoosed] = useState("");
  const [postcode, setPostcode] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  return (
    <Box
      position="absolute"
      top={{ base: "820px", sm: "850px", md: "410px" }}
      mx="auto"
      w="100%"
      py={10}
    >
      <Box
        w={{ md: "800px", lg: "1000px" }}
        mx={{ base: "4", sm: "3", md: "auto" }}
      >
        <Box
          px={{ base: "10px" }}
          mb={{ base: "60px", md: "80px" }}
          mt={{ base: "0px", sm: "0px", md: "120px", lg: "80px" }}
          w="100%"
        >
          <Box
            mx={{ base: "auto" }}
            ml={{ md: 3, lg: -8 }}
            backgroundColor="white"
            w={{ base: "330px", sm: "400px", md: "400px" }}
            color="black"
            p={6}
            pt={8}
            rounded="xl"
            boxShadow="md"
          >
            <Heading fontSize="23px">Get Our Service</Heading>
            <Flex mt={6}>
              <FormControl w="160px">
                <Select
                  id="services"
                  placeholder="Service Type"
                  color="gray.400"
                  fontSize="13px"
                  _focus={{ outline: "none" }}
                >
                  <option
                    value={serviceChoosed}
                    onChange={(e) => setServiceChoosed("End of Lease")}
                  >
                    End of Lease
                  </option>
                  <option
                    value={serviceChoosed}
                    onChange={(e) => setServiceChoosed("Home Clean")}
                  >
                    Home Clean
                  </option>
                </Select>
              </FormControl>
              <Spacer mx={2} />
              <InputGroup w="160px">
                <Input
                  fontSize="13px"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  placeholder="Postcode"
                />
                <InputRightElement color="gray.400">
                  <BiCurrentLocation />
                </InputRightElement>
              </InputGroup>
            </Flex>
            <Button
              backgroundColor="green.400"
              textAlign="center"
              isLoading={loading}
              onClick={() => setQuote(!quote)}
              loadingText="Loading"
              spinnerPlacement="start"
              py={4}
              w="100%"
              mt={8}
              mb={3}
              colorScheme="green"
              fontSize="15px"
              color="white"
              isDisabled={!postcode}
              cursor="pointer"
            >
              Get a Quote
            </Button>
            {/* <RequestQuote quote={quote} setQuote={setQuote}/> */}
          </Box>
        </Box>
        <Flex
          fontSize="18px"
          fontWeight="semibold"
          alignItems="center"
          mb={3}
          mx="auto"
        >
          <Text mr={3}>✊</Text>
          <Text>HOW WE WORK</Text>
        </Flex>
        <Box display={{ md: "flex" }}>
          <Heading
            mb={6}
            w={{ base: "100%", md: "60%" }}
            textAlign="left"
            fontSize="25px"
          >
            Some of the ways of working from{" "}
            <Text mt={1} color="#0195ff">
              WeDoCleaning
            </Text>
          </Heading>
          <Text
            color="gray.400"
            w={{ base: "100%", md: "40%" }}
            fontSize={{ base: "14px", md: "16px" }}
          >
            The system carried out by WeDoCleaning can make it easier for those
            of you who are confused about finding workers to clean your home,
            then the system built by WeDoCleaning is as follows
          </Text>
        </Box>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={6}
          my={12}
        >
          {data.map((plan) => (
            <GridItem
              border="1px solid gray"
              position="relative"
              pt={14}
              pb={8}
              pl={8}
              pr={{ md: "20px" }}
              w={{ base: "348px", sm: "280", md: "370px" }}
              mx="auto"
              my={3}
              rounded="lg"
              borderColor="gray.300"
              key={plan.id}
              cursor="pointer"
            >
              <Flex
                fontSize="24px"
                alignItems="center"
                justify="center"
                color="white"
                position="absolute"
                top="-7"
                h={16}
                w={16}
                backgroundColor="#0195ff"
                rounded="full"
              >
                {plan.icon}
              </Flex>
              <Heading fontSize="20px">{plan.title}</Heading>
              <Text
                fontWeight="semibold"
                mt={5}
                w={{ base: "80%", md: "100%" }}
                color="gray.500"
                fontSize="13px"
              >
                {" "}
                {plan.des}{" "}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <RequestQuote quote={quote} setQuote={setQuote} />
    </Box>
  );
};

export default Ways;
