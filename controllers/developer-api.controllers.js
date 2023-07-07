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
            const { token, country_id, application_id } = req.query;
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
                            "error_msg": { "token": "wrong token" }
                        });
                    }
                    const found = await result.length;
                    if (!found) {
                        console.log(result, token, found)
                        return res.status(404).send({
                            "success": "false",
                            "error_code": "wrong_token",
                            "error_msg": { "token": "wrong token" }
                        });
                    } else if (found) {
                        var url;
                        if (country_id && application_id) {
                            url = ''
                        } else {
                            url = 'http://207.154.223.33:7014/gateway/routeXapi/backend/xapi/Wws/Numbers/available?country_id=1&application_id=1&type_id=1';
                        }
                        const response = await axios({
                            url: url,
                            method: 'get'
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
    requestNumber: async(req, res, next) => {
        try {
            const { token, country_id, application_id, ref } = req.query;
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
            if (!token) { return res.status(403).send({ msg: 'User API Key must be pass as a token!' }); }
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
                    let r = await parseFloat(bal);
                    let k = await parseFloat(amount);
                    const new_bal = r - k;
                    console.log(new_bal);
                    if (k >= r) {
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
    },


}