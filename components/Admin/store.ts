import {configureStore} from '@reduxjs/toolkit'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import loginReducer from './auth/loginSlice'
import userReducer from '../Admin/user/userSlice'
import bookingsReducer from '../Admin/BookingPage/bookingsSlice'
import spacesReducer from '../Admin/space/spaceSlice'
import cBookingReducer from '../Booking/customerBookingSlice'
import customerRegistrationReducer from '../customerAuth/customerRegistrationSlice'


const store = configureStore({
    reducer: {
        login:loginReducer,
        user:userReducer,
        bookings:bookingsReducer,
        spaces:spacesReducer,
        cBookings:cBookingReducer,
        customerRegistration:customerRegistrationReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store