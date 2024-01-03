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

export const getProductBySubCategory = (callback) => {
    axios.get("http://localhost:3001/product?subCategoryId=d42292cb-3598-450d-afd4-e07b79d5ddaf")
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}