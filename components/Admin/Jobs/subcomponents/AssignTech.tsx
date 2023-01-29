import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { async } from "@firebase/util";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";

const AssignTech = ({ isOpen, onClose, details }) => {
  console.log("umesh", details);
  const [techs, setTechs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTech, setSelectedTech] = useState<any>([]);
  const toast = useToast();
  const router = useRouter();

  const updateTech = async () => {
    const result = await axios.put(
      `https://wedo-backend.herokuapp.com/v1/booking/${details._id}`,
      {
        assignedTech: selectedTech,
      }
    );
    if (result.data.status === "success") {
      onClose();
      toast({
        position: "bottom-left",
        render: () => (
          <Box w={"250px"} bg="white" rounded="xl" mt={4}>
            <Text
              color="white"
              py={2}
              fontWeight="semibold"
              roundedTop={"xl"}
              bg="blue.700"
              textAlign="center"
            >
              Alert
            </Text>
            <Text fontSize="13px" py={4} px={4}>
              Succesfully assigned Technician.
            </Text>
          </Box>
        ),
        duration: 6000,
        isClosable: true,
      });
    }
    router.replace(router.asPath);
  };

  useEffect(() => {
    const fetchTechnician = async () => {
      const data = await axios
        .get("https://wedo-backend.herokuapp.com/v1/technician/all?page=1&limit=6")
        .then((data) => {
          setTechs(data.data.paginatedResults);
          console.log(techs);
        });
    };

    // const selectedTech = () => {
    //   details?.assignedTech?.length > 0 &&
    //     setSelectedTech(...details.assignedTech);
    // };

    fetchTechnician();
    // selectedTech();
  }, []);

  useEffect(() => {
    details?.assignedTech?.length > 0 &&
      setSelectedTech(details.assignedTech[0]);
  }, [details.assignedTech]);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Flex flexDir="column">
          <ModalHeader bg="#013d82" color="white">
            <Text fontSize="15">Assign technician</Text>
          </ModalHeader>
          <ModalCloseButton
            _focus={{ outline: "none" }}
            size="sm"
            color="white"
            pt={4}
          />
        </Flex>
        <ModalBody>
          <Box my={6}>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              fontSize="14"
            >
              <Text fontWeight="semibold">Technicians</Text>
              <Flex
                alignItems="center"
                gap={2}
                cursor="pointer"
                onClick={() => setSelectedTech([])}
              >
                <Text textDecoration="underline">Reset selected tech</Text>
                <FiRefreshCcw fontSize="md" />
              </Flex>
            </Flex>
          </Box>
          <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={8}>
            {techs ? (
              techs?.map((item) => (
                <GridItem
                  border={
                    selectedTech?._id === item._id ? "2px solid gray" : "white"
                  }
                  borderColor="#013d82"
                  rounded="lg"
                  // bg={selectedTech?._id === item._id ? "red.300" : "white"}
                  onClick={() => setSelectedTech({ ...item })}
                  px={5}
                  key={item._id}
                  textAlign="center"
                  py={4}
                  shadow={ selectedTech?._id === item._id ? "lg" : "sm"}
                  cursor="pointer"
                >
                  <Image
                    maxW="60px"
                    mx="auto"
                    border={ selectedTech?._id === item._id ? "2px solid gray" : "1px solid blue"}
                    borderColor="#013d82"
                    rounded="full"
                    src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg"
                  />
                  <Text
                    mt={2}
                    fontSize="12"
                    fontWeight="semibold"
                    color="blue.700"
                  >
                    {item.firstName} {item.lastName}
                  </Text>
                </GridItem>
              ))
            ) : (
              <Spinner />
            )}
          </Grid>
        </ModalBody>

        <ModalFooter
          borderTop="1px solid gray"
          borderColor="gray.400"
          my={3}
          mt={10}
        >
          <Button bg="none" fontSize="13" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button
            _hover={{ bg: "blue.700" }}
            fontSize="13"
            bg="#013d82"
            color="white"
            rounded="full"
            onClick={updateTech}
            px={6}
          >
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AssignTech;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://wedo-backend.herokuapp.com/v1/technician/all?page=1&limit=2`
  );
  // const res = await fetch(`http://localhost:3001/v1/booking/${id}`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
