const express = require('express');
const router = express.Router();
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
    try {
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
    } catch (err) {
        return res.status(401).send({
            Error: err
        })
    }
});
// fetch user by id
router.get('/user', userMiddleware.isLoggedIn, (req, res, next) => {
    try {
        const q_id = req.query.id;
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
});
//delete user by id
router.delete('/user', userMiddleware.isLoggedIn, (req, res, next) => {
    const q_id = req.query.id;
    try {
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
        );
    } catch (err) {
        return res.status(401).send({
            Error: err
        })
    }
});
// freez user from logging in
router.put('/freez/user/', userMiddleware.isLoggedIn, (req, res, next) => {
    try {
        let user = req.query.userid;
        const nstatus = "Freez";
        db.query(
            `UPDATE users SET permission='${nstatus}' WHERE id='${user}'`,
            (err, result) => {
                if (result.affectedRows) {
                    return res.status(200).send({
                        msg: result.affectedRows + " user account has been freezed successfully."
                    });
                } else {
                    return res.status(404).send({
                        msg: 'No user is found!'
                    });
                }
            });
    } catch (err) {
        return res.status(401).send({
            Error: err
        })
    }

})

// disable user user from logging in
router.put('/disable/user', userMiddleware.isLoggedIn, (req, res, next) => {
        try {
            let user = req.query.userid;
            const nstatus = "Disable";
            db.query(
                `UPDATE users SET permission='${nstatus}' WHERE id='${user}'`,
                (err, result) => {
                    if (result.affectedRows) {
                        return res.status(200).send({
                            msg: result.affectedRows + " user account has been disabled successfully."
                        });
                    } else {
                        return res.status(404).send({
                            msg: 'No user is found!'
                        });
                    }
                });
        } catch (err) {
            return res.status(401).send({
                Error: err
            })
        }

    })
    // enable user access to his/her accoutn
router.put('/enable/user', userMiddleware.isLoggedIn, (req, res, next) => {
        try {
            let user = req.query.userid;
            const nstatus = "Enable";
            db.query(
                `UPDATE users SET permission='${nstatus}' WHERE id='${user}'`,
                (err, result) => {
                    if (result.affectedRows) {
                        return res.status(200).send({
                            msg: result.affectedRows + " user account has been disabled successfully."
                        });
                    } else {
                        return res.status(404).send({
                            msg: 'No user is found with such user ID!'
                        });
                    }
                });
        } catch (err) {
            return res.status(401).send({
                Error: err
            })
        }

    })
    // delete user from the system
router.delete('/delete/user', userMiddleware.isLoggedIn, (req, res, next) => {
        try {
            let user = req.query.userid;
            db.query(
                `DELETE FROM users WHERE id='${user}'`,
                (err, result) => {
                    if (result.affectedRows) {
                        return res.status(200).send({
                            msg: result.affectedRows + " user account has been deleted successfully."
                        });
                    } else {
                        return res.status(404).send({
                            msg: 'Wrong user ID was passed as a parameter data.'
                        });
                    }
                });
        } catch (err) {
            return res.status(401).send({
                Error: err
            })
        }

    })
    // User permission module ends here

// fetch user transaction history
router.get('/user/transactions', userMiddleware.isLoggedIn, (req, res, next) => {
    try {
        const idv = req.query.userid;
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
    } catch (err) {
        return res.status(401).send({
            Error: err
        })
    }
});
//Login user
router.post('/login', (req, res, next) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(409).send({
                msg: 'Email and password are require!'
            })
        }
        console.log("I can reach here..")
        db.query(
            `SELECT * FROM admins WHERE user = '${req.body.email}'`,
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
                        msg: 'Email or password is incorrect!'
                    });
                    // check password
                } else if (result[0]['password'] == req.body.password) {
                    const token = jwt.sign({
                            username: result[0].user,
                            userId: result[0].id,
                            role: result[0].role
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
    } catch (err) {
        return res.status(401).send({
            Error: err
        })
    }
});
// Admin user login ends here
//Log out user
router.delete('/logout', (req, res, next) => {
    const userid = req.query.id;
    db.query(
        `DELETE last_login FROM admin WHERE id = '${userid}'`,
        (err, result) => {
            if (result.affectedRows) {
                // const data = JSON.parse(result);
                //console.log(data.bonus);
                return res.status(200).send({
                    msg: "User is logged out and session expired."
                });
            } else {
                return res.status(302).send({
                    msg: "Can not logout user at the moment!"
                });
            }
        }
    )

});


