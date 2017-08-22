describe("Arrays", function() {

  it("Array를 만듭니다.", function() {
    // FILL_ME_IN을 수정해주세요!
    var emptyArray = [];
    expect(typeof(emptyArray)).toBe(FILL_ME_IN);
    expect(emptyArray.length).toBe(FILL_ME_IN);

    var multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    expect(multiTypeArray[0]).toBe(FILL_ME_IN);
    expect(multiTypeArray[2]).toBe(FILL_ME_IN);
    expect(multiTypeArray[3]()).toBe(FILL_ME_IN);
    expect(multiTypeArray[4].value1).toBe(FILL_ME_IN);
    expect(multiTypeArray[4]["value2"]).toBe(FILL_ME_IN);
    expect(multiTypeArray[5][0]).toBe(FILL_ME_IN);
  });

  it("Array Literals로 만들기", function () {
    // FILL_ME_IN을 수정해주세요!
    var array = [];
    expect(array).toEqual([]);

    array[0] = 1;
    expect(array).toEqual([1]);

    array[1] = 2;
    expect(array).toEqual([1, FILL_ME_IN]);

    array.push(3);
    expect(array).toEqual(FILL_ME_IN);
  });

  it("Array의 length", function () {
    // FILL_ME_IN을 수정해주세요!
    var fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).toBe(FILL_ME_IN);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toBe(FILL_ME_IN);

    var tenEmptyElementArray = new Array(10);
    expect(tenEmptyElementArray.length).toBe(FILL_ME_IN);

    tenEmptyElementArray.length = 5;
    expect(tenEmptyElementArray.length).toBe(FILL_ME_IN);
  });

  it("Array의 slice", function () {
    // FILL_ME_IN을 수정해주세요!
    var array = ["peanut", "butter", "and", "jelly"];

    expect(array.slice(0, 1)).toEqual(FILL_ME_IN);
    expect(array.slice(0, 2)).toEqual(FILL_ME_IN);
    expect(array.slice(2, 2)).toEqual(FILL_ME_IN);
    expect(array.slice(2, 20)).toEqual(FILL_ME_IN);
    expect(array.slice(3, 0)).toEqual(FILL_ME_IN);
    expect(array.slice(3, 100)).toEqual(FILL_ME_IN);
    expect(array.slice(5, 1)).toEqual(FILL_ME_IN);
  });

  it("Array의 reference", function () {
    // FILL_ME_IN을 수정해주세요!
    var array = [ "zero", "one", "two", "three", "four", "five" ];

    function passedByReference(refArray) {
        refArray[1] = "changed in function";
    }

    // 이 부분을 놓치지 마시고 잘 보세요!
    passedByReference(array);

    expect(array[1]).toBe(FILL_ME_IN);

    // 이 부분을 놓치지 마시고 잘 보세요!
    var assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    expect(array[5]).toBe(FILL_ME_IN);

    // 이 부분을 놓치지 마시고 잘 보세요!
    var copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    expect(array[3]).toBe(FILL_ME_IN);
  });

  it("push와 pop", function () {
    // FILL_ME_IN을 수정해주세요!
    var array = [1, 2];
    array.push(3);

    expect(array).toEqual(FILL_ME_IN);

    var poppedValue = array.pop();
    expect(poppedValue).toBe(FILL_ME_IN);
    expect(array).toEqual(FILL_ME_IN);
  });

  it("shift와 unshift", function () {
    // FILL_ME_IN을 수정해주세요!
    var array = [1, 2];

    array.unshift(3);
    expect(array).toEqual(FILL_ME_IN);

    var shiftedValue = array.shift();
    expect(shiftedValue).toEqual(FILL_ME_IN);
    expect(array).toEqual(FILL_ME_IN);
  });
});
