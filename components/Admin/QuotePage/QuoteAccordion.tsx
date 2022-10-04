import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Input,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import Timeline from "./Timeline/Timeline";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Notes from "./Notes/Notes";

// const notes = [
//   {
//     id: 1,
//     title: "What happened with the refund?d",
//   },
//   {
//     id: 2,
//     title: "Spoke to customer and agreed on additional services requested in the meeting.",
//   },
// ];
const QuoteAccordion = ({
  timelines,
  notes,
  noteInput,
  setNoteInput,
  addNote,
  post,
  user,
  setPost,
}) => {
  return (
    <Accordion
      defaultIndex={[0]}
      allowMultiple
      fontFamily="sans-serif"
      fontSize="13px"
    >
      <AccordionItem>
        <h2>
          <AccordionButton px="-25px" _focus={{ outline: "none" }} py={4}>
            <Box
              flex="1"
              textAlign="left"
              fontSize="13px"
              fontWeight="semibold"
              color="gray.500"
              letterSpacing="1px"
            >
              TIMELINE ({timelines?.length})
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {timelines
            ? timelines.map((timeline) => (
                <Timeline key={timeline.id} timeline={timeline} />
              ))
            : null}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton px="-25px" _focus={{ outline: "none" }} py={4}>
            <Box
              flex="1"
              textAlign="left"
              fontSize="13px"
              fontWeight="semibold"
              color="gray.500"
              letterSpacing="1px"
            >
              NOTES ({notes?.length })
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Box>
            {notes
              ? notes.map((notes) => (
                  <Notes key={notes.id} notes={notes} user={user} />
                ))
              : null}
            <Flex alignItems="center" justifyContent="space-between">
              <Flex alignItems="center" gap={3}>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  bg="blue.400"
                  rounded="full"
                  fontSize="16"
                  fontWeight="semibold"
                  minW="10"
                  h="10"
                  textAlign="center"
                >
                  {user?.user?.name?.charAt(0)}
                </Flex>
                <Input
                  value={noteInput}
                  onChange={(e) => setNoteInput(e.target.value)}
                  placeholder="Leave a note..."
                  size="sm"
                  w="280px"
                />
              </Flex>
              <Button
                size="sm"
                _focus={{ outline: "none" }}
                bg="purple.500"
                color="white"
                _hover={{ bg: "purple.400" }}
                onClick={addNote}
              >
                {post ? <Spinner /> : "Post"}
              </Button>
            </Flex>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default QuoteAccordion;
