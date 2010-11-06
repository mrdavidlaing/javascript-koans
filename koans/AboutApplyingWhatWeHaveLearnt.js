var dojox; //globals
var df = dojox.lang.functional;   

describe("About Applying What We Have Learnt", function() {

  var operations;

  beforeEach(function () { 
    operations = [
                   { direction: "RT", distance: 200},
                   { direction: "FWD", distance: 50},
                   { direction: "RT", distance: 100},
                   { direction: "RT", distance: 20},
                   { direction: "FWD", distance: 200},
                   { direction: "RT", distance: 10}
                ]
  });

  /*********************************************************************************/

  it("should find a needle in a haystack (imperative)", function () {
    
    var findNeedle = function (ops) {
      var hasInvalidOperation = false;
      for (var i = 0; i < ops.length; i+=1) { 
        if (ops[i].direction === "FWD" && ops[i].distance > 100) { 
          hasInvalidOperation = true; 
          break; 
        }	
      }

      return hasInvalidOperation;
    };
    
    expect(findNeedle(operations)).toBe(__);
  });

  it("should find needle in a haystack (functional)", function () {
    expect(df.some(operations, "x.direction === 'FWD' && x.distance > 100")).toBe(__); 
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    
    var sum = 0;
    for(var i=1; i<=1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    
    expect(sum).toBe(__);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
    var sumIfMultipleOf3Or5 = function (sum, next) {
      if (next % 3 === 0 || next % 5 === 0) {
        return sum + next;
      }
      return sum;	
    };
    var numbers = df.repeat(1000, "+1", 1);

    expect(df.reduce(numbers, sumIfMultipleOf3Or5, 0)).toBe(__);
  });

  /*********************************************************************************/

  it("should find the sum of all the even valued terms in the fibonacci sequence which do not exceed four million (imperative)", function () {
    var sum = 0;
    var fib = [0,1,1];
    var i = 3;	
    var currentFib = 0;
    
    do {
      currentFib = fib[i] = fib[i-1] + fib[i-2];
      if (currentFib % 2 === 0) {
        sum += currentFib;
      }
      i+=1;
    } while (currentFib < 4000000);
    
    expect(sum).toBe(__);
  });

  it("should find the sum of all the even valued terms in the fibonacci sequence which do not exceed four million (functional)", function () {
    var calcNextFibTuple = function(item, index, array) {
      return [item[1], item[0]+item[1]];
    };
    var addEven = function(result, item) {
      if (item[0]  % 2 === 0) { 
        return result + item[0];
      }
      return result;
    };
    var fib = df.until("item[0] > 4000000", calcNextFibTuple, [0,1]);
    var sum = df.reduce(fib, addEven, 0);
    
    expect(sum).toBe(__);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {
  
  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    
  });

  it("should what is the smallest number divisible by each of the numbers 1 to 20", function () {
      
    
  });

  it("should what is the difference between the sum of the squares and the square of the sums", function () {
    
  });

  it("should find the 10001st prime", function () {

  });
  */
});
