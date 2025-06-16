const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: localhost,
    user: root,
    password: LoicaDominique123,
    database: vibin_db
});

db.connect(err => {
    if (err) throw err;
    console.log("✅ MySQL connecté !");
});

module.exports = db;
