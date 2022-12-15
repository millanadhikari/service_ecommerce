import { getAllBookings } from '../api/bookingsApi';
import { useAppDispatch } from '../app/hooks'
import { fetchBookingFail, fetchBookingLoading, fetchBookingSuccess } from './bookingsSlice';


export const fetchAllBookings = (pageNumber, search, filter) => async (dispatch) => {

  dispatch(fetchBookingLoading());
  try {
    const result = await getAllBookings(pageNumber, search, filter);

    result.data.paginatedResults.length &&
      dispatch(fetchBookingSuccess(result.data));
  } catch (error) {
    dispatch(fetchBookingFail(error.message));
  }
};