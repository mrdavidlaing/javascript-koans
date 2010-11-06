describe("About Arrays", function() {

  //We shall contemplate truth by testing reality, via spec expectations.  
  it("should create arrays", function() {
    var emptyArray = [];
    expect(__).toBe(typeof(emptyArray)); //A mistake? - http:javascript.crockford.com/remedial.html
    expect(__).toBe(emptyArray.length);

    var multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    expect(__).toBe(multiTypeArray[0]);
    expect(__).toBe(multiTypeArray[2]);
    expect(__).toBe(multiTypeArray[3]());
    expect(__).toBe(multiTypeArray[4].value1);
    expect(__).toBe(multiTypeArray[4]["value2"]);
    expect(__).toBe(multiTypeArray[5][0]);
  });

  it("should understand array literals", function () {
    var array = [];
    expect([]).toEqual(array);
    
    array[0] = 1;
    expect([1]).toEqual(array);
    
    array[1] = 2;
    expect([1, __]).toEqual(array);
    
    array.push(3);
    expect(__).toEqual(array);
  });

  it("should understand array length", function () {
    var fourNumberArray = [1, 2, 3, 4];

    expect(__).toBe(fourNumberArray.length);
    fourNumberArray.push(5, 6);
    expect(__).toBe(fourNumberArray.length);

    var tenEmptyElementArray = new Array(10); 
    expect(__).toBe(tenEmptyElementArray.length);

    tenEmptyElementArray.length = 5;
    expect(__).toBe(tenEmptyElementArray.length);
  });

  it("should slice arrays", function () {
    var array = ["peanut", "butter", "and", "jelly"];
    
    expect(__).toEqual(array.slice(0, 1));
    expect(__).toEqual(array.slice(0, 2));
    expect(__).toEqual(array.slice(2, 2));
    expect(__).toEqual(array.slice(2, 20));
    expect(__).toEqual(array.slice(3, 0));
    expect(__).toEqual(array.slice(3, 100));
    expect(__).toEqual(array.slice(5, 1));
  });

  it("should know array references", function () {
    var array = [ "zero", "one", "two", "three", "four", "five" ];

    function passedByReference(refArray) {
        refArray[1] = "changed in function";
    }
    passedByReference(array);
    expect(__).toBe(array[1]);

    var assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    expect(__).toBe(array[5]);

    var copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    expect(__).toBe(array[3]);
  });

  it("should push and pop", function () {
    var array = [1, 2];
    array.push(3);

    expect(__).toEqual(array);
    
    var poppedValue = array.pop();
    expect(__).toBe(poppedValue);
    expect(__).toEqual(array);
  });

  it("should shifting arrays", function () {
    var array = [1, 2];

    array.unshift(3);
    expect(__).toEqual(array);
    
    var shiftedValue = array.shift();
    expect(__).toEqual(shiftedValue);
    expect(__).toEqual(array);
  });  
});
