import { redirect, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { getLoginUserData } from '../services/userServices';

export const getAuthToken = () => {
  const user = JSON.parse(localStorage.getItem('auth'));
  if (user) {
    return user.AccessToken;
  }
  return null;
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

export const getRole = async () => {
  const token = getAuthToken();
  if (token) {
    const result = await getLoginUserData();
    return result.role;
  }
  return null;
};

export const restrictToAdmin = async () => {
  const role = await getRole();
  if (role !== 'admin') {
    return redirect('/catalog');
  }
  return null;
};
