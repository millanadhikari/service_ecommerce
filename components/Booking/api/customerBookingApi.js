


export const addCustomerBooking = ({ sadhguru }) => {
    console.log(sadhguru)
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.post('http://localhost:3001/v1/booking', sadhguru);

            resolve(result);
            console.log(result)
        } catch (error) {
            reject(error);
        }
    });
};