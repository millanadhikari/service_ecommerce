import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MultiStepForm, Step } from 'react-multi-form';
import One from './One';
import Three from './Three';
import Two from './Two';


const MultiForm = ({ active,
  setActive,
  service,
  setService,
  balcony,
  setBalcony,
  bedroom,
  setBedroom,
  separateToilet,
  setSeparateToilet,
  studyRoom,
  setStudyRoom,
  toilet,
  setToilet,
  wallWash,
  setWallWash,
  fridge,
  setFridge,
  garage,
  setGarage,
  blinds,
  setBlinds,
  steamLiving,
  setSteamLiving,
  steamBedroom,
  setSteamBedroom,
  steamStairs,
  setSteamStairs,
  steamHallway,
  setSteamHallway,
  contact,
  setContact }) => {


  return (
    <Box my={5}>
      <MultiStepForm activeStep={active} accentColor="#051e37">
        <Step label="one">
          <One service={service} setService={setService} bedroom={bedroom} setBedroom={setBedroom} toilet={toilet} setToilet={setToilet} />
        </Step>
        <Step label="Two">
          <Two
            active={active} setActive={setActive}
            bedroom={bedroom} setBedroom={setBedroom}
            balcony={balcony} setBalcony={setBalcony}
            separateToilet={separateToilet} setSeparateToilet={setSeparateToilet}
            studyRoom={studyRoom} setStudyRoom={setStudyRoom}
            wallWash={wallWash} setWallWash={setWallWash} s
            fridge={fridge} setFridge={setFridge}
            garage={garage} setGarage={setGarage}
            blinds={blinds} setBlinds={setBlinds}
            steamLiving={steamLiving} setSteamLiving={setSteamLiving}
            steamBedroom={steamBedroom} setSteamBedroom={setSteamBedroom}
            steamHallway={steamHallway} setSteamHallway={setSteamHallway}
            steamStairs={steamStairs} setSteamStairs={setSteamStairs}
          />
        </Step>
        <Step label="Three">
          <Three contact={contact} setContact={setContact} active={active} setActive={setActive} />
        </Step>
      </MultiStepForm>
    </Box>
  )
}

export default MultiForm