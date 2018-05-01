let path = require('path');
let rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: '',
        rootPath: rootPath,
        port: process.env.PORT || 3000
    },
    production: {
        rootPath: rootPath,
        db: '*production DB URL here*',
        port: process.env.PORT || 8143
    }
}