// middleware/users.js

const jwt = require("jsonwebtoken");

module.exports = {
    validateRegister: (req, res, next) => {
        // username min length 3
        if (!req.body.username || req.body.username.length < 3) {
            return res.send({
                msg: 'Please enter a username with minimum of 3 chars'
            });
        }
        // password min 6 chars
        if (!req.body.email) {
            return res.send({
                msg: 'Please enter a valid email'
            });
        }

        // password min 6 chars
        if (!req.body.password || req.body.password.length < 6) {
            return res.send({
                msg: 'Please enter a password with min. 6 chars'
            });
        }

        // password (repeat) does not match
        if (!req.body.confirmPassword ||
            req.body.password != req.body.confirmPassword
        ) {
            return res.status(400).send({
                msg: 'Both passwords must match'
            });
        }

        next();
    },

    // middleware/users.js

    isLoggedIn: (req, res, next) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(
                token,
                'SECRETKEY'
            );
            req.userData = decoded;
            next();
        } catch (err) {
            return res.status(401).send({
                msg: 'Your session is not valid!'
            });
        }
    }
};