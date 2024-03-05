const mongoose = require('mongoose');

const {connection, connect} = require('mongoose');

connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/programming-thoughts');

module.exports = connection;
