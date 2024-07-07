import axios from "axios";

const baseURL = process.env.PROXYPAY_BASEURL || 'https://api.sandbox.proxypay.co.ao';
const token = process.env.PROXYPAY_TOKEN || '7fil413kgqhkga5ir0qv0qtua57n8c1v';

export const proxypay = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.proxypay.v2+json",
        Authorization: `Token ${token}`,
      },
});