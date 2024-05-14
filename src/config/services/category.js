import axios from "axios";

export const postCategory = async (body) => {
    await axios.post("https://api.kunam.my.id/api/category", body)
    .then(res => {if(res.status == 201) console.log(res.data)}
    ).catch(e => console.log(e));  
}

export const getCategory = async() => {
    const getDatas = await axios.get("https://api.kunam.my.id/api/category")
    // .catch(e => console.log(e));

    return getDatas.data.data
}

