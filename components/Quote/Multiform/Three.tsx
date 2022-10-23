import { Box, Flex, Heading, Input, Select, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BsDisplay } from "react-icons/bs";
import { MdKeyboardBackspace } from "react-icons/md";

interface Props {
  display: any;
  setDisplay: any;
  active: number;
  setActive: any;
}

const Three = ({
  display,
  setDisplay,

  active,
  setActive,
}: Props) => {
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
        <Flex gap={4}>
          <Input
            size="sm"
            _placeholder={{ fontSize: "13px" }}
            value={display.firstName}
            onChange={(e) =>
              setDisplay({ ...display, firstName: e.target.value })
            }
            placeholder="First Name"
          />
          <Input
            size="sm"
            _placeholder={{ fontSize: "13px" }}
            value={display.lastName}
            onChange={(e) =>
              setDisplay({ ...display, lastName: e.target.value })
            }
            placeholder="Last Name"
          />
        </Flex>
        <Flex gap={4}>
          <Input
            size="sm"
            _placeholder={{ fontSize: "13px" }}
            onChange={(e) => setDisplay({ ...display, email: e.target.value })}
            value={display.email}
            placeholder="Email "
          />
          <Input
            size="sm"
            _placeholder={{ fontSize: "13px" }}
            onChange={(e) => setDisplay({ ...display, phone: e.target.value })}
            value={display?.phone}
            placeholder="Phone"
          />
        </Flex>
        <Flex gap={4}>
          <Input
            size="sm"
            _placeholder={{ fontSize: "13px" }}
            onChange={(e) =>
              setDisplay({ ...display, address1: e.target.value })
            }
            value={display?.address1}
            placeholder="e.g. 7/30 Henley Road"
          />
          <Input
            size="sm"
            _placeholder={{ fontSize: "13px" }}
            onChange={(e) =>
              setDisplay({ ...display, address2: e.target.value })
            }
            value={display?.address2}
            placeholder="Suburb"
          />
        </Flex>
        <Flex gap={4}>
          <Input
            size="sm"
            w="50%"
            _placeholder={{ fontSize: "13px" }}
            onChange={(e) =>
              setDisplay({ ...display, postcode: e.target.value })
            }
            value={display?.postcode}
            placeholder="Post Code"
          />
          <Select
            rounded="md"
            type="number"
            w="50%"
            _focus={{ outline: "none" }}
            name="bathrooms"
            value={display.state}
            size="sm"
            fontSize="12px"
            // onChange={(e) => handleBathroom(e)}
            cursor="pointer"
            borderColor="gray.200"
            color="gray.500"
          >
            {" "}
            <option value={"NSW"}>NSW</option>
            <option value={"VIC"}>VIC</option>
            <option value={"QLD"}>QLD</option>
          </Select>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Three;
