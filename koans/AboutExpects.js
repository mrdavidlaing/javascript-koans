describe("About Expects", function() {

  // We shall contemplate truth by testing reality, via spec expectations.
  it("should expect true", function() {
    expect(false, 'to be truthy'); //This should be true
  });

  // To understand reality, we must compare our expectations against reality.
  it("should expect equality", function () {
    var expectedValue = FILL_ME_IN;
    var actualValue = 1 + 1;

    expect(actualValue === expectedValue, 'to be truthy');
  });

  // Some ways of asserting equality are better than others.
  it("should assert equality a better way", function () {
    var expectedValue = FILL_ME_IN;
    var actualValue = 1 + 1;

    // to equal compares using common sense equality.
    expect(actualValue, 'to equal', expectedValue);
  });

  // Sometimes you need to be really exact about what you "type."
  it("should assert equality with ===", function () {
    var expectedValue = FILL_ME_IN;
    var actualValue = (1 + 1).toString();

    // to be will always use === to compare.
    expect(actualValue, 'to be', expectedValue);
  });

  // Sometimes we will ask you to fill in the values.
  it("should have filled in values", function () {
    expect(1 + 1, 'to equal', FILL_ME_IN);
  });
});
