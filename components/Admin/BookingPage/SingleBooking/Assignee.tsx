import { Box, Flex, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';

const team = [
    {id:1, name:"Milan Adhikari", initial:"MA"},
    {id:2, name:"Yogen Adhikari", initial:"YA"},

    {id:3, name:"Lochan Adhikari", initial:"LA"},

    {id:4, name:"Renuka Adhikari", initial:"RA"},


]

const Assignee = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Box fontSize="17px" rounded="full" border="0.5px dotted gray" p={2} color="gray.400">
                    <AiOutlineUserAdd />
                </Box>
            </PopoverTrigger>
            <PopoverContent   _focus={{borderColor:"white"}} boxShadow="md">
                <PopoverArrow />
               
                <PopoverHeader>
                  <Flex alignItems="center">
                  <BiSearchAlt fontSize="17px" />
                    <Input placeholder='Search...' border="none" _focus={{borderColor:"white"}}/>
                  </Flex>
                </PopoverHeader>
                <PopoverBody>
                    {team.map((item) => (
                       <Flex  key={item.id} alignItems="center" my={2}>
                           <Flex mr={2} alignItems="center" justifyContent="center" fontSize="12px" color="white" backgroundColor="red" rounded="full" h={10} w={10}>
                            {item.initial}
                       </Flex>
                       {item.name}
                       </Flex>
                    ))}
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
};

export default Assignee;
