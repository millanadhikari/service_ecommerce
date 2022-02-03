import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Collapse, Input } from '@chakra-ui/react'
import { AddIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, SearchIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import SpaceMenuAccordion from './SpaceMenuAccordion'
import { Space } from './spaceMode'


const SpaceAccordion = () => {

    const [searchSpace, setSearchSpace] = useState<boolean>(false)
    const [showSpace, setShowSpace] = useState<boolean>(false)
    const [showMenu, setShowMenu] = useState<boolean>(false)

    const [spaces, setSpaces] = useState<Space[]>([
        {
            _id: 2,
            _name: 'lsdkjf'
        }
    ])
    const [name, setName] = useState<String>('milan')

    const handleAdd = () => {
        setSpaces([...spaces, {
            _id: 2,
            _name: 'milan'
        }]
        )
        console.log(spaces)
    }
    return (
        <Box w="300px" position="relative" h="full"   onMouseMove={() => setShowMenu(true)}
        onMouseOut={() => setShowMenu(false)}>
            <h2>
                <Box _expanded={{ color: 'black' }} w="18.8rem"
                    color="gray.500" display="flex" px="4"
                    borderTop="1px solid gray"
                    borderColor="gray.300"
                    py="12px"
                    onClick={() => setShowSpace(!showSpace)}
                    _hover={{backgroundColor:"gray.100"}}
                    cursor="pointer" >
                    <Box flex='1' textAlign='left' fontSize="sm" fontWeight="semibold" >
                        SPACES
                    </Box>
                    <Box>
                        <SearchIcon mr="7px" _hover={{ color: "purple.500" }} onClick={() => setSearchSpace(!searchSpace)} />
                        {showSpace ? <ChevronDownIcon fontSize='xl' />
                            : <ChevronRightIcon fontSize='xl' onClick={() => setShowSpace(!showSpace)} />}
                    </Box>
                </Box>



            </h2>
            <Collapse in={showSpace} animateOpacity>
                <Box border="none" pt={2} >
                <Box
                    backgroundColor="gray.100"
                    p="2" textAlign="center" fontSize="xs" fontWeight="bold" color="gray.500"
                    cursor="pointer"
                    onClick={handleAdd}
                    mx="4"
                    _hover={{backgroundColor:"gray.200"}}


                ><AddIcon fontSize="xs" mr="3"
                    /> NEW SPACE


                </Box>
                <Box top="0" left="0" max-h="100%" mt="2">
                    {spaces.map((space) => (
                        <SpaceMenuAccordion key={space._id} space={space} showMenu={showMenu} setShowMenu={setShowMenu} />

                    ))}
                </Box>
            </Box>
            </Collapse>

            {/* <AccordionItem>
                <h2>
                    <AccordionButton _expanded={{ color: 'black' }} w="18.8rem" color="gray.500" >
                        <Box flex='1' textAlign='left' fontSize="sm" fontWeight="semibold">
                            DOCS
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem> */}
        </Box>
    )
}

export default SpaceAccordion
