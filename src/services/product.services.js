import axios from "axios";

export const getProducts = (callback) => {
    axios.get("http://localhost:3001/product")
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}