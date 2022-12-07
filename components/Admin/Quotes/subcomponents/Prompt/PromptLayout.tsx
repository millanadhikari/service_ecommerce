import {
  Box,
  Button,
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
import React from "react";

const PromptLayout = ({ isOpen, onClose, layout, isLoading, title }) => {
  return (
    <Box>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="blue.900" color="white" textAlign="center">
            Are you sure?
          </ModalHeader>
          <ModalCloseButton color="white" _focus={{ outline: "none" }} mt={2} />
          <ModalBody borderBottom="1px solid gray" borderColor="gray.300">
            <Box textAlign={"center"} fontSize="14px" py={6}>
              <Text>
                Do you want to {title} this quote? This cannot be undone.
              </Text>
              <Text> If so, please CONFIRM below </Text>
            </Box>
          </ModalBody>

          <ModalFooter mx="auto" my={3}>
            <Button
              bg="blue.700"
              px={8}
              size="sm"
              onClick={layout}
              fontSize="13px"
              _hover={{ bg: "blue.800" }}
              _focus={{ outline: "none" }}
              color="gray.100"
              rounded="full"
              variant="ghost"
            >
              {isLoading ? <Spinner /> : "Confirm"}
            </Button>
            <Button
              size="sm"
              ml={5}
              fontSize="13px"
              rounded="full"
              _focus={{ outline: "none" }}
              bg="none"
              mr={3}
              onClick={() => onClose(!isOpen)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PromptLayout;
