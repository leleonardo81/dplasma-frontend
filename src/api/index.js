import axios from 'axios';
import { baseUrl } from './constant';

const buildQuery = query => query ? ['?'].concat(Object.keys(query)).reduce((p, qKey, index)=>`${p}${index===1?'':'&'}${qKey}=${query[qKey]}`) : '';

export const submitAssesmentTest = data => axios.post(`${baseUrl}/assesment`, data);

export const appLogin = (token) => axios.post(`${baseUrl}/auth-login`, {}, {headers: { 'Authorization': token }});
export const appRegister = (token, data) => axios.post(`${baseUrl}/auth-register`, data, {headers: { 'Authorization': token }});

export const requestDonor = data => axios.post(`${baseUrl}/donor-request`, data);
export const getListDonorRequest = (query) => {
  const queryMap = buildQuery(query);
  return axios.get(`${baseUrl}/donor-request${queryMap}`);
};

export const getDetailDonorRequest = id => {
  return axios.get(`${baseUrl}/donor-request/${id}`);
};

export const getRS = (query) => {
  const queryMap = buildQuery(query);
  return axios.get(`${baseUrl}/rumah-sakit${queryMap}`);
};

export const createRS = (data) => {
  return axios.post(`${baseUrl}/rumah-sakit`, data);
}

export const editProfile = data => {
  return axios.post(`${baseUrl}/profil`, data);
} 
export const getProfile = data => {
  return axios.get(`${baseUrl}/profil`);
}
