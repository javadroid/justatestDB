require('dotenv').config();
const bcrypt = require('bcryptjs');
const mailgun = require("mailgun-js");
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.DOMAIN })
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const db = require('../lib/db.js');
const axios = require('axios');

// fetching user avialable balance
module.exports = {
    getUserBalance: (req, res, next) => {
        try {
            const token = req.query.token;
            // console.log(user_apikey);
            db.query(
                `SELECT * FROM users WHERE apikey='${token}'`,
                async(err, result) => {
                    // if query error
                    if (err) {
                        // throw err;
                        console.log(err)
                        return res.status(404).send({
                            "success": "false",
                            "error_code": "wrong_token",
                            "error_msg": "wrong token"
                        });
                    }
                    const found = await result.length;
                    if (!found) {
                        console.log(result, token, found)
                        return res.status(404).send({
                            "success": "false",
                            "error_code": "wrong_token",
                            "error_msg": "wrong token"
                        });
                    } else if (found) {
                        userid = await result[0].id;
                        console.log({ userId: userid, found });
                        db.query(
                            `SELECT * FROM wallets WHERE user_id='${userid}'`,
                            (err, resul) => {
                                // if query error
                                if (err) {
                                    // throw err;
                                    return res.status(400).send({
                                        msg: err
                                    });
                                }
                                console.log({ resulr: resul });
                                // if not found
                                if (!resul.length) {
                                    return res.status(404).send({
                                        "success": "false",
                                        "error_code": "wrong_token",
                                        "error_msg": "wrong token"
                                    });
                                }
                                return res.status(200).send({
                                    "balance": resul[0].balance
                                });
                            }
                        );
                    }
                }
            );
        } catch (err) {
            console.log(err)
        }
    },
    totalNumbers: async(req, res, next) => {
        try {
            const token = req.query.token;
            var country_id;
            var application_id;
            var url;
            if (!token) {
                return res.status(404).send({
                    "success": false,
                    "error_code": "wrong_token",
                    "error_msg": { "token": "wrong token" }
                });
            }
            if (req.query.country_id && req.query.application_id) {
                country_id = req.query.country_id;
                application_id = req.query.application_id;
                url = `http://207.154.223.33:7014/gateway/routeXapi/backend/xapi/Wws/Numbers/list?page=1&page-chunk=24&country_id=${country_id}&type_id=2&application_id=${application_id}`;

            } else {
                url = `http://207.154.223.33:7014/gateway/routeXapi/backend/xapi/Wws/Numbers/list`;

            }
            db.query(
                `SELECT * FROM users WHERE apikey='${token}'`,
                async(err, result) => {
                    // if query error
                    if (err) {
                        // throw err;
                        console.log(err)
                        return res.status(404).send({
                            "success": false,
                            "error_code": "wrong_token",
                            "error_msg": { "token": "wrong token" }
                        });
                    }
                    const found = await result.length;
                    if (!found) {
                        console.log(result, token, found)
                        return res.status(404).send({
                            "success": false,
                            "error_code": "wrong_token",
                            "error_msg": { "token": "wrong token" }
                        });
                    } else if (found) {
                        const response = await axios({
                            url: url,
                            method: 'get'
                        });
                        return res.status(200).send({ response });
                    }
                }
            );


        } catch (err) {
            return res.status(401).send({
                Error: err
            })
        }
    },
    requestNumber: async(req, res, next) => {
        try {
            const { token } = req.query.token;
            var country_id;
            var application_id;
            if (!token) {
                return res.status(404).send({
                    "success": false,
                    "error_code": "wrong_token",
                    "error_msg": { "token": "wrong token" }
                });
            }
            if (req.query.country_id && req.query.application_id) {
                country_id = req.query.country_id;
                application_id = req.query.application_id;
            } else {
                country_id = 1;
                application_id = 1;
            }
            const url = `http://207.154.223.33:7014/gateway/routeXapi/backend/xapi/Wws/Numbers/available?country_id=${country_id}&application_id=${application_id}&type_id=1`;
            const response = await axios({
                url: url,
                method: 'get'
            });

            var number;
            if (response.data.hasOwnProperty("number")) {
                number = response.data.number;
                console.log("Reponse: " + number);
                db.query(
                    `SELECT * FROM users WHERE apikey='${token}'`,
                    async(err, result) => {
                        // if query error
                        if (err) {
                            // throw err;
                            console.log(err)
                            return res.status(404).send({
                                "success": false,
                                "error_code": "wrong_token",
                                "error_msg": { "token": "wrong token" }
                            });
                        }
                        const found = await result.length;
                        if (!found) {
                            console.log(result, token, found)
                            return res.status(404).send({
                                "success": false,
                                "error_code": "wrong_token",
                                "error_msg": { "token": "wrong token" }
                            });
                        } else if (found) {
                            userid = await result[0].id;
                            console.log({ userId: userid, found });
                            db.query(
                                `SELECT * FROM wallets WHERE user_id='${userid}'`,
                                async(err, resul) => {
                                    // if query error
                                    if (err) {
                                        // throw err;
                                        return res.status(400).send({
                                            "success": false,
                                            "error_code": "wrong_token",
                                            "error_msg": { "token": "wrong token" }
                                        });
                                    }
                                    console.log({ Results: resul });
                                    // if not found
                                    if (!resul.length) {
                                        return res.status(404).send({
                                            "success": false,
                                            "error_code": "wrong_token",
                                            "error_msg": { "token": "wrong token" }
                                        });
                                    }
                                    const amount = 2.05;
                                    // const duration = "1 month"
                                    let bal = await result[0].balance;
                                    console.log(result);
                                    console.log(bal);
                                    let r = parseFloat(bal);
                                    let k = parseFloat(amount);
                                    const new_bal = r - k;
                                    if (k >= r) {
                                        return res.status(401).send({
                                            msg: 'Low balance, please topup your wallet.'
                                        });
                                    } else {
                                        let rentId = Math.floor(Math.random() * 10053423) + 83;
                                        let message = 'null';
                                        db.query(
                                            `INSERT INTO rents (rentId, userid, rented_number, duration,  amount,  country, rented_date, message) VALUES ('${rentId}', '${userid}', '${number}', '${application_id}', '${amount}', '${country_id}', now(), '${message}')`,
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
                                                                Result: {
                                                                    "request_id": rentId,
                                                                    "country_id": 1,
                                                                    "application_id": 1,
                                                                    "number": number
                                                                }
                                                            });
                                                        }
                                                    );
                                                } else {
                                                    return res.status(404).send({
                                                        "success": false,
                                                        "error_code": "wrong_token",
                                                        "error_msg": { "token": "wrong token" }
                                                    });
                                                }

                                            }
                                        );
                                    }
                                }
                            );
                        }
                    }
                );
            } else {
                return res.status(500).send({
                    "success": false,
                    "error_code": "wrong_token",
                    "error_msg": { "token": "wrong token" }
                })
            }


        } catch (err) {
            return res.status(401).send({
                Error: err
            })
        }
    },
    getSMS: async(req, res, next) => {
        try {
            const { token, request_id } = req.query;
            if (!token) {
                return res.status(404).send({
                    "success": false,
                    "error_code": "wrong_token",
                    "error_msg": { "token": "wrong token" }
                });
            }
            if (!request_id) {
                return res.status(404).send({
                    "success": false,
                    "error_code": "wrong_request_id",
                    "error_msg": { "request_id": "request_id is required." }
                });
            }
            db.query(
                `SELECT * FROM users WHERE apikey='${token}'`,
                async(err, result) => {
                    // if query error
                    if (err) {
                        // throw err;
                        console.log(err)
                        return res.status(404).send({
                            "success": "false",
                            "error_code": "wrong_token",
                            "error_msg": "wrong token"
                        });
                    }
                    const found = await result.length;
                    if (!found) {
                        console.log(result, token, found)
                        return res.status(404).send({
                            "success": "false",
                            "error_code": "wrong_token",
                            "error_msg": "wrong token"
                        });
                    } else if (found) {
                        db.query(
                            `SELECT * FROM rents WHERE rentId='${request_id}'`,
                            (err, resul) => {
                                // if query error
                                if (err) {
                                    // throw err;
                                    return res.status(400).send({
                                        msg: err
                                    });
                                }
                                console.log({ resulr: resul });
                                // if not found
                                if (!resul.length) {
                                    return res.status(404).send({
                                        "request_id": request_id,
                                        "error_code": "wrong_request_id",
                                        "error_msg": "wrong request_id"
                                    });
                                }
                                if (resul[0].message == "null") {
                                    return res.status(209).send({
                                        "request_id": resul[0].rentId,
                                        "country_id": resul[0].country,
                                        "application_id": resul[0].duration,
                                        "number": resul[0].rented_number,
                                        "error_code": '=>' + '"wait_sms"',
                                        "error_msg": '=>' + '"still waiting..."'
                                    });
                                }
                                return res.status(200).send({
                                    "request_id": resul[0].rentId,
                                    "country_id": resul[0].country,
                                    "application_id": resul[0].duration,
                                    "number": resul[0].rented_number,
                                    "sms_code": "=> " + resul[0].message
                                });
                            }
                        );
                    }
                }
            );
        } catch (error) {
            console.log(erroe);
            return res.status(500)
        }
    },
    getStatus: async(req, res, next) => {
        try {
            const { token, request_id, status } = req.query;
            if (status != "ready" || status != "close" || status != "reject" || status != "used") {
                return res.status(404).send({
                    "success": false,
                    "error_code": "wrong_status",
                    "error_msg": `Status ${status} does not exists`
                })
            }
            if (!token) {
                return res.status(404).send({
                    "success": false,
                    "error_code": "wrong_token",
                    "error_msg": { "token": "wrong token" }
                });
            }
            if (!request_id) {
                return res.status(404).send({
                    "success": false,
                    "error_code": "wrong_request_id",
                    "error_msg": { "request_id": "request_id is required." }
                });
            }
            db.query(
                `SELECT * FROM users WHERE apikey='${token}'`,
                async(err, result) => {
                    // if query error
                    if (err) {
                        // throw err;
                        console.log(err)
                        return res.status(404).send({
                            "success": "false",
                            "error_code": "wrong_token",
                            "error_msg": "wrong token"
                        });
                    }
                    const found = await result.length;
                    if (!found) {
                        console.log(result, token, found)
                        return res.status(404).send({
                            "success": "false",
                            "error_code": "wrong_token",
                            "error_msg": "wrong token"
                        });
                    } else if (found) {
                        db.query(
                            `UPDATE rents sSET status='${status}' WHERE rentId='${request_id}'`,
                            (err, resul) => {
                                // if query error
                                if (err) {
                                    // throw err;
                                    return res.status(400).send({
                                        msg: err
                                    });
                                }
                                console.log({ resulr: resul });
                                // if not found
                                if (!resul.length) {
                                    return res.status(404).send({
                                        "request_id": request_id,
                                        "error_code": "wrong_request_id",
                                        "error_msg": "wrong request_id"
                                    });
                                }

                                return res.status(200).send({ "request_id": request_id, "success": true });
                            }
                        );
                    }
                }
            );
        } catch (error) {
            console.log(erroe);
            return res.status(500)
        }
    },
    getPrices: async(req, res, next) => {
        try {
            const { token, country_id } = req.query;
            if (!token) {
                return res.status(404).send({
                    "success": false,
                    "error_code": "wrong_token",
                    "error_msg": { "token": "wrong token" }
                });
            }
            db.query(
                `SELECT * FROM users WHERE apikey='${token}'`,
                async(err, result) => {
                    // if query error
                    if (err) {
                        // throw err;
                        console.log(err)
                        return res.status(404).send({
                            "success": false,
                            "error_code": "wrong_token",
                            "error_msg": { "token": "wrong token" }
                        });
                    }
                    const found = await result.length;
                    if (!found) {
                        console.log(result, token, found)
                        return res.status(404).send({
                            "success": false,
                            "error_code": "wrong_token",
                            "error_msg": { "token": "wrong token" }
                        });
                    } else if (found && country_id) {
                        db.query(
                            `SELECT * FROM countries WHERE country_id='${country_id}'`,
                            async(err, resul) => {
                                // if query error
                                if (err) {
                                    // throw err;
                                    return res.status(400).send({
                                        "success": false,
                                        "error_code": "wrong_token",
                                        "error_msg": { "token": "wrong token" }
                                    });
                                }
                                console.log({ Results: resul });
                                // if not found
                                if (!resul.length) {
                                    return res.status(404).send({
                                        "success": false,
                                        "error_code": "wrong_token",
                                        "error_msg": { "token": "wrong token" }
                                    });
                                }
                                const f = await resul.length;
                                if (f) {
                                    let getCountry = resul[0].country_name
                                    db.query(
                                        `SELECT * FROM rent_cal WHERE country='${getCountry}'`,
                                        async(err, resu) => {
                                            // if query error
                                            if (err) {
                                                // throw err;
                                                return res.status(400).send({
                                                    "success": false,
                                                    "error_code": "wrong_token",
                                                    "error_msg": { "token": "wrong token" }
                                                });
                                            }
                                            console.log({ Results: resul });
                                            // if not found
                                            if (!resu.length) {
                                                return res.status(404).send({
                                                    "success": false,
                                                    "error_code": "wrong_token",
                                                    "error_msg": { "token": "wrong token" }
                                                });
                                            }
                                            const fd = await resu.length;
                                            if (fd) {
                                                const amt = fd[0].amount
                                                res.status(200).send({
                                                    "0": { amt }
                                                })

                                            } else {
                                                return res.status(404).send({
                                                    "success": false,
                                                    "error_code": "wrong_token",
                                                    "error_msg": { "token": "wrong token" }
                                                });
                                            }


                                        }
                                    );

                                } else {
                                    return res.status(404).send({
                                        "success": false,
                                        "error_code": "wrong_token",
                                        "error_msg": { "token": "wrong token" }
                                    });
                                }
                            }
                        );
                    } else if (found && !country_id) {
                        db.query(
                            `SELECT amount FROM rent_cal`,
                            async(err, resu) => {
                                // if query error
                                if (err) {
                                    // throw err;
                                    return res.status(400).send({
                                        "success": false,
                                        "error_code": "wrong_token",
                                        "error_msg": { "token": "wrong token" }
                                    });
                                }
                                // if  found
                                if (resu.length >= 1) {
                                    return res.status(200).send({
                                        resu
                                    });

                                } else {
                                    return res.status(404).send({
                                        "success": false,
                                        "error_code": "wrong_token",
                                        "error_msg": { "token": "wrong token" }
                                    });
                                }


                            }
                        );

                    } else {
                        return res.status(404).send({
                            "success": false,
                            "error_code": "wrong_token",
                            "error_msg": { "token": "wrong token" }
                        });
                    }
                }
            );
        } catch (err) {
            console.log(err)

        }

    },
    getCountries: async(req, res, next) => {
        try {
            const { token } = req.query;
            if (!token) {
                return res.status(404).send({
                    "success": false,
                    "error_code": "wrong_token",
                    "error_msg": { "token": "wrong token" }
                });
            }
            db.query(
                `SELECT * FROM users WHERE apikey='${token}'`,
                async(err, result) => {
                    // if query error
                    if (err) {
                        // throw err;
                        console.log(err)
                        return res.status(404).send({
                            "success": false,
                            "error_code": "wrong_token",
                            "error_msg": { "token": "wrong token" }
                        });
                    }
                    const found = await result.length;
                    if (!found) {
                        console.log(result, token, found)
                        return res.status(404).send({
                            "success": false,
                            "error_code": "wrong_token",
                            "error_msg": { "token": "wrong token" }
                        });
                    } else if (found) {
                        db.query(
                            `SELECT country_id, country_name FROM countries`,
                            async(err, resul) => {
                                // if query error
                                if (err) {
                                    // throw err;
                                    return res.status(400).send({
                                        "success": false,
                                        "error_code": "wrong_token",
                                        "error_msg": { "token": "wrong token" }
                                    });
                                }
                                console.log({ Results: resul });
                                // if not found
                                if (resul.length) {
                                    return res.status(200).send({
                                        resul
                                    });
                                } else {
                                    return res.status(404).send({
                                        "success": false,
                                        "error_code": "wrong_token",
                                        "error_msg": { "token": "wrong token" }
                                    });
                                }
                            }
                        );
                    }
                }
            );
        } catch (err) {
            console.log(err)

        }
    },
    getServices: async(req, res, next) => {
        try {
            const { token } = req.query;
            if (!token) {
                return res.status(404).send({
                    "success": false,
                    "error_code": "wrong_token",
                    "error_msg": { "token": "wrong token" }
                });
            }
            db.query(
                `SELECT * FROM users WHERE apikey='${token}'`,
                async(err, result) => {
                    // if query error
                    if (err) {
                        // throw err;
                        console.log(err)
                        return res.status(404).send({
                            "success": false,
                            "error_code": "wrong_token",
                            "error_msg": { "token": "wrong token" }
                        });
                    }
                    const found = await result.length;
                    if (!found) {
                        console.log(result, token, found)
                        return res.status(404).send({
                            "success": false,
                            "error_code": "wrong_token",
                            "error_msg": { "token": "wrong token" }
                        });
                    } else if (found) {
                        db.query(
                            `SELECT application_id, app_name* FROM applications`,
                            async(err, resul) => {
                                // if query error
                                if (err) {
                                    // throw err;
                                    return res.status(400).send({
                                        "success": false,
                                        "error_code": "wrong_token",
                                        "error_msg": { "token": "wrong token" }
                                    });
                                }
                                console.log({ Results: resul });
                                // if not found
                                if (resul.length) {
                                    return res.status(200).send({
                                        resul
                                    });
                                } else {
                                    return res.status(404).send({
                                        "success": false,
                                        "error_code": "wrong_token",
                                        "error_msg": { "token": "wrong token" }
                                    });
                                }
                            }
                        );
                    }
                }
            );
        } catch (err) {
            console.log(err)

        }
    },
}