import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Mitee from "./Mitee";


interface Props { 
    gate: Date
    setDate: React.Dispatch<React.SetStateAction<Date>>
    time:string
    setTime:React.Dispatch<React.SetStateAction<string>>
}
const Schedule = ({gate, setDate, time, setTime}:Props) => {
  return (
    <Box textAlign="left" rounded="md" py={{base:8, md:16}} px={{base:"6", md:"16" }} my={{md:10}} backgroundColor="gray.100">
      <Heading fontSize={16}>When would you like your Bond Cleaning?</Heading>
      <Mitee time={time} setTime={setTime} gate={gate} setDate={setDate} />
    </Box>
  );
};

export default Schedule;
