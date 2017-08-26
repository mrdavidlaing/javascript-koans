var _; //globals

/*
 * 이 파일에서는 underscore라는 라이브러리를 사용합니다.
 * http://underscorejs.org/
 */
describe("Higher Order Functions", function () {

	it("filter", function () {
		var numbers = [1,2,3];
		var odd = _(numbers).filter(function (x) { return x % 2 !== 0 });  // 

		expect(odd).toEqual([1,3]); // [1,3]
		expect(odd.length).toBe(2); // 2
		expect(numbers.length).toBe(3); // 3
	});
	/*
		참조 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

		function isBigEnough(value) {
			return value >= 10;
		}
		var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
		// filtered 는 [12, 130, 44]

		
		array.filter랑 동작은 같다.
		Argument로 넣어준 함수의 리턴값이 true인지 아닌지에 따라
		통과하는 녀석들만 배열에 담아서 새로 배열을 생성하는 것!

	*/

	it("map", function () {
		var numbers = [1, 2, 3];
		var numbersPlus1 = _(numbers).map(function(x) { return x + 1 });

		expect(numbersPlus1).toEqual([2, 3, 4]);
		expect(numbers).toEqual([1, 2, 3]);
	});
	/*
	arr.map(callback[, thisArg])

	 메소드는 배열 내의 모든 요소 각각에 대하여  제공된 함수(callback)를 호출하고, 그 결과를 모아서,  새로운 배열을 반환합니다.
	*/

	it("reduce", function () { // reduce 배열의 total
		var numbers = [1, 2, 3];
		var reduction = _(numbers).reduce(
						function(/* result from last call */ memo, /* current */ x) { return memo + x }, /* initial */ 0);

		expect(reduction).toBe(6); // 6
		expect(numbers).toEqual([1, 2, 3]); // [1, 2, 3]
	});

	it("forEach", function () { // Each 배열의 행을나타냄, forEach 반복중에 배열이 수정되면 다른 요소를 건너 뛸 수 있다.
		var numbers = [1,2,3];
		var msg = "";
		var isEven = function (item) {
			msg += (item % 2) === 0;
		};

		_(numbers).forEach(isEven);

		expect(msg).toEqual("falsetruefalse"); // "falsetruefalse"
		expect(numbers).toEqual([1,2,3]); // [1,2,3]
	});

// 모르겠다.
	it("all", function () {
		var onlyEven = [2,4,6];
		var mixedBag = [2,4,5,6];

		var isEven = function(x) { return x % 2 === 0 };

		expect(_(onlyEven).all(isEven)).toBe(true); // true
		expect(_(mixedBag).all(isEven)).toBe(false); // false
	});

	it("any" , function () {
		var onlyEven = [2,4,6];
		var mixedBag = [2,4,5,6];

		var isEven = function(x) { return x % 2 === 0 };

		expect(_(onlyEven).any(isEven)).toBe(true); // true
		expect(_(mixedBag).any(isEven)).toBe(true); // true
	});

	it("range", function() { // 
			expect(_.range(3)).toEqual([0, 1, 2]); // [0, 1, 2]
			expect(_.range(1, 4)).toEqual([1, 2, 3]); // [1, 2, 3]
			expect(_.range(0, -4, -1)).toEqual([ 0, -1, -2, -3 ]); // [ 0, -1, -2, -3 ]
	});

	it("flatten", function() {
			expect(_([ [1, 2], [3, 4] ]).flatten()).toEqual([1, 2, 3, 4]);
	});

	it("chain과 value", function() {
			var result = _([ [0, 1], 2 ]).chain()
				.flatten() // [0, 1, 2]
				.map(function(x) { return x+1 } ) // [1, 2, 3]
				.reduce(function (sum, x) { return sum + x }) // 6
				.value();

			expect(result).toEqual(6); // 6
	});

});

