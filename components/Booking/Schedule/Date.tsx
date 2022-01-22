import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const times = [
    {
        id:22,
        time:"1:00",
        initial:"PM"
    },
    {
        id:23,
        time:"2:00",
        initial:"PM"
    } ,
    {
        id:24,
        time:"3:00",
        initial:"PM"
    }
    

]

interface Props {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  time: string
  setTime: React.Dispatch<React.SetStateAction<string>>;
}
const Date = ({ date, setDate, time, setTime }: Props) => {
  const getDate = () => {};

  return (
    <Box textAlign="left">
      <Text my={5} fontSize="18px" fontWeight="semibold">
        What is your preferred date?
      </Text>
      <Calendar
        onChange={setDate}
        value={date}
        defaultActiveStartDate={date}
        activeStartDate={date}
      />

      <Text my={5} fontSize="18px" fontWeight="semibold">
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
            backgroundColor={time === item.time && 'blue.600'}
            color={time === item.time ? 'white': 'blue.600'}

            rounded="md"
            fontWeight="bold"
            mr={3}
            h='40px'
            w='75px'
            key={item.id}
            onClick={() => setTime(item.time)}>
            {item.time}
          <Text ml={1}>{item.initial}</Text>
          </Flex>
       ))}
       
      </Flex>
    </Box>
  );
};

export default Date;
