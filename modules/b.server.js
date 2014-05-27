var c = require('./server_stuff/c');

module.exports = function () {
    console.log('this is module b on the server side and I have server side dependencies:'+c.name);
};
