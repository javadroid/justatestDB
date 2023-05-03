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

    try {
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
                                    msg: 'This username is already in use!'
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
                                        let str = req.body.username
                                        const id = Math.floor(Math.random() * 3473) + 1 + (str.charAt(1) + str.charAt(2));
                                        const ref = Math.floor(Math.random() * 5000) + 1 + (str.charAt(0) + str.charAt(1) + str.charAt(2));
                                        db.query(
                                            `INSERT INTO users (id, username, email, password, apikey, vstatus, reg_date, ref_code) VALUES ('${id}', '${req.body.username}', '${req.body.email}', '${hash}', '${apikey}', '${vstatus}', now(), '${ref}')`,
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
                                                <h4>Hello ${req.body.username}</h4>
                                                <p>You just sign up on Newsems, please click the button below to verify your account</p>
                                                <button><a href="http://161.35.218.95:3000/api/verify-email/${apikey}">Verify Account</a></button>
                                                <P>Or copy this url and paste on your browser: http://161.35.218.95:3000/api/verify-email/${apikey} </P>`
                                                };
                                                mg.messages().send(data, function(error, body) {
                                                    console.log(body);
                                                });
                                                db.query(`INSERT INTO wallets (user_id) VALUES ('${id}')`,
                                                    (err, result) => {
                                                        if (err) {
                                                            return res.status(400).send({
                                                                msg: 'Something went wrong!',
                                                                error: err

                                                            });
                                                        }
                                                        return res.status(201).send({
                                                            msg: 'User Has Been Successfully Registered. Plase check your email to verify your account.'
                                                        });
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
    } catch (e) {
        console.log(e);
    }
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
                try {
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
                } catch (e) {
                    console.log(e);
                }
            } else {
                try {
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
                                const vstatus = 'verified';
                                let str = req.body.username
                                const ref = Math.floor(Math.random() * 5000) + 1 + (str.charAt(0) + str.charAt(1) + str.charAt(2));
                                db.query(
                                    `INSERT INTO users (id, apikey, username, email, vstatus, reg_date, ref_code) VALUES ('${id}', '${apikey}', '${str}', '${req.body.email}', '${vstatus}', now(), '${ref}')`,
                                    (err, result) => {
                                        if (err) {
                                            //throw err;
                                            return res.status(400).send({
                                                msg: 'Can not create user at the moment!',
                                                error: err

                                            });
                                        }
                                        db.query(`INSERT INTO wallets (user_id) VALUES ('${id}')`,
                                            (err, result) => {
                                                if (err) {
                                                    return res.status(400).send({
                                                        msg: 'Something went wrong!',
                                                        error: err

                                                    });
                                                }
                                                return res.status(201).send({
                                                    msg: 'Sign up was successful!'
                                                });
                                            });
                                    }
                                );
                            }
                        }
                    );
                } catch (e) {
                    console.log(e);
                }
            }
        }
    );

});
router.get('/log', (req, res, next) => {
    res.send({ 'Message': 'Welcome' })
});
router.put('/verify/:apikey', (req, res, next) => {
    try {
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
                return res.status(200).send({
                    msg: 'Email verification was succesful!'
                });
            }
        );
    } catch (e) {
        console.log(e);
    }
});
// changing user password
router.post('/user/changepassword/:userid', userMiddleware.isLoggedIn, (req, res, next) => {
    try {
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

                if (!result.affectedRows) {
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
    } catch (e) {
        console.log(e);
    }
});
//Login user
router.post('/login', (req, res, next) => {
    try {
        db.query(
            `SELECT * FROM users WHERE username =${db.escape(req.body.username)} || email = ${db.escape(req.body.username)};`,
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
                        msg: 'Username or password is incorrect!'
                    });
                }
                // check if the user is email has been verified
                if (result[0].vstatus != 'verified') {
                    return res.status(401).send({
                        msg: 'You must verify your email address before you can login!'
                    });
                }
                // check if the user permission is freezed
                if (result[0].permission == 'Freez') {
                    return res.status(401).send({
                        msg: 'Your account has been freezed, Please contact the support team.'
                    });
                }
                // check if the user permission is disable
                if (result[0].permission == 'Disable') {
                    return res.status(401).send({
                        msg: 'Your account has been disable, you can not longer login.'
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
    } catch (e) {
        console.log(e);
    }
});
//Log out user
router.post('/logout/:userid', (req, res, next) => {
    try {
        const user = req.params.userid;
        db.query(
            `DELETE last_login FROM users WHERE id = '${user}'`,
            (err, result) => {
                if (result.affetedRow) {
                    return res.status(200).send({
                        msg: "User is logged out and session expired."
                    });
                } else {
                    return res.status(302).send({
                        msg: "It seems you passed a wrong user id as a request parameter!"
                    });
                }
            }
        );
    } catch (e) {
        console.log(e);
    }

});
// proper logging out user
// router.put("/logout", authToken, function(req, res) {
//     const authHeader = req.headers["authorization"];
//     jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
//         if (logout) {
//             res.send({ msg: 'You have been Logged Out' });
//         } else {
//             res.send({ msg: 'Error' });
//         }
//     });
// });
//Fetching referral hostory
router.get('/referral/history/:refCode', userMiddleware.isLoggedIn, (req, res, next) => {
    try {
        const refCode = req.params.refCode;
        db.query(
            `SELECT users.username AS referral, referrals.reg_date AS signup_date, referrals.first_deposit AS deposit, referrals.bonus AS earn FROM users JOIN referrals      ON users.referrer= '${refCode}' AND referrals.referrer='${refCode}'`,
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
    } catch (err) {
        console.log(err);
    }
});
// fetch user topup history
router.get('/user/payment/:userid', userMiddleware.isLoggedIn, (req, res, next) => {
    const idv = req.params.userid;
    try {
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
            }
        );
    } catch (err) {
        console.log(err);
    }
});
// Renting calculator module starts here
//Getting rent fee by country
router.get('/rentfees/:country', (req, res, next) => {
    try {
        const country = req.params.country;
        db.query(
            `SELECT * FROM rent_cal WHERE country = '${country}'`,
            (err, result) => {
                // user does not exists
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }

                if (!result.length) {
                    return res.status(309).send({
                        msg: 'This country you seleted does not have numbers available for rent.'
                    });
                }
                return res.status(200).send({
                    msg: result
                });
            }
        );
    } catch (err) {
        console.log(err);
    }
});
// Get rent fee by country and duration
router.get('/rentfees/:country/:duration', (req, res, next) => {
    try {
        const country = req.params.country;
        const duration = req.params.duration;
        db.query(
            `SELECT * FROM rent_cal WHERE country = '${country}' AND duration='${duration}'`,
            (err, result) => {
                // user does not exists
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                if (!result.length) {
                    return res.status(309).send({
                        msg: 'This country you seleted does not have numbers available for rent.'
                    });
                }
                return res.status(200).send({
                    data: result
                });
            }
        );
    } catch (err) {
        console.log(err)
    }
});

