import { getUserPending, getUserSuccess, getUserFail, passwordChangePending, passwordChangeSuccess, passwordChangeFail } from "./userSlice";
import { fetchUser } from "../api/userApi";

export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch(getUserPending());

    const result = await fetchUser();

    if (result._id)
      return dispatch(getUserSuccess(result));

    dispatch(getUserFail("User is not found"));
  } catch (error) {
    dispatch(getUserFail(error));
  }
};

export const getChangePassword = (passObj) => async (dispatch) => {
  try {
    dispatch(passwordChangePending());

    const result = await changePassword(passObj);

    if (result)
      return dispatch(passwordChangeSuccess());

    dispatch(passwordChangeFail("User is not found"));
  } catch (error) {
    dispatch(passwordChangeFail(error));
  }
};

