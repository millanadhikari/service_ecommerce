import axios from "axios";

const rootUrl = "http://localhost:3001/v1/";

const closeTicketUrl = rootUrl + "ticket/close-ticket/";

export const getAllQuotes = (pageNumber: number) => {
  const bookingsUrl = rootUrl + `quote/all?page=${pageNumber}&limit=4`;   
   return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(bookingsUrl, {
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
          },
        });
        console.log(result)
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };