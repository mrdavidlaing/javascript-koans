describe("About Expects", function() {

  //We shall contemplate truth by testing reality, via spec expectations.  
  it("should expect true", function() {
    expect(___).toBeTruthy(); //This should be true
  });

  //To understand reality, we must compare our expectations against reality.
  it("should expect equality", function () { 
	  var expectedValue = __;
	  var actualValue = 1 + 1;
	
	  expect(expectedValue === actualValue).toBeTruthy();
  });  

  //Some ways of asserting equality are better than others.
  it("should assert equality a better way", function () { 
	  var expectedValue = __;
	  var actualValue = 1 + 1;
	
    // toEqual() compares using common sense equality
	  expect(actualValue).toEqual(expectedValue);
  });

  //Sometime you need to be really exact
  it("should assert equality with ===", function () { 
	  var expectedValue = __;
	  var actualValue = 1 + 1;
	
    // toBe() will always use === to compare
	  expect(actualValue).toBe(expectedValue);
  });  

  //Sometimes we will ask you to fill in the values
  it("should have filled in values", function () {
	  expect(__).toEqual(1 + 1);
  });
});
