import { requestFactory } from './requester';
const baseUrl = 'http://127.0.0.1:5000/api/v1/';
const request = requestFactory();

export const addBoughtItems = async (data) => {
  await request.post(baseUrl + 'purchase', data);
};
