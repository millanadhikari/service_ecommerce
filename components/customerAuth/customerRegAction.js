
import {registrationPending, registrationError, registrationSuccess} from './customerRegistrationSlice'
import {userRegistration} from '../Admin/api/userApi'


export const newUserRegistration = (frmDt) => async (dispatch) => {
    console.log(frmDt)
    try {
      dispatch(registrationPending());
  
      const result = await userRegistration(frmDt);
      console.log(result.result._id)
      result.result._id
        && dispatch(registrationSuccess(result.message))
  
    } catch (error) {
      dispatch(registrationError(error.message));
    }
  };