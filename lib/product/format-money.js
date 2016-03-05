'use strict';

exports.__esModule = true;
exports['default'] = formatMoney;

function formatMoney(money) {
    return '$' + (money / 100).toFixed(2);
}

module.exports = exports['default'];