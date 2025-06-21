const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error('JWT_SECRET n’est pas défini dans les variables d’environnement');
}

// Middleware d’authentification
function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Token manquant ou mal formaté' });
    }

    const token = authHeader.split(' ')[1];

    try {
        req.user = jwt.verify(token, JWT_SECRET);
        next();
    } catch (err) {
        return res.status(403).json({ error: 'Token invalide ou expiré' });
    }
}

// Middleware de contrôle de rôle
function requireRole(role) {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ error: 'Utilisateur non authentifié' });
        }

        if (req.user.role !== role) {
            return res.status(403).json({ error: `Accès interdit : rôle ${role} requis` });
        }

        next();
    };
}

module.exports = {
    authMiddleware,
    requireRole,
};
