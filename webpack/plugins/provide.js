var webpack = require('webpack');

module.exports = new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery",
    "window.Tether": "tether"
});
