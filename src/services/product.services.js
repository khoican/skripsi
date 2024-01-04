import axios from "axios";

export const getProducts = (id, callback) => {
    axios.get(`http://localhost:3001/product${id == null ? "" : `?subCategoryId=${id}`}`)
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const getProductById = (id, callback) => {
    axios.get(`http://localhost:3001/product?id=${id}`)
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}