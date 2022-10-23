import { CalendarIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";

const ScheduleTier = ({ display, setDisplay }) => {
  const [value, onChange] = useState(new Date());
  const [open, setOpen] = useState(false);
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  useEffect(() => {
    setDisplay({ ...display, bookingDate: value });
  }, [value]);
  return (
    <Box my={4}>
      <Heading fontSize="15px" color="gray.600">
        Schedule
      </Heading>
      <Text fontSize="14px" mt={3}>
        Booking date
      </Text>
      <Popover>
        <Box w={"100%"} fontSize="13px" my={2}>
          <PopoverTrigger>
            <Flex
              border="1px solid gray"
              onClick={() => setOpen(!open)}
              cursor="pointer"
              p={3}
              w={"50%"}
              h="40px"
              px={4}
              rounded="full"
              borderColor="gray.400"
              alignItems="center"
              justifyContent="space-between"
              gap={2}
              fontSize="14px"
            >
              <Flex alignItems="center" gap={4}>
                <CalendarIcon color="gray.500" />
                <Text>{value.toString().split("", 16)}</Text>
              </Flex>
              <ChevronDownIcon fontSize="18px" />
            </Flex>
          </PopoverTrigger>

          <Box my={2} w={280} mx="auto">
            <PopoverContent border="none" _focus={{ outline: "none" }}>
              <PopoverBody>
                <Calendar
                  value={value}
                  minDate={tomorrow}
                  onChange={onChange}
                  activeStartDate={value}
                />{" "}
              </PopoverBody>
            </PopoverContent>
          </Box>
          <Text fontSize="14px" mt={3}>
            Subscription
          </Text>
          <Select
            rounded="full"
            my={2}
            w="50%"
            size="md"
            fontSize="13px"
            _focus={{ outline: "none" }}
            value={display.subscription}
            //   value={quote.bathroom}
            onChange={(e) =>
              setDisplay({
                ...display,
                subscription: e.target.value,
              })
            }
            cursor="pointer"
            borderColor="gray.400"
            color="gray.600"
          >
            {" "}
            <option value={"One Time cleaning"}>One Time Cleaning</option>
            <option value={"Weekly Cleaning"}>Weekly Cleaning</option>
            <option value={"Fortnightly Cleaning"}>Fortnightly Cleaning</option>
            <option value={"Monthly Cleaning"}>Monthly Cleaning</option>
          </Select>
          <Text fontSize="14px" mt={3}>
            Customer job notes
          </Text>
          <Textarea
            value={display.customerNotes}
            onChange={(e) =>
              setDisplay({
                ...display,
                customerNotes: e.target.value,
              })
            }
            my={2}
          ></Textarea>
        </Box>
      </Popover>
    </Box>
  );
};

export default ScheduleTier;