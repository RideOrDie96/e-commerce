import decode from 'jwt-decode';

const isTokenValid = () => {
  const authentication = false;
  const token = localStorage.getItem('access_token');
  const language = localStorage.getItem('language');

  if (token) {
    decodedToken = decode(token);

    if (decodedToken.exp * 1000 < Date.now()) {
      authentication = false;
    } else {
      authentication = true;
    }

    return authentication;
  }
};

export default isTokenValid;
