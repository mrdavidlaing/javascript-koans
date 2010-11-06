var dojox; //global variables
var df = dojox.lang.functional;  

describe("About Lambdas", function () {

  it("should turn an expression string into a function that returns a value of the expression", function () {
      expect(df.lambda("1 + 2")()).toBe(__);
  });
    
  it("should confirm that an expression string can contain parameters", function () {
      expect(df.lambda("x + 2")(3)).toBe(__);
  });

  it("should separate parameters from the expression", function () {
      expect(df.lambda("x, y -> y*2 + x*3")(2, 3)).toBe(__);
  });
    
  it("should demonstrate a string passed to higher order functions assumed to be lambdas", function () {
      expect(df.map([1, 2, 3], "x + 1")).toEqual(__);
  });

});
