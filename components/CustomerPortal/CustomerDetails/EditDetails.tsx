import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../Admin/app/hooks";
import { updateDetails } from "../api/portalApi";

interface Contacts {
  name: string;
  email: string;
  address: string;
  suburb: string;
  postcode: string;
  mobile: string;
}

const EditDetails = () => {
  const user = useAppSelector((state) => state.user);
  const data = {
    name: user?.user.name,
    email: user.user.email,
    address: user.user.address ? user.user.address : '',
    suburb: user.user.suburb ? user.user.suburb : '',
    postcode: user.user.postcode ? user.user.postcode : '',
    mobile: user.user.mobile ? user.user.mobile : '',
  };
  const [contact, setContact] = useState<Contacts>(data);
  const handleUpdate = (id:string) => {
    updateDetails(id, contact)
  }

  useEffect(() => {
    user && setContact(data)
  }, [user]);
  return (
    <Box h="60vh" mx={{ md: "auto" }}>
      <Heading fontSize="24px" textAlign="center">
        Edit Details{" "}
      </Heading>
      <Stack spacing={4} my={6} mx={{ md: "auto" }}>
        <InputGroup w={{ md: "50%" }}>
          <InputLeftAddon children="Full Name" />
          <Input
            type="name"
            placeholder="Full Name"
            value={contact?.name}
            onChange={(e) =>
              setContact({
                ...contact,
                name: e.target.value,
              })
            }
          />
        </InputGroup>

        {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
        <InputGroup w={{ md: "50%" }} size="sm">
          <InputLeftAddon fontSize="16px" w="110px" children="Email" />
          <Input placeholder={contact?.email}  value={contact.email}
            onChange={(e) =>
              setContact({
                ...contact,
                email: e.target.value,
              })
            } />
        </InputGroup>
        <InputGroup w={{ md: "50%" }} size="sm">
          <InputLeftAddon fontSize="16px" w="110px" children="Address" />
          <Input placeholder="e.g. 1/2 John Street"  value={contact.address}
            onChange={(e) =>
              setContact({
                ...contact,
                address: e.target.value,
              })
            } />
        </InputGroup>
        <InputGroup w={{ md: "50%" }} size="sm">
          <InputLeftAddon fontSize="16px" w="110px" children="Suburb" />
          <Input placeholder="Suburb"  value={contact.suburb}
            onChange={(e) =>
              setContact({
                ...contact,
                suburb: e.target.value,
              })
            } />
        </InputGroup>
        <InputGroup w={{ md: "50%" }} size="sm">
          <InputLeftAddon fontSize="16px" w="110px" children="Postcode*" />
          <Input placeholder="e.g. 2000"  value={contact.postcode}
            onChange={(e) =>
              setContact({
                ...contact,
                postcode: e.target.value,
              })
            } />
        </InputGroup>
        <Stack spacing={3}>
          <Select w={{ md: "50%" }} size="sm" _focus={{ outline: "none" }}>
            <option value="NSW">NSW</option>
            <option value="VIC">VIC</option>
            <option value="QLD">QLD</option>
            <option value="ACT">ACT</option>
          </Select>
        </Stack>
        <InputGroup w={{ md: "50%" }} size="sm">
          <InputLeftAddon fontSize="16px" w="110px" children="Mobile" />
          <Input placeholder="+61 434343433"  value={contact.mobile}
            onChange={(e) =>
              setContact({
                ...contact,
                mobile: e.target.value,
              })
            } />
        </InputGroup>
      </Stack>
      <Button textAlign="center" colorScheme="blue" onClick={()=>handleUpdate(user.user._id)}>
        Update
      </Button>
    </Box>
  );
};

export default EditDetails;
