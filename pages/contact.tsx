import {
  Box,
  CheckboxGroup,
  Flex,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../components/Entry/Navbar";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Footer from "../components/Entry/Footer";

const Contact = () => {
  const data = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  };

  const [contact, setContact] = useState(data);
  return (
    <Box textAlign="center" w="100%">
      <Box bg="blue.400">
        {" "}
        <Navbar />
      </Box>
      <Heading my={3}>Contact Us</Heading>
      <Text my={3}>Any question or remarks? Just write us a message!</Text>
      <Flex
        w={{ md: "50rem" }}
        mx={{ md: "auto" }}
        my={10}
        flexDirection={{ base: "column", md: "row" }}
        gap={{md:"10"}}
        alignItems={{ base: "center" }}
      >
        <Box
          bg="blue.500"
          color="gray.100"
          p={8}
          py={12}
          rounded="xl"
          textAlign="left"
          w="330px"
          position="relative"
          overflow="hidden"
        >
          <Heading fontSize="22px">Contact Information</Heading>
          <Text fontSize="13px" my={4} color="gray.200" w="90%">
            Fill up the form and our Team will get back to you within 24 hours.
          </Text>
          <Flex fontSize="13px" flexDirection="column" gap={6} my={10}>
            <Flex gap={4}>
              <LocalPhoneIcon fontSize="small" /> +61435764571
            </Flex>
            <Flex gap={4}>
              <EmailIcon fontSize="small" /> wedocleaning99@gmail.com
            </Flex>
            <Flex gap={4}>
              <LocationOnIcon fontSize="small" /> 90 Bolevard Street,
              Strathfield{" "}
            </Flex>
          </Flex>
          <Flex gap={4} fontSize={18} mx={1.5} mt={20} mb={6} color="gray.300">
            <BsFacebook cursor="pointer" />
            <AiFillInstagram cursor="pointer" />
            <AiFillLinkedin cursor="pointer" />
            <AiFillYoutube cursor="pointer" />
          </Flex>

          <Box
            position="absolute"
            bottom="-10"
            bg="red.200"
            w="40"
            rounded="full"
            right="-20"
            h="40"
          ></Box>

          <Box
            position="absolute"
            bg="yellow.500"
            opacity="0.5"
            w="20"
            bottom="10"
            right="10"
            rounded="full"
            h="20"
          ></Box>
        </Box>
        <Box>
          <Flex gap={{base:5, md:20}} mx={{base:8, md:0}} justifyContent="space-between" my={{ base: "10", md: "8" }}>
            <Box textAlign="left">
              <Text fontSize="12px" fontWeight="semibold" color="gray.500">
                First Name
              </Text>
              <Input variant="flushed" />
            </Box>
            <Box textAlign="left">
              <Text fontSize="12px" fontWeight="semibold" color="gray.500">
                Last Name
              </Text>
              <Input variant="flushed" />
            </Box>
          </Flex>
          <Flex gap={20}my={{ base: "10", md: "8" }}  mx={{base:8, md:0}}>
            <Box textAlign="left">
              <Text fontSize="12px" fontWeight="semibold" color="gray.500">
                Mail
              </Text>
              <Input variant="flushed" />
            </Box>
            <Box textAlign="left">
              <Text fontSize="12px" fontWeight="semibold" color="gray.500">
                Phone
              </Text>
              <Input variant="flushed" />
            </Box>
          </Flex>
          <Box textAlign="left"  mx={{base:8, md:0}}>
            <Text fontWeight="semibold" fontSize="14px">
              What kind of service do you need?{" "}
            </Text>
            <CheckboxGroup colorScheme="blue" defaultValue={["naruto"]}>
              <Stack spacing={[1, 5]} direction={["column", "row"]} my={5} >
                <Checkbox  value="naruto"><Text fontSize="14px" >Cleaning Services</Text></Checkbox>
                <Checkbox  value="sasuke"><Text fontSize="14px" >Booking Query</Text></Checkbox>
                <Checkbox  value="kakashi"><Text fontSize="14px" >Others</Text></Checkbox>
              </Stack>
            </CheckboxGroup>
          </Box>
          <Box textAlign="left" mt={10}  mx={{base:8, md:0}}>
            <Text fontSize="12px" fontWeight="bold" color="gray.700">
              Message
            </Text>
            <Input variant="flushed" />
          </Box>
          <Button w="40" ml="50%"  mt={8} size="md" fontWeight="light"  colorScheme="blue">Send Message </Button>
        </Box>
      </Flex>
      <Footer/>
    </Box>
  );
};

export default Contact;
