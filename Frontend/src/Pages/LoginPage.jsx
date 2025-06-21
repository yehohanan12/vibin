import { useState } from 'react';
import { registerUser, loginUser } from '../Services/userService.js';
import '../App.css';

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        address: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                // Login
                const data = await loginUser({ email: form.email, password: form.password });
                // stocker le token dans sessionStorage
                sessionStorage.setItem('token', data.token);
                alert(`Connexion réussie, bienvenue ${data.user.username || data.user.email} !`);
                // Ici tu peux rediriger ou charger une page protégée
            } else {
                // Register
                await registerUser(form);
                alert('Compte créé avec succès !');
                // reset formulaire
                setForm({ username: '', email: '', password: '', address: '' });
                setIsLogin(true); // basculer vers connexion après inscription
            }
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="form-container">
            <h2>{isLogin ? 'Se connecter' : 'Créer un compte'}</h2>
            <form onSubmit={handleSubmit} className="form">
                {!isLogin && (
                    <>
                        <div className="form-group">
                            <label htmlFor="username">Nom d’utilisateur</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={form.username}
                                onChange={handleChange}
                                required={!isLogin}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Adresse</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                required={!isLogin}
                            />
                        </div>
                    </>
                )}

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn">
                    {isLogin ? 'Se connecter' : 'S’inscrire'}
                </button>
            </form>

            <p style={{ marginTop: '1rem' }}>
                {isLogin ? "Pas encore de compte ? " : "Déjà inscrit ? "}
                <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    style={{ color: 'blue', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                    {isLogin ? 'Créer un compte' : 'Se connecter'}
                </button>
            </p>
        </div>
    );
}
