import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LoggedInContext from '../context/loggedInContext';
import { useBeachData } from '../context/beachDataContext';

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);
  const { setFavBeaches } = useBeachData()
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      email: form.email.value,
      password: form.password.value
    };

    try {
      let result = await fetch('http://localhost:3333/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!result.ok) {
        const message = await result.json();
        setError(message.message);
        return;
      }

      result = await result.json();
      const token = result.token;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(result.email));
      setIsLoggedIn(true);
      setFavBeaches(result.favBeaches);

      navigate('/');
    } catch (error) {
      console.error(error);
      setError('Something went wrong');
    }
  };
  
  return (
    <section id="login-form">
      <h2>Login</h2>
      <p className="error">{error}</p>
      <form action="http://localhost:3333/api/users/login" method="POST" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
        <br />
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" required />
        <br />
        <button type="submit">Iniciar sesión</button>
      </form>
    </section>
  );
};

export default Login;