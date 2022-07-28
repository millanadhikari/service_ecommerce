import { Icon, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import { BsBarChartFill } from 'react-icons/bs'
import { FiMoreHorizontal } from 'react-icons/fi'

export const DashbboardTabs = () => {
  return (
    <Tabs variant='soft-rounded' colorScheme='gray'>
    <TabList >
      <Tab _selected ={{bg:'white', color:'gray.600', fontWeight:'semibold'}} letterSpacing="0.8px" fontWeight="light" color="gray.400" _focus={{outline:"none"}}fontSize="15px">Accounts</Tab>
      <Tab _selected ={{bg:'white', color:'gray.600', fontWeight:'semibold'}} letterSpacing="0.8px" fontWeight="light" color="gray.400" _focus={{outline:"none"}}fontSize="15px">Quotes</Tab>
      <Tab _selected ={{bg:'white', color:'gray.600', fontWeight:'semibold'}} letterSpacing="0.8px" fontWeight="light" color="gray.400" _focus={{outline:"none"}}fontSize="15px">Bookings</Tab>
      <Tab _selected ={{bg:'white', color:'gray.600', fontWeight:'semibold'}} letterSpacing="0.8px" fontWeight="light" color="gray.400" _focus={{outline:"none"}}fontSize="15px">Links</Tab>
      <Icon
            fontSize="44px"
            aria-label="Search database"
            textAlign="center"
            as={FiMoreHorizontal}
            p={2.5}
            cursor="pointer"
            rounded="full"
            color="gray.400"
          />
    </TabList>
    <TabPanels>
      <TabPanel>
        <p>one!</p>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
  )
}
