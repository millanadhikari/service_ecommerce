import {configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { useDispatch,  TypedUseSelectorHook, useSelector } from 'react-redux'
import loginReducer from './auth/loginSlice'
import userReducer from '../Admin/user/userSlice'
import bookingsReducer from '../Admin/BookingPage/bookingsSlice'
import spacesReducer from '../Admin/space/spaceSlice'
import cBookingReducer from '../Booking/customerBookingSlice'
import customerRegistrationReducer from '../customerAuth/customerRegistrationSlice'
import quotesReducer from '../Admin/QuotePage/quoteSlice'
import techniciansReducer from '../Admin/Technicians/techniciansSlice'

const store = configureStore({
    reducer: {
        login:loginReducer,
        user:userReducer,
        bookings:bookingsReducer,
        spaces:spacesReducer,
        cBookings:cBookingReducer,
        customerRegistration:customerRegistrationReducer,
        quotes:quotesReducer,
        technicians:techniciansReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store