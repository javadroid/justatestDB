const uuid = require('uuid');
// const id = uuid.v4();
const jwt = require('jsonwebtoken');
const db = require('../lib/db.js');
const uploadImage = require('../middleware/upload.js');
const uploadFlag = require('../middleware/upload.js');
const uploadAppLogo = require('../middleware/upload.js');
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
                msg: "Something went wrong."
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
                msg: "Something went wrong."
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
                msg: "Something went wrong."
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
                msg: "Something went wrong."
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
                msg: "Something went wrong."
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
                msg: "Something went wrong."
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
                msg: "Something went wrong."
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
                msg: "Something went wrong."
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
                msg: "Something went wrong."
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
                msg: "Something went wrong."
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
                msg: "Something went wrong."
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
                msg: "Something went wrong."
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
                msg: "Something went wrong."
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
                msg: "Something went wrong."
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
    testingupload: async(req, res, next) => {
        await uploadImage(req, res);
        console.log(req.file);
    },
    // Blog posts module starts here
    createPost: async(req, res, next) => {
        const social_media_links = {};
        let baseURL = "http://161.35.218.95:3000";
        try {
            const { title, author, description, content } = req.body;

            console.log(title, author, description, content);
            if (req.body.facebook_link) {
                social_media_links.facebook = req.body.facebook_link;
            }
            if (req.body.twitter_link) {
                social_media_links.twitter = req.body.twitter_link;
            }
            if (req.body.instagram_link) {
                social_media_links.instagram = req.body.instagram_link;
            }
            if (req.body.telegram_link) {
                social_media_links.telegram = req.body.telegram_link;
            }
            if (req.body.pint_link) {
                social_media_links.pint = req.body.pint_link;
            }
            if (req.body.reddit_link) {
                social_media_links.reddit = req.body.reddit_link;
            }

            console.log(social_media_links);
            if (!title || !author || !description || !content) {
                return res.status(401).send({
                    msg: "Title, author, description, content field con not be empty!"
                });
            }

            // encoding the content input
            const Encoded = Buffer.from(content, 'utf8').toString('base64');
            let ss = JSON.stringify(social_media_links)
            const social = Buffer.from(ss, 'utf8').toString('base64');
            db.query(
                `INSERT INTO blog_posts(title, author, description, content, social_media_link)
            VALUES ('${title}', '${author}', '${description}', '${Encoded}', '${social}')`,
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
            return res.status(500).send({
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
        const social_media_links = {};

        try {
            let postid = req.query.post_id;
            const { title, author, description, content } = req.body;
            // console.log(title, author, description, content);
            if (req.body.facebook_link) {
                social_media_links.facebook = req.body.facebook_link;
            }
            if (req.body.twitter_link) {
                social_media_links.twitter = req.body.twitter_link;
            }
            if (req.body.instagram_link) {
                social_media_links.instagram = req.body.instagram_link;
            }
            if (req.body.telegram_link) {
                social_media_links.telegram = req.body.telegram_link;
            }
            if (req.body.pint_link) {
                social_media_links.pint = req.body.pint_link;
            }
            if (req.body.reddit_link) {
                social_media_links.reddit = req.body.reddit_link;
            }

            if (!title || !author || !description || !content) {
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
                `UPDATE blog_posts SET title='${title}', author='${author}', description='${description}', content='${Encoded}', social_media_link='[${social_media_links}]' WHERE id='${postid}'`,
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
    createCountry: async(req, res, next) => {
        try {
            const country = req.body.country_name;
            const code = req.body.country_code;
            const country_id = req.body.country_id;
            let status = "Enable";
            if (!country || !code || !country_id) {
                return res.status(401).send({
                    msg: "Country name, code, and country Id  are required!"
                });
            }
            // await uploadFlag(req, res);
            // if (req.file == undefined) {
            //     return res.status(400).send({ msg: "Please upload country flag!" });
            // }
            // const flg = req.file.originalname;
            // let flag = baseURL + `/uploads/${flg}`;
            db.query(
                `INSERT INTO countries(country_name, country_id, country_code, status, created_date) VALUES ('${country}', '${country_id}',  '${code}', '${status}', now())`,
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
    // update country
    updateCountry: (req, res, next) => {
        try {

            const currId = req.query.old_country_id;
            const country_id = req.body.new_country_id;
            const country = req.body.country_name;
            const code = req.body.country_code;
            if (!country || !code || !country_id || !currId) {
                return res.status(401).send({
                    msg: "Country name, code, country Id, and new country Id  are required!"
                });
            }
            db.query(
                `UPDATE countries SET country_name='${country}', country_id='${country_id}', country_code='${code}' WHERE id='${currId}'`,
                (err, result) => {
                    if (err) {
                        // throw err;
                        return res.status(400).send({
                            msg: "Something went wrong."
                        });
                    }
                    if (result.affectedRows >= 1) {
                        return res.status(200).send({
                            msg: country + ' has been successfully updated',
                        });
                    } else {
                        return res.status(403).send({
                            msg: 'Incorrect old country id was passed on the params.',
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
    enableCountry: (req, res, next) => {
        try {
            const id = req.query.country_id
            const status = "Enable";
            // return res.send(id);
            db.query(
                `UPDATE countries SET status='${status}' WHERE id='${id}'`,
                (err, result) => {
                    if (err) {
                        // throw err;
                        return res.status(400).send({
                            msg: err
                        });
                    }
                    // return res.send(result);
                    if (result.affectedRows) {
                        return res.status(201).send({
                            msg: "Successfully enabled.",
                        });
                    } else {
                        return res.status(505).send({
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
    disableCountry: (req, res, next) => {
        try {
            const id = req.query.country_id
            const status = "Disable";
            db.query(
                `UPDATE countries SET status='${status}' WHERE id='${id}'`,
                (err, result) => {
                    if (err) {
                        // throw err;
                        return res.status(400).send({
                            msg: err
                        });
                    }

                    if (result.affectedRows) {
                        return res.status(201).send({
                            msg: "Successfully disabled.",
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
                `SELECT * FROM logging_changed_password ORDER BY time`,
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
    createApplication: async(req, res, next) => {
        try {
            const appId = req.body.application_id;
            const appName = req.body.application_name;
            const country = req.body.country;
            const price = req.body.price;
            // await uploadAppLogo(req, res);
            // if (req.file == undefined) {
            //     return res.status(400).send({ msg: "Please upload country flag!" });
            // }
            // const appLogo = req.file.originalname;
            if (!appId || !appName || !country || !price) {
                return res.status(401).send({
                    msg: "Application ID, name, price, and country are required!"
                });
            } else {
                db.query(
                    `INSERT INTO applications (application_id, app_name, country, price) VALUES ('${appId}', '${appName}', '${country}', '${price}')`,
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
                `UPDATE applications SET application_id='${newAppId}', app_name='${newAppName}', country='${country}', price='${newPrice}'  WHERE application_id='${appId}'`,
                (err, result) => {
                    if (err) {
                        // throw err;
                        return res.status(400).send({
                            msg: err
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
    disableApp: (req, res, next) => {
        try {
            const appId = req.query.appId;
            const sta = "Disable";
            db.query(
                `UPDATE applications SET status='${sta}' WHERE application_id='${appId}'`,
                (err, result) => {
                    if (err) {
                        // throw err;
                        return res.status(400).send({
                            msg: 'Something went wrong, please try a moment later.'
                        });
                    }
                    return res.status(200).send({
                        msg: "Application has been successfully disabled."
                    });
                }

            );
        } catch (err) {
            console.log(err);
        }
    },
    enableUserAPIKEY: (req, res, next) => {
        try {
            const userId = req.query.userId;
            const sta = "Enable";
            db.query(
                `UPDATE users SET apikey_status='${sta}' WHERE id='${userId}'`,
                (err, result) => {
                    if (err) {
                        // throw err;
                        return res.status(400).send({
                            msg: 'Something went wrong, please try a moment later.'
                        });
                    }
                    return res.status(200).send({
                        msg: "User API key has been successfully enabled."
                    });
                }

            );
        } catch (err) {
            console.log(err);
        }
    },
    disableUserAPIKEY: (req, res, next) => {
        try {
            const userId = req.query.userId;
            const sta = "Disable";
            db.query(
                `UPDATE users SET apikey_status='${sta}' WHERE id='${userId}'`,
                (err, result) => {
                    if (err) {
                        // throw err;
                        return res.status(400).send({
                            msg: 'Something went wrong, please try a moment later.'
                        });
                    }
                    return res.status(200).send({
                        msg: "User API key has been successfully enabled."
                    });
                }

            );
        } catch (err) {
            console.log(err);
        }
    },
    enableApp: (req, res, next) => {
        try {
            const appId = req.query.appId;
            const sta = "Enable";
            db.query(
                `UPDATE applications SET status='${sta}' WHERE application_id='${appId}'`,
                (err, result) => {
                    if (err) {
                        // throw err;
                        return res.status(400).send({
                            msg: 'Something went wrong, please try a moment later.'
                        });
                    }
                    return res.status(200).send({
                        msg: "Application has been successfully enabled."
                    });
                }

            );
        } catch (err) {
            console.log(err);
        }
    },
    // fetch admin users management module starts here
    fetchAllAdmins: (req, res, next) => {
        try {
            db.query(
                `SELECT * FROM admins`,
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
    createAdmin: (req, res, next) => {
        try {
            const { username, password, role } = req.body;
            // await uploadAppLogo(req, res);
            // if (req.file == undefined) {
            //     return res.status(400).send({ msg: "Please upload country flag!" });
            // }
            // const appLogo = req.file.originalname;
            if (!username || !password || !role) {
                return res.status(401).send({
                    msg: "Username, password, and role are required!"
                });
            } else {
                db.query(
                    `INSERT INTO admins (user, password, role) VALUES ('${username}', '${password}', '${role}')`,
                    (e, result) => {
                        if (e) {
                            // throw err;
                            return res.status(400).send({
                                msg: e
                            });
                        }
                        if (result.affectedRows >= 1) {
                            return res.status(201).send({
                                msg: 'New user has been successfully created.'
                            });
                        } else return res.status(409).send({ msg: "Something went wrong." })

                    }

                );
            }
        } catch (err) {
            console.log(err);
            return res.status(500).send({
                Error: err
            });
        }
    },
    updateAdmin: (req, res, next) => {
        try {
            const user_id = req.query.user_id;
            const { new_username, new_password, new_role } = req.body;
            db.query(
                `UPDATE admins SET user='${new_username}', password='${new_password}', role='${new_role}' WHERE id='${user_id}'`,
                (err, result) => {
                    if (err) {
                        // throw err;
                        return res.status(400).send({
                            msg: 'Something went wrong, please try a moment later.',
                            Error: err
                        });
                    }
                    return res.status(200).send({
                        msg: "User has been updated."
                    });
                }

            );
        } catch (err) {
            console.log(err);
        }
    },
    createCoupon: (req, res, next) => {
        try {
            const { coupon_name, coupon_value, exp_date } = req.body;
            // await uploadAppLogo(req, res);
            // if (req.file == undefined) {
            //     return res.status(400).send({ msg: "Please upload country flag!" });
            // }
            // const appLogo = req.file.originalname;
            if (!coupon_name || !coupon_value || !exp_date) {
                return res.status(401).send({
                    msg: "coupon name, value and expiration date are required!"
                });
            } else {
                db.query(
                    `INSERT INTO coupons (coupon_name, coupon_value, expiration_date) VALUES ('${coupon_name}', '${coupon_value}', '${exp_date}')`,
                    (e, result) => {
                        if (e) {
                            // throw err;
                            return res.status(400).send({
                                msg: e
                            });
                        }
                        if (result.affectedRows >= 1) {
                            return res.status(201).send({
                                msg: 'Successfully created.'
                            });
                        } else return res.status(409).send({ msg: "Something went wrong." })

                    }

                );
            }
        } catch (err) {
            console.log(err);
            return res.status(500).send({
                Error: err
            });
        }
    },
    fetchcoupon: (req, res, next) => {
        try {
            db.query(
                `SELECT * FROM coupons`,
                (err, result) => {
                    if (result.length) {
                        return res.status(200).send({
                            coupons: { result }
                        });
                    } else {
                        return res.status(404).send({
                            msg: 'No coupon is found!'
                        });
                    }

                });
        } catch (err) {
            return res.status(401).send({
                Error: err
            })
        }
    },

}