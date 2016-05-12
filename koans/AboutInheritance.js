function Muppet(age, hobby) {
  this.age = age;
  this.hobby = hobby;

  this.answerNanny = function(){
	return "Everything's cool!";
  }
}

//SwedishChef can call Muppet, setting it's this to new age and hobby. 

function SwedishChef(age, hobby, mood) {
  Muppet.call(this, age, hobby);
  this.mood = mood;

  this.cook = function() {
    return "Mmmm soup!";
  }
}

//SwedishChef prototype is a muppet
SwedishChef.prototype = new Muppet();

//describe does what? beforeEach runs before the functions run? Each time?
describe("About inheritance", function() {
  beforeEach(function(){
    this.muppet = new Muppet(2, "coding");
	this.swedishChef = new SwedishChef(2, "cooking", "chillin");
  });

  //it can run it's method normally
  it("should be able to call a method on the derived object", function() {
    expect(this.swedishChef.cook()).toEqual("Mmmm soup!");
  });

  //swedishchef can call Muppet's answerNanny because it's of Muppet prototype?
  it("should be able to call a method on the base object", function() {
    expect(this.swedishChef.answerNanny()).toEqual("Everything's cool!");
  });

  //Swedish chef's age and hobby are set to what it set them through calling them on muppet
  it("should set constructor parameters on the base object", function() {
    expect(this.swedishChef.age).toEqual(2);
    expect(this.swedishChef.hobby).toEqual("cooking");
  });

  //it continues to have its other parameters...
  it("should set constructor parameters on the derived object", function() {
    expect(this.swedishChef.mood).toEqual("chillin");
  });
});

// http://javascript.crockford.com/prototypal.html
//beget is function for prototype that establishes F cuntion
//that sets that F's protoytpe to this, and that returns that 
//new function... why is it new? Does this just return a function?
Object.prototype.beget = function () {
  function F() {}
  F.prototype = this;
  return new F();
}

//Gonzo same as Swedish chef except it does tricks...
function Gonzo(age, hobby, trick) {
  Muppet.call(this, age, hobby);
  this.trick = trick;

  this.doTrick = function() {
    return this.trick;
  }
}

//no longer need to call the Muppet (base type) constructor
//Gonzo's prototype is now set to new F()? What is Muppet's relation to that?
//this sets Gonzo's prototype to Muppet's prototype?
Gonzo.prototype = Muppet.prototype.beget();


describe("About Crockford's inheritance improvement", function() {
  beforeEach(function(){
  this.gonzo = new Gonzo(3, "daredevil performer", "eat a tire");
  });

  it("should be able to call a method on the derived object", function() {
    expect(this.gonzo.doTrick()).toEqual("eat a tire");
  });

  it("should be able to call a method on the base object", function() {
    expect(this.gonzo.answerNanny()).toEqual("Everything's cool!");
  });

  it("should set constructor parameters on the base object", function() {
    expect(this.gonzo.age).toEqual(3);
    expect(this.gonzo.hobby).toEqual("daredevil performer");
  });

  it("should set constructor parameters on the derived object", function() {
    expect(this.gonzo.trick).toEqual("eat a tire");
  });
});
