/**
 * Simple money formatting. Returns a string representation of
 * a number with a decimal added.
 * @param  {string} money
 * @param  {string} prefix
 * @return {string}
 */
function formatMoney(money, prefix) {
  var defaultedPrefix = prefix || "$";

  var moneyWithDecimals = (money / 100).toFixed(2);
  return defaultedPrefix + moneyWithDecimals;
}

module.exports = formatMoney;
