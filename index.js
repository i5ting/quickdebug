
module.exports = function quickdebug(name) {
    var key = name ? name : require('get_closest_package_json').name

    return debug = require("colondebug")(key);
}
