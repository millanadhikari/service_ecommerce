import { createSlice } from "@reduxjs/toolkit";
import { MdInvertColorsOff } from "react-icons/md";
import {mergeArrayWithObject} from './utils/mergeArrayWithObject'

const initialState = {
  cBookings: {
    selectedService: 'House Cleaning',
    toilets: {
      id: 1,
      num: 1,
      price: 50
    },
    bedrooms: {
      id: 0,
      num: '',
      price: 150
    },
    addons: [
      { id: 123, title: "Study Room", quantity: 0, complete:false, price: 50},
      { id: 223,  title: "Laundry", quantity: 0, complete:false, price: 50},
      { id: 323, title: "Separate Toilet", quantity: 0, complete:false, price: 50},
      { id: 423, title: "Balcony", quantity: 0, complete:false, price: 40},
      { id: 523, title: "Blinds", quantity: 0, complete:false, price: 40},
      { id: 623, title: "Walls", quantity: 0, complete:false, price: 30},
    
    ],
    addonsPrice: 0
  },


  isLoading: false,
  error: "",
  price: 200,

};
const customerBookingSlice = createSlice({
  name: 'cBookings',
  initialState,
  reducers: {
    createCbookingLoading: (state) => {
      state.createCbookingLoading = true;
    },
    createCbookingSuccess: (state, { payload }) => {
      state.createCbookingLoading = false;
      state.cBookings = cBookings.push(payload)
    },
    createCbookingFail: (state, { payload }) => {
      state.createCbookingLoading = false;
      state.error = payload;
    },
    toggleType: (state, { payload }) => {
      state.isLoading = true;
      state.cBookings.selectedService = payload
      state.isLoading = false
    },
    setToilet: (state, { payload }) => {
      state.isLoading = true;
      state.price -= state.cBookings.toilets.price

      state.cBookings.toilets = payload
      state.price += state.cBookings.toilets.price
      state.isLoading = false;

    },
    setBedroom: (state, { payload }) => {
      state.isLoading = true;
      state.price -= state.cBookings.bedrooms.price
      state.cBookings.bedrooms = payload
      state.price += state.cBookings.bedrooms.price
      state.isLoading = false;
    },
    defaultAdons: (state, { payload }) => {
      // state.isLoading = true;
      state.cBookings.addons = payload


    },
    setAdons: (state, { payload }) => {
      state.isLoading = true;
      let maya = state.cBookings.addons
     state.cBookings.addons = mergeArrayWithObject(maya, payload)
      state.cBookings.addonsPrice += payload.quantity * payload.price
      state.price += state.cBookings.addonsPrice

      state.isLoading = false;
    },
    removeAdons: (state, { payload }) => {
      state.isLoading = true;
      let newArr = state.cBookings.addons.filter(e => e.id === payload.id)
      let chaya = state.cBookings.addons
      state.cBookings.addons = mergeArrayWithObject(chaya, newArr)


      // state.cBookings.addons = [...newArr, ...state.cBookings.addons]
      // state.cBookings.addons.push(newArr)


      state.isLoading = false;
    },


  },
})


const { reducer, actions } = customerBookingSlice;

export const { setAdons, defaultAdons, removeAdons, setBedroom, setToilet, toggleType, createCbookingLoading, createCbookingSuccess, createCbookingFail } = actions

export default reducer
