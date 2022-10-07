import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import MultiForm from "./Multiform/MultiForm";

interface Props {
  quote: boolean;
  setQuote: any;
}

const RequestQuote = ({ quote, setQuote }: Props) => {
  const [active, setActive] = useState(1);
  const [bedroom, setBedroom] = useState(0);
  const [toilet, setToilet] = useState(0);
  const [balcony, setBalcony] = useState(0);
  const [separateToilet, setSeparateToilet] = useState(0);
  const [studyRoom, setStudyRoom] = useState(0);
  const [wallWash, setWallWash] = useState(0);
  const [fridge, setFridge] = useState(0);
  const [garage, setGarage] = useState(0);
  const [blinds, setBlinds] = useState(0);
  const [steamLiving, setSteamLiving] = useState(0);
  const [steamBedroom, setSteamBedroom] = useState(0);
  const [steamStairs, setSteamStairs] = useState(0);
  const [steamHallway, setSteamHallway] = useState(0);
  const [service, setService] = useState("endoflease");

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleNext = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const timer = setTimeout(() => {
      setActive(active + 1);
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const body = {
        fullName: contact.name,
        email: contact.email,
        phone: contact.phone,
        bedrooms: bedroom,
        bathrooms: toilet,
        balcony: balcony,
        separateToilet: separateToilet,
        studyRoom: studyRoom,
        wallWash: wallWash,
        fridge: fridge,
        garage: garage,
        blinds: blinds,
        steamLiving: steamLiving,
        steamBedroom: steamBedroom,
        steamHallway: steamHallway,
        steamStairs: steamStairs,
        service: service,
      };
      await fetch("https://wedo-backend.herokuapp.com/v1/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setActive(active + 1);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleQuote = () => {
    setQuote(!quote);
    setService("endoflease");
    setBedroom(0);
    setToilet(0);
    setBalcony(0);
    setSeparateToilet(0);
    setStudyRoom(0);
    setWallWash(0);
    setFridge(0);
    setGarage(0);
    setBlinds(0);
    setSteamLiving(0);
    setSteamBedroom(0);
    setSteamHallway(0);
    setSteamStairs(0);
    setContact({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <Modal isOpen={quote} onClose={handleQuote}>
      <ModalOverlay />
      <ModalContent color="gray.600" py={5} mx={{ base: 5 }}>
        <ModalHeader>Request a Quote</ModalHeader>
        <ModalCloseButton
          onClick={() => setActive(1)}
          mt={6}
          color="blue.700"
        />
        <ModalBody mt={-5} color="gray.500">
          <Flex fontSize="12" gap={1}>
            <Text>Fill out the form or call</Text>{" "}
            <Text
              cursor="pointer"
              onClick={() => window.open("tel:+61426173439")}
              color="red"
            >
              +61415976451
            </Text>
          </Flex>
          <Text fontSize="12">to get your quote today!</Text>
          <MultiForm
            active={active}
            setActive={setActive}
            service={service}
            setService={setService}
            toilet={toilet}
            setToilet={setToilet}
            bedroom={bedroom}
            setBedroom={setBedroom}
            balcony={balcony}
            setBalcony={setBalcony}
            separateToilet={separateToilet}
            setSeparateToilet={setSeparateToilet}
            studyRoom={studyRoom}
            setStudyRoom={setStudyRoom}
            wallWash={wallWash}
            setWallWash={setWallWash}
            fridge={fridge}
            setFridge={setFridge}
            garage={garage}
            setGarage={setGarage}
            blinds={blinds}
            setBlinds={setBlinds}
            steamLiving={steamLiving}
            setSteamLiving={setSteamLiving}
            steamBedroom={steamBedroom}
            setSteamBedroom={setSteamBedroom}
            steamHallway={steamHallway}
            setSteamHallway={setSteamHallway}
            steamStairs={steamStairs}
            setSteamStairs={setSteamStairs}
            contact={contact}
            setContact={setContact}
          />
          {active === 4 && (
            <Box
              border="1px solid gray"
              borderColor="green.700"
              p={4}
              color="green.700"
              backgroundColor="green.100"
            >
              <Text fontSize="15">
                Thank you for your inquiry! We will get back to you at our
                earliest.
              </Text>
            </Box>
          )}
        </ModalBody>

        <ModalFooter>
          {active <= 2 && (
            <Button
              w="100%"
              fontSize="15"
              backgroundColor="blue.700"
              color="gray.200"
              _focus={{ outline: "none" }}
              _hover={{ backgroundColor: "none" }}
              outline="none"
              onClick={(e: any) => handleNext(e)}
              disabled={
                toilet < 1 ||
                (active === 3 && contact.name === "") ||
                undefined ||
                (active === 3 && contact.email === "") ||
                undefined ||
                (active === 3 && contact.phone === undefined) ||
                isLoading
              }
            >
              {"Next"}
              {isLoading && <Spinner ml={3} />}
            </Button>
          )}
          {active === 3 && (
            <Button
              w="100%"
              fontSize="15"
              backgroundColor="blue.700"
              color="gray.200"
              isDisabled={
                contact.name === "" ||
                undefined ||
                contact.email === "" ||
                undefined ||
                contact.phone === "" ||
                undefined
              }
              _focus={{ outline: "none" }}
              _hover={{ backgroundColor: "none" }}
              outline="none"
              onClick={(e) => handleClick(e)}
            >
              Submit
              {isLoading && <Spinner ml={3} />}
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RequestQuote;
