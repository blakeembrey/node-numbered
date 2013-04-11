var numbers = {
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
  40: 'fourty',
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
// helpers[21]  = 'sextillion';
// helpers[24]  = 'septillion';
// helpers[27]  = 'octillion';
// helpers[30]  = 'nonillion';
// helpers[33]  = 'decillion';
// helpers[36]  = 'undecillion';
// helpers[39]  = 'duodecillion';
// helpers[42]  = 'tredecillion';
// helpers[45]  = 'quattuordecillion';
// helpers[48]  = 'quindecillion';
// helpers[51]  = 'sexdecillion';
// helpers[54]  = 'septendecillion';
// helpers[57]  = 'octodecillion';
// helpers[60]  = 'novemdecillion';
// helpers[63]  = 'vigintillion';
// helpers[100] = 'googol';
// helpers[303] = 'centillion';

var intervals = function (num) {
  return Math.floor(Math.log(Math.abs(num + 1)) / Math.log(10));
};

var numberWords = module.exports = function (num) {
  if (typeof +num === 'number') {
    return numberWords.stringify(+num);
  }
  // Word to number conversion will be coming next..
  // return numberWords.numberify(num);
};

numberWords.stringify = function (num) {
  // Numbers are super buggy in JS over 10^20
  if (typeof num !== 'number' || num > Math.pow(10, 20)) { return false; }
  num = '' + num;

  // If the number is already available, return it now
  if (numbers[num]) { return numbers[num]; }

  var interval   = intervals(+num),
      smallerNum = +num.slice(interval * -1);
  // It's an interval of our huge numbers, try coersion
  if (helpers[interval]) {
    return numberWords.stringify(+num.slice(0, interval * -1)) + ' ' +
           helpers[interval] + (smallerNum ? (smallerNum < 100 ? ' and ' : ', ') +
           numberWords.stringify(smallerNum) : '');
  }
  // It's below one hundred, but greater than nine
  if (interval === 1) {
    return numberWords.stringify(Math.floor(+num / 10) * 10) + '-' + numberWords.stringify(+num.slice(1));
  }

  interval = intervals(+num / 10);
  if (helpers[interval]) {
    smallerNum = +num.slice(2);
    return numberWords.stringify(+num.slice(0, 2)) + ' ' + helpers[interval] +
           (smallerNum ? (smallerNum < 100 ? ' and ' : ', ') + numberWords.stringify(smallerNum) : '');
  }

  interval   = intervals(+num / 100);
  smallerNum = +num.slice(3);
  return numberWords.stringify(+num.slice(0, 3)) + ' ' + helpers[interval] +
         (smallerNum ? (smallerNum < 100 ? ' and ' : ', ') + numberWords.stringify(smallerNum) : '');

  // var contNum = +num.slice(-3);
  // return numberWords.stringify(+num / 1000) + ' ' +
  //        helpers[interval - 3] + (contNum ? ', ' + numberWords.stringify(contNum) : '');
};
