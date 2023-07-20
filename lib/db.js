let dbCred
if (process.platform === "linux") {
    dbCred = {
        host: 'localhost',
        user: 'tdnt',
        database: 'newsems_backend',
        password: 'tdnt_0001',
        socketPath: '/var/run/mysqld/mysqld.sock'
    }
} else {
    dbCred = {
        host: 'localhost',
        user: 'root',
        database: 'newsems_backend',
        password: '2580'
    }
}

const mysql = require('mysql');
const connection = mysql.createConnection(dbCred);
connection.connect();
module.exports = connection;