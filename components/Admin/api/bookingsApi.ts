import axios from "axios";

// const rootUrl = "https://wedo-backend.herokuapp.com/v1/";
const rootUrl = "http://localhost:3001/v1/";

const closeTicketUrl = rootUrl + "ticket/close-ticket/";

export const getAllBookings = ( pageNumber: number,
  search: string,
  bookingDate: Date,
  to: Date) => {
    let newbook = bookingDate ? bookingDate.toISOString().slice(0, 10) : ''
    let oldbook = to ? to.toISOString().slice(0, 10): ''


    console.log('newbook', newbook)
    console.log('oldbook', oldbook)
  const bookingsUrl = rootUrl + `booking/all?page=${pageNumber}&limit=4&search=${search}&bookingDate=${newbook}&to=${oldbook}`;   
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
