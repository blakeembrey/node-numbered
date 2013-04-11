/*global describe,it*/
var assert  = require('assert'),
    numbers = require('./');

describe('number words', function () {
  it('should turn numbers into words', function () {
    assert.equal(numbers(0), 'zero');
    assert.equal(numbers(1), 'one');
    assert.equal(numbers(2), 'two');
    assert.equal(numbers(3), 'three');
    assert.equal(numbers(4), 'four');
    assert.equal(numbers(5), 'five');
    assert.equal(numbers(6), 'six');
    assert.equal(numbers(7), 'seven');
    assert.equal(numbers(8), 'eight');
    assert.equal(numbers(9), 'nine');
    assert.equal(numbers(10), 'ten');
    assert.equal(numbers(11), 'eleven');
    assert.equal(numbers(12), 'twelve');
    assert.equal(numbers(13), 'thirteen');
    assert.equal(numbers(14), 'fourteen');
    assert.equal(numbers(15), 'fifteen');
    assert.equal(numbers(16), 'sixteen');
    assert.equal(numbers(17), 'seventeen');
    assert.equal(numbers(18), 'eighteen');
    assert.equal(numbers(19), 'nineteen');
    assert.equal(numbers(20), 'twenty');
  });

  it('should handle tens', function () {
    assert.equal(numbers(29), 'twenty-nine');
    assert.equal(numbers(36), 'thirty-six');
    assert.equal(numbers(45), 'fourty-five');
    assert.equal(numbers(51), 'fifty-one');
    assert.equal(numbers(63), 'sixty-three');
    assert.equal(numbers(78), 'seventy-eight');
    assert.equal(numbers(84), 'eighty-four');
    assert.equal(numbers(92), 'ninety-two');
  });

  it('should handle increasingly larger numbers', function () {
    assert.equal(numbers(110), 'one hundred and ten');
    assert.equal(numbers(156), 'one hundred and fifty-six');
    assert.equal(numbers(1000), 'one thousand');
    assert.equal(numbers(1033), 'one thousand and thirty-three');
    assert.equal(numbers(1693), 'one thousand, six hundred and ninety-three');
    assert.equal(numbers(10845), 'ten thousand, eight hundred and fourty-five');
    assert.equal(numbers(763405), 'seven hundred and sixty-three thousand, four hundred and five');
    assert.equal(numbers(2874595), 'two million, eight hundred and seventy-four thousand, five hundred and ninety-five');
    assert.equal(numbers(Math.pow(10, 7)), 'ten million');
    assert.equal(numbers(Math.pow(10, 9) + 162), 'one billion, one hundred and sixty-two');
    assert.equal(numbers(Math.pow(10, 10)), 'ten billion');
    assert.equal(numbers(Math.pow(10, 11)), 'one hundred billion');
    assert.equal(numbers(Math.pow(10, 11) + 6), 'one hundred billion and six');
    assert.equal(numbers(Math.pow(10, 12) + 3), 'one trillion and three');
    assert.equal(numbers(Math.pow(10, 13)), 'ten trillion');
  });
});
