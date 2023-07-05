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

}