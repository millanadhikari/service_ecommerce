import React from 'react'
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { Box, Button, Center, Flex, Heading, HStack, Radio, RadioGroup, VStack, } from '@chakra-ui/react';



const content = (
    <Flex py={4}>
        <span>content1</span>
    </Flex>
)


const contentTwo = (
    <Flex py={4}>
        <span>content2</span>
    </Flex>
)

const contentThree = (
    <Flex py={4}>
        <span>content3</span>
    </Flex>
)
const steps = [
    { label: "Services", content },
    { label: "Location", content: contentTwo },
    { label: "Payment", content: contentThree },
]

const Booking = () => {
    const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({
        initialStep: 0,
    })
    return (
        <VStack w="100%" p={2} backgroundColor="red" >

            <Steps activeStep={activeStep} w="100%">
                {steps.map(({ label, content }) => (
                    <Step label={label} key={label} >
                        {content}
                    </Step>
                ))}
            </Steps>
            {activeStep === 3 ? (
                <Center p={4} VStackDir="row">
                    <Heading fontSize="xl">Woohoo! All steps completed!</Heading>
                    <Button mt={6} size="sm" onClick={reset}>
                        Reset
                    </Button>
                </Center>
            ) : (
                <Flex width="100%" justify="flex-end">
                    <Button
                        mr={4}
                        size="sm"
                        variant="ghost"
                        onClick={prevStep}
                        isDisabled={activeStep === 0}
                    >
                        Prev
                    </Button>
                    <Button size="sm" onClick={nextStep}>
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                </Flex>
            )}
        </VStack>
    )
}



export default Booking
