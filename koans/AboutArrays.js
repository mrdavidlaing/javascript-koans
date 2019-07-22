describe("About Arrays", function() {

  //We shall contemplate truth by testing reality, via spec expectations.
  it("should create arrays", function() {
    var emptyArray = [];
    expect(typeof(emptyArray)).toBe(typeof {string: FILL_ME_IN}); //A mistake? - http://javascript.crockford.com/remedial.html
    expect(emptyArray.length).toBe(FILL_ME_IN.length - 18);

    var multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    expect(multiTypeArray[0]).toBe(FILL_ME_IN.length-18);
    expect(multiTypeArray[2]).toBe('two');
    expect(multiTypeArray[3]()).toBe( FILL_ME_IN.length-15);
    expect(multiTypeArray[4].value1).toBe(FILL_ME_IN.length-14);
    expect(multiTypeArray[4]["value2"]).toBe(FILL_ME_IN.length-13);
    expect(multiTypeArray[5][0]).toBe(FILL_ME_IN.length-12);
  });

  it("should understand array literals", function () {
    var array = [];
    expect(array).toEqual([]);

    array[0] = 1;
    expect(array).toEqual([1]);

    array[1] = 2;
    expect(array).toEqual([1, FILL_ME_IN.length-16]);

    array.push(3);
    expect(array).toEqual([1,2,FILL_ME_IN.length-15]);
  });

  it("should understand array length", function () {
    var fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).toBe(FILL_ME_IN.length-14);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toBe(FILL_ME_IN.length-12);

    var tenEmptyElementArray = new Array(10);
    expect(tenEmptyElementArray.length).toBe(FILL_ME_IN.length-8);

    tenEmptyElementArray.length = 5;
    expect(tenEmptyElementArray.length).toBe(FILL_ME_IN.length-13);
  });

  it("should slice arrays", function () {
    var array = ["peanut", "butter", "and", "jelly"];

    expect(array.slice(0, 1)).toEqual(['peanut']);
    expect(array.slice(0, 2)).toEqual(["peanut", "butter"]);
    expect(array.slice(2, 2)).toEqual([]);
    expect(array.slice(2, 20)).toEqual(["and", "jelly"]);
    expect(array.slice(3, 0)).toEqual([]);
    expect(array.slice(3, 100)).toEqual(["jelly"]);
    expect(array.slice(5, 1)).toEqual([]);
  });

  it("should know array references", function () {
    var array = [ "zero", "one", "two", "three", "four", "five" ];

    function passedByReference(refArray) {
        refArray[1] = "changed in function";
    }
    passedByReference(array);
    expect(array[1]).toBe("changed in function");

    var assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    expect(array[5]).toBe("changed in assignedArray");

    var copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    expect(array[3]).toBe("three");
  });

  it("should push and pop", function () {
    var array = [1, 2];
    array.push(3);

    expect(array).toEqual([1,2,3]);

    var poppedValue = array.pop();
    expect(poppedValue).toBe(3);
    expect(array).toEqual([1,2]);
  });

  it("should know about shifting arrays", function () {
    var array = [1, 2];

    array.unshift(3);
    expect(array).toEqual([3,1,2]);

    var shiftedValue = array.shift();
    expect(shiftedValue).toEqual(3);
    expect(array).toEqual([1,2]);
  });
});
