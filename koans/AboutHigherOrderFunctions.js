var dojox; //globals
var df = dojox.lang.functional;    

describe("About Higher Order Functions", function () {

  it("should use filter to return array items that meet a criteria", function () {
    var numbers = [1,2,3];
    var odd = df.filter(numbers, "x % 2 !== 0");
    
    expect(odd).toEqual(__);
    expect(odd.length).toBe(__);
    expect(numbers.length).toBe(__);
  });
    
  it("should use 'map' to transform each element", function () {
    var numbers = [1, 2, 3];
    var numbersPlus1 = df.map(numbers, "x + 1");
    
    expect(numbersPlus1).toEqual(__);
    expect(numbers).toEqual(__);
  });
    
  it("should use 'reduce' to update the same result on each iteration ", function () {
    var numbers = [1, 2, 3];
    var reduction = df.reduce(numbers, "result + x");
    
    expect(reduction).toBe(__); 
    expect(numbers).toEqual(__);
  });
    
  it("should use 'forEach' for simple iteration", function () {
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += (item % 2) === 0;
    };

    df.forEach(numbers, isEven);
    
    expect(msg).toEqual(__);
    expect(numbers).toEqual(__);
  });
    
  it("should use 'some' to apply until true", function () {
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += item + ";";
      return (item % 2) === 0;
    };
   
    expect(numbers.some(isEven)).toBeTruthy();
    expect(msg).toEqual(__);
  });
    
  it("should use 'every' to applies until first false" , function () {
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += item + ";";
      return (item % 2) === 0;
    };
    
    expect(numbers.every(isEven)).toBeFalsy();
    expect(msg).toBe(__);
  });
});

