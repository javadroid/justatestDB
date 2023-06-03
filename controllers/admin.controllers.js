const uuid = require('uuid');
// const id = uuid.v4();
const jwt = require('jsonwebtoken');
const db = require('../lib/db.js');
module.exports = {
    // fetch all users
    getAllUsers: (req, res, next) => {
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
    },
    getTotalNumRegUsers: (req, res, next) => {
        try {
            db.query(
                `SELECT * FROM users`,
                (err, result) => {
                    if (result.length > 0) {
                        return res.status(200).send({
                            NumOfUsers: result.length
                        });
                    } else {
                        return res.status(404).send({
                            NumOfUsers: 0
                        });
                    }

                });
        } catch (err) {
            return res.status(401).send({
                Error: err
            })
        }
    },

    // fetch user by id
    getUserById: (req, res, next) => {
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
    },
    //delete user by id
    deleteUserById: (req, res, next) => {
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
    },
    // freez user from logging in
    freezeUser: (req, res, next) => {
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

    },

    // disable user user from logging in
    disableUser: (req, res, next) => {
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

    },
    // enable user access to his/her accoutn
    enableUser: (req, res, next) => {
        try {
            let user = req.query.userid;
            const nstatus = "Enable";
            db.query(
                `UPDATE users SET permission='${nstatus}' WHERE id='${user}'`,
                (err, result) => {
                    if (result.affectedRows) {
                        return res.status(200).send({
                            msg: result.affectedRows + " user account has been enabled successfully."
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

    },
    // delete user from the system
    deleteUser: (req, res, next) => {
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

    },
    // User permission module ends here

    // fetch user transaction history
    getTrnxByUserId: (req, res, next) => {
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
    },
    // fetch all users transaction history
    fetchAllUsersTrnxHistory: (req, res, next) => {
        try {

            db.query(
                `SELECT * FROM transactions ORDER BY trx_id DESC`,
                (err, result) => {
                    if (err) {
                        return res.status(400).send({
                            msg: err
                        })
                    }
                    if (result.length >= 1) {
                        return res.status(200).send({
                            trx_history: { result }
                        });
                    } else {
                        return res.status(404).send({
                            msg: 'There is no transactions yet!'
                        });
                    }

                });
        } catch (err) {
            return res.status(401).send({
                Error: err
            })
        }
    },
    //Login user
    login: (req, res, next) => {
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
                        const func = "login";
                        const us = result[0]['user'];
                        db.query(
                            `INSERT INTO logging_login_and_logout(logged, user) VALUES ('${func}', '${us}')`,
                            (err, resul) => {
                                if (err) {
                                    // throw err;
                                    return res.status(400).send({
                                        msg: err
                                    });
                                }
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
                            }
                        );

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
    },
    // Admin user login ends here
    //Log out user
    userLogout: (req, res, next) => {
        try {
            const user = req.query.userid;
            db.query(
                `SELECT * FROM admins WHERE id = '${user}'`,
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
                            msg: 'Incorrect userId was passed!'
                        });
                        // check password
                    } else {
                        const func = "logout";
                        const us = result[0]['user'];
                        db.query(
                            `INSERT INTO logging_login_and_logout (logged, user) VALUES ('${func}', '${us}')`,
                            (err, resul) => {
                                if (err) {
                                    // throw err;
                                    return res.status(400).send({
                                        msg: err
                                    });
                                }
                                console.log(us)
                                if (resul) {
                                    return res.status(200).send({
                                        msg: 'You are logged out!'
                                    })
                                }
                            }
                        );
                    }
                }
            );
        } catch (e) {
            console.log(e);
        }

    },

    // Number renting module start here
    // Setting up number renting module
    // Admin can set the renting fee base on coutry and duration
    setRentFee: (req, res, next) => {
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
    },
    getRentedNumbers: (req, res, next) => {
        try {

            db.query(
                `SELECT * FROM rents ORDER BY id DESC`,
                (err, result) => {
                    if (err) {
                        return res.status(400).send({
                            msg: err
                        })
                    }
                    if (result.length >= 1) {
                        return res.status(200).send({
                            RentedNumbes: result
                        });
                    } else {
                        return res.status(404).send({
                            msg: 'Users have not rent any number yet.'
                        });
                    }

                });
        } catch (err) {
            return res.status(401).send({
                Error: err
            })
        }
    },
    // Number renting fee module ends here


    // Payment method module starts here
    // Set up payment method
    createPaymentMethod: (req, res, next) => {
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
    },
    // fetching available payment methods
    getPaymentMethods: (req, res, next) => {
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
                        payment_methods: result
                    });
                }
            );
        } catch (err) {
            return res.status(401).send({
                Error: err
            })
        }
    },

    // delete payment method
    deletePaymentMethod: (req, res, next) => {
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
    },
    // diasable payment method
    disablePaymentMethod: (req, res, next) => {
        try {
            let status = 'Disable';
            const method = req.query.id;
            if (!method) {
                return res.status(403).send({
                    msg: 'Please ensure you pass the ID of payment method you want to disable as a parameter!'
                });
            }
            db.query(
                `UPDATE pay_methods SET status='${status}' WHERE id='${method}'`,
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
    },

    // enable payment method
    enablePaymentMethod: (req, res, next) => {
        try {
            let status = 'Enable';
            const method = req.query.id;
            if (!method) {
                return res.status(403).send({
                    msg: 'Please ensure you pass the ID of payment method you want to enable as a parameter!'
                });
            }
            db.query(
                `UPDATE pay_methods SET status='${status}' WHERE id='${method}'`,
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
    },
    // Payment methods module ends here

    //Laguage module starts here
    //setting up language
    createLanguage: (req, res, next) => {
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
    },
    // fetching available languages
    getLanguages: (req, res, next) => {
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
    },


    // deleting a language from the system
    deleteLanguage: (req, res, next) => {
        try {
            const language = req.query.id;
            if (!language) {
                return res.status(401).send({
                    msg: "The language id must be passed a parameter!"
                });
            }
            db.query(
                `DELETE FROM languages WHERE id='${language}'`,
                (err, result) => {
                    if (err) {
                        // throw err;
                        return res.status(400).send({
                            msg: err
                        });
                    }
                    if (result.affectedRows) {
                        return res.status(200).send({
                            msg: result.affectedRows + ' language has been successfully deleted!',
                        });
                    } else {
                        return res.status(404).send({
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
    },
    // Disabling a language from the system
    disableLanguage: (req, res, next) => {
        try {
            const language = req.query.id;
            let status = "Disable";
            if (!language) {
                return res.status(401).send({
                    msg: "language id must be passed a parameter!"
                });
            }
            db.query(
                `UPDATE languages SET status='${status}' WHERE id='${language}'`,
                (err, result) => {
                    if (err) {
                        // throw err;
                        return res.status(400).send({
                            msg: err
                        });
                    }
                    if (result.affectedRows) {
                        return res.status(200).send({
                            msg: result.affectedRows + ' language has been successfully disable!',
                        });
                    } else {
                        return res.status(404).send({
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
    },
    // Enabling a language in the system
    enableLanguage: (req, res, next) => {
        try {
            const language = req.query.id;
            let status = "Enable";
            if (!language) {
                return res.status(401).send({
                    msg: "language must be passed a parameter!"
                });
            }
            db.query(
                `UPDATE languages SET status='${status}' WHERE id='${language}'`,
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
    },
    //language module ends here

    // Feedback module starts here
    // fetching feedbacks from the users
    getFeedbacks: (req, res, next) => {
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
    },
    // To mark the feedback satus as seen
    markFeedbackAsSeen: (req, res, next) => {
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
                            msg: 'Wrong feedback id was passed!',
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
    },
    // feedback module ends here

    // Blog posts module starts here
    createPost: (req, res, next) => {
        try {
            let fb_link = "",
                twit_link = "",
                ingt_link = "",
                tele_link = "",
                pint_link = "",
                reddit_link = "";
            const { title, author, description, image, content } = req.body;
            if (req.body.fb_link) {
                fb_link = req.body.fb_link;
            }
            if (req.body.twit_link) {
                twit_link = req.body.twit_link;
            }
            if (req.body.ingt_link) {
                ingt_link = req.body.ingt_link;
            }
            if (req.body.tele_link) {
                tele_link = req.body.tele_link;
            }
            if (req.body.pint_link) {
                pint_link = req.body.pint_link;
            }
            if (req.body.ingt_link) {
                reddit_link = req.body.reddit_link;
            }
            if (!title || !author || !description || !image || !content) {
                return res.status(401).send({
                    msg: "Title, author, description, image, content field con not be empty!"
                });
            }
            // encoding the content input
            let Encoded = Buffer.from(content, 'utf8').toString('base64');
            // decoding the content
            let DEcontent = Buffer.from(Encoded, 'base64').toString('utf8');
            console.log("Encoded: " + Encoded);
            console.log("Decoded: " + DEcontent);
            console.log("Main content: " + content);
            db.query(
                `INSERT INTO blog_posts(title, description, content, image, facebook, twitter, instagram, telegram, pinterest, reddit)
            VALUES ('${title}', '${author}', '${description}', '${Encoded}', '${image}', '${fb_link}', '${twit_link}', '${ingt_link}', '${tele_link}', '${pint_link}', '${reddit_link}')`,
                (err, result) => {
                    if (err) {
                        // throw err;
                        return res.status(400).send({
                            msg: err
                        });
                    }
                    return res.status(201).send({
                        msg: 'Post has been published successfully!',
                    });
                }
            );
        } catch (err) {
            return res.status(401).send({
                Error: err
            })
        }
    },
    // Deleting blog post
    deletePostById: (req, res, next) => {
        try {
            let postid = req.query.post_id;
            db.query(
                `DELETE FROM blog_posts WHERE id='${postid}'`,
                (err, result) => {
                    if (err) {
                        // throw err;
                        return res.status(400).send({
                            msg: err
                        });
                    }
                    if (result.affectedRows) {
                        return res.status(200).send({
                            msg: result.affectedRows + ' post has been successfully deleted!',
                        });
                    } else {
                        return res.status(404).send({
                            msg: 'No post exist with such id.',
                        });
                    }
                }
            );

        } catch (err) {
            return res.status(401).send({
                Error: err
            })
        }
    },
    // Editing blog post
    updatePost: (req, res, next) => {
        try {
            let postid = req.query.post_id;
            let fb_link = "",
                twit_link = "",
                ingt_link = "",
                tele_link = "",
                pint_link = "",
                reddit_link = "";
            const { title, author, description, image, content } = req.body;
            if (req.body.fb_link) {
                fb_link = req.body.fb_link;
            }
            if (req.body.twit_link) {
                twit_link = req.body.twit_link;
            }
            if (req.body.ingt_link) {
                ingt_link = req.body.ingt_link;
            }
            if (req.body.tele_link) {
                tele_link = req.body.tele_link;
            }
            if (req.body.pint_link) {
                pint_link = req.body.pint_link;
            }
            if (req.body.ingt_link) {
                reddit_link = req.body.reddit_link;
            }
            if (!title || !author || !description || !image || !content) {
                return res.status(401).send({
                    msg: "Title, author, description, image, content field con not be empty!"
                });
            }
            // encoding the content input
            let Encoded = Buffer.from(content, 'utf8').toString('base64');
            // decoding the content
            let DEcontent = Buffer.from(Encoded, 'base64').toString('utf8');
            console.log("Encoded: " + Encoded);
            console.log("Decoded: " + DEcontent);
            console.log("Main content: " + content);
            db.query(
                `UPDATE blog_posts SET title='${title}', author='${author}', description='${description}', content='${Encoded}', image='${image}', facebook='${fb_link}', twitter='${twit_link}', instagram='${ingt_link}', telegram='${tele_link}', pinterest='${pint_link}', reddit='${reddit_link}' WHERE id='${postid}'`,
                (err, result) => {
                    if (err) {
                        // throw err;
                        return res.status(400).send({
                            msg: err
                        });
                    }
                    return res.status(201).send({
                        msg: 'Post has been successfully updated and published!',
                    });
                }
            );
        } catch (err) {
            console.log(err);
        }
    },
    // Enable blog post
    enablePost: (req, res, next) => {
        try {
            let postid = req.query.post_id;
            let st = "Enable"
            db.query(
                `UPDATE blog_posts SET status='${st}' WHERE id='${postid}'`,
                (err, result) => {
                    if (err) {
                        // throw err;
                        return res.status(400).send({
                            msg: err
                        });
                    }
                    return res.status(201).send({
                        msg: result.affectedRows + ' Post has been successfully enable',
                    });
                }
            );
        } catch (err) {
            console.log(err);
        }
    },
    // Disable blog post
    disablePost: (req, res, next) => {
        try {
            let postid = req.query.post_id;
            let st = "Disable"
            db.query(
                `UPDATE blog_posts SET status='${st}' WHERE id='${postid}'`,
                (err, result) => {
                    if (err) {
                        // throw err;
                        return res.status(400).send({
                            msg: err
                        });
                    }
                    return res.status(201).send({
                        msg: result.affectedRows + ' Post has been successfully disable from the public',
                    });
                }
            );
        } catch (err) {
            console.log(err);
        }
    },

    //country module starts here
    //Add up country
    createCountry: (req, res, next) => {
        try {
            const country = req.body.country_name;
            const code = req.body.country_code;
            const shrt_name = req.body.short_name;
            const flag = req.body.country_flag;
            let status = "Enable";
            if (!country || !code || !shrt_name) {
                return res.status(401).send({
                    msg: "Country name, code, and short_name are required!"
                });
            }
            db.query(
                `INSERT INTO countries(country_name, country_short_name, country_code, status, created_date) VALUES ('${country}', '${shrt_name}', '${code}', '${status}', now())`,
                (err, result) => {
                    if (err) {
                        // throw err;
                        return res.status(400).send({
                            msg: err
                        });
                    }
                    if (result.affectedRows >= 1) {
                        return res.status(201).send({
                            msg: country + ' has been successfully added as a country',
                        });
                    } else {
                        return res.status(201).send({
                            msg: 'Something went wrong, try again later',
                        });
                    }
                }
            );
        } catch (err) {
            return res.status(401).send({
                Error: err
            })
        }
    },
    // Referaal Programme
    referrals: (req, res, next) => {
        try {
            const refCode = req.query.ref_code;
            var q
            if (refCode) {
                q = `SELECT referral as userId, first_deposit as first_topup_amount, reg_date as date_registered, bonus as referrer_earn FROM referrals WHERE referrer=${refCode} ORDER BY id DESC`
            } else {
                q = `SELECT username, ref_code, num_refer FROM users ORDER BY id`
            }
            db.query(
                q,
                (err, result) => {
                    if (err) {
                        // throw err;
                        return res.status(400).send({
                            msg: err
                        });
                    }
                    if (!result.length) {
                        return res.status(404).send({
                            msg: 'No referral yet!',
                        });
                    }
                    return res.status(200).send({
                        data: result
                    });
                }
            );
        } catch (err) {
            console.log(err);
        }
    },
    // Wallet module
    // Fetch users available wallet balance
    fetchusersWallets: (req, res, next) => {
        try {
            db.query(
                `SELECT users.username AS user, wallets.user_id AS userId, wallets.balance AS topUpBalance, wallets.ref_bonus AS totalEarn, wallets.bonus_status AS refEarnStatus FROM users JOIN wallets ON users.id= wallets.user_id`,
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
                            wallet: result
                        });
                    } else {
                        return res.status(302).send({
                            msg: "No wallet balance available!"
                        });
                    }
                }
            )
        } catch (err) {
            console.log(err);
        }
    },
    // Reset user topup balance, bonus balance and bonus status
    setUserBalance: (req, res, next) => {
        try {
            let balanc = req.query.available_balance;
            let adminId = req.query.adminid;
            let userid = req.query.userid;
            const newBalance = req.body.newBalance;
            const newBonus = req.body.newEarnBalance;
            const bonusStatus = req.body.ref_bonus_status
            var query = '';
            if (newBalance) {

                db.query(
                    `SELECT users.username AS username, admins.user AS admin_user FROM users JOIN admins ON users.id='${userid}' AND admins.id='${adminId}'`,
                    (err, result) => {
                        // user does not exists
                        if (err) {
                            return res.status(400).send({ msg: err });
                        }
                        if (!result.length) {
                            return res.status(401).send({ msg: 'UserId or AdminId passed in th params is incorrect!' });
                            // check password
                        } else {
                            const us = result[0]['username'];
                            const adminus = result[0]['admin_user'];
                            db.query(`SELECT * FROM wallets WHERE user_id = '${userid}'`,
                                (err, resu) => {
                                    const oldbal = resu[0]['balance'];
                                    console.log(oldbal);
                                    if (resu.length) {
                                        db.query(
                                            `INSERT INTO logging_balance (owner, performer, old_amount, new_amount) VALUES ('${us}', '${adminus}', '${oldbal}', '${newBalance}')`,
                                            (err, resul) => {
                                                if (err) {
                                                    // throw err;
                                                    return res.status(400).send({
                                                        msg: 'Something went wrong, please try a moment later.'
                                                    });
                                                }
                                                query = `UPDATE wallets SET balance='${newBalance}' WHERE user_id='${userid}'`
                                                db.query(
                                                    query,
                                                    (err, result) => {
                                                        if (err) {
                                                            // throw err;
                                                            return res.status(400).send({
                                                                msg: err
                                                            });
                                                        }
                                                        return res.status(201).send({
                                                            msg: result.affectedRows + ' user  balance has been successfully reset',
                                                        });
                                                    }
                                                );

                                            }
                                        );
                                    } else {
                                        return res.status(400).send({ msg: 'Incorrect userId was passed on params.' })
                                    }

                                }
                            );
                        }
                    }
                );

            }
            if (newBonus) {
                query = `UPDATE wallets SET ref_bonus='${newBonus}' WHERE user_id='${userid}'`
                db.query(
                    query,
                    (err, result) => {
                        if (err) {
                            // throw err;
                            return res.status(400).send({
                                msg: err
                            });
                        }
                        return res.status(201).send({
                            msg: result.affectedRows + ' user  balance has been successfully reset',
                        });
                    }
                );
            }
            if (bonusStatus) {
                let nrb = 0;
                query = `UPDATE wallets SET bonus_status='${bonusStatus}', ref_bonus=${nrb}  WHERE user_id='${userid}'`
                db.query(
                    query,
                    (err, result) => {
                        if (err) {
                            // throw err;
                            return res.status(400).send({
                                msg: err
                            });
                        }
                        let typ = "Bonus Earn"
                        const tr = Math.floor(Math.random() * 3473) + '3ref'
                            //add to trasactions history
                        db.query(
                            `INSERT INTO transactions (trx_id, user_id, amount, type, status) VALUES ('${tr}', '${userid}', '${balanc}', '${typ}', '${bonusStatus}')`,
                            (err, resul) => {
                                if (err) {
                                    // throw err;
                                    return res.status(400).send({
                                        msg: 'Something went wrong, please try a moment later.'
                                    });
                                }
                                return res.status(201).send({
                                    msg: result.affectedRows + ' user  balance has been successfully reset',
                                });

                            }
                        );
                    }
                );
            }

        } catch (err) {
            console.log(err);
        }
    },
    // set notification email
    systemNotificationEmail: (req, res, next) => {
        const newEmail = req.body.new_email;
        var q;
        let id = 1;
        try {
            if (newEmail) {
                q = `UPDATE notification_email SET email='${newEmail}' WHERE id='${id}'`;
                db.query(
                    q,
                    (err, result) => {
                        if (err) {
                            // throw err;
                            return res.status(400).send({
                                msg: err
                            });
                        }
                        return res.status(201).send({
                            msg: "Main system notification email has been succeccfully changed."
                        });
                    }
                );
            } else {
                q = `SELECT email AS system_notification_email FROM notification_email`;
                db.query(
                    q,
                    (err, result) => {
                        if (err) {
                            // throw err;
                            return res.status(400).send({
                                msg: err
                            });
                        }
                        return res.status(201).send({
                            Email: result
                        });
                    }
                );
            }

        } catch (err) {
            console.log(err);
        }
    },
    changePassword: (req, res, next) => {
        try {
            const id = req.query.userid;
            const newPassword = req.body.new_password;
            const confirmPass = req.body.confirm_new_password;
            if (!id) {
                return res.status(401).send({
                    msg: "User Id must be passed as a requery parameter!"
                });
            }
            if (newPassword.length < 6) {
                return res.status(401).send({
                    msg: "Password length must not be less than 6 charaters!"
                });
            }
            if (!newPassword || !confirmPass) {
                return res.status(401).send({
                    msg: "Both password and confirm password fields are required!"
                });
            }
            if (confirmPass != newPassword) {
                return res.status(401).send({
                    msg: "Both passwords must match!"
                });
            }
            db.query(
                `SELECT * FROM admins WHERE id = '${id}'`,
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
                            msg: 'UserId is incorrect!'
                        });
                        // check password
                    } else {
                        const us = result[0]['user'];
                        const oldpass = result[0]['password'];
                        db.query(
                            `INSERT INTO logging_changed_password (user, old_password, new_password, time) VALUES ('${us}', '${oldpass}', '${newPassword}', now())`,
                            (err, result) => {
                                if (err) {
                                    // throw err;
                                    return res.status(400).send({
                                        msg: 'Something went wrong, please try a moment later.'
                                    });
                                }
                            }
                        );
                    }
                }
            );
            if (id && newPassword) {
                q = `UPDATE admins SET password='${newPassword}' WHERE id='${id}'`;
                db.query(
                    q,
                    (err, result) => {
                        if (err) {
                            // throw err;
                            return res.status(400).send({
                                msg: err
                            });
                        }
                        return res.status(201).send({
                            msg: "Your password has been successfully changed."
                        });
                    }
                );
            }
        } catch (err) {
            console.log(err);
        }
    },
    logoutLogs: (req, res, next) => {
        try {
            let h = "logout";
            db.query(
                `SELECT * FROM logging_login_and_logout WHERE logged='${h}' ORDER BY time DESC`,
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
                            logs: result
                        });
                    } else {
                        return res.status(302).send({
                            msg: "No logs yet!"
                        });
                    }
                }
            )
        } catch (err) {
            console.log(err);
        }
    },
    loginLogs: (req, res, next) => {
        try {
            let h = "login";
            db.query(
                `SELECT * FROM logging_login_and_logout WHERE logged='${h}' ORDER BY time DESC`,
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
                            logs: result
                        });
                    } else {
                        return res.status(302).send({
                            msg: "No logs yet!"
                        });
                    }
                }
            )
        } catch (err) {
            console.log(err);
        }
    },
    balanceLogs: (req, res, next) => {
        try {
            db.query(
                `SELECT * FROM logging_balance ORDER BY id DESC`,
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
                            logs: result
                        });
                    } else {
                        return res.status(302).send({
                            msg: "No logs yet!"
                        });
                    }
                }
            )
        } catch (err) {
            console.log(err);
        }
    },
    changePasswordLogs: (req, res, next) => {
        try {
            db.query(
                `SELECT * FROM logging_changed_password ORDER BY time DESC`,
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
                            logs: result
                        });
                    } else {
                        return res.status(302).send({
                            msg: "No logs yet!"
                        });
                    }
                }
            )
        } catch (err) {
            console.log(err);
        }
    },
    changeUserApiKey: (req, res, next) => {
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
                        msg: 'User api key has been successfully changed!'
                    });
                }
            );
        } catch (e) {
            console.log(e);
        }

    },
    createApplication: (req, res, next) => {
        try {

            const appId = req.body.application_id;
            const appName = req.body.application_name;
            const country = req.body.country;
            const price = req.body.price;
            const appLogo = req.body.logo;
            if (!appId || !appName || !country || !price || !appLogo) {
                return res.status(401).send({
                    msg: "Application ID, name, price, logo, and country are required!"
                });
            } else {
                db.query(
                    `INSERT INTO applications (application_id, name price, country, logo) VALUES ('${appId}', '${appName}', '${price}', '${country}', '${logo}')`,
                    (e, result) => {
                        if (e) {
                            // throw err;
                            return res.status(400).send({
                                msg: e
                            });
                        }
                        if (result.affectedRows >= 1) {
                            return res.status(201).send({
                                msg: 'Application has been successfully created.'
                            });
                        } else return res.status(409).send({ msg: "Something went wrong." })

                    }

                );
            }
        } catch (err) {
            console.log(err);
            return res.status(400).send({
                Error: err
            });
        }
    },
    getApplication: (req, res, next) => {
        try {

            db.query(
                `SELECT * FROM applications ORDER BY created_date DESC`,
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
    },
    deleteApplication: (req, res, next) => {
        try {
            const appId = req.query.app_id;
            db.query(
                `DELETE FROM applications WHERE application_id='${appId}'`,
                (err, result) => {
                    if (err) {
                        // throw err;
                        return res.status(400).send({
                            msg: 'Something went wrong, please try a moment later.'
                        });
                    }
                    return res.status(200).send({
                        msg: "Application has been successfully delrted."
                    });
                }

            );
        } catch (err) {
            console.log(err);
        }
    },
    updateApplication: (req, res, next) => {
        try {
            const appId = req.query.appId;
            const { newAppId, newAppName, country, newPrice } = req.body;
            db.query(
                `UPDATE applications SET application_id='${newAppId}', name='${newAppName}', country='${country}', price='${newPrice}'  WHERE application_id='${appId}'`,
                (err, result) => {
                    if (err) {
                        // throw err;
                        return res.status(400).send({
                            msg: 'Something went wrong, please try a moment later.'
                        });
                    }
                    return res.status(200).send({
                        msg: "Updated successfully."
                    });
                }

            );
        } catch (err) {
            console.log(err);
        }
    },
}