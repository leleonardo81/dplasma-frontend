import Assesment from "views/Assesment";
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
  }
]