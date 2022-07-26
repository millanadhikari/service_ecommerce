import { Box } from "@chakra-ui/react";
import React from "react";
import { fetchUser } from "../components/Admin/api/userApi";
import CustomerTabs from "../components/CustomerPortal/CustomerTabs";
import Footer from "../components/Entry/Footer";
import Navbar from "../components/Entry/Navbar";

function customerPortal() {
  return (
    <Box h="100%" position="relative" >
      <Box backgroundColor="blue.500">
        <Navbar />
      </Box>
     <Box h="100%">
     <CustomerTabs />

     </Box>
    
       <Footer />
      
    </Box>
  );
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//  const res = await fetchUser()
//   const data:any = await res

//   // Pass data to the page via props
//   return { props: { data } }
// }

export default customerPortal;
