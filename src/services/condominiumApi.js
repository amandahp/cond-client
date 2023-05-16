import axios from "axios";

export const registerApi = async (payload) => {
  console.log(payload)
  await axios.post(`${process.env.REACT_APP_API_URL}/resident`, {...payload},{ headers: {
    // 'application/json' is the modern content-type for JSON, but some
    // older servers may use 'text/json'.
    // See: http://bit.ly/text-json
    'content-type': 'application/json'
  }});
};

export const listApi = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/resident`);

  return data;
};

export const listOneItemApi = async (id) => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/resident/${id}`);

  return data;
};

export const updateApi = async (id, payload) => {
  return await axios.put(`${process.env.REACT_APP_API_URL}/resident/${id}`, payload)
};

export const deleteApi = async (id) => {
  return await axios.delete(`${process.env.REACT_APP_API_URL}/resident/${id}`);
};