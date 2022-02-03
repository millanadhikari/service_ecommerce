import { CheckIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Tooltip } from '@chakra-ui/react';
import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import Assignee from './Assignee';
import Priority from './Priority';

function SingleBookings({ modal, setModal, single, setSingle }) {
    return <>

        <Modal closeOnOverlayClick={false} isOpen={modal} onClose={() => setModal(!modal)} size='full' isCentered  >
            <ModalOverlay />
            <ModalContent fontFamily="sans-serif" mx={{ base: 2, md: 10, lg: 20, xl: 40 }} rounded="md" m={6}>
                <Box borderBottom="1px solid gray" roundedTop="2xl" borderColor="gray.300" backgroundColor="gray.200">
                    <ModalHeader fontSize="15px"  >
                        Booking</ModalHeader>
                    <ModalCloseButton backgroundColor="white" border="1px solid gray" borderColor="gray.300" /></Box>
                <ModalBody py={6} px={0}>
                    <Flex w="100%">
                        <Box w="100%">
                            <Flex alignItems="center" w="100%" gap={6} borderBottom="1px solid gray" borderColor="gray.300" px={6} py={4} pb={6} >
                                <Flex alignItems="center" gap={4} w="90%" >
                                    {!single.completed ? <Tooltip label="Toggle booking status" placement="top">
                                        <Box fontSize="12px"
                                            onClick={() => setSingle({ ...single, completed: true })}
                                            border="1px solid gray"
                                            p={2} color="gray.400" borderColor="gray.400" cursor="pointer" _hover={{ color: "green.400", borderColor: "green.400" }}>
                                            <CheckIcon mr="6px" />
                                            MARK COMPLETE
                                        </Box>
                                    </Tooltip> : <Tooltip label="Toggle booking status" placement="top">
                                        <Box fontSize="12px"
                                            onClick={() => setSingle({ ...single, completed: false })}

                                            border="1px solid gray"
                                            p={2} color="green.400" borderColor="green.400" cursor="pointer" _hover={{ color: "green.400", borderColor: "green.400" }}>
                                            <CheckIcon mr="6px" />
                                            COMPLETED
                                        </Box>
                                    </Tooltip>}
                                    <Tooltip label="Assign" placement="top" cursor="pointer">
                                        <span> <Assignee /></span>
                                    </Tooltip>
                                    <Tooltip label={single.priority === "Clear" ? 'Set Priority' : single.priority} placement="top" cursor="pointer">
                                        <span> <Priority single={single} setSingle={setSingle} />
                                        </span>
                                    </Tooltip>

                                </Flex>
                                <Tooltip cursor="pointer" label="Settings" placement="top" >
                                    <span><FiMoreHorizontal /></span></Tooltip>

                            </Flex>
                            <Box p={6}>
                                <Box mb={4}>
                                    Booking Ref: Bk{single.id}
                                </Box>
                                <Box>
                                    <Heading fontSize="22px">{single.description}</Heading>
                                    <Text>{single.address}</Text>
                                    <Flex>Bathroom: 2</Flex>
                                    <Flex>Bedroom: 2</Flex>
                                </Box>
                                <Box m={4} >
                                   <Text > Addons:</Text>
                                    <Text>Garage x 1</Text>
                                    <Text>Blinds x 3</Text>
                                    <Text>Outside Window x 1</Text>
                                </Box>
                                <Box m={4} >
                                   <Text fontWeight="semibold" > Total Paid: $580</Text>
                                   
                                </Box>

                                <Box m={4} >
                                   <Text > Customer Details:</Text>
                                    <Text>Name: {single.customerName}d</Text>
                                    <Text>Email: {single.customerEmail}</Text>
                                    <Text>Phone: {single.customerPhone}</Text>
                                </Box>


                            </Box>
                        </Box>
                        <Box></Box>

                    </Flex>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3}>
                        Save
                    </Button>
                    <Button onClick={() => setModal(!modal)}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
}

export default SingleBookings;
