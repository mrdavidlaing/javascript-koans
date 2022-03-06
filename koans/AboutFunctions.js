describe("About Functions", function () {
  it("should declare functions", function () {
    function add(a, b) {
      return a + b;
    }

    expect(add(1, 1)).toBe(FILL_ME_IN);
  });

  it("should know internal variables override outer variables", function () {
    var message = 2;

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      var message = 2;
      return message;
    }

    expect(getMessage()).toBe(FILL_ME_IN);
    expect(overrideMessage()).toBe(FILL_ME_IN);
    expect(message).toBe(FILL_ME_IN);
  });

  it("should have lexical scoping", function () {
    var variable = "top-level";
    function parentfunction() {
      var variable = 2;
      function childfunction() {
        return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toBe(FILL_ME_IN);
  });

  it("should use lexical scoping to synthesise functions", function () {
    function makeMysteryFunction(makerValue) {
      var newFunction = function doMysteriousThing(param) {
        return makerValue + param;
      };
      return newFunction;
    }

    var mysteryFunction3 = makeMysteryFunction(3);
    var mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(-16)).toBe(FILL_ME_IN);
  });

  it("should allow extra function arguments", function () {
    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg(2, "second", "third")).toBe(FILL_ME_IN);

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    expect(returnSecondArg("only give first arg", 2)).toBe(FILL_ME_IN);

    function returnAllArgs() {
      var argsArray = [];
      for (var i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      let sum = 0;
      argsArray.forEach((el) => (sum += el));
      return sum;
    }

    expect(returnAllArgs(7, 10, -15)).toBe(FILL_ME_IN);
  });

  it("should pass functions as values", function () {
    var appendRules = function (name) {
      return name + " rules!";
    };

    var appendDoubleRules = function (name) {
      return name + " totally rules!";
    };

    var praiseSinger = { givePraise: appendRules, num: 2 };
    expect(praiseSinger.givePraise("John").split(" ").length).toBe(FILL_ME_IN);

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary").split(" ").length - 1).toBe(
      FILL_ME_IN
    );
  });
});
