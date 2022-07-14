import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'

const OrderTabs = () => {
    return (
        <Tabs>
            <TabList>
               <Flex alignItems="center" justifyContent="center" w="100%">
               <Tab _focus={{outline:"none"}} >Upcoming Orders</Tab>
                <Tab _focus={{outline:"none"}}>Past Orders</Tab>
               </Flex>
            </TabList>

            <TabPanels my={4}>
                <TabPanel >
                    <Text >You have no upcoming order.</Text>
                </TabPanel>
                <TabPanel>
                <Text >You haven't booked anything yet.</Text>
                </TabPanel>
              
            </TabPanels>
        </Tabs>
    )
}

export default OrderTabs