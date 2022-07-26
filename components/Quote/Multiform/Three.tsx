import { Box, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { MdKeyboardBackspace } from "react-icons/md";

interface Props {
  active: number;
  setActive: any;
  contact:{
    name: string;
    email:string;
    phone:number
    address:string;
  }
  setContact:any
}

const Three = ({contact, setContact, active, setActive }: Props) => {

  useEffect(() => {
      console.log(contact.name, contact.email, contact.phone)
  }, [contact])
  
  return (
    <Box color="gray.500">
      <Flex
        gap={3}
        color="red.300"
        alignItems="center"
        justifyContent="right"
        textAlign="right"
        onClick={() => active > 0 && setActive(active - 1)}
      >
        <MdKeyboardBackspace />
        <Text fontSize="14">Go back</Text>
      </Flex>
      <Heading fontSize="16" fontWeight="semibold">
        Contact Details
      </Heading>

      <Flex flexDirection="column" gap={3} my={4}>
        <Input size="sm" onChange={(e) => setContact({...contact, name:e.target.value})} value={contact?.name} placeholder="Full name" />
        <Input size="sm" onChange={(e) => setContact({...contact, email:e.target.value})} value={contact?.email} placeholder="Email " />
        <Input size="sm" onChange={(e) => setContact({...contact, phone:e.target.value})} value={contact?.phone} placeholder="Phone" />
        <Input size="sm" onChange={(e) => setContact({...contact, address:e.target.value})} value={contact?.address} placeholder="Address" />
      </Flex>
    </Box>
  );
};

export default Three;
