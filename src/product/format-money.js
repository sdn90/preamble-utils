/**
 * Simple money formatting. Returns a string representation of
 * a number with a decimal added.
 * @param  {string} money
 * @param  {string} prefix
 * @return {string}
 */
export default function formatMoney(money, prefix = '$') {
  const moneyWithDecimals = (money / 100).toFixed(2);
  return prefix + moneyWithDecimals;
}
