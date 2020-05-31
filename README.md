# round-to-decimal
A small javascript library to round a number to dynamic decimal points

This is to overcome a case in javascript toFixed() method which always have decimal points even if number is rounded off with no decimal point. e.g. ```2.toFixed(2) => 2.00```

This lib. will give decimal points if necessary.

# installation
```npm i --save round-to-decimal```

# Usage
```const toDecimals = require('round-to-decimal');```

                     OR

```import toDecimals from 'round-to-decimal';```


```const num = toDecimals(1.00, 2); // output -> 1```

```const num = toDecimals(2.45678, 2); // output -> 2.46```

```const num = toDecimals(1.13412, 3); // output -> 1.134```

# About
toDecimals function takes two arguments. ```toDecimals(value, decimalPoint)```
