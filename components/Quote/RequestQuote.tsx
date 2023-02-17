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
import axios from "axios";
import React, { useEffect, useState } from "react";
import MultiForm from "./Multiform/MultiForm";

interface Props {
  quote: boolean;
  setQuote: any;
}

const mockData = {
  bathrooms: 0,
  bedrooms: 0,
  email: "",
  companyName: "",
  firstName: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  postcode: "NSW",
  startHour: "09",
  startMin: "00",
  startMode: "AM",
  endHour: "12",
  endMin: "00",
  endMode: "PM",
  bookingDate: new Date(),
  subscription: "One Time Cleaning",
  customerNotes: "",
  service: "end of lease",
  notes: [],
  phone: "",
  products: [],
  quoteStatus: "",
  totals: [
    {
      _id: 1,
      title: 'Base Price',
      amount: 0,
      quantity: 0
    },
    {
      _id: 2,
      title: '1 Bathroom',
      amount: 0,
      quantity: 0
    },
    {
      _id: 3,
      title: '1 Bedroom',
      amount: 100,
      quantity: 0
    },
    {
      _id: 4,
      title: 'Extras',
      amount: 0,
      quantity: 0
    },
    {
      _id: 5,
      title: 'Tip',
      amount: 0,
      quantity: 0
    },
    {
      _id: 6,
      title: 'To be paid by customer',
      amount: 0,
      quantity: 0
    }
  ]
};
const RequestQuote = ({ quote, setQuote }: Props) => {
  const [display, setDisplay] = useState(mockData);

  const [active, setActive] = useState(1);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchProducts = async () => {
    await axios.get("https://wedo-backend.herokuapp.com/v1/product").then((data: any) => {
      setDisplay({ ...display, products: [...data?.data.result] });
    });
  };

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
      // const body = {
      //   fullName: contact.name,
      //   email: contact.email,
      //   phone: contact.phone,
      //   bedrooms: bedroom,
      //   bathrooms: toilet,
      //   balcony: balcony,
      //   separateToilet: separateToilet,
      //   studyRoom: studyRoom,
      //   wallWash: wallWash,
      //   fridge: fridge,
      //   garage: garage,
      //   blinds: blinds,
      //   steamLiving: steamLiving,
      //   steamBedroom: steamBedroom,
      //   steamHallway: steamHallway,
      //   steamStairs: steamStairs,
      //   service: service,
      // };
      await fetch("https://wedo-backend.herokuapp.com/v1/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(display),
      });
      setActive(active + 1);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleQuote = () => {
    setQuote(!quote);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log('akash', display)
  }, [display])
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
            display={display}
            setDisplay={setDisplay}
            active={active}
            setActive={setActive}
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
                (active === 3 && display.firstName === "") ||
                undefined ||
                (active === 3 && display.email === "") ||
                undefined ||
                (active === 3 && display.phone === undefined) ||
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
                display.firstName === "" ||
                undefined ||
                display.email === "" ||
                undefined ||
                display.phone === "" ||
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
