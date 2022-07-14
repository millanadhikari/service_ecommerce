import axios from "axios";


// const sadhguru = 
//   {
//       name : "Priyanka thakur",
//       email: "asdfdf@gmail.com",
//       bookingDate : "12/09/2021",
//       address:"lkjsdfklj",
//       phone:"'20320203",
//       totalPrice:"223",
//       products : [],
//       stripeData : [],
//       paidStatus :"true",
//       jobStatus:"done"
  
     
//   }
export const addCustomerBooking = (sadhguru) => {
    console.log(sadhguru)
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.post('http://localhost:3001/v1/booking', sadhguru);

            resolve(result);
            console.log(result)
        } catch (error) {
            reject(error);1
        }
    });
};