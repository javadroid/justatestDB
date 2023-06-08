const stripe = require(stripe)(process.env.STRIPE_SECRET_KEY);
const coinbase = require('coinbase-commerce-node');
// Coinbase setup
const Client = coinbase.Client;
Client.init(process.env.API_KEY);
const Charge = coinbase.resources.Charge;

const stripeTopup = async(req, res) => {
    const { product } = req.body;
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [{
            price_data: {
                currency: "inr",
                product_data: {
                    name: product.name,
                },
                unit_amount: product.price * 100,
            },
            quantity: product.quantity,
        }, ],
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
    });
    res.json({ id: session.id });
}
const coinbaseTopup = async(req, res, next) => {

    let chargeData = {
        name: req.body.name,
        description: req.body.decription,
        local_price: {
            amount: req.body.amount,
            currency: 'USD'
        },
        pricing_type: 'fixed_price'
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
}
module.export = {
    stripeTopup,
    coinbaseTopup,
}