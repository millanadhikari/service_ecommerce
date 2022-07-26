import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { FaBed, FaToilet } from "react-icons/fa";
import {
  Gi3DStairs,
  GiBookshelf,
  GiHomeGarage,
  GiRedCarpet,
  GiStoneWall,
  GiVacuumCleaner,
} from "react-icons/gi";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { MdBedroomParent, MdOutlineBalcony } from "react-icons/md";
import { RiFridgeFill } from "react-icons/ri";
import { MdKeyboardBackspace } from "react-icons/md";
import BlindsClosedSharpIcon from "@mui/icons-material/BlindsClosedSharp";
import { BsInfoCircleFill } from "react-icons/bs";
import { SiAdobelightroom } from "react-icons/si";
interface Props {
  active: number;
  setActive: any;
  balcony: number;
  setBalcony: any;
  separateToilet: number;
  setSeparateToilet: any;
  studyRoom: number;
  setStudyRoom: any;
  blinds: number;
  setBlinds: any;
  wallWash: number;
  setWallWash: any;
  garage: number;
  setGarage: any;
  fridge: number;
  setFridge: any;
  steamLiving: number;
  setSteamLiving: any;
  steamBedroom: number;
  setSteamBedroom: any;
  steamHallway: number;
  setSteamHallway: any;
  steamStairs: number;
  setSteamStairs: any;
}

