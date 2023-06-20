require('dotenv').config();
const bcrypt = require('bcryptjs');
const mailgun = require("mailgun-js");
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.DOMAIN })
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const db = require('../lib/db.js');
const axios = require('axios');
const getRentingNumber = require('../middleware/getnum.js');
// User registration
const registerUser = (req, res, next) => {

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
                                        const apikey = uuid.v4() + (str.charAt(1) + str.charAt(0) + str.charAt(2));
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
}
const socialLogin = (req, res, next) => {
    db.query(
        `SELECT * FROM users WHERE LOWER(email) = LOWER(${db.escape(
         req.body.email
       )});`,
        (err, result) => {
            if (err) {
                return res.status(400).send({
                    Error: err
                })
            } else if (result.length) {
                const token = jwt.sign({
                        username: result[0].email,
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
                                let str = req.body.username;
                                const apikey = uuid.v4() + (str.charAt(1) + str.charAt(0) + str.charAt(2));
                                const id = Math.floor(Math.random() * 3473) + 1 + (str.charAt(1) + str.charAt(2));
                                const ref = Math.floor(Math.random() * 5000) + 1 + (str.charAt(0) + str.charAt(1) + str.charAt(2));
                                db.query(
                                    `INSERT INTO users (id, username, email, apikey, vstatus, reg_date, ref_code) VALUES ('${id}',  '${req.body.username}', '${req.body.email}', '${apikey}', '${vstatus}', now(), '${ref}')`,
                                    (err, resul) => {
                                        if (err) {
                                            //throw err;
                                            return res.status(400).send({
                                                msg: 'Can not create user at the moment!',
                                                error: err

                                            });
                                        }
                                        // return res.send({ Ref: "I can reach here" })
                                        db.query(`INSERT INTO wallets (user_id) VALUES ('${id}')`,
                                            (err, result) => {
                                                if (err) {
                                                    return res.status(400).send({
                                                        msg: 'Something went wrong!',
                                                        error: err

                                                    });
                                                }
                                                return res.status(201).send({
                                                    msg: 'User Has Been Successfully Registered, you can now login.'
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

}

// To verify user email
const verifyEmail = (req, res, next) => {
        try {
            const user_apikey = req.query.apikey;
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
                }
            );
            return res.status(200);
        } catch (e) {
            console.log(e);
        }
    }
    // changing user password
const changePassword = (req, res, next) => {
        try {
            const uid = req.query.userid;
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
    }
    //Login user 
const userLogin = (req, res, next) => {
    db.query(
        `SELECT * FROM users WHERE username || email = ${db.escape(req.body.email)};`,
        (err, result) => {
            // user does not exists
            if (err) {
                return res.status(400).send({
                    msg: err
                });
            }
            if (!result.length) {
                return res.status(401).send({
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
                    // wrong password
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
}

//Log out user
const userLogout = (req, res, next) => {
        try {
            const user = req.query.userid;
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

    }
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
const userRefHistory = (req, res, next) => {
        try {
            const refCode = req.query.refCode;
            db.query(
                `SELECT users.username AS referral, referrals.reg_date AS signup_date, referrals.first_deposit AS deposit, referrals.bonus AS earn FROM users JOIN referrals      ON users.referrer= '${refCode}' AND referrals.referrer='${refCode}'`,
                (err, result) => {
                    if (err) {
                        return res.status(401).send({
                            Error: err
                        })
                    }
                    if (result.length >= 1) {
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
    }
    // fetch user topup history
const userPayment = (req, res, next) => {
        const idv = req.query.userid;
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
    }
    // Renting calculator module starts here
    //Getting rent fee by country
const rentFeeWithCountry = (req, res, next) => {
        try {
            const country = req.query.country;
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
    }
    // Get rent fee by country and duration
const rentFeeWithDurationAndCountry = (req, res, next) => {
    try {
        const country = req.query.country;
        const duration = req.query.duration;
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
}

// payment method starts here
// Fetching all the available payment methods
const paymentMethods = (req, res, next) => {
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
    }
    // payment method ends here

// Fetch available languages
const getLanguages = (rea, res, next) => {
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
    }
    // Fetching laguages ends here

// Fetch available countries
const getCountries = (rea, res, next) => {
    try {
        db.query(
            `SELECT id, country_name, country_short_name, country_code, apps_pieces FROM countries`,
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
                        msg: 'No country is available yet.'
                    });
                }
                return res.status(200).send({
                    countries: result
                });
            }
        );
    } catch (err) {
        console.log(err)
    }
}


// Change user api key starts here
const userAPIKey = (req, res, next) => {
        const userid = req.query.userid;
        let newAPI = uuid.v4() + userid;
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
    }
    // Change API key ends here

// Change user password starts here
const userPassword = (req, res, next) => {
        const userid = req.query.userid;
        let newPass = req.body.newPassword;
        let newPass2 = req.body.repeat_newPassword;
        try {
            if (newPass2 != newPass) {
                return res.status(400).send({
                    msg: "Passwords do not match!"
                })
            }
            bcrypt.hash(newPass, 10, (err, hash) => {
                if (err) {
                    return res.status(500).send({
                        msg: err
                    });
                } else {

                    db.query(
                        `UPDATE users SET password='${hash}' WHERE id = '${userid}'`,
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
                                    msg: 'User does not exist'
                                });
                            }
                            return res.status(200).send({
                                msg: 'Your password has been successfully changed!',
                                data: result
                            });
                        }
                    );
                }

            })
        } catch (e) {
            console.log(e);
        }
    }
    // change user password module ends here

// Feedback module start here
//sending feedback to the admin
const sendFeedback = (req, res, next) => {
    try {
        const { username, email, message } = req.body;
        if (!username || !email || !message) {
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
                if (!result.affectedRows) {
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
}


// Blog modules
// fetching all blog posts
const getAllBlogPosts = (req, res, next) => {
        try {
            let st = "Enable";
            db.query(
                `SELECT * FROM blog_posts WHERE status='${st}' ORDER BY date_created DESC`,
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
    }
    // fetching single blog post
const getSingleBlogPost = (req, res, next) => {
    let postid = req.query.post_id;
    try {
        db.query(
            `SELECT * FROM blog_posts WHERE id='${postid}'`,
            (err, resul) => {
                // if query error
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                // if there is no language available
                if (!resul.length) {
                    return res.status(309).send({
                        msg: 'This post does not exist!'
                    });
                }
                if (resul) {
                    var total_comments;
                    db.query(
                        `SELECT * FROM comments WHERE postid='${postid}'`,
                        (err, result) => {
                            if (err) { // throw err;
                                return res.status(400).send({
                                    msg: err
                                });
                            }
                            if (!result.length) {
                                total_comments = 0;
                            }
                            total_comments = result.length
                            return res.status(200).send({
                                post: resul,
                                comments: result,
                                total_comments: total_comments
                            });
                        }
                    );
                }

            }
        );
    } catch (err) {
        console.log(err)
    }
}

// Comment on a post
const sendComment = (req, res, next) => {
    try {
        let postid = req.query.postid;
        let user = req.query.userid
        const comment = req.body.comment;
        if (!user || !comment || !postid) {
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
                if (!result) {
                    return res.status(409).send({
                        msg: 'Something went wrong!'
                    });
                }
                return res.status(200).send({
                    msg: 'Your have successfully sent!',
                    data: result
                });
            }
        );
    } catch (err) {
        console.log(err);
    }
}

//  blog posts module ends here

// fetching user avialable balance
const getUserBalance = (req, res, next) => {
        let userid = req.query.userid;
        console.log(userid);
        try {
            db.query(
                `SELECT * FROM wallets WHERE user_id='${userid}'`,
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
                        return res.status(404).send({
                            msg: 'Incorrect user ID might have been passed!'
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
    }
    // fetching user details by id
const getUserDetails = (req, res, next) => {
        try {
            const q_id = req.query.userid;
            db.query(
                `SELECT * FROM users WHERE id = '${q_id}'`,
                (err, result) => {
                    if (result.length) {
                        return res.status(200).send({
                            user: result[0]
                        });
                    } else {
                        return res.status(404).send({
                            msg: 'User not found!'
                        });
                    }
                }
            );
        } catch (err) {
            return res.status(401).send({
                Error: err
            })
        }
    }
    // Number renting module starts here
const rentNumber = async(req, res, next) => {
    try {
        const response = await axios({
            url: 'http://207.154.223.33:7014/gateway/routeXapi/backend/xapi/Wws/Numbers/available?country_id=1&application_id=1&type_id=1',
            method: 'get'
        });
        let userid = req.query.userid;
        const dur = req.body.duration;
        const til = req.body.count;
        const country = req.body.country;
        const amount = req.body.amount;
        let duration = til + ' ' + dur;
        if (!country || !dur || !amount || !til) { return res.status(403).send({ msg: 'All fields are required!' }); }
        var number;
        if (response.data.hasOwnProperty("number")) {
            number = response.data.number;
        } else { return res.status(500).send({ msg: "Somethingwent wrong, try a moment later" }) }

        console.log("Reponse: " + number);
        db.query(
            `SELECT * FROM wallets WHERE user_id='${userid}'`,
            async(err, result) => {
                // if query error
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                // if not user
                if (result.length <= 0) {
                    return res.status(404).send({
                        msg: 'This userId does not exist.'
                    });
                }
                let bal = await result[0].balance;
                console.log(result);
                console.log(bal);
                const new_bal = bal - amount;
                console.log(new_bal);
                if (amount >= bal) {
                    return res.status(401).send({
                        msg: 'Low balance, please recharge your balance.'
                    });
                } else {
                    let rentId = Math.floor(Math.random() * 10053423) + 83;
                    let message = 'Your number will be activated shortly';
                    db.query(
                        `INSERT INTO rents (rentId, userid, rented_number, duration,  amount,  country, rented_date, message) VALUES ('${rentId}', '${userid}', '${number}', '${duration}', '${amount}', '${country}', now(), '${message}')`,
                        (err, resul) => {
                            if (err) {
                                // throw err;
                                return res.status(400).send({
                                    msg: err
                                });
                            }
                            if (resul.affectedRows > 0) {
                                db.query(
                                    `UPDATE wallets SET balance='${new_bal}' WHERE user_id='${userid}'`,
                                    (err, result) => {
                                        // user does not exists
                                        if (err) {
                                            // throw err;
                                            return res.status(400).send({
                                                msg: err
                                            });
                                        }
                                        return res.status(201).send({
                                            msg: 'You have successfully rented ' + number
                                        });
                                    }
                                );
                            } else {
                                return res.status(400).send({
                                    msg: 'Something went wrong!'
                                })
                            }

                        }
                    );
                }
            }
        );
    } catch (err) {
        return res.status(401).send({
            Error: err
        })
    }
}
const getRentNumber = (req, res, next) => {
    // Everything wil be here
    const userid = req.query.userid;
    try {
        db.query(
            `SELECT * FROM rents WHERE userid='${userid}'`,
            (err, result) => {
                // if query error
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                // if user have not rented number yet
                if (result.length <= 0) {
                    return res.status(303).send({
                        msg: 'You are yet to rent a number for your use.'
                    });
                }
                return res.status(200).send({
                    numbers: result
                });
            }
        );
    } catch (err) {
        console.log(err)
    }

}
const getApplications = (req, res, next) => {
    try {
        country = req.query.country;
        appId = req.query.app_id;
        appName = req.query.app_name;
        var q;
        if (country) {
            q = `SELECT * FROM applications WHERE country='${country}' ORDER BY country`
        }
        if (appId) {
            q = `SELECT * FROM applications WHERE application_id='${appId}' ORDER BY application_id`
        }
        if (appName) {
            q = `SELECT * FROM applications WHERE name='${appName}' ORDER BY name`
        } else {
            q = `SELECT * FROM applications ORDER BY created_date`
        }
        db.query(
            q,
            (err, result) => {
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: 'Something went wrong, please try a moment later.'
                    });
                }
                return res.status(200).send({
                    applications: result
                });
            }

        );
    } catch (err) {
        console.log(err);
    }
}
const cancelNumber = (req, res, next) => {
    try {

        let userid = req.query.userid;
        const rentedNum = req.query.rented_number;
        const amount = req.query.rented_amount;
        if (!userid || !rentedNum || !amount) { return res.status(403).send({ msg: 'user Id, rented number and the rented amount are required as parameters.' }); }
        db.query(
            `SELECT * FROM wallets WHERE user_id='${userid}'`,
            async(err, result) => {
                // if query error
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                // if not user
                if (result.length <= 0) {
                    return res.status(404).send({
                        msg: 'This userId does not exist.'
                    });
                }
                let bal = await result[0].balance;
                console.log(result);
                console.log(bal);
                const new_bal = bal + amount;
                console.log(new_bal);
                let sta = 'Cancelled';
                db.query(
                    `UPDATE wallets SET balance='${new_bal}' WHERE user_id='${userid}'`,
                    (err, resul) => {
                        if (err) {
                            // throw err;
                            return res.status(400).send({
                                msg: err
                            });
                        }
                        if (resul.affectedRows > 0) {
                            db.query(
                                `UPDATE rents SET status='${sta}' WHERE rented_number='${rentedNum}'`,
                                (err, result) => {
                                    // user does not exists
                                    if (err) {
                                        // throw err;
                                        return res.status(400).send({
                                            msg: err
                                        });
                                    }
                                    return res.status(201).send({
                                        msg: 'Cancellation was successfully.',
                                        Balance: new_bal
                                    });
                                }
                            );
                        } else {
                            return res.status(400).send({
                                msg: 'Something went wrong!'

                            })
                        }

                    }
                );
            }

        );
    } catch (err) {
        return res.status(401).send({
            Error: err
        })
    }
}
module.exports = {
    registerUser,
    socialLogin,
    verifyEmail,
    changePassword,
    userLogin,
    userLogout,
    userRefHistory,
    userPayment,
    rentFeeWithCountry,
    rentFeeWithDurationAndCountry,
    paymentMethods,
    getLanguages,
    getCountries,
    userAPIKey,
    userPassword,
    sendFeedback,
    getAllBlogPosts,
    getSingleBlogPost,
    sendComment,
    getUserBalance,
    getUserDetails,
    getRentNumber,
    rentNumber,
    getApplications,
    cancelNumber,
}