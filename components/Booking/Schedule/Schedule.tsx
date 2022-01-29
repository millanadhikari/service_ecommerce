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
    <Box rounded="md" py={{base:8, md:16}} px={{base:"6", md:"16" }} my={{md:10}} backgroundColor="gray.100">
      <Heading fontSize={20}>When would you like your Bond Cleaning?</Heading>
      <Date time={time} setTime={setTime} date={date} setDate={setDate} />
    </Box>
  );
};

export default Schedule;
