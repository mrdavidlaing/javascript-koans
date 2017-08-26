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
      expect(megalomaniac.henchWoman).toBe();
    });
  });


  it("함수값을 갖고있는 object property는 method로 사용 가능합니다.", function () {
    var megalomaniac = {
      mastermind : "Brain",
      henchman: "Pinky",
      battleCry: function (noOfBrains) {
        return "They are " + this.henchman + " and the" +
          Array(noOfBrains + 1).join(" " + this.mastermind);
      }
    };

    var battleCry = megalomaniac.battleCry(4);
    expect(battleCry).toMatch(battleCry);
  });

  it("object의 method를 사용할때는, this의 값은 해당 object입니다.", function () {
    var currentDate = new Date();
    var currentYear = (currentDate.getFullYear());
    var megalomaniac = {
      mastermind: "James Wood",
      henchman: "Adam West",
      birthYear: 1970,
      calculateAge: function () {
        return currentYear - this.birthYear;
      }
    };

    expect(currentYear).toBe(currentYear);
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

  it("object property는 지우거나 추가할 수 있습니다.", function () {
    var megalomaniac = { mastermind : "Agent Smith", henchman: "Agent Smith" };

    expect("secretary" in megalomaniac).toBe(false);

    megalomaniac.secretary = "Agent Smith";
    expect("secretary" in megalomaniac).toBe(true);

    delete megalomaniac.henchman;
    expect("henchman" in megalomaniac).toBe(false);
  });


  it("prototype에 추가하면 모든 instance에서 사용 가능합니다.(prototype chain)", function () {
      function Circle(radius)
      {
        this.radius = radius;
      }

      var simpleCircle = new Circle(10);
      var colouredCircle = new Circle(5);
      colouredCircle.colour = "red";

      expect(simpleCircle.colour).toBe();
      expect(colouredCircle.colour).toBe("red");

      Circle.prototype.describe = function () {
        return "This circle has a radius of: " + this.radius;
      };

      expect(simpleCircle.describe()).toBe("This circle has a radius of: " + 10);
      expect(colouredCircle.describe()).toBe("This circle has a radius of: " + 5);
  });
});
