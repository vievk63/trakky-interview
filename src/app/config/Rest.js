import axios from "axios";

axios.defaults.headers = {
  Accept: "application/json",
};

export default class Rest {
  static async get(url, publicToken = false) {
    const instance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,

      headers: {
        "Content-Type": "application/json",
      },
    });

    return await instance
      .get(url)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        if (error?.response?.status === 401) {
          console.clear();
          return false;
        } else if (error?.response?.data?.message) {
          console.clear();
          return false;
        } else {
          console.clear();
          return false;
        }
      });
  }

  static async post(
    url,
    payload = {},
    formData = false,
    headers = {},
    publicToken = false
  ) {
    const instance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,

      headers: {
        "Content-Type": "application/json",
      },
    });

    return await instance
      .post(url, payload)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log(error);

        if (error?.response?.status === 401) {
          console.clear();
          return false;
        } else if (error?.response?.data?.message) {
          console.clear();
          return false;
        } else {
          console.clear();
          return false;
        }
      });
  }

  static async delete(url, formData = false, headers = {}) {
    const instance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,

      headers: {
        "Content-Type": "application/json",
      },
    });

    return await instance
      .delete(url)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        if (error?.response?.status === 401) {
          console.clear();
          return false;
        } else if (error?.response?.data?.message) {
          console.clear();
          return false;
        } else {
          console.clear();
          return false;
        }
      });
  }

  static async put(url, payload = {}, formData = false, headers = {}) {
    const instance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,

      headers: {
        "Content-Type": "application/json",
      },
    });

    return await instance
      .put(url, payload)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log(error);

        if (error?.response?.status === 401) {
          console.clear();
          return false;
        } else if (error?.response?.data?.message) {
          console.clear();
          return false;
        } else {
          console.clear();
          return false;
        }
      });
  }
}
