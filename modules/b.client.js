var c = require('./client_stuff/c');

module.exports = function () {
    console.log('this is module b on the client side and I have client side dependencies:'+c.name);
};
