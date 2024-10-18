const jwt = require('jsonwebtoken');

const fetchUser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send({ error: "Please authenticate with a valid token" });

    try {
        const data = jwt.verify(token, "urban_styling_token");
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Invalid token" });
    }
};

module.exports = fetchUser;
