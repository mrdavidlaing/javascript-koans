describe("About Functions", function() {

  it("should declare functions", function() {
    
    function add(a, b) {
      return a + b;
    }
    
    expect(add(1, 2)).toBe(__);
  });

  it("should know internal variables override outer variables", function () {
    var message = "Outer";
    
    function getMessage() {
      return message;
    }
    
    function overrideMessage() {
      var message = "Inner";
      return message;
    }
    
    expect(getMessage()).toBe(__);
    expect(overrideMessage()).toBe(__);
    expect(message).toBe(__);
  });

  it("should have lexical scoping", function () {
    var variable = "top-level";
    function parentfunction() {
        var variable = "local";
      function childfunction() {
          return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toBe(__);
  });

  it("should use lexical scoping to synthesise functions", function () {
    
    function makeIncreaseByFunction(increaseByAmount)
    {
      var increaseByFunction = function increaseBy(numberToIncrease)
      {
        return numberToIncrease + increaseByAmount;
      };
      return increaseByFunction;
    }
    
    var increaseBy3 = makeIncreaseByFunction(3);
    var increaseBy5 = makeIncreaseByFunction(5);
    
    expect(increaseBy3(10) + increaseBy5(10)).toBe(__);
  });

  it("should allow extra function arguments", function () {
    
    function returnFirstArg(firstArg)
    {
      return firstArg;
    }
    
    expect(returnFirstArg("first", "second", "third")).toBe(__);
    
    function returnSecondArg(firstArg, secondArg)
    {
      return secondArg;
    }
    
    expect(returnSecondArg("only give first arg")).toBe(__);
    
    function returnAllArgs()
    {
      var argsArray = [];
      for (var i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(",");
    }
    
    expect(returnAllArgs("first", "second", "third")).toBe(__);
  });

  it("should pass functions as values", function () {

    var appendRules = function (name) {
      return name + " rules!";
    };
    
    var appendDoubleRules = function (name) {
      return name + " totally rules!";
    };
    
    var praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise("John")).toBe(__);
    
    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe(__);
      
  });

  it("should use function body as a string", function () {
    var add = new Function("a", "b", "return a + b;");
    expect(add(1, 2)).toBe(__);
     
    var multiply = function (a, b) {
      //An internal comment
      return a * b;
    };
    expect(multiply.toString()).toBe(__);
  });    
});
