import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'

const OrderTabs = () => {
    return (
        <Tabs h="50vh">
            <TabList>
               <Flex alignItems="center" justifyContent="center" w="100%">
               <Tab _focus={{outline:"none"}} >Upcoming Orders</Tab>
                <Tab _focus={{outline:"none"}}>Past Orders</Tab>
               </Flex>
            </TabList>

            <TabPanels my={4} textAlign="center" >
                <TabPanel >
                    <Text >You have no upcoming booking.</Text>
                </TabPanel>
                <TabPanel>
                <Text >You havent booked anything yet.</Text>
                </TabPanel>
              
            </TabPanels>
        </Tabs>
    )
}

export default OrderTabs