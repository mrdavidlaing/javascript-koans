var _; //globals

/*
 * 이 파일에서는 underscore라는 라이브러리를 사용합니다.
 * http://underscorejs.org/
 */
describe("Higher Order Functions", function () {

  it("filter", function () {
    var numbers = [1,2,3];
    var odd = _(numbers).filter(function (x) { return x % 2 !== 0 });

    expect(odd).toEqual(FILL_ME_IN);
    expect(odd.length).toBe(FILL_ME_IN);
    expect(numbers.length).toBe(FILL_ME_IN);
  });

  it("map", function () {
    var numbers = [1, 2, 3];
    var numbersPlus1 = _(numbers).map(function(x) { return x + 1 });

    expect(numbersPlus1).toEqual(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("reduce", function () {
    var numbers = [1, 2, 3];
    var reduction = _(numbers).reduce(
            function(/* result from last call */ memo, /* current */ x) { return memo + x }, /* initial */ 0);

    expect(reduction).toBe(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("forEach", function () {
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += (item % 2) === 0;
    };

    _(numbers).forEach(isEven);

    expect(msg).toEqual(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("all", function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).all(isEven)).toBe(FILL_ME_IN);
    expect(_(mixedBag).all(isEven)).toBe(FILL_ME_IN);
  });

  it("any" , function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).any(isEven)).toBe(FILL_ME_IN);
    expect(_(mixedBag).any(isEven)).toBe(FILL_ME_IN);
  });

  it("range", function() {
      expect(_.range(3)).toEqual(FILL_ME_IN);
      expect(_.range(1, 4)).toEqual(FILL_ME_IN);
      expect(_.range(0, -4, -1)).toEqual(FILL_ME_IN);
  });

  it("flatten", function() {
      expect(_([ [1, 2], [3, 4] ]).flatten()).toEqual(FILL_ME_IN);
  });

  it("chain과 value", function() {
      var result = _([ [0, 1], 2 ]).chain()
                       .flatten()
                       .map(function(x) { return x+1 } )
                       .reduce(function (sum, x) { return sum + x })
                       .value();

      expect(result).toEqual(FILL_ME_IN);
  });

});