// Number renting module start here
// Setting up number renting module
// Admin can set the renting fee base on coutry and duration
router.post('/setrentfee', userMiddleware.isLoggedIn, (req, res, next) => {
    try {
        const { country, duration, amount } = req.body;
        if (!country || !duration || !amount) {
            return res.status(403).send({
                msg: 'All fields are required!'
            });
        }
        db.query(
            `INSERT INTO rent_cal (country, duration, amount, setup_date) VALUES ('${country}', '${duration}', '${amount}', now())`,
            (err, result) => {
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                return res.status(201).send({
                    msg: 'Rent amount and duration has been successfully set up!',
                    data: result
                });
            }
        );
    } catch (err) {
        return res.status(401).send({
            Error: err
        })
    }
});
// Number renting fee module ends here

// Payment method module starts here
// Set up payment method
router.post('/paymentmethod', userMiddleware.isLoggedIn, (req, res, next) => {
    try {
        const { method, min_amount } = req.body;
        if (!method || !min_amount) {
            return res.status(403).send({
                msg: 'All fields are required!'
            });
        }
        db.query(
            `INSERT INTO pay_methods (method, min_amount, setup_date) VALUES ('${method}', '${min_amount}', now())`,
            (err, result) => {
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                return res.status(201).send({
                    msg: method + ' has been successfully added as a payment method.',
                    data: result
                });
            }
        );
    } catch (err) {
        return res.status(401).send({
            Error: err
        })
    }
});
// fetching available payment methods
router.get('/paymethods', userMiddleware.isLoggedIn, (req, res, next) => {
    try {
        db.query(
            `SELECT * FROM pay_methods ORDER BY setup_date DESC`,
            (err, result) => {
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                if (!result.length) {
                    return res.status(404).send({
                        msg: 'No languagethod is available yet!',
                    });
                }
                return res.status(200).send({
                    languages: result
                });
            }
        );
    } catch (err) {
        return res.status(401).send({
            Error: err
        })
    }
});

// delete payment method
router.delete('/paymentmethod', userMiddleware.isLoggedIn, (req, res, next) => {
    try {
        const method = req.query.id;
        if (!method) {
            return res.status(403).send({
                msg: 'Please ensure you passed the payment method ID you want to delete as a parameter!'
            });
        }
        db.query(
            `DELETE FROM pay_methods WHERE id='${method}'`,
            (err, result) => {
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                if (result.affectedRows) {
                    return res.status(200).send({
                        msg: result.affectedRows + ' payment method has been successfully deleted!',
                    });
                } else {
                    return res.status(409).send({
                        msg: 'No payment method with such ID exist!',
                    });
                }
            }
        );
    } catch (err) {
        return res.status(401).send({
            Error: err
        })
    }
});
// diasable payment method
router.put('/disablemethod', userMiddleware.isLoggedIn, (req, res, next) => {
    try {
        let status = 'Disable';
        const method = req.query.id;
        if (!method) {
            return res.status(403).send({
                msg: 'Please ensure you pass the ID of payment method you want to disable as a parameter!'
            });
        }
        db.query(
            `UPDATE pay_methods SET status='${status}' WHERE method='${method}'`,
            (err, result) => {
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                if (result.affectedRows) {
                    return res.status(200).send({
                        msg: result.affectedRows + ' payment method has been successfully deleted!',
                    });
                } else {
                    return res.status(409).send({
                        msg: 'No payment method with such ID exist!',
                    });
                }
            }
        );
    } catch (err) {
        return res.status(401).send({
            Error: err
        })
    }
});

// enable payment method
router.put('/enablemethod', userMiddleware.isLoggedIn, (req, res, next) => {
    try {
        let status = 'Enable';
        const method = req.query.method;
        if (!method) {
            return res.status(403).send({
                msg: 'Please ensure you pass the ID of payment method you want to enable as a parameter!'
            });
        }
        db.query(
            `UPDATE pay_methods SET status='${status}' WHERE method='${method}'`,
            (err, result) => {
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                if (result.affectedRows) {
                    return res.status(200).send({
                        msg: result.affectedRows + ' payment method has been successfully enable!',
                    });
                } else {
                    return res.status(409).send({
                        msg: 'No payment method with such ID exist!',
                    });
                }
            }
        );
    } catch (err) {
        return res.status(401).send({
            Error: err
        })
    }
});
// Payment methods module ends here

