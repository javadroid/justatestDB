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
router.get('/verify-email/:id', userMiddleware.isLoggedIn, (req, res, next) => {
    const vstatus = 'verified'
    const idv = req.params.id;
    console.log(idv);
    db.query(
        `UPDATE users SET vstatus='${vstatus}' WHERE id='${idv}'`,
        (err, result) => {
            if (err) {
                // throw err;
                return res.status(400).send({
                    msg: err
                });
            }

            return res.status(200).send("Your email has been successfully verified. You can now login from our mobile app!");


        }
    );
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
// Fetching user info for kyc verification
// router.get('/user/info/:id', userMiddleware.isLoggedIn, (req, res, next) => {
//     const vstatus = 'verified'
//     const idv = req.params.id;
//     console.log(idv);
//     db.query(
//         `SELECT * FROM kyc WHERE userid='${idv}'`,
//                 (err, result) => {
//                         if (err) {
//                             return res.status(400).send({
//                                 msg: err
//                             });
//                         }

//             return res.status(200).send(result);


//                 }
//             );
// });

// approve user kyc
// router.put('/user/kyc/approve/:userid', userMiddleware.isLoggedIn, (req, res, next) => {
//     const vstatus = 'Approved'
//     const idv = req.params.userid;
//     console.log(idv);
//     db.query(
//         `UPDATE kyc SET approved='${vstatus}' WHERE id='${idv}'`,
//                 (err, result) => {
//                         if (err) {
//                             return res.status(400).send({
//                                 msg: err
//                             });
//                         }

//             return res.status(200).send({
//                             msg: 'User KYC has been successfully approved',
//                             status: 'Approved'
//                         });


//                 }
//             );
// });
// Disapprove user kyc
// router.put('/user/kyc/disapprove/:userid', userMiddleware.isLoggedIn, (req, res, next) => {
//     const vstatus = 'Disapproved'
//     const idv = req.params.userid;
//     console.log(idv);
//     db.query(
//         `UPDATE kyc SET approved='${vstatus}' WHERE id='${idv}'`,
//                 (err, result) => {
//                         if (err) {
//                             return res.status(400).send({
//                                 msg: err
//                             });
//                         }

//             return res.status(200).send({
//                             msg: 'User KYC has been successfully disapproved',
//                             status: 'Dispproved'
//                         });


//                 }
//             );
// });
//Login user
router.post('/login', (req, res, next) => {
    db.query(
        `SELECT * FROM admin WHERE username = '${req.body.username}'`,
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

module.exports = router;