import {useAppDispatch} from '../app/hooks'
import { fetchQuoteFail, fetchQuoteLoading, fetchQuoteSuccess } from './quoteSlice';
import {getAllQuotes} from '../api/quotesApi'

export const fetchAllQuotes = (pageNumber, search) => async (dispatch) => {

    dispatch(fetchQuoteLoading());
    try {
      const result = await getAllQuotes(pageNumber, search);
     
        result.data.paginatedResults.length &&
         dispatch(fetchQuoteSuccess(result.data));
    } catch (error) {
      dispatch(fetchQuoteFail(error.message));
    }
  };