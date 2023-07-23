const { connect, connection } = require('mongoose');

const connectionString = 'mongodb://localhost:27017/social-network-API';

connect(connectionString);

module.exports = connection;
