import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function GoogleSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      localStorage.setItem("token", token);
      navigate("/"); // or wherever
    } else {
      navigate("/");
    }
  }, []);

  return <p>Logging in...</p>;
}

export default GoogleSuccess;