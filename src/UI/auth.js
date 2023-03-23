import { redirect } from 'react-router-dom';

export const getAuthToken = () => {
  const token = localStorage.getItem('auth');
  return token;
};

export const tokenLoader = () => {
  return getAuthToken();
};

export const checkAuthLoader = () => {
  const token = getAuthToken();
  if (!token) {
    return redirect('/auth');
  }
  return null;
};
