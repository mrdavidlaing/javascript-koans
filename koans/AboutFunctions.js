describe("About Functions", function() {

  it("should declare functions", function() {

    function add(a, b) {
      return a + b;
    }

    expect(add(1, 2)).toBe(3);
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

    expect(getMessage()).toBe("Outer");
    expect(overrideMessage()).toBe("Inner");
    //message global variable not overwritten by inner variable
    expect(message).toBe("Outer");
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
    expect(parentfunction()).toBe("local");
  });

  it("should use lexical scoping to synthesise functions", function () {

    //makeMysteryFunction takes a makerValue and returns new value
    function makeMysteryFunction(makerValue)
    {
      //newFunction, variable, is a function that take a param to doMysterious, which
      //just returns makerValue and the param-->what is param?
      var newFunction = function doMysteriousThing(param)
      {
        return makerValue + param;
      };
      //makeMysteryFunction returns the above value
      return newFunction;
    }

    //mystery3 is a new makeMystery(3), which should return 3 + param whatever that is
    var mysteryFunction3 = makeMysteryFunction(3);
    //same with mysteryFive for 5+ param
    var mysteryFunction5 = makeMysteryFunction(5);

    //does this call 10 as param for mystery3 and 5 for mysteryFunction5?
    //yes it does, but I  don't fuly understand this. We're calling mysteryFrunction3
    //as if it were a function--> it is. Could we just call it a function of (3)(10) 
    //at the beginning? Yes we can. Interesting
    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(23);
  });

  it("should allow extra function arguments", function () {

    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg("first", "second", "third")).toBe("first");

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    expect(returnSecondArg("only give first arg")).toBe(undefined);

    function returnAllArgs() {
      var argsArray = [];
      for (var i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(",");
    }

    expect(returnAllArgs("first", "second", "third")).toBe("first,second,third");
  });

  it("should pass functions as values", function () {

    var appendRules = function (name) {
      return name + " rules!";
    };

    var appendDoubleRules = function (name) {
      return name + " totally rules!";
    };

    //object which combines givePraise with appendRules
    //calling givePraise on John should appendRules--> John rules!
    var praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise("John")).toBe("John rules!");

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe("Mary totally rules!");

  });
});
