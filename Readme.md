# Number Words

Turn any number into a formatted word string, and turn it back again!

## Installation

```
npm install number-words --save
```

## API

```javascript
var numbers = require('number-words');
```

* `numbers(number|word)`
* `numbers.stringify(number)`
* `numbers.numberify(word)`

```javascript
numbers(20) // twenty
numbers(150) // one hundred and fifty
numbers(1620) // one thousand, six hundred and twenty
numbers(3726473223) // three billion, seven hundred and twenty-six million, four hundred and seventy-three thousand, two hundred and twenty-three

numbers(0.5) // zero point five
numbers(0.7345) // zero point seven three four five
numbers(8364.3243) // eight thousand, three hundred and sixty-four point three two four three

numbers('fifty six') // 56
numbers('nine hundred and twenty two') // 922
numbers('three hundred and fifty thousand') // 350000
numbers('six billion and ninety million and three') // 6090000003

numbers('point six six') // 0.66
numbers('zero point two one nine') // 0.219
numbers('five point five') // 5.5
```

## License

MIT
