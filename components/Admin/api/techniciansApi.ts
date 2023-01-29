import axios from "axios";

const rootUrl = "https://wedo-backend.herokuapp.com/v1/";
// const rootUrl = "http://localhost:3001/v1/";

const closeTicketUrl = rootUrl + "ticket/close-ticket/";

export const getAllTechnicians = (
  pageNumber: number,
  search: string,
  filter: string,
  word: string
) => {
  const techniciansUrl =
    rootUrl +
    `technician/all?page=${pageNumber}&limit=4&search=${search}&filter=${filter}&word=${word}`;
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(techniciansUrl, {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });
      console.log(result);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