const Two = ({
  active,
  setActive,
  balcony,
  setBalcony,
  separateToilet,
  setSeparateToilet,
  studyRoom,
  setStudyRoom,
  wallWash,
  setWallWash,
  fridge,
  setFridge,
  garage,
  setGarage,
  blinds,
  setBlinds,
  steamLiving,
  setSteamLiving,
  steamBedroom,
  setSteamBedroom,
  steamStairs,
  setSteamStairs,
  steamHallway,
  setSteamHallway,
}: Props) => {
  return (
    <Box color="gray.500">
      <Flex
        gap={3}
        color="red.300"
        alignItems="center"
        w={20}
        ml="auto"
        textAlign="right"
        onClick={() => active > 0 && setActive(active - 1)}
      >
        <MdKeyboardBackspace />
        <Text fontSize="14" textAlign="left" mr="auto" w="100%">Go back</Text>
      </Flex>
      <Heading fontSize="16" fontWeight="semibold">
        Select AddOn(s)
      </Heading>
      <Box
        h={300}
        overflow="auto"
        my={3}
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "24px",
          },
        }}
      >
        <Flex alignItems="center" justifyContent="space-between" my={2} mt={4}>
          <Flex alignItems="center">
            <Box fontSize="20" color="blue.700" p={3} rounded="md">
              <MdOutlineBalcony />
            </Box>
            <Box>
              <Flex
                alignItems="center"
                gap={1}
                fontSize="15"
                color="blue.700"
                fontWeight="semibold"
              >
                Balcony
                <Box fontSize="11px" color="gray.500">
                  <BsInfoCircleFill />
                </Box>
              </Flex>
              <Text>$99</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
              onClick={() => balcony > 0 && setBalcony(balcony - 1)}>
                   <GrFormSubtract />
            </Text>
            <Text color="blue.700" fontWeight="semibold">
              {balcony}
            </Text>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
              onClick={() => setBalcony(balcony + 1)}
            >
              <GrFormAdd />
            </Text>
          </Flex>
        </Flex>

        <Flex alignItems="center" justifyContent="space-between" my={2} mt={4}>
          <Flex alignItems="center">
            <Box fontSize="20" color="blue.700" p={3} rounded="md">
              <FaToilet />
            </Box>
            <Box>
              <Flex
                alignItems="center"
                gap={3}
                fontSize="15"
                color="blue.700"
                fontWeight="semibold"
              >
                Separate Toilet{" "}
                <Box fontSize="11px" color="gray.500">
                  <BsInfoCircleFill />
                </Box>
              </Flex>
              <Text>$99</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
              onClick={() => separateToilet > 0 && setSeparateToilet(separateToilet - 1)}
            >
              <GrFormSubtract />
            </Text>
            <Text color="blue.700" fontWeight="semibold">
              {separateToilet}
            </Text>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
              onClick={() => setSeparateToilet(separateToilet + 1)}
            >
              <GrFormAdd />
            </Text>
          </Flex>
        </Flex>

        <Flex alignItems="center" justifyContent="space-between" my={2} mt={4}>
          <Flex alignItems="center">
            <Box fontSize="20" color="blue.700" p={3} rounded="md">
              <GiBookshelf />
            </Box>
            <Box>
              <Flex
                alignItems="center"
                gap={3}
                fontSize="15"
                color="blue.700"
                fontWeight="semibold"
              >
                Study Room{" "}
                <Box fontSize="11px" color="gray.500">
                  <BsInfoCircleFill />
                </Box>
              </Flex>
              <Text>$99</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
              onClick={() => studyRoom > 0 && setStudyRoom(studyRoom - 1)}
            >
              <GrFormSubtract />
            </Text>
            <Text color="blue.700" fontWeight="semibold">
              {studyRoom}
            </Text>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
              onClick={() => setStudyRoom(studyRoom + 1)}
            >
              <GrFormAdd />
            </Text>
          </Flex>
        </Flex>

        <Flex alignItems="center" justifyContent="space-between" my={2} mt={4}>
          <Flex alignItems="center">
            <Box fontSize="20" color="blue.700" p={3} rounded="md">
              <GiStoneWall />
            </Box>
            <Box>
              <Flex
                alignItems="center"
                gap={3}
                fontSize="15"
                color="blue.700"
                fontWeight="semibold"
              >
                Wall Wash{" "}
                <Box fontSize="11px" color="gray.500">
                  <BsInfoCircleFill />
                </Box>
              </Flex>
              <Text>$99</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
              onClick={() => wallWash > 0 && setWallWash(wallWash - 1)}
            >
              <GrFormSubtract />
            </Text>
            <Text color="blue.700" fontWeight="semibold">
              {wallWash}
            </Text>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
              onClick={() => setWallWash(wallWash + 1)}
            >
              <GrFormAdd />
            </Text>
          </Flex>
        </Flex>

        <Flex alignItems="center" justifyContent="space-between" my={2} mt={4}>
          <Flex alignItems="center">
            <Box fontSize="20" color="blue.700" p={3} rounded="md">
              <RiFridgeFill />
            </Box>
            <Box>
              <Flex
                alignItems="center"
                gap={3}
                fontSize="15"
                color="blue.700"
                fontWeight="semibold"
              >
                Fridge/Freezer{" "}
                <Box fontSize="11px" color="gray.500">
                  <BsInfoCircleFill />
                </Box>
              </Flex>
              <Text>$99</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
              onClick={() => fridge > 0 && setFridge(fridge - 1)}
            >
              <GrFormSubtract />
            </Text>
            <Text color="blue.700" fontWeight="semibold">
              {fridge}
            </Text>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
              onClick={() => setFridge(fridge + 1)}
            >
              <GrFormAdd />
            </Text>
          </Flex>
        </Flex>

        <Flex alignItems="center" justifyContent="space-between" my={2} mt={4}>
          <Flex alignItems="center">
            <Box fontSize="20" color="blue.700" p={3} rounded="md">
              <GiHomeGarage />
            </Box>
            <Box>
              <Flex
                alignItems="center"
                gap={3}
                fontSize="15"
                color="blue.700"
                fontWeight="semibold"
              >
                Garage{" "}
                <Box fontSize="11px" color="gray.500">
                  <BsInfoCircleFill />
                </Box>
              </Flex>
              <Text>$99</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
              onClick={() => garage > 0 && setGarage(garage - 1)}
            >
              <GrFormSubtract />
            </Text>
            <Text color="blue.700" fontWeight="semibold">
              {garage}
            </Text>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
              onClick={() => setGarage(garage + 1)}
            >
              <GrFormAdd />
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" my={2} mt={4}>
          <Flex alignItems="center">
            <Box fontSize="20" color="blue.700" p={3} rounded="md">
              <BlindsClosedSharpIcon />
            </Box>
            <Box>
              <Flex
                alignItems="center"
                gap={3}
                fontSize="15"
                color="blue.700"
                fontWeight="semibold"
              >
                Blinds{" "}
                <Box fontSize="11px" color="gray.500">
                  <BsInfoCircleFill />
                </Box>
              </Flex>
              <Text>$99</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
              onClick={() => blinds > 0 && setBlinds(blinds - 1)}
            >
              <GrFormSubtract />
            </Text>
            <Text color="blue.700" fontWeight="semibold">
              {blinds}
            </Text>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
              onClick={() => setBlinds(blinds + 1)}
            >
              <GrFormAdd />
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" my={2} mt={4}>
          <Flex alignItems="center">
            <Box fontSize="20" color="blue.700" p={3} rounded="md">
              <MdBedroomParent />
            </Box>
            <Box>
              <Flex
                alignItems="center"
                gap={3}
                fontSize="15"
                color="blue.700"
                fontWeight="semibold"
              >
                Carpet Steam Bedroom{" "}
                <Box fontSize="11px" color="gray.500">
                  <BsInfoCircleFill />
                </Box>
              </Flex>
              <Text>$99</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
              onClick={() => steamBedroom > 0 && setSteamBedroom(steamBedroom - 1)}
            >
              <GrFormSubtract />
            </Text>
            <Text color="blue.700" fontWeight="semibold">
              {steamBedroom}
            </Text>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
              onClick={() => setSteamBedroom(steamBedroom + 1)}
            >
              <GrFormAdd />
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" my={2} mt={4}>
          <Flex alignItems="center">
            <Box fontSize="20" color="blue.700" p={3} rounded="md">
              <SiAdobelightroom />
            </Box>
            <Box>
              <Flex
                alignItems="center"
                gap={3}
                fontSize="15"
                color="blue.700"
                fontWeight="semibold"
              >
                Carpet Steam Living Room{" "}
                <Box fontSize="11px" color="gray.500">
                  <BsInfoCircleFill />
                </Box>
              </Flex>
              <Text>$99</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
              onClick={() => steamLiving > 0 && setSteamLiving(steamLiving - 1)}
            >
              <GrFormSubtract />
            </Text>
            <Text color="blue.700" fontWeight="semibold">
              {steamLiving}
            </Text>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
              onClick={() => setSteamLiving(steamLiving + 1)}
            >
              <GrFormAdd />
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" my={2} mt={4}>
          <Flex alignItems="center">
            <Box fontSize="20" color="blue.700" p={3} rounded="md">
              <Gi3DStairs />
            </Box>
            <Box>
              <Flex
                alignItems="center"
                gap={3}
                fontSize="15"
                color="blue.700"
                fontWeight="semibold"
              >
                Carpet Steam Stairs{" "}
                <Box fontSize="11px" color="gray.500">
                  <BsInfoCircleFill />
                </Box>
              </Flex>
              <Text>$99</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
              onClick={() => steamStairs > 0 && setSteamStairs(steamStairs - 1)}
            >
              <GrFormSubtract />
            </Text>
            <Text color="blue.700" fontWeight="semibold">
              {steamStairs}
            </Text>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
              onClick={() => setSteamStairs(steamStairs + 1)}
            >
              <GrFormAdd />
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" my={2} mt={4}>
          <Flex alignItems="center">
            <Box fontSize="20" color="blue.700" p={3} rounded="md">
              <GiRedCarpet />
            </Box>
            <Box>
              <Flex
                alignItems="center"
                gap={3}
                fontSize="15"
                color="blue.700"
                fontWeight="semibold"
              >
                Carpet Steam Hallway{" "}
                <Box fontSize="11px" color="gray.500">
                  <BsInfoCircleFill />
                </Box>
              </Flex>
              <Text>$99</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
              onClick={() => steamHallway > 0 && setSteamHallway(steamHallway - 1)}
            >
              <GrFormSubtract />
            </Text>
            <Text color="blue.700" fontWeight="semibold">
              {steamHallway}
            </Text>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
              onClick={() => setSteamHallway(steamHallway + 1)}

            >
              <GrFormAdd />
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Two;
