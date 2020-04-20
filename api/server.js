const express = require('express');

const session = require('express-session');

const server = express();

server.use('/api/users');

module.exports = server;