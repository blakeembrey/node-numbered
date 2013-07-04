# Number Words

Turn any number into a formatted word string, and turn it back again.

## Installation

```
npm install number-words --save
```

## API

```javascript
var numbers = require('number-words');
```

* [numbers( number|string )](#function)
* [numbers.parse( string )](#parse)
* [numbers.stringify( number )](#stringify)

### Function

Number Words exposes a single function that accepts either a string or a number. The string will delegate to the `parse` method and a number will delegate to the `stringify` method.

### Parse

Parses a string into a number as best as possible.

```
numbers.parse('ninety nine');
=> 99

numbers.parse('point two five nine');
=> 0.259
```

### Stringify

Stringifies a number to the word equivalent.

```
numbers.stringify(99);
=> "ninety nine"

numbers.stringify(0.259);
=> "zero point two five nine"
```

## License

MIT
