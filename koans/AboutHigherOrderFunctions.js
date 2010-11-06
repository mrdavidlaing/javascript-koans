var dojox; //globals
var df = dojox.lang.functional;    

describe("About Higher Order Functions", function () {

  it("should use filter to return array items that meet a criteria", function () {
    var numbers = [1,2,3];
    var odd = df.filter(numbers, "x % 2 !== 0");
    
    expect(__).toEqual(odd);
    expect(__).toBe(odd.length);
    expect(__).toBe(numbers.length);
  });
    
  it("should use 'map' to transform each element", function () {
    var numbers = [1, 2, 3];
    var numbersPlus1 = df.map(numbers, "x + 1");
    
    expect(__).toEqual(numbersPlus1);
    expect(__).toEqual(numbers);
  });
    
  it("should use 'reduce' to update the same result on each iteration ", function () {
    var numbers = [1, 2, 3];
    var reduction = df.reduce(numbers, "result + x");
    
    expect(__).toBe(reduction); 
    expect(__).toEqual(numbers);
  });
    
  it("should use 'forEach' for simple iteration", function () {
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += (item % 2) === 0;
    };

    df.forEach(numbers, isEven);
    
    expect(__).toEqual(msg);
    expect(__).toEqual(numbers); 
  });
    
  it("should use 'some' to apply until true", function () {
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += item + ";";
      return (item % 2) === 0;
    };
   
    expect(numbers.some(isEven)).toBeTruthy();
    expect(__).toEqual(msg);
  });
    
  it("should use 'every' to applies until first false" , function () {
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += item + ";";
      return (item % 2) === 0;
    };
    
    expect(numbers.every(isEven)).toBeFalsy();
    expect(__).toBe(msg);
  });
});

