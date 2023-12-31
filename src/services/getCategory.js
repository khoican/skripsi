import axios from "axios"

export const getCategory = (callback) => {
    axios.get("http://localhost:3003/category")
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}