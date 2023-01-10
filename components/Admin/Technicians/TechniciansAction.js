import { getAllBookings } from '../api/bookingsApi';
import { getAllTechnicians } from '../api/techniciansApi';
import { useAppDispatch } from '../app/hooks'
import { fetchTechniciansFail, fetchTechniciansLoading, fetchTechniciansSuccess } from './techniciansSlice';


export const fetchAllTechnicians = (pageNumber, search, filter, word) => async (dispatch) => {

  dispatch(fetchTechniciansLoading());
  try {
    const result = await getAllTechnicians(pageNumber, search, filter, word);

    result.data.paginatedResults.length &&
      dispatch(fetchTechniciansSuccess(result.data));
  } catch (error) {
    dispatch(fetchTechniciansFail(error.message));
  }
};