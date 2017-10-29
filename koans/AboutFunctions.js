describe("Functions", function() {
  // 지금까지 해온 것처럼 코드를 잘 보시고 FILL_ME_IN을 쭈욱 수정하시면 됩니다!

  it("function declaration", function() {

    function add(a, b) {
      return a + b;
    }

    expect(add(1, 2)).toBe(3);
  });

  it("function 내부의 variable은 외부의 variable을 덮어씌운다는 것을 아셔야 합니다.", function () {
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
    expect(message).toBe("Outer");
  });

  it("Scope에 대한 퀴즈입니다.", function () {
    var variable = "top-level";

    function parentfunction() {
      var variable = "local";

      function childfunction() {
        return variable;
      }

      return childfunction();
    }

    // parentfunction을 실행시키면 뭐가 나올까요?
    expect(parentfunction()).toBe("local");
  });

  it("함수 인자 이해하기", function () {

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

  it("함수 사용하기", function () {

    var appendRules = function (name) {
      return name + " rules!";
    };

    var appendDoubleRules = function (name) {
      return name + " totally rules!";
    };

    var praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise("John")).toBe("John rules!");

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe("Mary totally rules!");

  });
});
