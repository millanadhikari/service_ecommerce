import { useRouter } from "next/router";
import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile } from "../user/userAction";
import { loginSuccess } from "../auth/loginSlice";
import { fetchNewAccessJWT } from "../api/userApi";


const withAuth = (WrappedComponent) => {

  return (props) => {
    const dispatch = useDispatch();
    const { isAuth } = useSelector(state => state.login);
    const isAdmin = useSelector(state => state.user.user.isAdmin);
    const {user} = useSelector(state => state.user)
    useEffect(() => {
      const updateAccessJWT = async () => {
        const result = await fetchNewAccessJWT();
        result && dispatch(loginSuccess());
      };

      !user._id && dispatch(getUserProfile());

      !sessionStorage.getItem("accessJWT") &&
        localStorage.getItem("accounting_crm") &&
        updateAccessJWT();

      !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
    }, [dispatch, isAuth, user._id]);


      return (
        isAdmin ? <WrappedComponent> {props}</WrappedComponent> : null
      );
    }

    // If we are on server, return null
  };


export default withAuth;
