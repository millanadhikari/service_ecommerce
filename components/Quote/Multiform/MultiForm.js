import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MultiStepForm, Step } from 'react-multi-form';
import One from './One';
import Three from './Three';
import Two from './Two';


const MultiForm = ({ display, setDisplay, active,
  setActive,
}) => {


  return (
    <Box my={5}>
      <MultiStepForm activeStep={active} accentColor="#051e37">
        <Step label="one">
          <One display={display} setDisplay={setDisplay} />
        </Step>
        <Step label="Two">
          <Two
            display={display} setDisplay={setDisplay}
            active={active} setActive={setActive}

          />
        </Step>
        <Step label="Three">
          <Three display={display} setDisplay={setDisplay} active={active} setActive={setActive} />
        </Step>
      </MultiStepForm>
    </Box>
  )
}

export default MultiForm