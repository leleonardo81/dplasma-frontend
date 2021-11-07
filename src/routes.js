import AddRS from "views/AddRS";
import Assesment from "views/Assesment";
import DonorRequest from "views/DonorRequest";
import Profile from "views/Profile";
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
  },
  {
    path: '/profile',
    exact: true,
    component: Profile,
  },
  {
    path: '/admin/add-rs',
    exact: true,
    component: AddRS,
  }
]