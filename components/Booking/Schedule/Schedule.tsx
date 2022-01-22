import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Date from "./Date";


interface Props { 
    date: Date
    setDate: React.Dispatch<React.SetStateAction<Date>>
    time:string
    setTime:React.Dispatch<React.SetStateAction<string>>
}
const Schedule = ({date, setDate, time, setTime}:Props) => {
  return (
    <Box py={6} px={4} my={2} backgroundColor="gray.100">
      <Heading fontSize={20}>When would you like your Bond Cleaning?</Heading>
      <Date time={time} setTime={setTime} date={date} setDate={setDate} />
    </Box>
  );
};

export default Schedule;
