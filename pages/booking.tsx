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
import Services from "../components/Booking/Services/Services";
import Schedule from "../components/Booking/Schedule/Schedule";
import Addons from "../components/Booking/Addons/Addons";
import ServiceSummary from "../components/Booking/ServiceSummary";
import Locationier from '../components/Booking/Location/Locationier'
import Payment from "../components/Booking/Payments/Payment";
import { GiBookshelf, GiBrickWall, GiWashingMachine, GiWindow } from "react-icons/gi";
import { FaToilet } from "react-icons/fa";
import { MdBalcony } from "react-icons/md";


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
  postcode:string
}
interface Addon { 
  id:number
  icon: any
  title:string
  quantity:number
}
const data = [
  { id: 1, icon: <GiBookshelf />, title: "Study Room", quantity: 0, isSelected:false, price: 50},
  { id: 2, icon: <GiWashingMachine />, title: "Laundry", quantity: 0, isSelected:false, price: 50},
  { id: 3, icon: <FaToilet />, title: "Separate Toilet", quantity: 0, isSelected:false, price: 50},
  { id: 4, icon: <MdBalcony />, title: "Balcony", quantity: 0, isSelected:false, price: 40},
  { id: 5, icon: <GiWindow />, title: "Blinds", quantity: 0, isSelected:false, price: 40},
  { id: 6, icon: <GiBrickWall />, title: "Walls", quantity: 0, isSelected:false, price: 30},
];
const Booking = () => {
  const [selectedService, setSelectedService] = useState<string>("House Cleaning");
  const [toilets, setToilets] = useState<number>(1);
  const [bedrooms, setBedrooms] = useState<number>(0);
  const [postcode, setPostCode] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date())
  const [time, setTime] = useState<string>('')
  const [location, setLocation] = useState<Location[]>([])
  const [addons, setAddons] = useState<Addon[]>(data)                                                                                                      

  useEffect(() => {
  const initialLocation ={ id: Math.random(), fullname: "", phone: "", email: "", buildingNumber:"", streetName:"", postcode:`${postcode}`  }
    console.log(addons)
  setLocation([initialLocation])
}, [addons])
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
    <Box maxWidth={{base:"80%", sm:"100%"}}  >
      <ServiceSummary/>
    <Flex flexDir="column" pt={20} fontSize="15px" px={{base:2, sm:4}}  >
      <Steps orientation="vertical" activeStep={activeStep} colorScheme="blue" pb={4}>
        {steps.map(({ label, content }) => (
          <Step label={label} key={label}  >
            <Flex>{content}</Flex>
          </Step>
        ))}
      </Steps>
      {activeStep === 5 ? (
        <Center p={4} >
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
            size="sm"
            variant="solid"
            colorScheme="gray"
            onClick={prevStep}
            isDisabled={activeStep === 0}
          >
            Prev
          </Button>
          <Button
            size="sm"
            
            onClick={nextStep}
            colorScheme="blue"
            isDisabled={postcode === '' || postcode.length <=3}
            
           
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next >"}
          </Button>
        </Flex>
      )}
    </Flex>
    </Box>
  );
};

export default Booking;
