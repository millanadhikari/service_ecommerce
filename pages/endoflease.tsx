import { Box } from "@chakra-ui/react";
import Navbar from "../components/Entry/Navbar";
import Banner from "../components/Entry/Banner";
import Ways from "../components/Entry/Ways";
import { useState } from "react";
const EndofLease = () => {
  const [quote, setQuote] = useState<boolean>(false);

  return (
    <Box>
      <Navbar />
      <Banner
        heading="Professional End of Lease Cleaning Sydney"
        desc="Are you moving out of your rental property and need professional End Of Lease Cleaners Sydney? WeDo Cleaning provides End Of Lease cleaning service in Sydney across all suburbs. Our Bond cleaners are reliable, trustworthy and skilled in all aspects of Bond Cleaning. "
      />
      
      <Ways quote={quote} setQuote={setQuote} />
      
    </Box>
  );
};

export default EndofLease;
