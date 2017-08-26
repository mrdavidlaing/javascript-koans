/* 
- memo

Property = 모든 객체는 자신의 부모 역할을 하는 프로토타입[prototype] 객체를 가리키는
숨겨진 프로퍼티가 있다.
*/

describe("Objects", function () {

  describe("Properties", function () {
    var megalomaniac;

    beforeEach(function () {
       megalomaniac = {  mastermind: "Joker", henchwoman: "Harley" };
    });

    it("object는 property들을 갖고있다.", function () {
      expect(megalomaniac.mastermind).toBe("Joker");
    });

    it("object property는 대소문자를 구분해야 합니다.", function () {
      expect(megalomaniac.henchwoman).toBe("Harley");
      expect(megalomaniac.henchWoman).toBe(undefined);
    });
  });


  it("함수값을 갖고있는 object property는 method로 사용 가능합니다.", function () {
    var megalomaniac = { // megalomaniac 라는 변수 안에
      mastermind : "Brain", // mastermind 라는 키 값에 "Brain" 담고, 
      henchman: "Pinky", // henchman 라는 키 값에 "Pinky" 도 담고,
      battleCry: function (noOfBrains) {  // noOfBrains argumnet를 가지고있는 battleCry 메소드에
        return "They are " + this.henchman + " and the" +
          Array(noOfBrains + 1).join(" " + this.mastermind); // 4+1.join(" " + this.mastermaind); //.join = 배결의 모든 요소를 문자열로  결합한다.
      }// They are Pinky and the 5" 
    };

    var battleCry = megalomaniac.battleCry(4);
    expect("They are Pinky and the Brain Brain Brain Brain").toMatch(battleCry); // They are Pinky and the Brain Brain Brain Brain
  });

  it("object의 method를 사용할때는, this의 값은 해당 object입니다.", function () {
    var currentDate = new Date();
    var currentYear = (currentDate.getFullYear()); // 현재 년도
    var megalomaniac = {
      mastermind: "James Wood",
      henchman: "Adam West",
      birthYear: 1970,
      calculateAge: function () {
        return currentYear - this.birthYear; // 2017 - 1970
      }
    };

    expect(currentYear).toBe(2017);
    expect(megalomaniac.calculateAge()).toBe(47);
  });

  describe("'in' keyword", function () {
    var megalomaniac;
    beforeEach(function () {
      megalomaniac = {
        mastermind: "The Monarch",
        henchwoman: "Dr Girlfriend",
        theBomb: true
      };
    });

    it("hasBomb을 알아내주세요.", function () {

      var hasBomb = "theBomb" in megalomaniac;

      expect(hasBomb).toBe(true);
    });

    it("theDetonator는 없습니다.", function () {

      var hasDetonator = "theDetonator" in megalomaniac;

      expect(hasDetonator).toBe(false);
    });
  });


// 모르겠다.
  it("object property는 지우거나 추가할 수 있습니다.", function () {
    var megalomaniac = { mastermind : "Agent Smith", henchman: "Agent Smith" };

    expect("secretary" in megalomaniac).toBe(false);

    megalomaniac.secretary = "Agent Smith";
    expect("secretary" in megalomaniac).toBe(true);

    delete megalomaniac.henchman;
    expect("henchman" in megalomaniac).toBe(false);
  });
  /*
1. megalomaniac 이라는 오브젝트를 만든다.
2. secretary 라는 프로퍼티가 있는 지 확인을 한다. 없네요.
3. 그리고 나서 secretary 라는 프로퍼티는 생성합니다. "Agent Smith";
4. 그리고서 다시 secretary 라는 프로퍼티가 있는지 확인합니다. 있어요.
5. 그 다음에 henchman 라는 프로퍼티를 지웁니다.
6. 그리고 마지막으로 henchman 이라는 프로퍼티가 있는지 확인을 해요. 없어요.
  */

// 모르겠다.
  it("prototype에 추가하면 모든 instance에서 사용 가능합니다.(prototype chain)", function () {
      function Circle(radius)
      {
        this.radius = radius;
      }// Circle = radius

      var simpleCircle = new Circle(10);
      var colouredCircle = new Circle(5);
      colouredCircle.colour = "red";

      expect(simpleCircle.colour).toBe(undefined);
      expect(colouredCircle.colour).toBe("red");

      Circle.prototype.describe = function () {
        return "This circle has a radius of: " + this.radius;
      };

      expect(simpleCircle.describe()).toBe("This circle has a radius of: 10");
      expect(colouredCircle.describe()).toBe("This circle has a radius of: 5");
  });
});
