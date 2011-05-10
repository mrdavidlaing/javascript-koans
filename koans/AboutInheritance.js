function Muppet(age, hobby) {
  this.age = age;
  this.hobby = hobby; 
  
  this.answerNanny = function(){
	return "Everything's cool!";
  }
}

function SwedishChef(age, hobby, mood) {
  Muppet.call(this, age, hobby);
  this.mood = mood;
  
  this.cook = function() {
    return "Mmmm soup!";
  }
}

SwedishChef.prototype = new Muppet();

describe("About inheritance", function() {
  beforeEach(function(){
    this.muppet = new Muppet(2, "coding");
	this.swedishChef = new SwedishChef(2, "cooking", "chillin");
  });
  
  it("should be able to call a method on the derived object", function() {
    expect(this.swedishChef.cook()).toEqual(__);
  });
  
  it("should be able to call a method on the base object", function() {
    expect(this.swedishChef.answerNanny()).toEqual(__);
  });
  
  it("should set constructor parameters on the base object", function() {
    expect(this.swedishChef.age).toEqual(__);
    expect(this.swedishChef.hobby).toEqual(__);	
  });
  
  it("should set constructor parameters on the derived object", function() {
    expect(this.swedishChef.mood).toEqual(__);
  });
});

// http://javascript.crockford.com/prototypal.html
Object.prototype.beget = function () {
  function F() {}
  F.prototype = this;
  return new F();
}

function Gonzo(age, hobby, trick) {
  Muppet.call(this, age, hobby);
  this.trick = trick;
  
  this.doTrick = function() {
    return this.trick;
  }
}

//no longer need to call the Muppet (base type) constructor
Gonzo.prototype = Muppet.prototype.beget();

describe("About Crockford's inheritance improvement", function() {
  beforeEach(function(){
  this.gonzo = new Gonzo(3, "daredevil performer", "eat a tire");
  });
  
  it("should be able to call a method on the derived object", function() {
    expect(this.gonzo.doTrick()).toEqual(__);
  });
  
  it("should be able to call a method on the base object", function() {
    expect(this.gonzo.answerNanny()).toEqual(__);
  });
  
  it("should set constructor parameters on the base object", function() {
    expect(this.gonzo.age).toEqual(__);
    expect(this.gonzo.hobby).toEqual(__);
  });
  
  it("should set constructor parameters on the derived object", function() {
    expect(this.gonzo.trick).toEqual(__);
  });
});
