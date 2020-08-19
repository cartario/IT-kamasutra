import axios from "axios";

export const createApi = () => {

  const api = axios.create({
    baseURL: `https://test.megapolis-it.ru/api/list`,
    timeout: 1000 * 5,
    withCredentials: false,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response) {
      
      throw err;
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);
  return api;
};




