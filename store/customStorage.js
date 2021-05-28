// import cookies from 'next-cookies'
import Cookies from "js-cookie";

const webStorage = () => {
  return {
    getItem(_key) {
      // return Promise.resolve(null);
      return new Promise((resolve, reject) => {
        const value = Cookies.get(_key);
        resolve(value);
      });
    },
    setItem(_key, value) {
      // return Promise.resolve(value);
      return new Promise((resolve, reject) => {
        Cookies.set(_key, value);
        resolve(value);
      });
    },
    removeItem(_key) {
      // return Promise.resolve();
      return new Promise((resolve, reject) => {
        Cookies.remove(_key);
        resolve();
      });
    },
  };
};

const nodeStorage = () => {
  return {
    getItem(_key) {
      // return Promise.resolve(null);
      return new Promise((resolve, reject) => {
        const value = Cookies.get(_key);
        resolve(value);
      });
    },
    setItem(_key, value) {
      // return Promise.resolve(value);
      return new Promise((resolve, reject) => {
        Cookies.set(_key, value);
        resolve(value);
      });
    },
    removeItem(_key) {
      // return Promise.resolve();
      return new Promise((resolve, reject) => {
        Cookies.remove(_key);
        resolve();
      });
    },
  };
};

const storage = typeof window !== "undefined" ? nodeStorage : webStorage;

export default storage;