// payment method starts here
// Fetching all the available payment methods
router.get('/paymentmethods', userMiddleware.isLoggedIn, (req, res, next) => {
    try {
        let status = "Enable";
        db.query(
            `SELECT * FROM pay_methods WHERE status = '${status}'`,
            (err, result) => {
                // user does not exists
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                if (!result.length) {
                    return res.status(309).send({
                        msg: 'There is no payment method available yet.'
                    });
                }

                return res.status(200).send({
                    pay_methods: result
                });
            }
        );
    } catch (err) {
        console.log(err);
    }
});
// payment method ends here

// Fetch available languages
router.get("/languages", (rea, res, next) => {
    try {
        db.query(
            `SELECT * FROM languages`,
            (err, result) => {
                // if query error
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                // if there is no language available
                if (!result.length) {
                    return res.status(309).send({
                        msg: 'There is no language available yet.'
                    });
                }
                return res.status(200).send({
                    languages: result
                });
            }
        );
    } catch (err) {
        console.log(err)
    }
});
// Fetching laguages ends here

// Change user api key starts here
router.put("/changeapikey/:userid", userMiddleware.isLoggedIn, (req, res, next) => {
    const userid = req.params.userid;
    let newAPI = uuid.v4();
    try {
        db.query(
            `UPDATE users SET apikey='${newAPI}' WHERE id = '${userid}'`,
            (err, result) => {
                // user does not exists
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                if (!result.affectedRows) {
                    return res.status(409).send({
                        msg: 'You can not change your api key at the moment!'
                    });
                }
                return res.status(200).send({
                    msg: 'Your api key has been successfully changed!',
                    data: result
                });
            }
        );
    } catch (e) {
        console.log(e);
    }
});
// Change API key ends here

// Feedback module start here
//sending feedback to the admin
router.post('/feedback', userMiddleware.isLoggedIn, (req, res, next) => {
    try {
        const { username, email, message } = req.body;
        if (!username || !email || message) {
            return res.status(409).send({
                msg: "All fields are required!"
            })
        }
        db.query(
            `INSERT INTO feedbacks (username, email, message) VALUES ('${username}', '${email}', '${message}')`,
            (err, result) => {
                // user does not exists
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                if (!result.length) {
                    return res.status(409).send({
                        msg: 'Something went wrong!'
                    });
                }
                return res.status(200).send({
                    msg: 'Your feedback has been successfully sent!',
                    data: result
                });
            }
        );
    } catch (err) {
        console.log(err);
    }
});


// Blog modules
// fetching all blog posts
router.get("/blog/posts", (rea, res, next) => {
    try {
        db.query(
            `SELECT * FROM blog_posts`,
            (err, result) => {
                // if query error
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                // if there is no language available
                if (!result.length) {
                    return res.status(309).send({
                        msg: 'There is no post available yet.'
                    });
                }
                return res.status(200).send({
                    posts: result
                });
            }
        );
    } catch (err) {
        console.log(err)
    }
});
// fetching single blog post
router.get("/blog/post/:postid", (rea, res, next) => {
    let postid = req.params.postid;
    try {
        db.query(
            `SELECT * FROM blog_posts WHERE id='${postid}'`,
            (err, result) => {
                // if query error
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                // if there is no language available
                if (!result.length) {
                    return res.status(309).send({
                        msg: 'This post does not exist!'
                    });
                }
                return res.status(200).send({
                    data: result
                });
            }
        );
    } catch (err) {
        console.log(err)
    }
});

// Comment on a post
router.post('/comment/:postid/:userid', userMiddleware.isLoggedIn, (req, res, next) => {
    try {
        let postid = req.params.postid;
        let user = reqparams.userid
        const { comment } = req.body;
        if (!user || !comment) {
            return res.status(409).send({
                msg: "All fields are required!"
            })
        }
        db.query(
            `INSERT INTO comments (postid, userid, comment) VALUES ('${postid}', '${user}', '${comment}')`,
            (err, result) => {
                // user does not exists
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                if (!result.length) {
                    return res.status(409).send({
                        msg: 'Something went wrong!'
                    });
                }
                return res.status(200).send({
                    msg: 'You have successfully commented!',
                    data: result
                });
            }
        );
    } catch (err) {
        console.log(err);
    }
});

//  blog posts module ends here

//To protect a route now, simply include this middleware when calling the route as follows:
router.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
    console.log(req.userData);
    res.send('This is the secret content. Only logged in users can see that!');
});
module.exports = router;