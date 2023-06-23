const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const coinbase = require('coinbase-commerce-node');
// Coinbase setup
const Client = coinbase.Client;
Client.init(process.env.COINBASE_API_KEY);
const Charge = coinbase.resources.Charge;
const webhook = coinbase.Webhook

const stripeTopup = async(req, res) => {
    const user = req.params.userId;
    const amount = req.body.amount;
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [{
            price_data: {
                currency: "usd",
                product_data: {
                    name: "Account Refill - Diginums",
                },
                unit_amount: amount * 100,
            },
            quantity: 1,
        }, ],
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}/success`,
        cancel_url: `${process.env.CLIENT_URL}/user/payment`,
    });
    res.json({ url: session.url });
}
const coinbaseTopup = async(req, res, next) => {
    try {
        userId = req.params.userId;
        amount = req.body.amount;
        let chargeData = {
            name: "Diginums",
            description: "Toppup Balance",
            local_price: {
                amount: amount,
                currency: 'USD'
            },
            pricing_type: 'fixed_price',
            metadata: {
                user_id: userId
            },
        }
        Charge.create(chargeData, (err, response) => {
            if (err) {
                res.status(400).send({ message: err.message });
            } else {
                console.log(response);
                res.status(200).send(response);

                // to check if payment was successful
                let id = response['id'];
                Charge.retrieve(id, (err, charge) => {
                    if (charge['timeline'][0]['status'] == 'NEW') {
                        try {
                            if (charge['timeline'][1]['status'] == 'PEDNING' && charge['timeline'].length == 2) {
                                return res.status(200).send({ message: 'Payment pending, awaiting confirmations.' });
                            } else if (charge['timeline'][1]['status'] == 'EXPIRED') {
                                return res.status(400).send({ message: 'Payment expired' });
                            } else if (charge['timeline'][2]['status'] == 'COMPLETED') {
                                return res.status(200).send({ message: 'Payment completed.' });
                            }
                        } catch (err) {
                            return res.status(200).send({ message: 'No payment detected' });
                        }
                    } else {
                        return res.status(400).send({ message: 'Charge not found.' });
                    }
                });
            }
        });
    } catch (error) {
        console.error(error)
    }
}

// Second demonstration for coinbase payment
const coinbaseTopup2 = async(req, res, next) => {
    try {
        userId = req.params.userId;
        amount = req.body.amount;
        let chargeData = {
            name: "Diginums",
            description: "Toppup Balance",
            local_price: {
                amount: amount,
                currency: 'USD'
            },
            pricing_type: 'fixed_price',
            metadata: {
                user_id: userId
            },
        }
        feedback = await Charge.create(chargeData);
        console.log(feeback.hosted_url);
        return res.status(200).send({ charge: feedback });
    } catch (error) {
        console.log(error)
    }

}


// Confirming coinbase payement with webhook
const confirmCoinbasePayment = async(req, res) => {
    try {
        const event = webhook.verifyEventBody(
            req.rawBody,
            req.headers['x-cc-webhook-signature'],
            process.env.COINBASE_WEBHOOK_SECRET
        )
        console.log(event);
        if (event.type == "charge:confirmed") {
            const amount = event.data.pricing.local.amount;
            const userId = event.data.metadata.user_id;
        }

    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    stripeTopup,
    coinbaseTopup,
}