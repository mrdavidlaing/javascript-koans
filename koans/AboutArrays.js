





















        refArray[1] = "changed in function";
    array.push(3);
    array.push(3);
    array.unshift(3);
    array[0] = 1;
    array[1] = 2;
    assignedArray[5] = "changed in assignedArray";
    copyOfArray[3] = "changed in copyOfArray";
    expect(array).toEqual([1, 2]);
    expect(array).toEqual([1]);
    expect(array).toEqual([]);
    expect(array).toEqual(FILL_ME_IN);
    expect(array).toEqual(FILL_ME_IN);
    expect(array).toEqual(FILL_ME_IN);
    expect(array).toEqual(FILL_ME_IN);
    expect(array).toEqual(FILL_ME_IN);
    expect(array.slice(0, 1)).toEqual(FILL_ME_IN);
    expect(array.slice(0, 2)).toEqual(FILL_ME_IN);
    expect(array.slice(2, 2)).toEqual(FILL_ME_IN);
    expect(array.slice(2, 20)).toEqual(FILL_ME_IN);
    expect(array.slice(3, 0)).toEqual(FILL_ME_IN);
    expect(array.slice(3, 100)).toEqual(FILL_ME_IN);
    expect(array.slice(5, 1)).toEqual(FILL_ME_IN);
    expect(array[1]).toBe(FILL_ME_IN);
    expect(array[3]).toBe(FILL_ME_IN);
    expect(array[5]).toBe(FILL_ME_IN);
    expect(emptyArray.length).toBe(0);
    expect(fourNumberArray.length).toBe(48);
    expect(fourNumberArray.length).toBe(FILL_ME_IN);
    expect(multiTypeArray[0]).toBe(0);
    expect(multiTypeArray[2]).toBe("two");
    expect(multiTypeArray[3]()).toBe(3);
    expect(multiTypeArray[4].value1).toBe(4);
    expect(multiTypeArray[4]["value2"]).toBe(5);
    expect(multiTypeArray[5][0]).toBe(6);
    expect(poppedValue).toBe(FILL_ME_IN);
    expect(shiftedValue).toEqual(FILL_ME_IN);
    expect(tenEmptyElementArray.length).toBe(FILL_ME_IN);
    expect(tenEmptyElementArray.length).toBe(FILL_ME_IN);
    expect(typeof(emptyArray)).toBe('object'); //A mistake? - http://javascript.crockford.com/remedial.html
    fourNumberArray.push(5, 6);
    function passedByReference(refArray) {
    passedByReference(array);
    tenEmptyElementArray.length = 5;
    var array = [ "zero", "one", "two", "three", "four", "five" ];
    var array = ["peanut", "butter", "and", "jelly"];
    var array = [1, 2];
    var array = [1, 2];
    var array = [];
    var assignedArray = array;
    var copyOfArray = array.slice();
    var emptyArray = [];
    var fourNumberArray = [1, 2, 3, 4];
    var multiTypeArray = [0, 1, "two", function () { return 3; }, 
    var poppedValue = array.pop();
    var shiftedValue = array.shift();
    var tenEmptyElementArray = new Array(10);
    {value1: 4, value2: 5}, [6, 7]];
    }
  //We shall contemplate truth by testing reality, via spec expectations.
  it("should create arrays", function() {
  it("should know about shifting arrays", function () {
  it("should know array references", function () {
  it("should push and pop", function () {
  it("should slice arrays", function () {
  it("should understand array length", function () {
  it("should understand array literals", function () {
  });
  });
  });
  });
  });
  });
  });
describe("About Arrays", function() {
});