import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/Auth/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  let mode = searchParams.get('mode') || 'login';
  if (mode !== 'login' && mode !== 'register') {
    mode = 'login';
  }

  const data = await request.formData();
  const authData = {
    name: data.get('name'),
    email: data.get('email'),
    password: data.get('password'),
    repeatPassword: data.get('repeatPassword'),
  };

  const response = await fetch('http://localhost:5000/api/v1/users/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });
  if (response.status === 422 || response.status === 401) {
    return response;
  }
  if (response.status !== 200) {
    throw json({ message: 'Could not authenticate user.' }, { status: 500 });
  }
  const result = await response.json();
  localStorage.setItem('auth', JSON.stringify(result))

  return redirect('/');
}
