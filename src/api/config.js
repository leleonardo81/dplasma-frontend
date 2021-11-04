import axios from "axios"
import { logout } from "store/auth/index";


export const setupAuthTokenMiddleware = store => next => action => {
  // console.log(action)
  if (['persist/REHYDRATE', 'auth/login/fulfilled'].includes(action.type)) {
    const token = action.payload?.token;
    console.log("axios configured", token)
    if (token) {
      axios.defaults.headers.common['Authorization'] = `${token}`
    } else {
      delete axios.defaults.headers.common['Authorization']
    }
    axios.interceptors.response.use(null, err=>{
      if (err.response && err.response.status === 401) {
        delete axios.defaults.headers.common['Authorization'];
        store.dispatch(dispatch=>{
          console.log("Unauthorized logging out")
          dispatch(logout());
        })
      }
      return Promise.reject(err);
    });
  } 

  // continue processing this action
  return next(action);
}

export const setupAuthToken = (token) => {
  if (token) {
    console.log("axios configured", token)
    axios.defaults.headers.common['Authorization'] = `${token}`
  } else {
    delete axios.defaults.headers.common['Authorization']
    window.location.href = "/";
  }
}