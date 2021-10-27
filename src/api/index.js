import axios from 'axios';
import { baseUrl } from './constant';

export const submitAssesmentTest = data => axios.post(`${baseUrl}/assesment`, data);

export const appLogin = (token) => axios.post(`${baseUrl}/auth-login`, {}, {headers: { 'Authorization': token }});
export const appRegister = (token, data) => axios.post(`${baseUrl}/auth-register`, data, {headers: { 'Authorization': token }});