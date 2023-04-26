const express = require('express');
const router = express.Router();
require('dotenv').config();
const bcrypt = require('bcryptjs');
const mailgun = require("mailgun-js");
const DOMAIN = 'sandboxb21bd93e7e794e4f88a01d13f923ec59.mailgun.org';
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN })
const uuid = require('uuid');
const apikey = uuid.v4();
const jwt = require('jsonwebtoken');
const db = require('../lib/db.js');
const userMiddleware = require('../middleware/users.js');
// User registration
router.post('/signup', userMiddleware.validateRegister, (req, res, next) => {
    Math.floor(6, 125854)

    db.query(
        `SELECT * FROM users WHERE LOWER(email) = LOWER(${db.escape(
         req.body.email
       )});`,
        (err, result) => {
            if (result.length) {
                return res.status(409).send({
                    msg: 'This email is already in used!'
                });
            } else {
                db.query(
                    `SELECT * FROM users WHERE LOWER(username) = LOWER(${db.escape(
            req.body.username
            )});`,
                    (err, result) => {
                        if (result.length) {
                            return res.status(409).send({
                                msg: 'This username is already in used!'
                            });
                        } else {
                            // username is available
                            bcrypt.hash(req.body.password, 10, (err, hash) => {
                                if (err) {
                                    return res.status(500).send({
                                        msg: err
                                    });
                                } else {
                                    // has hashed pw => add to database
                                    const vstatus = 'unverified'
                                    db.query(
                                        `INSERT INTO users (username, email, password, apikey, vstatus, reg_date) VALUES ('${req.body.username}', '${req.body.email}', '${hash}', '${apikey}', '${vstatus}', now())`,
                                        (err, result) => {
                                            if (err) {
                                                // throw err;
                                                return res.status(400).send({
                                                    msg: err
                                                });
                                            }
                                            const data = {
                                                from: 'hello@newsems.com',
                                                to: req.body.email,
                                                subject: 'Verify Your Account',
                                                html: `<div style="text-align:justify;">
                                                <h4>Hello ${req.body.firstname} ${req.body.lastname}</h4>
                                                <p>You just sign up on Newsems, please click the button below to verify your account</p>
                                                <button><a href="http://161.35.218.95:3000/api/verify-email/${apikey}">Verify Account</a></button>
                                                <P>Or copy this url and paste on your browser: http://161.35.218.95:3000/api/verify-email/${apikey} </P>`
                                            };
                                            mg.messages().send(data, function(error, body) {
                                                console.log(body);
                                            });
                                            return res.status(201).send({
                                                msg: 'User Has Been Successfully Registered. Plase check your email to verify your account.'
                                            });
                                        }
                                    );
                                }
                            });
                        }
                    }
                )
            }
        });
});
router.post('/social_media_sign', (req, res, next) => {
    db.query(
        `SELECT * FROM users WHERE LOWER(email) = LOWER(${db.escape(
         req.body.email
       )});`,
        (err, result) => {
            if (result.length) {
                const token = jwt.sign({
                        username: result[0].email,
                        userId: result[0].id
                    },
                    'SECRETKEY', {
                        expiresIn: '7d'
                    }
                );

                db.query(
                    `UPDATE users SET last_login = now() WHERE id = '${result[0].id}'`
                );
                return res.status(200).send({
                    msg: 'Logged in!',
                    token,
                    user: result[0]
                });
            } else {
                db.query(
                    `SELECT * FROM users WHERE LOWER(username) = LOWER(${db.escape(
                    req.body.username
                    )});`,
                    (err, result) => {
                        if (result.length) {
                            const token = jwt.sign({
                                    username: result[0].email,
                                    userId: result[0].id
                                },
                                'SECRETKEY', {
                                    expiresIn: '7d'
                                }
                            );

                            db.query(
                                `UPDATE users SET last_login = now() WHERE id = '${result[0].id}'`
                            );
                            return res.status(200).send({
                                msg: 'Logged in!',
                                token,
                                user: result[0]
                            });

                        } else {
                            // username is available
                            const vstatus = 'verified'
                            db.query(
                                `INSERT INTO users (apikey, email, vstatus, reg_date) VALUES ('${apikey}', '${req.body.email}', '${vstatus}', now())`,
                                (err, result) => {
                                    if (err) {
                                        //throw err;
                                        return res.status(400).send({
                                            msg: err
                                        });
                                    }
                                    return res.status(201).send({
                                        msg: 'User Has Been Successfully Registered!'
                                    });
                                }
                            );
                        }
                    });
            }
        }
    )
});
router.get('/log', (req, res, next) => {
    res.send({ 'Message': 'Welcome' })
});
router.get('/verify-email/:apikey', (req, res, next) => {
    const user_apikey = req.params.apikey;
    res.send(user_apikey);
    const vstatus = 'verified'
    db.query(
        `UPDATE users SET vstatus='${vstatus}' WHERE apikey='${user_apikey}'`,
        (err, result) => {
            if (err) {
                return res.status(400).send({
                    msg: err
                });
            }
            return res.status(201).send({
                msg: 'Email verification was succesful!'
            });
        }
    );
});
// changing user password
router.post('/user/changepassword/:userid', userMiddleware.isLoggedIn, (req, res, next) => {
    const uid = req.params.userid;
    db.query(
        `SELECT * FROM users WHERE id = ${db.escape(uid)};`,
        (err, result) => {
            // user does not exists
            if (err) {
                // throw err;
                return res.status(400).send({
                    msg: err
                });
            }

            if (!result.length) {
                return res.status(404).send({
                    msg: 'User not found!'
                });
            }

            // check password
            bcrypt.compare(
                req.body.password,
                result[0]['password'],
                (bErr, bResult) => {
                    //if password is wrong
                    if (bErr) {
                        // throw bErr;
                        return res.status(401).send({
                            msg: bErr
                        });
                    }
                    // if password is correct
                    if (bResult) {
                        const npass = request.body.newpassword;
                        const cnpass = request.body.confirm_newpassword;
                        if (cnpass != npass) {
                            return res.status(401).send({
                                msg: 'Please ensure the confirm password matches the new password.'
                            });
                        }
                        db.query(
                            `UPDATE users SET password = '${npass}' WHERE id = '${uid}'`
                        );
                        return res.status(200).send({
                            msg: 'Password has been successfully changed.',
                        });
                    }
                    return res.status(401).send({
                        msg: 'Incorrect user password entered'
                    });
                }
            );
        }
    );
});
//Login user
router.post('/login', (req, res, next) => {
    db.query(
        `SELECT * FROM users WHERE username || email = ${db.escape(req.body.username)};`,
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
            }
            if (result[0].vstatus != 'verify') {
                return res.status(401).send({
                    msg: 'You must verify your email address before you can login!'
                });
            }
            // check password
            bcrypt.compare(
                req.body.password,
                result[0]['password'],
                (bErr, bResult) => {
                    //When password is wrong
                    if (bErr) {
                        // throw bErr;
                        return res.status(401).send({
                            msg: 'Username or password is incorrect!'
                        });
                    }

                    if (bResult) {
                        const token = jwt.sign({
                                username: result[0].username,
                                userId: result[0].id
                            },
                            'SECRETKEY', {
                                expiresIn: '7d'
                            }
                        );

                        db.query(
                            `UPDATE users SET last_login = now() WHERE id = '${result[0].id}'`
                        );
                        db.query(
                            `SELECT * FROM wallets WHERE user_id = '${result[0].id}'`,
                            (err, rest) => {
                                if (err) {
                                    // throw err;
                                    return res.status(400).send({
                                        msg: err
                                    });
                                }
                                return res.status(200).send({
                                    msg: 'Logged in!',
                                    token,
                                    user: result[0],
                                    wallet_balance: rest[0].balance
                                });
                            }
                        );
                    }
                    return res.status(401).send({
                        msg: 'Username or password is incorrect!'
                    });
                }
            );
        }
    );
});
//Log out user
router.post('/logout/:userid', (req, res, next) => {
    const user = req.params.userid;
    db.query(
        `DELETE last_login FROM users WHERE id = '${user}'`,
        (err, result) => {
            if (result.length) {
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
//Fetching referral hostory
router.get('/referral/history/:refCode', userMiddleware.isLoggedIn, (req, res, next) => {
    const refCode = req.params.refCode;
    db.query(
        `SELECT * FROM referrals WHERE referrer = '${refCode}'`,
        (err, result) => {
            if (result.length) {
                // const data = JSON.parse(result);
                //console.log(data.bonus);
                return res.status(200).send({
                    referrals: { result }
                });
            } else {
                return res.status(302).send({
                    msg: "You haven't refer a user yet!"
                });
            }
        }
    )
});
// fetch user topup history
router.get('/user/payment/:userid', userMiddleware.isLoggedIn, (req, res, next) => {
    const idv = req.params.userid;

    db.query(
        `SELECT * FROM transactions WHERE user_id='${idv}' AND type='topup'`,
        (err, result) => {
            if (result.length) {
                return res.status(200).send({
                    user_topups: { result }
                });
            } else {
                return res.status(404).send({
                    msg: 'Please topup your wallet.'
                });
            }
        });
});

//To protect a route now, simply include this middleware when calling the route as follows:
router.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
    console.log(req.userData);
    res.send('This is the secret content. Only logged in users can see that!');
});
module.exports = router;