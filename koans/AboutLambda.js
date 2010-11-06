var dojox; //global variables
var df = dojox.lang.functional;  

describe("About Lambdas", function () {

  it("should turn an expression string into a function that returns a value of the expression", function () {
      expect(__).toBe(df.lambda("1 + 2")());
  });
    
  it("should confirm that an expression string can contain parameters", function () {
      expect(__).toBe(df.lambda("x + 2")(3));
  });

  it("should separate parameters from the expression", function () {
      expect(__).toBe(df.lambda("x, y -> y*2 + x*3")(2, 3));
  });
    
  it("should demonstrate a string passed to higher order functions assumed to be lambdas", function () {
      expect(__).toEqual(df.map([1, 2, 3], "x + 1"));
  });

});
