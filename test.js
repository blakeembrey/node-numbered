/*global describe,it*/
var assert  = require('assert');
var numbered = require('./');

describe('number words', function () {
  it('should turn numbers into words', function () {
    assert.equal(numbered(0), 'zero');
    assert.equal(numbered(1), 'one');
    assert.equal(numbered(2), 'two');
    assert.equal(numbered(3), 'three');
    assert.equal(numbered(4), 'four');
    assert.equal(numbered(5), 'five');
    assert.equal(numbered(6), 'six');
    assert.equal(numbered(7), 'seven');
    assert.equal(numbered(8), 'eight');
    assert.equal(numbered(9), 'nine');
    assert.equal(numbered(10), 'ten');
    assert.equal(numbered(11), 'eleven');
    assert.equal(numbered(12), 'twelve');
    assert.equal(numbered(13), 'thirteen');
    assert.equal(numbered(14), 'fourteen');
    assert.equal(numbered(15), 'fifteen');
    assert.equal(numbered(16), 'sixteen');
    assert.equal(numbered(17), 'seventeen');
    assert.equal(numbered(18), 'eighteen');
    assert.equal(numbered(19), 'nineteen');
    assert.equal(numbered(20), 'twenty');
  });

  it('should handle tens', function () {
    assert.equal(numbered(29), 'twenty-nine');
    assert.equal(numbered(36), 'thirty-six');
    assert.equal(numbered(45), 'forty-five');
    assert.equal(numbered(51), 'fifty-one');
    assert.equal(numbered(63), 'sixty-three');
    assert.equal(numbered(78), 'seventy-eight');
    assert.equal(numbered(84), 'eighty-four');
    assert.equal(numbered(92), 'ninety-two');
  });

  it('should work normally with negative numbers', function () {
    assert.equal(numbered(-10), 'negative ten');
    assert.equal(numbered(-154), 'negative one hundred and fifty-four');
    assert.equal(numbered(-1000), 'negative one thousand');
  });

  it('should work with decimals', function () {
    assert.equal(numbered(0.5), 'zero point five');
    assert.equal(numbered(0.05), 'zero point zero five');
    assert.equal(numbered(60.5), 'sixty point five');
    assert.equal(numbered(55.2), 'fifty-five point two');
  });

  it('should handle increasingly larger numbers', function () {
    assert.equal(numbered(110), 'one hundred and ten');
    assert.equal(numbered(156), 'one hundred and fifty-six');
    assert.equal(numbered(1000), 'one thousand');
    assert.equal(numbered(1033), 'one thousand and thirty-three');
    assert.equal(numbered(1693), 'one thousand, six hundred and ninety-three');
    assert.equal(numbered(10845), 'ten thousand, eight hundred and forty-five');
    assert.equal(numbered(763405), 'seven hundred and sixty-three thousand, four hundred and five');
    assert.equal(numbered(2874595), 'two million, eight hundred and seventy-four thousand, five hundred and ninety-five');
    assert.equal(numbered(Math.pow(10, 7)), 'ten million');
    assert.equal(numbered(Math.pow(10, 9) + 162), 'one billion, one hundred and sixty-two');
    assert.equal(numbered(Math.pow(10, 10)), 'ten billion');
    assert.equal(numbered(Math.pow(10, 11)), 'one hundred billion');
    assert.equal(numbered(Math.pow(10, 11) + 6), 'one hundred billion and six');
    assert.equal(numbered(Math.pow(10, 12) + 3), 'one trillion and three');
    assert.equal(numbered(Math.pow(10, 13)), 'ten trillion');
    assert.equal(numbered(Math.pow(10, 9) + Math.pow(10, 8)), 'one billion, one hundred million');
    assert.equal(numbered(Math.pow(10, 100)), 'one googol');
  });

  it('should transform words to numbers', function () {
    assert.equal(numbered('zero'), 0);
    assert.equal(numbered('one'), 1);
    assert.equal(numbered('two'), 2);
    assert.equal(numbered('three'), 3);
    assert.equal(numbered('four'), 4);
    assert.equal(numbered('five'), 5);
    assert.equal(numbered('six'), 6);
    assert.equal(numbered('seven'), 7);
    assert.equal(numbered('eight'), 8);
    assert.equal(numbered('nine'), 9);
    assert.equal(numbered('ten'), 10);
    assert.equal(numbered('eleven'), 11);
    assert.equal(numbered('twelve'), 12);
    assert.equal(numbered('thirteen'), 13);
    assert.equal(numbered('fourteen'), 14);
    assert.equal(numbered('fifteen'), 15);
    assert.equal(numbered('sixteen'), 16);
    assert.equal(numbered('seventeen'), 17);
    assert.equal(numbered('eighteen'), 18);
    assert.equal(numbered('nineteen'), 19);
    assert.equal(numbered('twenty'), 20);
  });

  it('should transform multiple words into numbers', function () {
    assert.equal(numbered(numbered(29)), 29);
    assert.equal(numbered(numbered(36)), 36);
    assert.equal(numbered(numbered(45)), 45);
    assert.equal(numbered(numbered(51)), 51);
    assert.equal(numbered(numbered(63)), 63);
    assert.equal(numbered(numbered(78)), 78);
    assert.equal(numbered(numbered(84)), 84);
    assert.equal(numbered(numbered(92)), 92);
  });

  it('should transform more complicated number combinations', function () {
    assert.equal(numbered(numbered(122)), 122);
    assert.equal(numbered(numbered(1537)), 1537);
    assert.equal(numbered(numbered(10235)), 10235);
    assert.equal(numbered(numbered(1303457)), 1303457);
    assert.equal(numbered(numbered(832698483)), 832698483);
    assert.equal(numbered(numbered(9832798473285)), 9832798473285);
  });

  it('should handle work normally with negative numbers', function () {
    assert.equal(numbered(numbered(-833)), -833);
    assert.equal(numbered(numbered(-87365)), -87365);
    assert.equal(numbered(numbered(-9821748972)), -9821748972);
  });

  it('should work with decimals', function () {
    assert.equal(numbered(numbered(0.5)), 0.5);
    assert.equal(numbered(numbered(0.05)), 0.05);
    assert.equal(numbered(numbered(60.5)), 60.5);
    assert.equal(numbered(numbered(55.2)), 55.2);
  });

  it('should work with more human-like input', function () {
    assert.equal(numbered('zero five'), 5);
    assert.equal(numbered('five zero'), 50);
    assert.equal(numbered('zero point five'), 0.5);
    assert.equal(numbered('zero point zero five'), 0.05);
    assert.equal(numbered('two six point zero nine'), 26.09);
    assert.equal(numbered('zero zero nine five decimal two'), 95.2);
    assert.equal(numbered('zero eight zero three'), 803);
    assert.equal(numbered('eight zero three zero five'), 80305);
    assert.equal(numbered('twenty thirteen'), 2013);
    assert.equal(numbered('two decimal fifty six'), 2.56);
    assert.equal(numbered('nineteen thirty-five'), 1935);
    assert.equal(numbered('one two five six'), 1256);
    assert.equal(numbered('thirty hundred'), 3000);
  });
});
