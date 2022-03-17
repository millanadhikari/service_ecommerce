import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Calendar from "react-calendar";

const times = [
  {
    id: 22,
    time: "1:00",
    initial: "PM",
  },
  {
    id: 23,
    time: "2:00",
    initial: "PM",
  },
  {
    id: 24,
    time: "3:00",
    initial: "PM",
  },
];

interface Props {
  gate: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  time: string;
  setTime: React.Dispatch<React.SetStateAction<string>>;
}
const Mitee = ({ gate, setDate, time, setTime }: Props) => {
  const today = new Date();
  let tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return (
    <Box textAlign="left" w="100%">
      <Text my={5} fontSize="16" fontWeight="semibold">
        What is your preferred date?
      </Text>
      <Flex alignItems="center" justifyContent="center">
        <Calendar
          onChange={setDate}
          activeStartDate={new Date()}
          minDate={tomorrow}
          value={gate}
        />
      </Flex>
      <Text my={5} fontSize="16px" fontWeight="semibold">
        What is your preferred time?
      </Text>

      <Flex>
        {times.map((item) => (
          <Flex
            textAlign="center"
            cursor="pointer"
            alignItems="center"
            justify="center"
            border="1px solid blue"
            borderColor="blue.600"
            backgroundColor={time === item.time && "blue.600"}
            color={time === item.time ? "white" : "blue.600"}
            rounded="md"
            fontWeight="bold"
            mr={3}
            h="40px"
            w="75px"
            key={item.id}
            onClick={() => setTime(item.time)}
          >
            {item.time}
            <Text ml={1}>{item.initial}</Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Mitee;
