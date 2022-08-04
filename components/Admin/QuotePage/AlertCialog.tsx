import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  useToast,
  Spinner
} from "@chakra-ui/react";
import React, {useState} from "react";
import axios from "axios";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchAllQuotes } from "./quoteAction";


function AlertCialog({ isOpen, onClose, cancelRef, id, onStop, search, pageNumber, }) {
  const dispatch = useAppDispatch();
  const toast = useToast()
  const [waiting, setWaiting] = useState(false)

  const handleDelete = async (e: any) => {
    e.preventDefault();
    setWaiting(true)
    const result = await axios.delete(`https://wedo-backend.herokuapp.com/v1/quote/${id}`, {
      headers: {
        Authorization: sessionStorage.getItem("accessJWT"),
      },
    });
    console.log(result.data.status);
    if (result?.data.status === "success") {
      onClose();
      setWaiting(false)
      onStop()
      toast({
        title: "Quote Deleted.",
        description: "Quote has been succesfully deleted.",
        status: "success",
        duration: 2000,
        isClosable: true,
      })
      dispatch(fetchAllQuotes(pageNumber, search));

    } else {
      alert('something went wrong...')
    }
  };
  return (
    <Box>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        {" "}
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure ? You cant undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                fontSize="12px"
                fontWeight="light"
                ref={cancelRef}
                onClick={onClose}
                _focus={{ outline: "none" }}
              >
                Cancel
              </Button>
              <Button
                fontSize="12px"
                fontWeight="light"
                colorScheme="red"
                onClick={(e) => handleDelete(e)}
                ml={3}
                _focus={{ outline: "none" }}
              >
               {waiting ?  <Spinner thickness='2px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='sm'/>: 'Delete'}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
}

export default AlertCialog;
