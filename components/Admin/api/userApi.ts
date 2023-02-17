import axios from "axios";

const rootUrl = "https://wedo-backend.herokuapp.com/v1/";
// const rootUrl = "http://localhost:3001/v1/";

const loginUrl = rootUrl + "customer/login";
const newAccessJWT = rootUrl + "customer/tokens";
const userProfileUrl = rootUrl + "customer"
const logoutUrl = rootUrl + "customer/logout";
const passwordUrl = rootUrl + "customer/passwordChange"

export const userRegistration = (frmData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(userProfileUrl, frmData);
      resolve(res.data);


      if (res.data.status === "success") {
        resolve(res.data);
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const userLogin = (frmData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(loginUrl, frmData);
      resolve(res.data);

      if ((res.data.status === "success")) {
        sessionStorage.setItem("accessJWT", res.data.accessJWT);
        localStorage.setItem(
          "service_ecommerce",
          JSON.stringify({ refreshJWT: res.data.refreshJWT })
        );
      }
    } catch (error) {
      reject(error);
    }
  });
};


export const fetchUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT");

      if (!accessJWT) {
        reject("Token not found!");
      }

      const res = await axios.get(userProfileUrl, {
        headers: {
          Authorization: accessJWT,
        },
      });
        console.log('handyman', res.data.user._doc)
      resolve(res.data.user._doc);
    } catch (error) {
      console.log(error);
      reject(error.message);
    }
  });
};

export const fetchNewAccessJWT = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { refreshJWT } = JSON.parse(localStorage.getItem("service_ecommerce"));

      if (!refreshJWT) {
        reject("Token not found!");
      }

      const res = await axios.get(newAccessJWT, {
        headers: {
          Authorization: refreshJWT,
        },
      });

      if (res.data.status === "success") {
        sessionStorage.setItem("accessJWT", res.data.accessJWT);
      }

      resolve(true);
    } catch (error) {
      if (error.message === "Request failed with status code 403") {
        localStorage.removeItem("service_ecommerce");
      }

      reject(false);
    }
  });
};

export const changePassword = async (passObj) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT");

      if (!accessJWT) {
        reject("Token not found!");
      }

      const res = await axios.put(passwordUrl, passObj, {
        headers: {
          Authorization: accessJWT,
        },
      });

      resolve(res.data);
    } catch (error) {
      console.log(error);
      reject(error.message);
    }
  });
};

export const userLogout = async () => {
  try {
    await axios.delete(logoutUrl, {
      headers: {
        Authorization: sessionStorage.getItem("accessJWT"),
      },
    });
  } catch (error) {
    console.log(error);
  }
};