import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: {
    paginatedResults: [],
    totalPages: 0,
    previous:{},
    next:{}
  },
  isLoading: false,
  error: "",
  selectedTicket: {},
};
const bookingListSlice = createSlice({
  name: "bookingsList",
  initialState,
  reducers: {
    fetchBookingLoading: (state) => {
      state.isLoading = true;
    },
    fetchBookingSuccess: (state, action) => {
      state.bookings = action.payload;
      state.isLoading = false;
    },
    fetchBookingFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = bookingListSlice;

export const { fetchBookingFail, fetchBookingSuccess, fetchBookingLoading } =
  actions;

export default reducer;
