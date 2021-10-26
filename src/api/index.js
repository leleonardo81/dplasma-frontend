import axios from 'axios';
import { baseUrl } from './constant';

export const submitAssesmentTest = data => axios.post(`${baseUrl}/assesment`, data);