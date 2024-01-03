import axios from "axios"

export const getCart = (callback) => {
    axios.get(`http://localhost:3001/carts`)
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}