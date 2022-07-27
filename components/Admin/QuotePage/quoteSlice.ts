import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quotes: {
    paginatedResults: [],
    totalPages: 0,
    previous:{
      page:0
    },
    next:{
      page:0
    }
  },
  isLoading: false,
  error: "",
  selectedTicket: {},
};
const quoteListSlice = createSlice({
  name: "quoteList",
  initialState,
  reducers: {
    fetchQuoteLoading: (state) => {
      state.isLoading = true;
    },
    fetchQuoteSuccess: (state, action) => {
      state.quotes = action.payload;
      state.isLoading = false;
    },
    fetchQuoteFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = quoteListSlice;

export const { fetchQuoteLoading, fetchQuoteSuccess, fetchQuoteFail } =
  actions;

export default reducer;
