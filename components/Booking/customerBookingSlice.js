import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cBookings: {
        selectedService: 'House Cleaning',
        toilets:{
            id:1,
            num:1,
            price:50
        },
        bedrooms:{
            id:0,
            num:'',
            price:150
        },
        addons:[

        ],
        addonsPrice:0
    },
        
    
    isLoading: false,
    error: "",
    price:200,
   
  };
  const customerBookingSlice = createSlice({
    name: 'cBookings',
    initialState,
    reducers: {
        createCbookingLoading: (state) => {
            state.createCbookingLoading = true;
          },
          createCbookingSuccess: (state, {payload}) => {
            state.createCbookingLoading = false;
            state.cBookings = cBookings.push(payload)
          },
          createCbookingFail: (state, { payload }) => {
            state.createCbookingLoading = false;
            state.error = payload;
          },
          toggleType:(state, {payload}) => {
              state.isLoading = true;
              state.cBookings.selectedService = payload
              state.isLoading = false
          },
          setToilet:(state, {payload}) => {
            state.isLoading = true;
            state.price -= state.cBookings.toilets.price

            state.cBookings.toilets = payload
            state.price += state.cBookings.toilets.price
            state.isLoading = false;

        },
        setBedroom:(state, {payload}) => {
            state.isLoading = true;
            state.price -= state.cBookings.bedrooms.price
            state.cBookings.bedrooms = payload
            state.price += state.cBookings.bedrooms.price
            state.isLoading = false;
        },
        setAdons:(state, {payload}) => {
            state.isLoading = true;
            // state.cBookings.addons = payload
            // const nayaPrice = 0
            // const naya = payload.map((item, index) => {
            //     if(item.isSelected)  { 
            //         item.price
            //     }
            // })
            

            
            
            state.isLoading = false;
        },
          
    },
  });
  
  const {reducer, actions} = customerBookingSlice;

  export const {setAdons, setBedroom, setToilet, toggleType, createCbookingLoading, createCbookingSuccess, createCbookingFail} = actions

  export default reducer
  