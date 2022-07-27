import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from 'react'
import { MobileMenu } from "./Menu/MobileMenu";
import { AiFillCreditCard, AiFillHome, AiOutlineHome } from "react-icons/ai";
import { RiFilePaper2Line, RiFilePaperFill } from "react-icons/ri";
import { BsFillPeopleFill, BsPeople, BsPeopleFill, BsToggleOn } from "react-icons/bs";
import { MdAddAlert } from "react-icons/md";

const menuItems = [
   
    {
      href: '/admin/bookings',
      title: 'Bookings',
      icon1:BsFillPeopleFill,
      icon2:BsPeople
    },
    {
      href: '/admin/quotes',
      title: 'Quotes',
      icon2:RiFilePaper2Line,
      icon1:RiFilePaperFill
    },
    {
        href: '/admin/home',
        title: 'Home',
        icon1:AiFillHome,
        icon2:AiOutlineHome
      },
    {
        href: '/admin/notifications',
        title: 'Notifications',
        icon2:MdAddAlert,
        icon1:MdAddAlert
      },
      {
        href: '/admin/invoice',
        title: 'Invoice',
        icon2: AiFillCreditCard,
        icon1: AiFillCreditCard
      },
    
     
  ];

const MobileSidebar = () => {
    return (
        <Flex w="100%" gap={8} alignItems="center" justifyContent="center" py={4}>
           {menuItems.map((item) => (
             <MobileMenu key={item.href} item={item}/>
           ))}
            </Flex>
    )
}


export default MobileSidebar