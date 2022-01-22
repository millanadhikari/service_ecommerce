import React, { useEffect, useState } from "react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";
import Services from "./Services/Services";
import Schedule from "./Schedule/Schedule";
import Addons from "./Addons/Addons";
import ServiceSummary from "./ServiceSummary";
import Locationier from './Location/Locationier'
import Payment from "./Payments/Payment";


const content = (
  <Flex py={4}>
    <span>content1</span>
  </Flex>
);

const contentTwo = (
  <Flex py={4}>
    <span>content2</span>
  </Flex>
);

const contentThree = (
  <Flex py={4}>
    <span>content3</span>
  </Flex>
);

interface Location { 
  id: number 
  fullname: string 
  phone:string
  email:string
  buildingNumber:string
  streetName:string
  postcode:number
}
const Booking = () => {
  const [selectedService, setSelectedService] = useState<string>("House Cleaning");
  const [toilets, setToilets] = useState<number>(1);
  const [bedrooms, setBedrooms] = useState<number>(1);
  const [postcode, setPostCode] = useState<number>();
  const [date, setDate] = useState<Date>(new Date())
  const [time, setTime] = useState<string>('')
  const [location, setLocation] = useState<Location[]>([])
useEffect(() => {
  const initialLocation ={ id: Math.random(), fullname: "", phone: "", email: "", buildingNumber:"", streetName:"", postcode:postcode  }

  setLocation([initialLocation])
}, [])
  const [addons, setAddons] = useState<[]>([])
  const steps = [
    {
      label: "Services",
      content: (
        <Services
          selectedService={selectedService}
          setSelectedService={setSelectedService}
          toilets={toilets}
          setToilets={setToilets}
          bedrooms={bedrooms}
          setBedrooms={setBedrooms}
          postcode={postcode}
          setPostCode={setPostCode}
        />
      ),
    },
    { label: "Addons", content: <Addons addons={addons} setAddons={setAddons}/> },
    { label: "Schedule", content: <Schedule time={time} setTime={setTime} date={date} setDate={setDate}/> },
    { label: "Location", content: <Locationier location={location} setLocation={setLocation} postcode={postcode} setPostCode={setPostCode}/> },
    { label: "Payment", content: <Payment/> },
  ];

  const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({
    initialStep: 0,
  });
  return (
    <Box>
      <ServiceSummary/>
    <VStack w="100%" p={2} pt="70px" fontSize="14px" >
      <Steps activeStep={activeStep} w="100%" colorScheme="blue">
        {steps.map(({ label, content }) => (
          <Step label={label} key={label} >
            {content}
          </Step>
        ))}
      </Steps>
      {activeStep === 5 ? (
        <Center p={4} VStackDir="row">
          <Heading fontSize="xl">Woohoo! All steps completed!</Heading>
          <Button mt={6} size="sm" onClick={reset}>
            Reset
          </Button>
        </Center>
      ) : (
        <Flex
          width="100%"
          position="fixed"
          bottom="0"
          backgroundColor="white"
          p={4}
          borderTop="1px solid black"
          borderColor="gray.300"
          h='65px'
          zIndex="999"
          justify="right"
        >
          <Button
            mr={4}
            size="md"
            variant="solid"
            colorScheme="gray"
            onClick={prevStep}
            isDisabled={activeStep === 0}
          >
            Prev
          </Button>
          <Button
            size="md"
            onClick={nextStep}
            colorScheme="blue"
            isDisabled={!postcode }
            
           
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next >"}
          </Button>
        </Flex>
      )}
    </VStack>
    </Box>
  );
};

export default Booking;
