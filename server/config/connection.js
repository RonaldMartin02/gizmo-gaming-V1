const mongoose = require('mongoose');

import {connection, connect} from 'mongoose';

connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/programming-thoughts');

export default connection;
