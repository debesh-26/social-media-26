import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://social-media-26-production.up.railway.app/api/",
});