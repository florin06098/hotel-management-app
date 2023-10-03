const { Client } = require('pg');

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "florin",
    database: "hotel-management"
});

module.exports = client;

