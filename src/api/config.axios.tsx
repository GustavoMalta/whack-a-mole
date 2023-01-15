import axios from 'axios';

export const Axios = () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  axios.create(config);
  axios.defaults.baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:3001';

  return axios;
};
