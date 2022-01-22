import { Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import Addon from "./Addon";
import { GiBookshelf } from "react-icons/gi";
import { GiWashingMachine } from "react-icons/gi";
import { FaToilet } from "react-icons/fa";
import { MdBalcony } from "react-icons/md";

const data = [
  { id: 1, icon: <GiBookshelf />, title: "Study Room" },
  { id: 2, icon: <GiWashingMachine />, title: "Laundry" },
  { id: 3, icon: <FaToilet />, title: "Separate Toilet" },
  { id: 4, icon: <MdBalcony />, title: "Balcony" },
];

// interface Props {
//   addons: [];
//   setAddons: React.Dispatch<React.SetStateAction<[]>>;
// }
const Addons = ({ addons, setAddons }) => {
  return (
    <Flex flexDirection="column" py={6} px={4} my={2} backgroundColor="gray.100" rounded="md" alignItems="center">
      <Heading fontSize={16}>
       Please select from following options:
      </Heading>

      <Grid templateColumns="repeat(2, 1fr)" my={5}>
        {data.map((item) => (
          <GridItem mx={4}>
            <Addon
              key={item.id}
              item={item}
              addons={addons}
              setAddons={setAddons}
            />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default Addons;
