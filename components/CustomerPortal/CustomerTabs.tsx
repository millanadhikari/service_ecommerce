import { Box, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'
import { userLogout } from '../Admin/api/userApi'
import { logoutSuccess } from '../Admin/user/userSlice'
import MembershipDetail from './CustomerDashboard/MembershipDetail'
import PartnerOffer from './CustomerDashboard/PartnerOffer'
import Rewards from './CustomerDashboard/Rewards'
import RewardsPoints from './CustomerDashboard/RewardsPoints'
import OrderTabs from './CustomerOrders/OrderTabs'

const CustomerTabs = () => {
    const dispatch = useDispatch()
    const router = useRouter()


    const logMeOut = () => {
        sessionStorage.removeItem("accessJWT");
        localStorage.removeItem("service_ecommerce");
        userLogout();
        dispatch(logoutSuccess())
        router.push('/')
      };
    return (
        <Tabs variant='soft-rounded' colorScheme='red' my={2} mx="auto">
            <TabList textAlign="center" overflow="auto" pb={{ md: "3" }} borderBottom="1px solid gray" borderColor="gray.300" sx={{
                '&::-webkit-scrollbar': {
                    backgroundColor: "white"
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: `white`,
                },
            }}>
                <Flex mx="auto" px={5} fontSize="13px">
                    <Tab minWidth="100px" _focus={{ outline: "none" }}>Dashboard</Tab>
                    <Tab minWidth="120px" _focus={{ outline: "none" }}>My Orders</Tab>
                    <Tab minWidth="115px" _focus={{ outline: "none" }}>Edit Details</Tab>
                    <Tab minWidth="170px" _focus={{ outline: "none" }}>Manage Password</Tab>
                    <Tab minWidth="130px" _focus={{ outline: "none" }}>Credit Cards</Tab>
                    <Tab _focus={{ outline: "none" }} minWidth="120px">Gift Cards</Tab>
                    <Tab _focus={{ outline: "none" }} minWidth="200px">Support Preferences</Tab>

                </Flex>




            </TabList>
            <TabPanels >
                <TabPanel>
                    <Box textAlign="right" onClick={logMeOut} cursor="pointer">
                        <Text>LogOut</Text>
                    </Box>
                <Heading textAlign="center" fontSize="24px">My Cleanbuzz Dashboard</Heading>
                    <Flex w="100%" flexDirection={{base:"column", md:"row"}} justifyContent="center" gap={16}>
                   

                        <Rewards />
                        <RewardsPoints/>
                    </Flex>
                    <PartnerOffer/>
                    <MembershipDetail/>
                </TabPanel>
                <TabPanel>
                   <OrderTabs/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default CustomerTabs