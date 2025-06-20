const API_URL = 'http://localhost:3000';

export async function loginUser(credentials) {
    const res = await fetch(`${API_URL}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.error || 'Erreur lors de la connexion');

    // stocker le token
    sessionStorage.setItem('token', data.token);
    return data.user;
}
