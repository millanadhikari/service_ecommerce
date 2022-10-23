import axios from "axios";

const rootUrl = "https://wedo-backend.herokuapp.com/v1/";
// const rootUrl = "http://localhost:3001/v1/";

const closeTicketUrl = rootUrl + "ticket/close-ticket/";

export const getAllQuotes = (pageNumber: number, search: string) => {
  const bookingsUrl =
    rootUrl + `quote/all?page=${pageNumber}&limit=5&search=${search}`;
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(bookingsUrl);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
