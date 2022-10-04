import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  toast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiBed } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import {
  MdBalcony,
  MdOutlineBathtub,
  MdOutlineLocalLibrary,
  MdOutlineGarage,
  MdAttachMoney,
} from "react-icons/md";
import { FaToilet } from "react-icons/fa";
import { GiStoneWall } from "react-icons/gi";
import { RiFridgeLine } from "react-icons/ri";
import axios from "axios";
import AlertCialog from "./AlertCialog";
import { ChevronDownIcon, WarningIcon, AddIcon } from "@chakra-ui/icons";
import { saveAs } from "file-saver";
import QuoteAccordion from "./QuoteAccordion";
import uuid from "react-uuid";
import { useAppSelector } from "../app/hooks";
import DatePicker from "./SubComp/DatePicker";
import { AiOutlineCalendar } from "react-icons/ai";
const dataItems = [
  {
    id: 1,
    title: "Bedroom/s",
    ley: "bedrooms",
    icon: BiBed,
  },
  {
    id: 2,
    title: "Bathroo/s",
    ley: "bathrooms",
    icon: MdOutlineBathtub,
  },
  {
    id: 3,
    title: "Balcony",
    icon: MdBalcony,
  },
  {
    id: 4,
    title: "Separate Toilet",
    icon: FaToilet,
  },
  {
    id: 4,
    title: "Study Room",
    icon: MdOutlineLocalLibrary,
  },
  {
    id: 5,
    title: "Wall Wash",
    icon: GiStoneWall,
  },
  {
    id: 6,
    title: "Fridge",
    icon: RiFridgeLine,
  },
  {
    id: 7,
    title: "Garage",
    icon: MdOutlineGarage,
  },
];

// interface Result {
//   bathrooms: Number;
//   bedrooms: Number;
//   createdAt: Date;
//   email: String;
//   invoice_inr: number;
//   notes: [];
//   paid: Number;
//   phone: String | Number;
//   products: [];
//   quoteReference: String;
//   service: String;
//   subtotal: Number;
//   timelines: [];
//   updatedAt: Date;
//   __v: Number;
//   _id: String;
// }
// [];

