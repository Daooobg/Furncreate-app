import { redirect } from 'react-router-dom';

export const getAuthToken = () => {
  const user = JSON.parse(localStorage.getItem('auth'))
  if (user) {
    return user.AccessToken
  }
  return null
 
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
