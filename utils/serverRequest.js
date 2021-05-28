import axios from "axios";
// import { adminTypes } from "../modules/admin/store";
// import { applicantTypes } from "../modules/applicants/store";
// import { companyTypes } from "../modules/company/store";
// import { store } from "../store";
// import { AUTH_CANCELED } from "../store/types/authTypes";

// const {
//   authTypes: { AUTH_CANCELED },
//   profileTypes: { PROFILE_CANCELED },
// } = applicantTypes;
// const {
//   companyAuthTypes: { COMPANY_AUTH_CANCELED },
// } = companyTypes;
// const {
//   authTypes: { AUTH_CANCELED_ADMIN },
// } = adminTypes;

export const serverRequest = (token) => {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  if (token) {
    headers["authorization"] = `Bearer ${token}`;
  }

  const axiosInst = axios.create({
    headers,
  });

  axiosInst.interceptors.request.use(
    async function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axiosInst.interceptors.response.use(
    async function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      if (
        error.response.status === 403 ||
        error.response.status === 401 ||
        error.response.data.message === "Access denied. No token provided."
      ) {
        //logout user
        if (typeof window === undefined) {
          window.location.href = "/login";
        }
        // store.dispatch({ type: AUTH_CANCELED });
      }
      return Promise.reject(error);
    }
  );

  return axiosInst;
};

export const serverRequestFormData = (token) => {
  const headers = {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  };

  if (token) {
    headers["authorization"] = `Bearer ${token}`;
  }

  const axiosInst = axios.create({
    headers,
  });

  axiosInst.interceptors.request.use(
    async function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axiosInst.interceptors.response.use(
    async function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      if (
        error.response.status === 403 ||
        error.response.status === 401 ||
        error.response.data.message === "Access denied. No token provided."
      ) {
        //logout user
        window.location.href = "/login";
        // if (typeof window !== "undefined") {
        // if (process.env.NODE_ENV === "production") {
        //   window.location.href = `${process.env.REACT_APP_FRONTEND}/login`;
        // } else {
        //   window.location.href = `http://localhost:3000/login`;
        // }
        // if (window !== undefined) {
        //   window.location.href = `${window.location.protocol}//${window.location.host}/login`;
        // }
        // }
      }
      return Promise.reject(error);
    }
  );

  return axiosInst;
};
