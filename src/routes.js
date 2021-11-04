import Assesment from "views/Assesment";
import DonorRequest from "views/DonorRequest/index";
import RequestDonor from "views/RequestDonor";
import Home from "./views/Home";

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/assesment',
    exact: true,
    component: Assesment,
  },
  {
    path: '/request',
    exact: true,
    component: RequestDonor,
  },
  {
    path: '/donor/:id',
    exact: true,
    component: DonorRequest,
  }
]