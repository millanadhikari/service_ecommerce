import { Box, Icon } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import React from 'react'



export const MobileMenu = ({item}) => {
    const router = useRouter();

  return (
    <Icon
    fontSize="42px"
    aria-label="Search database"
    textAlign="center"
    color={router.asPath === item.href ? "white" : "gray.400"}
    as={item.icon1}
    p={2.5}
    cursor="pointer"
    onClick={() => router.push(item.href)}
    rounded="full"
    backgroundColor={router.asPath === item.href ? "#7c68ee" : "none"}
  />
  )
}
