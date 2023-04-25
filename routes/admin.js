const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const mailgun = require("mailgun-js");
const DOMAIN = 'sandboxb21bd93e7e794e4f88a01d13f923ec59.mailgun.org';
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN })
const uuid = require('uuid');
const id = uuid.v4();
const jwt = require('jsonwebtoken');

const db = require('../lib/db.js');
const userMiddleware = require('../middleware/users.js');
// fetch all users
router.get('/all_users', userMiddleware.isLoggedIn, (req, res, next) => {
    db.query(
        `SELECT * FROM users`,
        (err, result) => {
            if (result.length) {
                return res.status(200).send({
                    users: { result }
                });
            } else {
                return res.status(404).send({
                    msg: 'No user is found!'
                });
            }

        });
});
// fetch user by id
router.get('/user/:id', userMiddleware.isLoggedIn, (req, res, next) => {
    const q_id = req.params.id;
    db.query(
        `SELECT * FROM users WHERE id = '${q_id}'`,
        (err, result) => {
            if (result.length) {
                return res.status(200).send({
                    user: { result }
                });
            } else {
                return res.status(404).send({
                    msg: 'User not found!'
                });
            }
        }
    )
});
//delete user by id
router.delete('/user/:id', userMiddleware.isLoggedIn, (req, res, next) => {
    const q_id = req.params.id;
    db.query(
        `DELETE FROM users WHERE id = '${q_id}'`,
        (err, result) => {
            if (err) {
                return res.status(409).send({
                    Error: err
                });
            }

            if (result.affectedRows >= 1) {
                return res.status(202).send({
                    msg: result.affectedRows + ' User has been successfully deleted!'

                });
            } else {
                return res.status(404).send({
                    msg: "No user is found with such ID!"
                });
            }
        }
    )
});
// fetch user transaction history
router.get('/user/transactions/:userid', userMiddleware.isLoggedIn, (req, res, next) => {
    const idv = req.params.userid;
    db.query(
        `SELECT * FROM transactions WHERE user_id='${idv}'`,
        (err, result) => {
            if (result.length) {
                return res.status(200).send({
                    users: { result }
                });
            } else {
                return res.status(404).send({
                    msg: 'User has no transactions yet!'
                });
            }

        });
});
//Login user
router.post('/login', (req, res, next) => {
    db.query(
        `SELECT * FROM admin WHERE user = '${req.body.username}'`,
        (err, result) => {
            // user does not exists
            if (err) {
                // throw err;
                return res.status(400).send({
                    msg: err
                });
            }

            if (!result.length) {
                return res.status(401).send({
                    msg: 'Username or password is incorrect!'
                });
                // check password
            } else if (result[0]['password'] == req.body.password) {
                const token = jwt.sign({
                        username: result[0].username,
                        userId: result[0].id
                    },
                    'SECRETKEY', {
                        expiresIn: '7d'
                    }
                );
                return res.status(200).send({
                    msg: 'Logged in!',
                    token,
                    user: result[0]
                });
            } else {
                // wrong password
                return res.status(401).send({
                    msg: 'Username or password is incorrect!'
                });
            }

        }
    );
});
//Log out user
router.post('/logout/:id', (req, res, next) => {
    const user = req.params.id;
    db.query(
        `DELETE last_login FROM admin WHERE id = '${user}'`,
        (err, result) => {
            if (result.length) {
                // const data = JSON.parse(result);
                //console.log(data.bonus);
                return res.status(200).send({
                    msg: "User is logged out and session expired."
                });
            } else {
                return res.status(302).send({
                    msg: "You haven't refer a user yet!"
                });
            }
        }
    )

});
module.exports = router;