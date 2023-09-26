import { useNavigate, Link, useLocation } from 'react-router-dom'
import { useState, useContext } from 'react';
import { useBeachData } from '../context/beachDataContext';
import LoggedInContext from '../context/loggedInContext';
import Background from '../components/background';

const Register = () => {
    const { setIsLoggedIn } = useContext(LoggedInContext);
    const { setEmail } = useBeachData()
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const data = {
            email: form.email.value,
            password: form.password.value,
            confirmPassword: form.confirmPassword.value
        }
        let result = await fetch('http://localhost:3333/api/register', {
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
        setEmail(result.email)
        navigate('/comenzar');
    }

    const location = useLocation();
    const isLoginRoute = location.pathname === '/login';

    return (

        <div>
            <Background />

            <section id="register-form">

                <div>
                    <Link to="/login">
                        <button className={`btn ${isLoginRoute ? 'active' : ''}`}>Iniciar Sesión</button>
                    </Link>
                    <Link to="/register">
                        <button className={`btn ${!isLoginRoute ? 'active' : ''}`}>Registrate</button>
                    </Link>
                </div>

                <h4>Bienvenído a Aquality</h4>

                <p className="error">{error}</p>
                <form action="http://localhost:3333/api/users/register" method="POST" onSubmit={handleSubmit}>
                    <label htmlFor="email"></label>
                    <input type="email" placeholder="Email" name="email" id="email" required />
                    <br />
                    <label htmlFor="password"></label>
                    <input type="password" placeholder="Contraseña" name="password" id="password" required />
                    <br />
                    <label htmlFor="confirmPassword"></label>
                    <input type="password" placeholder="Confirmar contraseña" name="confirmPassword" id="confirmPassword" required />
                    <br />
                    <button className="btn-submit-register" type="submit">Registrate</button>
                </form>
            </section>
        </div>
    )
}
export default Register