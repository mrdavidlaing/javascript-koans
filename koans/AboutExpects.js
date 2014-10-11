describe("About Expects", function() {

  // We shall contemplate truth by testing reality, via spec expectations.
  it("should expect true", function() {
    expect(false).toBeTruthy(); //This should be true
  });
  
  // we expect to be truthy
  it("should by truthy",function(){
    expect(true).toBeFalsy();
    expect(1).toBeFalsy(); // any number >0 will be accepted
    expect("s").toBeFalsy(); // any string different than "" will be accepted
  });
  
  // we expect to be falsy
  it("should be falsy",function(){
    var variable;
    var functionWithNoReturn = function(){
    }
    expect(false).toBeTruthy();
    expect(null).toBeTruthy();
    expect(undefined).toBeTruthy();  
    expect(variable).toBeTruthy();  // declared variable without a value returns undefined value
    expect(functionWithNoReturn()).toBeTruthy(); // function without return vlaue returns undefined value
    
    expect(0).toBeTruthy(); // any number < = 0 will be accepted 
    expect("").toBeTruthy();
    expect(NaN).toBeTruthy();
    
    
  });
  
  

  // To understand reality, we must compare our expectations against reality.
  it("should expect equality", function () {
    var expectedValue = FILL_ME_IN;
    var actualValue = 1 + 1;

    expect(actualValue === expectedValue).toBeTruthy();
  });

  // Some ways of asserting equality are better than others.
  it("should assert equality a better way", function () {
    var expectedValue = FILL_ME_IN;
    var actualValue = 1 + 1;

  // toEqual() compares using common sense equality.
    expect(actualValue).toEqual(expectedValue);
  });

  // Sometimes you need to be really exact about what you "type."
  it("should assert equality with ===", function () {
    var expectedValue = FILL_ME_IN;
    var actualValue = (1 + 1).toString();

  // toBe() will always use === to compare.
    expect(actualValue).toBe(expectedValue);
  });

  // Sometimes we will ask you to fill in the values.
  it("should have filled in values", function () {
    expect(1 + 1).toEqual(FILL_ME_IN);
  });
});
