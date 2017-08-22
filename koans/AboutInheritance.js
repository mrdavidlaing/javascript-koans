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

describe("Inheritance", function() {
  beforeEach(function(){
    this.muppet = new Muppet(2, "coding");
	  this.swedishChef = new SwedishChef(2, "cooking", "chillin");
  });

  it("상속받은 method를 사용할 수 있다.", function() {
    expect(this.swedishChef.cook()).toEqual(FILL_ME_IN);
  });

  it("일반 method도 사용할 수 있다.", function() {
    expect(this.swedishChef.answerNanny()).toEqual(FILL_ME_IN);
  });

  it("부모 Constructor에서 생성한 property들을 갖고 있다.", function() {
    expect(this.swedishChef.age).toEqual(FILL_ME_IN);
    expect(this.swedishChef.hobby).toEqual(FILL_ME_IN);
  });

  it("Constructor에서 생성한 property를 갖고 있다.", function() {
    expect(this.swedishChef.mood).toEqual(FILL_ME_IN);
  });
});
