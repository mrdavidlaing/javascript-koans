describe("counter", () => {
  function counter() {
    let counter = 0;
    return function() {
      return counter++;
    };
  }
  it("should return a function", () => {
    const test = counter();
    expect(typeof test).toBe(FILL_ME_IN);
  });

  it("should be able to make multiple counters", () => {
    const test1 = counter();
    const test2 = counter();
    expect(test1()).toEqual(FILL_ME_IN);
    expect(test1()).toEqual(FILL_ME_IN);
    expect(test2()).toEqual(FILL_ME_IN);
  });
});

describe("getSet", () => {
  function getSet() {
    let storedValue;
    return {
      get: () => {
        return storedValue;
      },
      set: value => {
        storedValue = value;
        return storedValue;
      }
    };
  }
  it("should have a function called getSet", () => {
    expect(getSet).toBeDefined();
    expect(typeof getSet).toBe(FILL_ME_IN);
  });

  it("should return an object with get and set methods", () => {
    const test = getSet();
    expect(typeof test).toBe(FILL_ME_IN);
    expect(test.set).toBeDefined();
    expect(typeof test.set).toBe(FILL_ME_IN);
    expect(test.get).toBeDefined();
    expect(typeof test.get).toBe(FILL_ME_IN);
  });

  it("should be able to set and get a value", () => {
    const test = getSet();
    test.set(123);
    expect(test.get()).toEqual(FILL_ME_IN);
    test.set("asdf");
    expect(test.get()).toBe(FILL_ME_IN);
  });
});

describe("exponential", () => {
  function exponential(exponent) {
    if (typeof exponent !== "number") {
      return NaN;
    }
    return number => {
      return number ** exponent;
    };
  }
  it("should have a function called exponential", () => {
    expect(exponential).toBeDefined();
    expect(typeof exponential).toBe(FILL_ME_IN);
  });

  it("should return a function", () => {
    const test = exponential(5);
    expect(typeof test).toBe(FILL_ME_IN);
  });

  it("should return NaN if argument passed in is not a number", () => {
    const test = exponential("test");
    expect(test).toEqual(FILL_ME_IN);
  });

  it("should construct functions that can be reused", () => {
    const square = exponential(2);
    expect(square(5)).toEqual(FILL_ME_IN);
    expect(square(6)).toEqual(FILL_ME_IN);

    const cube = exponential(3);
    expect(cube(3)).toEqual(FILL_ME_IN);
    expect(cube(4)).toEqual(FILL_ME_IN);

    const exponential4 = exponential(4);
    expect(exponential4(4)).toEqual(FILL_ME_IN);
    expect(exponential4(5)).toEqual(FILL_ME_IN);
  });
});

describe("improvedCounter", () => {
  function improvedCounter(number = 0) {
    let total = number;

    //Condition to return NaN if the user input is not a number
    if (typeof number !== "number") return NaN;

    return {
      up: () => {
        return (total += 1);
      },
      down: () => {
        return (total -= 1);
      },
      reset: () => {
        return number;
      }
    };
  }

  it("should have a function called improvedCounter", () => {
    expect(improvedCounter).toBeDefined();
    expect(typeof improvedCounter).toBe(FILL_ME_IN);
  });

  it("should return an object", () => {
    const test = improvedCounter(0);
    expect(typeof test).toBe(FILL_ME_IN);
  });

  it("should be able to count up", () => {
    const test = improvedCounter(0);
    expect(test.up()).toEqual(FILL_ME_IN);
    expect(test.up()).toEqual(FILL_ME_IN);
    expect(test.up()).toEqual(FILL_ME_IN);
  });

  it("should be able to count down", () => {
    const test = improvedCounter(FILL_ME_IN);
    expect(test.down()).toEqual(FILL_ME_IN);
    expect(test.down()).toEqual(FILL_ME_IN);
    expect(test.down()).toEqual(FILL_ME_IN);
  });

  it("should provide a reset method to reset to original", () => {
    const num = 5;
    const test = improvedCounter(num);
    test.down();
    test.down();
    test.up();
    test.down();
    expect(test.reset()).toEqual(FILL_ME_IN);
  });

  it("should provide a default counter start of 0 if none is provided", () => {
    const test = improvedCounter();
    expect(test.reset()).toEqual(FILL_ME_IN);
  });

  it("should return NaN if anything but a number is passed", () => {
    const test = improvedCounter("test");
    expect(test).toEqual(FILL_ME_IN);
  });
});
