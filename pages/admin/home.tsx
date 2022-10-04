import { LinkIcon, LockIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillBell, AiOutlineFullscreen } from "react-icons/ai";
import { BiRefresh, BiTrendingUp } from "react-icons/bi";
import { BsBarChartFill } from "react-icons/bs";
import {
  useAppDispatch,
  useAppSelector,
} from "../../components/Admin/app/hooks";
import BookingList from "../../components/Admin/BookingPage/BookingList";
import { Analytics } from "../../components/Admin/Home/Analytics/Analytics";
import { DashbboardTabs } from "../../components/Admin/Home/DashbboardTabs";
import SubNav from "../../components/Admin/Jobs/subcomponents/SubNav";

const Home = () => {
  const dispatch = useAppDispatch();
  const sidebarOpen =
    useAppSelector((state) => state.user.sidebarOpen) || undefined;

  return (
    <Box
      pl={{ base: 0, md: sidebarOpen ? "300px" : "100px" }}
      backgroundColor="gray.100"
      fontFamily="sans-serif"
      w="100%"
      h="100vh"
    >
    <SubNav/>
      <Box w="100%" backgroundColor="gray.100"  zIndex="999" h="100vh" pt="10px" >
        <DashbboardTabs />
        <Analytics/>
      </Box>
      
  

    </Box>
  );
};

export default Home;
