import axios from "axios";

export const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

//custom method get.

export const get = async (path, options) => {
    const res = await request.get(path, options);
    return res.data;
}