import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

const JobTimer = ({ details }) => {
  return (
    <Box bg="white" py={4} shadow="md" w="100%">
      <Box
        px={4}
        borderBottom="1px solid gray"
        borderColor="gray.300"
        pb={3}
        color="#534e5f"
      >
        <Text fontWeight="semibold">Job timer</Text>
      </Box>
      <Flex my="2">
        <Box fontSize="13px" px={3} py={2} w="50%">
          <Text mb={1.5} fontWeight="semibold" color="gray.600">
            Start time
          </Text>
          <Flex
            minWidth="100px"
            rounded="md"
            px={1}
            border="1px solid gray"
            borderColor="gray.400"
            alignItems="center"
          >
            <Flex alignItems="center" px={2}>
              <Input
                _focus={{ outline: "none" }}
                size="sm"
                border="none"
                w="20px"
                // onChange={(e) =>
                //   setDetails({ ...details, startHour: e.target.value })
                // }
                p={0}
                value={details?.startHour}
              ></Input>
              <Text mr={1}>:</Text>
              <Input
                _focus={{ outline: "none" }}
                size="sm"
                border="none"
                w="19px"
                // onChange={(e) =>
                //   setDetails({ ...details, startMin: e.target.value })
                // }
                p={0}
                value={details?.startMin}
              ></Input>
            </Flex>

            <Text>:</Text>
            <Input
              _focus={{ outline: "none" }}
              size="sm"
              border="none"
              w="23px"
              ml={1}
              // onChange={(e) =>
              //   setDetails({ ...details, startMode: e.target.value })
              // }
              p={0}
              value={details?.startMode}
            ></Input>
          </Flex>
        </Box>
        <Box fontSize="13px" px={3} py={2} w="50%">
          <Text mb={1.5} fontWeight="semibold" color="gray.600">
            End time
          </Text>
          <Flex
            minWidth="100px"
            rounded="md"
            px={1}
            border="1px solid gray"
            borderColor="gray.400"
            alignItems="center"
          >
            <Flex alignItems="center" px={2}>
              <Input
                _focus={{ outline: "none" }}
                size="sm"
                border="none"
                w="20px"
                p={0}
                // onChange={(e) =>
                //   setDetails({ ...details, endHour: e.target.value })
                // }
                value={details?.endHour}
              ></Input>
              <Text mr={1}>:</Text>
              <Input
                _focus={{ outline: "none" }}
                size="sm"
                border="none"
                w="19px"
                // onChange={(e) =>
                //   setDetails({ ...details, endMin: e.target.value })
                // }
                p={0}
                value={details?.endMin}
              ></Input>
            </Flex>
            <Text>:</Text>
            <Input
              _focus={{ outline: "none" }}
              size="sm"
              border="none"
              w="23px"
              ml={1}
              // onChange={(e) =>
              //   setDetails({ ...details, endMode: e.target.value })
              // }
              p={0}
              value={details?.endMode}
            ></Input>{" "}
          </Flex>
        </Box>
      </Flex>
      <Box mx={3}>
        <Button
          bg="blue.700"
          py={4.5}
          w="100%"
          color="white"
          fontSize="14px"
          size="sm"
          // onClick={saveTime}
          rounded="md"
          my={1}
        >
          Save
        </Button>
      </Box>
      {clockDetails()}
      <Box mx={3} shadow="md">
        <Image src="/nirvana.jpg" alt="maps" w="full" />
      </Box>
    </Box>
  );
};

export default JobTimer;

const clockDetails = () => {
  return (
    <Box mt={4} mb={6} bg="gray.200" mx={3}>
      <Accordion borderColor="white" allowToggle allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton _focus={{ outline: "none" }}>
              <Box
                fontSize="14px"
                flex="1"
                color="gray.500"
                fontWeight="semibold"
                textAlign="left"
              >
                Details
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text
              textAlign="center"
              color="gray.400"
              fontSize="14px"
              fontWeight="semibold"
              my={6}
            >
              No clock in/out data
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
