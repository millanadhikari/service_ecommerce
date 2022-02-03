import React, { useState } from 'react';
import { Box, Flex, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Tooltip } from '@chakra-ui/react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import { FiFlag } from 'react-icons/fi';
import { BsFillFlagFill } from 'react-icons/bs';

const codes = [
    { id: 1, name: "Urgent", initial: "MA", color: "red" },
    { id: 2, name: "High", initial: "YA", color: "yellow" },

    { id: 3, name: "Normal", initial: "LA", color: "teal" },

    { id: 4, name: "Low", initial: "RA", color: "gray" },
    { id: 5, name: "Clear", initial: "RA", color: "gray.300" },

]



const Priority = ({ single, setSingle }) => {
    const [isOpen, setIsOpen] = useState(false)
    const open = () => setIsOpen(!isOpen)
    const close = () => setIsOpen(false)
    return  <Popover isOpen={isOpen} onClose={close}>
            <PopoverTrigger>
                <Box cursor="pointer" fontSize={28} color="gray.400" onClick={open}>
                    {single.priority === "Clear" && <Box border="0.5px dotted gray" p={2} rounded="full" color="gray"><span><FiFlag fontSize="13px" /></span></Box>}
                    {single.priority === "Urgent" && <Box border="0.5px dotted red" p={2} rounded="full" color="red"><BsFillFlagFill fontSize="13px" /></Box>}
                    {single.priority === "High" && <Box border="0.5px dotted yellow" p={2} rounded="full" color="yellow"><BsFillFlagFill fontSize="13px" /></Box>}

                    {single.priority === "Normal" && <Box border="0.5px dotted teal" p={2} rounded="full" color="teal"><BsFillFlagFill fontSize="13px" /></Box>}

                    {single.priority === "Low" && <Box border="0.5px dotted gray" p={2} rounded="full" color="gray"><BsFillFlagFill fontSize="13px" /></Box>}

                </Box>
            </PopoverTrigger>
            <PopoverContent w="200px" _focus={{ borderColor: "white" }} boxShadow="md">
                <PopoverArrow />


                <PopoverBody initialFocusRef="false">
                    {codes.map((item) => (
                        <Flex cursor="pointer" key={item.id} alignItems="center" my={4} mx={4} onClick={() => ( setSingle({ ...single, priority: item.name }), setIsOpen(!isOpen))}>
                            <Box mr={3} color={item.color}><BsFillFlagFill /></Box>
                            {item.name}
                        </Flex>
                    ))}
                </PopoverBody>
            </PopoverContent>
        </Popover>
};

export default Priority;
