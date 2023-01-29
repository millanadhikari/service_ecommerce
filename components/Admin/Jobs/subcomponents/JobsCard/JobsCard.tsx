import { Box, Button, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import JCard from "./JCard";
import { BiHelpCircle } from "react-icons/bi";
import { FaBriefcase, FaBuilding, FaMoneyBill } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import axios from "axios";

const JobsCard = ({ title, ref, onOpen, buttonTitle }) => {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .get("https://wedo-backend.herokuapp.com/v1/booking/count")
        .then((data) => {
          console.log("ilaila", data.data.result);
          setDisplay(data?.data?.result);
        });
    };

    fetchProducts();
  }, []);

  return (
    <Box my={4} textAlign="left">
      <Flex justifyContent="space-between" pr={5}>
        <Heading fontSize="23px">{title}</Heading>
        <Button
          size="sm"
          letterSpacing={"1"}
          _hover={{ bg: "yellow.500" }}
          _focus={{ outline: "none" }}
          px={6}
          py={3}
          ref={ref}
          onClick={onOpen}
          rounded="full"
          fontSize="12px"
          bg="#ffba4b"
          color="white"
        >
         {buttonTitle}
        </Button>
      </Flex>
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

// This gets called on every request
export async function getServerSideProps(ctx) {
  const { params } = ctx;
  const { id } = params;

  // Fetch data from external API
  const res = await fetch(
    `https://wedo-backend.herokuapp.com/v1/booking/count`
  );
  // const res = await fetch(`http://localhost:3001/v1/booking/${id}`);
  const data = await res.json();
  console.log("hellopuja", data);

  // Pass data to the page via props
  return { props: { data } };
}

// const rootUrl = "https://wedo-backend.herokuapp.com/v1/";
