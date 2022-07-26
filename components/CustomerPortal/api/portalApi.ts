import axios from "axios";

const rootUrl = "http://localhost:3001/v1/";
const ticketUlr = rootUrl + "customer/";


export const updateDetails = (_id, updObj) => {
    return new Promise(async (resolve, reject) => {
        try {
          const result = await axios.put(ticketUlr + _id, updObj, {
            headers: {
              Authorization: sessionStorage.getItem("accessJWT"),
            },
          });
    
          resolve(result.data);
        } catch (error) {
          console.log(error.message);
          reject(error);
        }
      });
    };