function MainQuote({ isOk, onStop, id, pageNumber, search }) {
  const [result, setResult] = useState([]);
  const [stan, setStan] = useState(dataItems);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [noteInput, setNoteInput] = useState("");
  const [post, setPost] = useState(false);
  const [date, setDate] = useState(new Date());

  const user = useAppSelector((state) => state.user) || undefined;

  // const handlePdf = async (e: any) => {
  //   e.preventDefault();

  //   const data = await axios.get(`http://localhost:3001/v1/quote/aldi`, {
  //       method: "GET",
  //       responseType: "blob", // important
  //     })
  // };

  const handleBooking = async () => {
    try {
      const result = await axios.post(
        `https://wedo-backend.herokuapp.com/v1/booking/${id}`
      );
      console.log(result.data.status);
      if (result.data.status === "success") {
        addBookingTimeline();
        await axios
          .put(`https://wedo-backend.herokuapp.com/v1/quote/${id}`, {
            bookingReference: result.data.bookingReference,
          })
          .then((data) => {
            data.data.status === "success";
            fetchData();
          });
      }

      // toast({
      //   title: "Booking Created",
      //   description: "Booking has been succesfully created",
      //   status: "success",
      //   duration: 2000,
      //   isClosable: true,
      // });
    } catch (error) {
      console.log(error);
    }
  };

  const addBookingTimeline = async () => {
    let timelines = {};
    timelines = {
      timelines: [
        ...result[0].timelines,
        {
          id: uuid(),
          title: "Booking Created.",
          date: new Date(),
          createdBy: user?.user?.name,
          icon: "GiConfirmed",
        },
      ],
    };
    console.log(timelines);
    await axios
      .put(`https://wedo-backend.herokuapp.com/v1/quote/${id}`, timelines)
      .then((data) => {
        data.data.status === "success";
        fetchData();
      });
  };
  const saveFile = () => {
    saveAs(
      `https://wedo-backend.herokuapp.com/v1/quote/aldi/${id}`,
      "quote.pdf"
    );
  };
  const addNote = async () => {
    let notes = {};
    noteInput === ""
      ? alert("Please fill in the post")
      : (notes = {
          notes: [
            ...result[0].notes,
            {
              id: uuid(),
              title: noteInput,
              clientId: user.user._id,
              name: user.user.name,
              email: user.user.email,
              createdAt: Date(),
            },
          ],
        });

    setPost(true);
    await axios
      .put(`https://wedo-backend.herokuapp.com/v1/quote/${id}`, notes)
      .then((data) => {
        data.data.status === "success" && setNoteInput("");
        fetchData();
        setPost(false);
      });
  };
  const fetchData = async () => {
    await axios
      .get(`https://wedo-backend.herokuapp.com/v1/quote/${id}`)
      .then((data) => setResult(data.data.result));
  };
  useEffect(() => {
    id && fetchData();
  }, [id]);
  return (
    <Box m={10}>
      <Modal
        isOpen={isOk}
        onClose={onStop}
        size="lg"
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="16px">Quote Details</ModalHeader>
          <ModalCloseButton _focus={{ outline: "hidden", border: "none" }} />
          <ModalBody>
            <AlertCialog
              search={search}
              pageNumber={pageNumber}
              isOpen={isOpen}
              id={id}
              onStop={onStop}
              onClose={onClose}
              cancelRef={cancelRef}
            />

            {result &&
              result.map((item) => (
                <Box key={item._id}>
                  <Flex alignItems="bottom" justifyContent="space-between">
                    <Box
                      borderBottom="1px solid gray"
                      borderColor="gray.200"
                      pb={4}
                    >
                      <Flex
                        fontSize="12px"
                        color="gray.500"
                        fontWeight="semibold"
                        gap="2"
                        fontFamily="sans-serif"
                        alignItems="center"
                      >
                        <Text>SERVICE</Text>
                        <GoPrimitiveDot />
                        <Text>
                          {item.service === "endoflease"
                            ? "End of Lease"
                            : "General Clean"}{" "}
                        </Text>
                      </Flex>
                      <Heading mt={3} fontSize="16px">
                        {item.service === "endoflease"
                          ? "End of Lease Clean"
                          : "General Clean"}
                      </Heading>
                      {item.bookingReference ? (
                        <Flex my={2.5}>
                          <Box
                            fontSize="9px"
                            bg="green.500"
                            color="white"
                            py={1}
                            rounded="full"
                            letterSpacing={1}
                            px={2}
                          >
                            Booking Confirmed
                          </Box>
                        </Flex>
                      ) : (
                        "l"
                      )}
                    </Box>
                    <Flex
                      fontSize="13px"
                      mt={"29px"}
                      fontWeight="light"
                      color="gray.500"
                      fontFamily="sans-serif"
                    >
                      <Text mr={2} fontSize="13px">
                        Quote Ref:
                      </Text>
                      {item.quoteReference && item.quoteReference}
                    </Flex>
                  </Flex>
                  <Box
                    borderBottom="1px solid gray"
                    borderColor="gray.200"
                    py={4}
                  >
                    <Flex
                      fontSize="12px"
                      color="gray.500"
                      fontWeight="semibold"
                      gap="2"
                      fontFamily="sans-serif"
                      alignItems="center"
                    >
                      <Text>CLIENT</Text>
                    </Flex>
                    <Flex justifyContent="space-between">
                      <Flex mt={3} fontSize="16px" alignItems="left" gap={2}>
                        <Image
                          src={
                            "data:image/png;base64,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"
                          }
                          alt={"lkj"}
                          h="12"
                          w="12"
                        />
                        <Box>
                          <Text fontWeight="semibold" fontSize="14px">
                            {item.name}
                          </Text>
                          <Text fontSize="13px" color="gray.500">
                            {item.email}
                          </Text>
                          <Text fontSize="13px" color="gray.500">
                            {item.phone}
                          </Text>
                        </Box>
                      </Flex>
                      <Box mt={14}>
                        <Menu size="sm">
                          <MenuButton
                            fontSize="12px"
                            _focus={{ outline: "none" }}
                            fontWeight="light"
                            p={2.5}
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                          >
                            Actions
                          </MenuButton>
                          <MenuList fontSize="12px">
                            <MenuItem onClick={saveFile}>Download PDF</MenuItem>
                            <MenuItem>Send Email</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem onClick={onOpen}>Delete</MenuItem>
                            <MenuItem onClick={handleBooking}>
                              Create a Booking{" "}
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </Box>
                    </Flex>
                  </Box>
                  <Box
                    borderBottom="1px solid gray"
                    borderColor="gray.200"
                    py={4}
                  >
                    <Flex
                      fontSize="12px"
                      color="gray.500"
                      fontWeight="semibold"
                      gap="2"
                      fontFamily="sans-serif"
                      alignItems="center"
                    >
                      <Text>REQUESTED SERVICES</Text>
                    </Flex>
                    <Grid templateColumns="repeat(2, 2fr)" gap={4}>
                      <GridItem colspan={2}>
                        <Flex
                          alignitems="center"
                          gap={3}
                          fontSize="14px"
                          color="purple.500"
                          my={2}
                        >
                          <Text
                            fontWeight="semibold"
                            fontSize="13px"
                            fontFamily="sans-serif"
                            color="gray.500"
                          >
                            {item.products.map((lap) => (
                              <Flex
                                gap={8}
                                key={lap.id}
                                justifyContent="space-between"
                              >
                                <Text style={{ marginRight: "10px" }}>
                                  {lap.quantity > 0 && lap.description}
                                </Text>
                                <Text fontWeight="light">
                                  {lap.quantity > 0 && lap.quantity}
                                </Text>
                              </Flex>
                            ))}
                          </Text>
                        </Flex>
                        <Flex
                          alignitems="center"
                          gap={3}
                          fontSize="14px"
                          color="purple.400"
                          my={2}
                        >
                          <Box
                            fontWeight="semibold"
                            fontSize="13px"
                            fontFamily="sans-serif"
                          >
                            {/* {item.bathrooms > 0 && item.bathrooms} */}
                          </Box>
                          <Text
                            fontWeight="semibold"
                            fontSize="13px"
                            fontFamily="sans-serif"
                            color="gray.500"
                          ></Text>
                        </Flex>
                      </GridItem>
                    </Grid>
                  </Box>
                  <Box
                    borderBottom="1px solid gray"
                    borderColor="gray.200"
                    py={4}
                  >
                    <Flex
                      fontSize="12px"
                      color="gray.500"
                      fontWeight="semibold"
                      gap="2"
                      fontFamily="sans-serif"
                      alignItems="center"
                    >
                      <Text>COST</Text>
                    </Flex>
                    <Flex
                      color="green.400"
                      mt={3}
                      fontSize="18px"
                      alignItems="center"
                      gap={2}
                    >
                      <MdAttachMoney />

                      <Box>
                        <Text fontWeight="semibold" fontSize="14px">
                          {item?.subtotal?.toString().split("", 3)}
                        </Text>
                      </Box>
                      <Text fontSize="10px" color="gray.400">
                        excl. GST
                      </Text>
                    </Flex>
                  </Box>

                  <Box
                    borderBottom="1px solid gray"
                    borderColor="gray.200"
                    py={4}
                  >
                    <Flex
                      fontSize="12px"
                      color="gray.500"
                      fontWeight="semibold"
                      gap="2"
                      fontFamily="sans-serif"
                      alignItems="center"
                    >
                      <Text>DATE AND TIME</Text>
                    </Flex>
                    <Flex
                      color="purple.400"
                      mt={3}
                      fontSize="18px"
                      alignItems="center"
                      gap={2}
                    >
                      <AiOutlineCalendar />
                      <Box>
                        <Text fontWeight="semibold" fontSize="14px">
                          <DatePicker date={date} setDate={setDate} />
                        </Text>
                      </Box>
                      <Text fontSize="12px" color="gray.600">
                        09:00 AM
                      </Text>
                    </Flex>
                  </Box>

                  <QuoteAccordion
                    noteInput={noteInput}
                    setNoteInput={setNoteInput}
                    timelines={item.timelines}
                    notes={item.notes}
                    addNote={addNote}
                    post={post}
                    user={user}
                    setPost={setPost}
                  />
                </Box>
              ))}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={onStop}
              fontWeight="light"
              bg="purple.500"
              fontSize="14px"
            >
              Close
            </Button>
            <Button
              colorScheme="red"
              onClick={onOpen}
              fontSize="14px"
              fontWeight="light"
            >
              Delete Customer
            </Button>
          </ModalFooter>
          {/* {toastTime &&
            toast({
              title: "Quote Deleted.",
              description: "Quote has been succesfully deleted.",
              status: "success",
              duration: 2000,
              isClosable: true,
            })} */}
        </ModalContent>
      </Modal>
    </Box>
  );
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(
//     `http:localhost:3001/v1/quote/62df73c0b394b66da04723bd}`
//   );
//   const data = await res.json();
//   console.log(data);
//   // Pass data to the page via props
//   return { props: { data } };
// }

export default MainQuote;
