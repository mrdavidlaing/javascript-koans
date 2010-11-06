describe("About Objects", function () {

  describe("Properties", function () {
    var meglomaniac;

    beforeEach(function () {
       meglomaniac = {  mastermind: "Joker", henchwoman: "Harley" };
    });

    it("should confirm objects are collections of properties", function () {
      expect(__).toBe(meglomaniac.mastermind);
    }); 

    it("should confirm that properties are case sensitive", function () {
      expect(__).toBe(meglomaniac.henchwoman);
      expect(__).toBe(meglomaniac.henchWoman);
    });
  });
  

  it("should know properties that are functions act like methods", function () {
    var meglomaniac = { 
      mastermind : "Brain", 
      henchman: "Pinky",
      battleCry: function (noOfBrains) {
        return "They are " + this.henchman + " and the" +
          Array(noOfBrains + 1).join(" " + this.mastermind);
      }
    };
   
    battleCry = meglomaniac.battleCry(4);
    expect(battleCry).toMatch(__);
  });

  it("should confirm that when a function is attached to an object, 'this' refers to the object", function () {
    var currentYear = 2010; // Update me!
    var meglomaniac = { 
      mastermind: "James Wood", 
      henchman: "Adam West",
      birthYear: 1970,
      calculateAge: function () {
        return currentYear - this.birthYear; 
      }
    };
   
    expect(__).toBe(currentYear);
    expect(__).toBe(meglomaniac.calculateAge());
  });

  describe("'in' keyword", function () {
    var meglomaniac;
    beforeEach(function () {
      meglomaniac = { 
        mastermind: "The Monarch", 
        henchwoman: "Dr Girlfriend",
        theBomb: true
      };
    });

    it("should have the bomb", function () {

      hasBomb = "theBomb" in meglomaniac;
     
      expect(__).toBe(hasBomb);
    });

    it("should not have the detonator however", function () {

      hasDetonator = "theDetonator" in meglomaniac;
     
      expect(__).toBe(hasDetonator);
    });    
  });

  it("should know that properties can be added and deleted", function () {
    var meglomaniac = { mastermind : "Agent Smith", henchman: "Agent Smith" };

    expect(__).toBe(("secretary" in meglomaniac));

    meglomaniac.secretary = "Agent Smith";
    expect(__).toBe(("secretary" in meglomaniac));
    
    delete meglomaniac.henchman;
    expect(__).toBe(("henchman" in meglomaniac));
  });


  it("should use prototype to add to all objects", function () {
      function Circle(radius)
      {
        this.radius = radius;
      }

      var simpleCircle = new Circle(10);
      var colouredCircle = new Circle(5);
      colouredCircle.colour = "red";
      
      expect(__).toBe(simpleCircle.colour);
      expect(__).toBe(colouredCircle.colour);
    
      Circle.prototype.describe = function () {
        return "This circle has a radius of: " + this.radius;
      };
    
      expect(__).toBe(simpleCircle.describe());
      expect(__).toBe(colouredCircle.describe());
  });
});
