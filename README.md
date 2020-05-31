# round-to-decimal
A small javascript library to round a number to dynamic decimal points

This is to overcome a corner case in javascript toFixed() method which always have decimal points even if number is rounded off with no decimal point. e.g. 2.toFixed(2) => 2.00

# Usage

const toDecimals = require('./index.js');

const num = toDecimals(1.00, 2)); // num is 1

# About
toDecimals function takes two arguments -> toDecimals(number, decimalPoint)
