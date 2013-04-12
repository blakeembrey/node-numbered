var numbers = {
  '.': 'decimal',
  '-': 'negative',
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
};

// http://en.wikipedia.org/wiki/English_numerals#Cardinal_numbers
var helpers = {};
// Store the helpers in the power of tens
helpers[2]   = 'hundred';
helpers[3]   = 'thousand';
helpers[6]   = 'million';
helpers[9]   = 'billion';
helpers[12]  = 'trillion';
helpers[15]  = 'quadrillion';
helpers[18]  = 'quintillion';
helpers[21]  = 'sextillion';
helpers[24]  = 'septillion';
helpers[27]  = 'octillion';
helpers[30]  = 'nonillion';
helpers[33]  = 'decillion';
helpers[36]  = 'undecillion';
helpers[39]  = 'duodecillion';
helpers[42]  = 'tredecillion';
helpers[45]  = 'quattuordecillion';
helpers[48]  = 'quindecillion';
helpers[51]  = 'sexdecillion';
helpers[54]  = 'septendecillion';
helpers[57]  = 'octodecillion';
helpers[60]  = 'novemdecillion';
helpers[63]  = 'vigintillion';
helpers[100] = 'googol';
helpers[303] = 'centillion';

// Make a hash of the numbers and helper numbers reversed
// E.g. The key as the word and value as the number
var numbersMap = {};

Object.keys(numbers).forEach(function (num) {
  numbersMap[numbers[num]] = +num;
});

Object.keys(helpers).forEach(function (num) {
  numbersMap[helpers[num]] = Math.pow(10, +num);
});

var intervals = function (num) {
  var match;
  if ((match = ('' + num).match(/e\+(\d+)/))) {
    return match[1];
  }

  return ('' + num).length - 1;
};

var numberWords = module.exports = function (num) {
  if (typeof num === 'number') {
    return numberWords.stringify(num);
  }
  if (typeof num === 'string') {
    return numberWords.numberify(num);
  }
  throw new Error('Number words can handle handle numbers and/or strings');
};

numberWords.stringify = function (num) {
  var word = [],
      interval,
      remaining;

  // Numbers are super buggy in JS over 10^20
  if (typeof num !== 'number') { return false; }
  // If the number is in the numbers object, we can quickly return
  if (numbers[num]) { return numbers[num]; }
  // If the number is a negative value
  if (num < 0) {
    return numbers['-'] + ' ' + numberWords.stringify(num * -1);
  }
  // Handle decimal numbers
  if (num % 1) {
    word.push(numberWords.stringify(Math.floor(num)));
    word.push(numbers['.']);
    // Have to slice the number and tranform back to number because of floating
    // point issues with the modulus operator
    num = +('' + num).slice(('' + Math.floor(num)).length);
    while (num < 0.1) {
      word.push(numberWords.stringify(0));
      num = num * 10;
    }
    word.push(numberWords.stringify(+('' + num).slice(2)));
    return word.join(' ');
  }

  interval = intervals(num);

  // It's below one hundred, but greater than nine
  if (interval === 1) {
    word.push(numbers[Math.floor(num / 10) * 10] + '-' + numberWords.stringify(Math.floor(num % 10)));
  }

  if (interval > 3) {
    while (!helpers[interval]) {
      interval -= 1;
    }
  }

  if (helpers[interval]) {
    remaining = Math.floor(num % Math.pow(10, interval));
    word.push(numberWords.stringify(Math.floor(num / Math.pow(10, interval))));
    word.push(helpers[interval] + (remaining > 99 ? ',' : ''));
    if (remaining) {
      if (remaining < 100) { word.push('and'); }
      word.push(numberWords.stringify(remaining));
    }
  }

  return word.join(' ');
};

numberWords.numberify = function (num) {
  if (typeof num !== 'string') { return false; }

  var modifier = 1,
      largest  = 0,
      stack    = [];

  var calcStack = function () {
    return stack.reduceRight(function (memo, num, index, array) {
      if (num > array[index + 1]) {
        return memo * num;
      }
      return memo + num;
    }, 0) * largest;
  };

  var test = num.split(/\W+/g).map(function (num) {
    return numbersMap[num] || num;
  }).filter(function (num) {
    if (num === 'negative') {
      modifier *= -1;
    }
    return isFinite(num); // Remove numbers we don't understand
  }).reduceRight(function (memo, num) {
    console.log(num);
    if (num < largest) {
      stack.push(num);
      if (stack.length === 1) { memo = memo - largest; }
      return memo;
    }
    var plus = calcStack();
    stack    = []; // Reset the stack for new numbers
    largest  = num;
    return memo + num + plus;
  }, 0);

  return modifier * (test + calcStack());
};
