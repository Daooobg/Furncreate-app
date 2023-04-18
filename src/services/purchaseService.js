import { requestFactory } from './requester';
// const baseUrl = 'http://127.0.0.1:5000/api/v1/purchase/';
const baseUrl = 'https://furncreate-server.herokuapp.com/api/v1/purchase/';

const request = requestFactory();

export const addBoughtItems = async (data) => {
  await request.post(baseUrl, data);
};

export const getOwnPurchases = async () => {
  const data = await request.get(baseUrl);
  return data;
};

export const getAllPurchases = async () => {
  const data = await request.get(baseUrl + 'all');
  return data;
};
