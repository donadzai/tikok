import axios from "axios";

export const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

//custom method get.

export const get = async (path, options) => {
    const res = await request.get(path, options);
    return res.data;
}