
/**
 * Takes two parameters and returns transformed decimal rounded off value.
 * arguments: (value, decimalPoints).
 * @since 1.0.0
 * @param {number} number - An actual number.
 * @param {number} decimals - Expected decimal point value.
 * @returns {number} Returns the mentioned decimal rounded off value.
 * @example
 *
 * var num = 2.123;
 * var x = toDecimals(num, 2)
 * // => x -> 2.12
 *
 */
function toDecimals(number, decimals) {
  return Math.round((number + Number.EPSILON) * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

module.exports = toDecimals;
