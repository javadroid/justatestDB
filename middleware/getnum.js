const https = require('https');
const getRentingNumber = async() => {
    https.get('http://207.154.223.33:7014/gateway/routeXapi/backend/xapi/Wws/Numbers/available?country_id=1&application_id=1&type_id=1', (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
            console.log("Data: " + data)
        });
        response.on('end', () => {
            let number = JSON.parse(data);
            console.log("Number: " + number)
            return number;
        })

    }).on('error', (err) => {
        console.log("Error: " + err)
        return res.status(502).send({
            msg: err.message
        })
    })
};
module.exports = {
    getRentingNumber
}