//Laguage module starts here
//setting up language
router.post('/createlang', userMiddleware.isLoggedIn, (req, res, next) => {
    try {
        const language = req.body.language;
        let status = "Enable";
        if (!language) {
            return res.status(401).send({
                msg: "language is required!"
            });
        }
        db.query(
            `INSERT INTO languages(language, status, created_date) VALUES ('${language}', '${status}', now())`,
            (err, result) => {
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                return res.status(201).send({
                    msg: language + ' language has been successfully added!',
                });
            }
        );
    } catch (err) {
        return res.status(401).send({
            Error: err
        })
    }
});
// fetching available languages
router.get('/languages', userMiddleware.isLoggedIn, (req, res, next) => {
    try {
        db.query(
            `SELECT * FROM languages ORDER BY language`,
            (err, result) => {
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                if (!result.length) {
                    return res.status(404).send({
                        msg: 'No language available yet!',
                    });
                }
                return res.status(200).send({
                    languages: result
                });
            }
        );
    } catch (err) {
        return res.status(401).send({
            Error: err
        })
    }
});


// deleting a language from the system
router.delete('/deletelang', userMiddleware.isLoggedIn, (req, res, next) => {
    try {
        const language = req.query.id;
        if (!language) {
            return res.status(401).send({
                msg: "The language id must be passed a parameter!"
            });
        }
        db.query(
            `DELETE FROM languages WHERE id='${language}')`,
            (err, result) => {
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                if (result.affectedRows) {
                    return res.status(201).send({
                        msg: result.affectedRows + ' language has been successfully deleted!',
                    });
                } else {
                    return res.status(201).send({
                        msg: 'No language exist with such id.',
                    });
                }
            }
        );
    } catch (err) {
        return res.status(401).send({
            Error: err
        })
    }
});
// Disabling a language from the system
router.put('/disablelang', userMiddleware.isLoggedIn, (req, res, next) => {
    try {
        const language = req.query.id;
        let status = "Disable";
        if (!language) {
            return res.status(401).send({
                msg: "language id must be passed a parameter!"
            });
        }
        db.query(
            `UPDATE languages SET status='${status}' WHERE id='${language}')`,
            (err, result) => {
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                if (result.affectedRows) {
                    return res.status(201).send({
                        msg: result.affectedRows + ' language has been successfully disable!',
                    });
                } else {
                    return res.status(201).send({
                        msg: 'No language exist with such id.',
                    });
                }
            }
        );
    } catch (err) {
        return res.status(401).send({
            Error: err
        })
    }
});
// Enabling a language in the system
router.put('/enablelang', userMiddleware.isLoggedIn, (req, res, next) => {
    try {
        const language = req.query.id;
        let status = "Enable";
        if (!language) {
            return res.status(401).send({
                msg: "language must be passed a parameter!"
            });
        }
        db.query(
            `UPDATE languages SET status='${status}' WHERE id='${language}')`,
            (err, result) => {
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                if (result.affectedRows) {
                    return res.status(201).send({
                        msg: result.affectedRows + ' language has been successfully enable!',
                    });
                } else {
                    return res.status(201).send({
                        msg: 'No language exist with such id.',
                    });
                }
            }
        );
    } catch (err) {
        return res.status(401).send({
            Error: err
        })
    }
});
//language module ends here

// Feedback module starts here
// fetching feedbacks from the users
router.get('/feedbacks', userMiddleware.isLoggedIn, (req, res, next) => {
    try {
        db.query(
            `SELECT * FROM feedbacks ORDER BY id DESC`,
            (err, result) => {
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                if (!result.length) {
                    return res.status(404).send({
                        msg: 'No feedback yet!',
                    });
                }
                return res.status(200).send({
                    feedbacks: result
                });
            }
        );
    } catch (err) {
        console.log(err);
    }
});
// To mark the feedback satus as seen
router.put('/feedback', userMiddleware.isLoggedIn, (req, res, next) => {
    let fb_id = req.query.id;
    let status = "seen"
    try {
        db.query(
            `UPDATE feedbacks SET status='${status}' WHERE id='${fb_id}'`,
            (err, result) => {
                if (err) {
                    // throw err;
                    return res.status(400).send({
                        msg: err
                    });
                }
                if (!result.affectedRows) {
                    return res.status(404).send({
                        msg: 'Sorry, something went wrong. Try again!',
                    });
                }
                return res.status(200).send({
                    msg: "Success"
                });
            }
        );
    } catch (err) {
        console.log(err);
    }
});
// feedback module ends here

// Blog posts module starts here
router.post('/create_post', userMiddleware.isLoggedIn, (req, res, next) => {
    try {

    } catch (err) {
        console.log(err);
    }
});
// Deleting blog post
router.delete('/delete_post', userMiddleware.isLoggedIn, (req, res, next) => {
    try {

    } catch (err) {
        console.log(err);
    }
});
// Editing blog post
router.put('/delete_post', userMiddleware.isLoggedIn, (req, res, next) => {
    try {

    } catch (err) {
        console.log(err);
    }
});

module.exports = router;