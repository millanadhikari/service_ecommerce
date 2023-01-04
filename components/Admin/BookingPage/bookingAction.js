import { getAllBookings } from '../api/bookingsApi';
import { useAppDispatch } from '../app/hooks'
import { fetchBookingFail, fetchBookingLoading, fetchBookingSuccess } from './bookingsSlice';


export const fetchAllBookings = (pageNumber, search, bookingDate, to) => async (dispatch) => {

  dispatch(fetchBookingLoading());
  try {
    const result = await getAllBookings(pageNumber, search, bookingDate, to);

    result.data.paginatedResults.length &&
      dispatch(fetchBookingSuccess(result.data));
  } catch (error) {
    dispatch(fetchBookingFail(error.message));
  }
};