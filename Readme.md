# Numbered

Turn any number into a formatted word string, and turn it back again.

## Installation

```
npm install numbered --save
```

## API

```javascript
var numbered = require('numbered');
```

* [numbered( number|string )](#function)
* [numbered.parse( string )](#parse)
* [numbered.stringify( number )](#stringify)

### Function

Number Words exposes a single function that accepts either a string or a number. The string will delegate to the `parse` method and a number will delegate to the `stringify` method.

### Parse

Parses a string into a number as best as possible.

```
numbered.parse('ninety nine');
=> 99

numbered.parse('point two five nine');
=> 0.259
```

### Stringify

Stringifies a number to the word equivalent.

```
numbered.stringify(99);
=> "ninety nine"

numbered.stringify(0.259);
=> "zero point two five nine"
```

## License

MIT
