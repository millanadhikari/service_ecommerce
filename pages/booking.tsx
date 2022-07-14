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
import Locationier from "../components/Booking/Location/Locationier";
import Payment from "../components/Booking/Payments/Payment.js";
import {
  GiBookshelf,
  GiBrickWall,
  GiWashingMachine,
  GiWindow,
} from "react-icons/gi";
import { FaToilet } from "react-icons/fa";
import { MdBalcony } from "react-icons/md";
import CheckoutElement from "../components/Booking/Payments/CheckoutElement";

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
  id: number;
  fullname: string;
  phone: string;
  email: string;
  buildingNumber: string;
  streetName: string;
  postcode: string;
}
interface Addon {
  id: number;
  icon: any;
  title: string;
  quantity: number;
}
const data = [
  {
    id: 123,
    icon: <GiBookshelf />,
    title: "Study Room",
    quantity: 0,
    complete: false,
    price: 50,
  },
  {
    id: 223,
    icon: <GiWashingMachine />,
    title: "Laundry",
    quantity: 0,
    complete: false,
    price: 50,
  },
  {
    id: 323,
    icon: <FaToilet />,
    title: "Separate Toilet",
    quantity: 0,
    complete: false,
    price: 50,
  },
  {
    id: 423,
    icon: <MdBalcony />,
    title: "Balcony",
    quantity: 0,
    complete: false,
    price: 40,
  },
  {
    id: 523,
    icon: <GiWindow />,
    title: "Blinds",
    quantity: 0,
    complete: false,
    price: 40,
  },
  {
    id: 623,
    icon: <GiBrickWall />,
    title: "Walls",
    quantity: 0,
    complete: false,
    price: 30,
  },
];
const Booking = () => {
  const [selectedService, setSelectedService] =
    useState<string>("House Cleaning");
  const [toilets, setToilets] = useState<number>(1);
  const [bedrooms, setBedrooms] = useState<number>(0);
  const [postcode, setPostCode] = useState<string>("");
  const [gate, setDate] = useState<Date>();
  const [time, setTime] = useState<string>("");
  const [bloading, setBloading] = useState<boolean>(false);
  const [location, setLocation] = useState<Location>({
    id: Math.random(),
    fullname: "",
    phone: "",
    email: "",
    buildingNumber: "",
    streetName: "",
    postcode: `${postcode}`,
  });
  const [addons, setAddons] = useState<Addon[]>(data);

  //   useEffect(() => {
  //   const initialLocation ={ id: Math.random(), fullname: "", phone: "", email: "", buildingNumber:"", streetName:"", postcode:`${postcode}` }
  //     console.log(addons)
  //   setLocation([initialLocation])
  // }, [addons])

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
          bloading={bloading}
        />
      ),
    },
    {
      label: "Addons",
      content: <Addons addons={addons} setAddons={setAddons} bloading={bloading}/>,
    },
    {
      label: "Schedule",
      content: (
        <Schedule time={time} setTime={setTime} gate={gate} setDate={setDate} />
      ),
    },
    {
      label: "Location",
      content: (
        <Locationier
          location={location}
          setLocation={setLocation}
          postcode={postcode}
          setPostCode={setPostCode}
        />
      ),
    },
    { label: "Payment", content: <CheckoutElement /> },
  ];

  const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({
    initialStep: 0,
  });


  useEffect(() => {
    setBloading(true);
    const timer = setTimeout(() => {
      setBloading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [activeStep]);

  return (
    <Box maxWidth={{ sm: "100%" }}>
      <ServiceSummary bloading={bloading} />
      <Flex
        flexDir="column"
        pt="100px"
        px={{ base: 2, sm: 4 }}
        w={{ md: "700px" }}
        mx="auto"
      >
        <Steps
          orientation="vertical"
          activeStep={activeStep}
          colorScheme="blue"
          pb={4}
        >
          {steps.map(({ label, content }) => (
            <Step label={label} key={label}>
              <Flex mx="auto">{content}</Flex>
            </Step>
          ))}
        </Steps>
        {activeStep === 5 ? (
          <Center p={4}>
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
            left="0"
            backgroundColor="white"
            borderTop="1px solid black"
            py={6}
            px={4}
            borderColor="gray.300"
            h="80px"
            zIndex="999"
            justify={activeStep === 0 ? "right" : "space-between"}
          >
            {activeStep !== 0 && (
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
            )}
           {activeStep !== 4 &&  <Button
              size="md"
              onClick={nextStep}
              colorScheme="blue"
              fontSize="14px"
              letterSpacing="1.5px"
              p="4"
              isDisabled={postcode === "" || postcode.length <= 3 || bloading}
            >
              {activeStep === steps.length - 1 ? "Complete booking" : "Next >"}
            </Button>}
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Booking;
