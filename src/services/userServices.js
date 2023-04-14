import { requestFactory } from './requester';
const baseUrl = 'http://127.0.0.1:5000/api/v1/users/';
const request = requestFactory();

export const getLoginUserData = async () => {
  const result = await request.get(baseUrl + 'getUser');
  return result;
};

export const getAllUsers = async () => {
  const result = await request.get(baseUrl + 'getAllUsers');
  return result;
};

export const updateUserRole = async (data) => {
  const result = await request.patch(baseUrl + 'updateUserRole', data);
  return result;
};

export const updateLoginUserData = async (data, checked) => {
  //At his point couth be updated only address
  const userData = data;
  if (checked) {
    userData.shippingAddress = data.address 
  }
  const result = await request.patch(baseUrl + 'getUser', userData);
  return result;
};