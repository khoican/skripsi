import axios from "axios"

export const getCategory = (callback) => {
    axios.get("http://localhost:3001/category")
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const getSubCategory = (callback) => {
    axios.get(`http://localhost:3001/subCategory`)
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}