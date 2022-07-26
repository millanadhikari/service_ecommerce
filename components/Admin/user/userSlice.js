import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  error: "",
  sidebarOpen:false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserPending: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      state.error = "";
    },
    getUserFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    getSidebarStatus:(state, {payload}) => {
      state.isLoading=true;
      state.sidebarOpen= payload
    },
    passwordChangePending:(state) => {
      state.isLoading = true;

    },
    passwordChangeSuccess: (state ) => {
      state.isLoading = false;
     
    },
    passwordChangeFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    logoutSuccess: (state) => {
      state.user = {};
    },
  },
});

export const {
  getUserPending,
  getUserSuccess,
  getUserFail,
  getSidebarStatus,
  passwordChangePending,
  passwordChangeSuccess,
  passwordChangeFail,
  logoutSuccess
} = userSlice.actions;

export default userSlice.reducer;