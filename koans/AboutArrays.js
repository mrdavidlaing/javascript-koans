describe("About Arrays", function() {

  //We shall contemplate truth by testing reality, via spec expectations.  
  it("should create arrays", function() {
    var emptyArray = [];
    expect(typeof(emptyArray)).toBe(__); //A mistake? - http:javascript.crockford.com/remedial.html
    expect(emptyArray.length).toBe(__);

    var multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    expect(multiTypeArray[0]).toBe(__);
    expect(multiTypeArray[2]).toBe(__);
    expect(multiTypeArray[3]()).toBe(__);
    expect(multiTypeArray[4].value1).toBe(__);
    expect(multiTypeArray[4]["value2"]).toBe(__);
    expect(multiTypeArray[5][0]).toBe(__);
  });

  it("should understand array literals", function () {
    var array = [];
    expect(array).toEqual([]);
    
    array[0] = 1;
    expect(array).toEqual([1]);
    
    array[1] = 2;
    expect(array).toEqual([1, __]);
    
    array.push(3);
    expect(array).toEqual(__);
  });

  it("should understand array length", function () {
    var fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).toBe(__);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toBe(__);

    var tenEmptyElementArray = new Array(10); 
    expect(tenEmptyElementArray.length).toBe(__);

    tenEmptyElementArray.length = 5;
    expect(tenEmptyElementArray.length).toBe(__);
  });

  it("should slice arrays", function () {
    var array = ["peanut", "butter", "and", "jelly"];
    
    expect(array.slice(0, 1)).toEqual(__);
    expect(array.slice(0, 2)).toEqual(__);
    expect(array.slice(2, 2)).toEqual(__);
    expect(array.slice(2, 20)).toEqual(__);
    expect(array.slice(3, 0)).toEqual(__);
    expect(array.slice(3, 100)).toEqual(__);
    expect(array.slice(5, 1)).toEqual(__);
  });

  it("should know array references", function () {
    var array = [ "zero", "one", "two", "three", "four", "five" ];

    function passedByReference(refArray) {
        refArray[1] = "changed in function";
    }
    passedByReference(array);
    expect(array[1]).toBe(__);

    var assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    expect(array[5]).toBe(__);

    var copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    expect(array[3]).toBe(__);
  });

  it("should push and pop", function () {
    var array = [1, 2];
    array.push(3);

    expect(array).toEqual(__);
    
    var poppedValue = array.pop();
    expect(poppedValue).toBe(__);
    expect(array).toEqual(__);
  });

  it("should know about shifting arrays", function () {
    var array = [1, 2];

    array.unshift(3);
    expect(array).toEqual(__);
    
    var shiftedValue = array.shift();
    expect(shiftedValue).toEqual(__);
    expect(array).toEqual(__);
  });  
});
