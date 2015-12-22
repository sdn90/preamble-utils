export default function formatMoney(money) {
    return '$' + (money / 100).toFixed(2);
}
