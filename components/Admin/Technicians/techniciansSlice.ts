import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  technicians: {
    paginatedResults: [],
    totalPages: 0,
    previous: {
      page: 0,
    },
    next: {
      page: 0,
    },
  },
  isLoading: false,
  error: "",
  selectedTicket: {},
};
const techniciansListSlice = createSlice({
  name: "techniciansList",
  initialState,
  reducers: {
    fetchTechniciansLoading: (state) => {
      state.isLoading = true;
    },
    fetchTechniciansSuccess: (state, action) => {
      state.technicians = action.payload;
      state.isLoading = false;
    },
    fetchTechniciansFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = techniciansListSlice;

export const {
  fetchTechniciansFail,
  fetchTechniciansSuccess,
  fetchTechniciansLoading,
} = actions;

export default reducer;
