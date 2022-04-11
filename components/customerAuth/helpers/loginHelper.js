import { loginFail, loginPending, loginSuccess } from "../../Admin/auth/loginSlice";

import { userLogin } from '../../Admin/api/userApi'
import {getUserProfile} from '../../Admin/user/userAction'


export const loginHelper = async (dispatch, email, password) => {

    dispatch(loginPending());
   
    try {
        const isAuth = await userLogin({ email, password });
        if (isAuth.status === "error") {
        //   setErroremail(true)
        //   setErrorpassword(isAuth.message)
        console.log(isAuth.status)
          return dispatch(loginFail(isAuth.message));
        }
          dispatch(loginSuccess());
          dispatch(getUserProfile());
        //   router.push("/admin/bookings")
        
        
      } catch (error) {
        dispatch(loginFail(error.message));
      }
    };


