import { useState, useContext } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import LoggedInContext from '../context/loggedInContext';
import { useBeachData } from '../context/beachDataContext';
import '../styles/login-register.css'
import Background from "../components/background";
import Logout from './logout';


const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);
  const { setFavBeaches, setEmail } = useBeachData()

const logg = () => {

setTimeout(() => {
  setIsLoggedIn(false);
  localStorage.setItem('isLoggedIn', 'false');
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}, 20 * 60 * 1000); 


}


  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {

    e.preventDefault()
    const form = e.target
    const data = {
      email: form.email.value,
      password: form.password.value
    }
    try {
      let result = await fetch('http://localhost:3333/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
      if (!result.ok) {
        const message = await result.json();
        setError(message.message);
        return;
      }
      result = await result.json();
      console.log(result);
      const token = result.token;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(result.email));
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
      setFavBeaches(result.favBeaches);
      setEmail(result.email)
      navigate('/home');
      console.log('Sesión iniciada');
      logg(); //cerrar sesión a los 20 minutos y limpiar el localStorage

    } catch (error) {
      console.error(error);
      setError('Something went wrong');
    }
  };

  const location = useLocation();
  const isLoginRoute = location.pathname === '/login';

  return (
    <div>
      <Background />
      <section id="login-form">
        <div>
          <Link to="/login">
            <button className={`btn ${isLoginRoute ? 'active' : ''}`}>Iniciar Sesión</button>
          </Link>
          <Link to="/register">
            <button className={`btn ${!isLoginRoute ? 'active' : ''}`}>Registrate</button>
          </Link>
        </div>

        <h4>Bienvenido a Aquality</h4>

        <p className="error">{error}</p>
        <form action="http://localhost:3333/api/users/login" method="POST" onSubmit={handleSubmit}>
          <label htmlFor="email"></label>
          <input type="email" name="email" id="email" placeholder="Email" required />
          <br />
          <label htmlFor="password"></label>
          <input type="password" name="password" id="password" placeholder="Contraseña" required />
          <br />
          <button className="btn-submit" type="submit">Iniciar sesión</button>
        </form>
      </section>
    </div>
  );
};

export default Login;