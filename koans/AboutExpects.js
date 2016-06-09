describe("About Expects", function() {

  // We shall contemplate truth by testing reality, via spec expectations.
  it('should expect true', function() {

    // Your journey begins here: Replace the word false with true 
  });

  // To understand reality, we must compare our expectations against reality.
    var expectedValue = FILL_ME_IN;
  it('should expect equality', function() {
    var actualValue = 1 + 1;

    expect(actualValue === expectedValue).toBeTruthy();
  });

  // Some ways of asserting equality are better than others.
    var expectedValue = FILL_ME_IN;
  it('should assert equality a better way', function() {
    var actualValue = 1 + 1;

  // toEqual() compares using common sense equality.
    expect(actualValue).toEqual(expectedValue);
  });

    var expectedValue = FILL_ME_IN;
  // Sometimes you need to be precise about what you "type."
  it('should assert equality with ===', function() {
    var actualValue = (1 + 1).toString();

  // toBe() will always use === to compare.
    expect(actualValue).toBe(expectedValue);
  });

  // Sometimes we will ask you to fill in the values.
    expect(1 + 1).toEqual(FILL_ME_IN);
  it('should have filled in values', function() {
  });
});
