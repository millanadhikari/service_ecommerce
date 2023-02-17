import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  toast,
  useMenuState,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiHelpCircle } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import uuid from "react-uuid";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import storage from "../../../../../firebaseConfig";

const Notes = ({ details, setDetails }) => {
  const [input, setInput] = useState("");
  const [isLoading, setLoading] = useState<Boolean>(false);
  const router = useRouter();
  const toast = useToast();
  const [selectedFile, setSelectedFile] = useState();
  const [imgUrl, setImgUrl] = useState(null);

  let options = { year: "numeric", month: "long", day: "numeric" };

  const handleNote = async () => {
    setLoading(true);
    const result = await axios.put(
      `https://wedo-backend.herokuapp.com/v1/booking/${details._id}`,
      {
        notes: [
          ...details?.notes,
          { id: uuid(), text: input, addedDate: new Date() },
        ],
      }
    );

    if (result.data.status === "success") {
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
              Successfully Added New Note.
            </Text>
          </Box>
        ),
        duration: 6000,
        isClosable: true,
      });
      setInput("");
      setLoading(false);
      router.replace(router.asPath);
    }
  };

  const deleteNote = async (id) => {
    console.log(details.notes);
    let maya = details?.notes?.filter((item) => item.id !== id);

    const result = await axios.put(
      `https://wedo-backend.herokuapp.com/v1/booking/${details._id}`,
      {
        notes: [...maya],
      }
    );
    router.replace(router.asPath);
  };
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
    console.log("file selected", e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];
    if (!file) return;
    const storageRef = ref(storage, `files/bookings/img/${file.name}`);
    // const deleteRef = ref(storage, user.profilePic?.src);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        // setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          setImgUrl(downloadURL);
          downloadURL &&
            (await axios.put(
              `https://wedo-backend.herokuapp.com/v1/booking/${details._id}`,
              {
                files: [...details?.files, downloadURL],
              }
            ));
          setSelectedFile(undefined);
          router.replace(router.asPath);
        });
      }
    );
  };

  const deleteImage = (url) => {
    const deleteRef = ref(storage, url);
    deleteObject(deleteRef).then(async () => {
      let maya = details?.files.filter((item) => url !== item);
      await axios.put(
        `https://wedo-backend.herokuapp.com/v1/booking/${details._id}`,
        {
          files: [...maya],
        }
      );
      router.replace(router.asPath);
    });
  };
  const getFileName = (url) => {
    let filename = url.split("%").pop().split("?")[0];
    return filename;
  };
  return (
    <Box
      my={8}
      bg="white"
      py={5}
      mr={{ base: 2, md: "10" }}
      px={6}
      rounded="md"
      shadow="md"
    >
      <Tabs>
        <Flex gap={2} alignItems="center">
          <Flex alignItems="center" w="100%">
            <Flex mb={3} alignItems="center">
              <TabList>
                <Tab _focus={{ outline: "none" }}>
                  <Heading
                    fontSize="15px"
                    alignItems={"center"}
                    color="gray.600"
                  >
                    Internal job notes
                  </Heading>
                </Tab>
                <Text color="gray.400" mt={2} mx={3}>
                  |
                </Text>
                <Tab _focus={{ outline: "none" }}>
                  <Text color="gray.400" fontWeight="semibold" fontSize="14px">
                    Files
                  </Text>
                </Tab>
              </TabList>
            </Flex>
          </Flex>
        </Flex>

        <TabPanels>
          <TabPanel>
            <Flex gap={4}>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add note"
                size="sm"
              ></Input>
              <Button
                bg="blue.700"
                fontSize="13px"
                rounded="full"
                px={6}
                w="100px"
                disabled={input === ""}
                _hover={{ bg: "blue.600", color: "gray.200" }}
                onClick={handleNote}
                _focus={{outline:"none"}}
                size="sm"
                color="white"
              >
                {isLoading ? <Spinner /> : "Save note"}
              </Button>
            </Flex>
            <Box my={6} borderTop="1px solid gray" borderColor="gray.300">
              {details?.notes.map((item) => (
                <Flex
                  alignItems="center"
                  key={item.id}
                  justifyContent="space-between"
                  pt={5}
                  w="60%"
                >
                  <Flex gap={6}>
                    <Text fontWeight="semibold">
                      {item?.addedDate?.toString().substring(0, 10)}
                    </Text>
                    <Text as="i">{item.text}</Text>
                  </Flex>
                  <Box
                    fontSize="18"
                    cursor="pointer"
                    color="gray"
                    _hover={{ color: "red.300" }}
                    onClick={() => deleteNote(item.id)}
                  >
                    <MdDeleteForever />
                  </Box>
                </Flex>
              ))}
            </Box>
          </TabPanel>
          <TabPanel>
            <Box>
              <form className="form" onSubmit={handleSubmit}>
                <Input
                  w="400px"
                  border="none"
                  fontSize="12"
                  type="file"
                  onChange={onSelectFile}
                />
                <Button
                  disabled={selectedFile === undefined}
                  colorScheme="blue"
                  size="sm"
                  type="submit"
                >
                  Upload
                </Button>
              </form>
              <Text as={"em"} fontSize="12">
                0 MB / 10GB
              </Text>
              {details?.files?.length <= 0 ? (
                <Text my={2} fontWeight="semibold">
                  No files or attachments found
                </Text>
              ) : (
                details?.files?.map((item, index) => (
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    borderTop="1px solid gray"
                    borderBottom="1px solid gray"
                    borderColor="gray.300"
                    key={item}
                    py={5}
                    my={4}
                  >
                    <Flex
                      cursor="pointer"
                      gap={6}
                      onClick={() => window.open(item, "_blank")}
                    >
                      <Text>{index + 1}</Text>
                      <Text>{getFileName(item)}</Text>
                    </Flex>
                    <Box
                      fontSize="18"
                      cursor="pointer"
                      color="gray"
                      _hover={{ color: "red.300" }}
                      onClick={() => deleteImage(item)}
                    >
                      <MdDeleteForever />
                    </Box>
                  </Flex>
                ))
              )}
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Notes;
