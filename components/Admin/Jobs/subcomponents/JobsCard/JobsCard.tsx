import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import JCard from "./JCard";
import { BiHelpCircle } from "react-icons/bi";
import { FaBriefcase, FaBuilding, FaMoneyBill } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";

const JobsCard = ({ title }) => {
  return (
    <Box my={4} textAlign="left">
      <Heading fontSize="23px">{title}</Heading>
      <Grid
        templateColumns={{
          base: "repeat(3, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(5, 1fr)",
          xl: "repeat(6, 1fr)",
        }}
        gap={3}
      >
        <GridItem>
          <JCard
            icon1={BiHelpCircle}
            icon2={FaBriefcase}
            num={3}
            title={"Total Jobs"}
            color="blue.500"
            bg="blue.100"
          />
        </GridItem>
        <GridItem>
          <JCard
            icon1={BiHelpCircle}
            icon2={FaMoneyBill}
            num={3}
            title={"Average Jobs"}
            color="yellow.500"
            bg="yellow.100"
          />
        </GridItem>
        <GridItem>
          <JCard
            icon1={BiHelpCircle}
            icon2={BsFillPersonFill}
            num={3}
            title={"Largest Jobs"}
            color="purple.500"
            bg="purple.100"
          />{" "}
        </GridItem>
        <GridItem>
          <JCard
            icon1={BiHelpCircle}
            icon2={FaBuilding}
            num={3}
            title={"Recurring Jobs"}
            color="green.500"
            bg="green.100"
          />{" "}
        </GridItem>
        <GridItem>
          <JCard
            icon1={BiHelpCircle}
            icon2={MdCancel}
            num={0}
            title={"Cancellations"}
            color="red.500"
            bg="red.100"
          />{" "}
        </GridItem>
        <GridItem>{/* <JCard /> */}</GridItem>
      </Grid>
    </Box>
  );
};

export default JobsCard;
