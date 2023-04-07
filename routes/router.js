const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const mailgun = require("mailgun-js");
const DOMAIN = 'sandboxb21bd93e7e794e4f88a01d13f923ec59.mailgun.org';
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN })
const uuid = require('uuid');
const id = uuid.v4();
const jwt = require('jsonwebtoken');
const db = require('../lib/db.js');
const userMiddleware = require('../middleware/users.js');
// User registration
router.post('/signup', userMiddleware.validateRegister, (req, res, next) => {
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
                                        `INSERT INTO users (id, firstname, lastname, username, email, phone_no, password, vstatus, reg_date) VALUES ('${id}', '${req.body.firstname}', '${req.body.lastname}', '${req.body.username}', '${req.body.email}',
                            '${req.body.phone_no}', '${hash}', '${vstatus}', now())`,
                                        (err, result) => {
                                            if (err) {
                                                throw err;
                                                return res.status(400).send({
                                                    msg: err
                                                });
                                            }
                                            const data1 = {
                                                from: 'hello@paysequr.com',
                                                to: req.body.email,
                                                subject: 'Verify Your Account',
                                                html: `<div style="text-align:justify;">
                                                <h4>Hello ${req.body.firstname} ${req.body.lastname}</h4>
                                                <p>You just sign up on paysequr, please click the button below to verify your account</p>
                                                <button><a href="https://paysequr.com/api/verify-email/${id}">Verify Account</a></button>
                                                <P>Or copy this url and paste on your browser: HTTPS://paysequr.com/api/verify-email/${id} </P>`
                                            };
                                            mg.messages().send(data1, function(error, body) {
                                                console.log(body);
                                            });
                                            // sending onboarding welcome message to the user
                                            const data = {
                                                from: 'onboarding@paysequr.com',
                                                to: req.body.email,
                                                subject: 'Welcome to Paysequr',
                                                html: `<div style="text-align:justify;">
                                                <h4>Hi ${req.body.firstname} ${req.body.lastname}</h4>
                                                <p>Welcome to Paysequr.</p>
                                                <p>My name is John Akpetimeh Miracle, the founder and CEO of Paysequr, a product of JAM-Forte Technologies Ltd.
                                                Thank you for joining our smart community of shoppers and merchants.</p>
                                                <p>Paysequr stands as a middleman between shoppers and merchants in their daily business transaction.
                                                Our goal is to eliminate the “what I Ordered Vs What I Got” trend, and provide a safe transaction
                                                environment for both buyers and sellers in Nigeria. Our system is programmed to release payment only
                                                after the buyer has confirmed the product to be exactly what they ordered.</p>
                                                <p>In addition to the secure payment module for buyers and sellers, we have an ecommerce module where
                                                shoppers can buy from poll of product categories and payment when items are received and confirmed true.
                                                We also considered that our buyers and merchants need to pay for some VAS bill payment such as office electricity,
                                                data for business operation, and call airtime for follow-up and communication, etc. Because of this,
                                                we have built a bill payment module where our users can pay for such services on the go without leaving the app.
                                                This is why Paysequr remains your #1 Commercial Partner.</p>
                                                <p>To get started with your account, please login and complete your KYC form to enable you to start shopping and transacting.
                                                Your account will be approved within 24hours after you complete your KYC Verification.</p>
                                                <p>We have created a 1-minute video on how to complete your KYC verification. CLICK HERE to watch the video. \n\n
                                                If you experience any issues while using our app, kindly contact our support team immediately via mail
                                                to: hello@paysequr.com and we will respond as soon as possible.</p>
                                                <p>If you have any suggestion, partnership or direct questions to ask me,
                                                feel free to send me a mail to: founder@paysequr.com</p>
                                                <p>Thank you for choosing Paysequr.</p>
                                                <h4>John Akpetimeh Miracle</h4>
                                                <p>CEO and Founder; Paysequr.</p>
                                                <img src="uniq-signature.png">
                                                </div>`,
                                                attachments: [{
                                                    filename: 'signature.png',
                                                    path: '../images/signature.png',
                                                    cid: 'uniq-signature.png'
                                                }]
                                            };
                                            mg.messages().send(data, function(error, body) {
                                                console.log(body);
                                            });

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
            }
        });
});
router.post('/google_signup', (req, res, next) => {
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
                            const vstatus = 'verified'
                            db.query(
                                `INSERT INTO users (id, firstname, lastname, username, email, vstatus, google_id, reg_date) VALUES ('${uuid.v4()}', '${req.body.firstname}', '${req.body.lastname}', '${req.body.username}', '${req.body.email}', '${vstatus}', '${req.body.google_id}', now())`,
                                (err, result) => {
                                    if (err) {
                                        throw err;
                                        return res.status(400).send({
                                            msg: err
                                        });
                                    }
                                    const data = {
                                        from: 'onboarding@paysequr.com',
                                        to: req.body.email,
                                        subject: 'Welcome to Paysequr',
                                        html: `<div style="text-align:justify;">
                                        <h4>Hi ${req.body.firstname} ${req.body.lastname}</h4>
                                        <p>Welcome to Paysequr.</p>
                                        <p>My name is John Akpetimeh Miracle, the founder and CEO of Paysequr, a product of JAM-Forte Technologies Ltd.
                                        Thank you for joining our smart community of shoppers and merchants.</p>
                                        <p>Paysequr stands as a middleman between shoppers and merchants in their daily business transaction.
                                        Our goal is to eliminate the “what I Ordered Vs What I Got” trend, and provide a safe transaction
                                        environment for both buyers and sellers in Nigeria. Our system is programmed to release payment only
                                        after the buyer has confirmed the product to be exactly what they ordered.</p>
                                        <p>In addition to the secure payment module for buyers and sellers, we have an ecommerce module where
                                        shoppers can buy from poll of product categories and payment when items are received and confirmed true.
                                        We also considered that our buyers and merchants need to pay for some VAS bill payment such as office electricity,
                                        data for business operation, and call airtime for follow-up and communication, etc. Because of this,
                                        we have built a bill payment module where our users can pay for such services on the go without leaving the app.
                                        This is why Paysequr remains your #1 Commercial Partner.</p>
                                        <p>To get started with your account, please login and complete your KYC form to enable you to start shopping and transacting.
                                        Your account will be approved within 24hours after you complete your KYC Verification.</p>
                                        <p>We have created a 1-minute video on how to complete your KYC verification. CLICK HERE to watch the video. \n\n
                                        If you experience any issues while using our app, kindly contact our support team immediately via mail
                                        to: hello@paysequr.com and we will respond as soon as possible.</p>
                                        <p>If you have any suggestion, partnership or direct questions to ask me,
                                        feel free to send me a mail to: founder@paysequr.com</p>
                                        <p>Thank you for choosing Paysequr.</p>
                                        <h4>John Akpetimeh Miracle</h4>
                                        <p>CEO and Founder; Paysequr.</p>
                                        <img src="uniq-signature.png">
                                        </div>`,
                                        attachments: [{
                                            filename: 'signature.png',
                                            path: '../images/signature.png',
                                            cid: 'uniq-signature.png'
                                        }]
                                    };
                                    mg.messages().send(data, function(error, body) {
                                        console.log(body);
                                    });
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
router.get('/verify-email/${id}', (req, res, next) => {
    res.send({ 'Message': 'Welcome' })
});
//Login user
router.post('/login', (req, res, next) => {
    db.query(
        `SELECT * FROM users WHERE username || email = ${db.escape(req.body.username)};`,
        (err, result) => {
            // user does not exists
            if (err) {
                throw err;
                return res.status(400).send({
                    msg: err
                });
            }

            if (!result.length) {
                return res.status(401).send({
                    msg: 'Username or password is incorrect!'
                });
            }

            // check password
            bcrypt.compare(
                req.body.password,
                result[0]['password'],
                (bErr, bResult) => {
                    // wrong password
                    if (bErr) {
                        throw bErr;
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
                        return res.status(200).send({
                            msg: 'Logged in!',
                            token,
                            user: result[0]
                        });
                    }
                    return res.status(401).send({
                        msg: 'Username or password is incorrect!'
                    });
                }
            );
        }
    );
});

//To protect a route now, simply include this middleware when calling the route as follows:
router.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
    console.log(req.userData);
    res.send('This is the secret content. Only logged in users can see that!');
});
module.exports = router;