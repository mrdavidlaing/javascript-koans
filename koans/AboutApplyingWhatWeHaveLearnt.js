var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      /* solve using filter() & all() / any() */
      productsICanEat = products
          .filter((product) => product.containsNuts === false)
          .filter((product) => !product.ingredients.includes("mushrooms"));

      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
      /* try chaining range() and reduce() */
      var sum = _.range(1000)
          .filter((i) => i % 3 === 0 || i % 5 === 0)
          .reduce(function (sum, x) { return sum + x});

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */
    _(products)
        .chain()
        .map(product => product.ingredients)
        .flatten()
        .reduce((allNames, name) => {
          const currCount = allNames[name] || 0;
          allNames[name] = currCount + 1;
          return allNames;
        }, ingredientCount)
        .value();

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */

  it("should find the largest prime factor of a composite number", function () {

    function getLargestPrimeFactor(inputNumber) {
        for(let i = inputNumber - 1; i > 1; i--) {
            if (inputNumber % i === 0 && isSimpleNumber(i)) {
                return i;
            }
        }
        return `${inputNumber} is simple number`;
    }

    function isSimpleNumber(num) {
        for(let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    expect(getLargestPrimeFactor(323)).toBe(19);
  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    function getMaxPalindrome() {
        let max = 0;
        for(let i = 999; i >= 100; i--) {
            for(let j = 999; j >= 100; j--) {
                let result = i*j;
                if (result > max && isPalindrome(result)) {
                    max = result;
                }
            }
        }
        return max;
    }

    function isPalindrome(number) {
        let str = number.toString();
        let countStr = str.length;

        if (countStr === 0 || countStr === 1) {
            return true;
        }

        let index = 0;

        while (index <= countStr / 2) {
            if (str[index] !== str[countStr - index - 1]) {
                return false;
            }
            index++;
        }

        return true;
    }

    expect(getMaxPalindrome()).toBe(906609);
  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {

    function getSmallestNumber1to20() {
        let mapResult = new Map();
        for(let i = 1; i <= 20; i++) {
            for (const [key, value] of getPrimeFactorsWithNumberOfOccurrences(i).entries()) {
                if (!mapResult.has(key) || mapResult.get(key) < value) {
                    mapResult.set(key, value);
                }
            }
        }

        let result = 1;
        for (const [key, value] of mapResult.entries()) {
            result = result * Math.pow(key,value);
        }

        return result;
    }

    // Определяем простое ли число
    function isSimpleNumber(num) {
        if (num === 1) {
            return false;
        }
        for(let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    // Получаем степень вхождения делителя в числе (пример, у числа '8' делитель '2' входит 3 раза = 2*2*2)
    function getNumberOfOccurrences(value, divisor) {
        if (value === 0 || divisor === 0) {
            return 0;
        }
        if (value === divisor) {
            return 1;
        }
        if (divisor === 1) {
            return value;
        }
        let result = 0;
        while (value % divisor === 0) {
            value = value / divisor;
            result++;
        }

        return result;
    }

    // Получаем мапу всех простых делителей числа с количеством вхождений (6 = {3 => 1, 2 => 1}  8 = {2 => 3})
    function getPrimeFactorsWithNumberOfOccurrences(inputNumber) {
        let mapDivisor = new Map();
        for(let i = inputNumber; i > 0; i--) {
            if ((inputNumber % i === 0 || inputNumber === i) && isSimpleNumber(i)) {
                mapDivisor.set(i, 1);
            }
        }

        for (const [key, value] of mapDivisor.entries()) {
            mapDivisor.set(key, getNumberOfOccurrences(inputNumber, key));
        }

        return mapDivisor;
    }


    expect(getSmallestNumber1to20()).toBe(232792560); // 3724680960(если просто перемножить от 1 до 20)
  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {
    function between(...nums) {
        let sumSquares = nums.reduce(function (sumSquares, x) { return sumSquares + x*x});
        console.log('sumSquares = ' + sumSquares);

        let squaresSum = nums.reduce(function (squaresSum, x) { return squaresSum + x});
        squaresSum = squaresSum * squaresSum;
        console.log('squaresSum = ' + squaresSum);

        return sumSquares - squaresSum;
    }

    expect(between(1,2,3)).toBe(-22);
  });

  it("should find the 10001st prime", function () {
    function getPrime(simpleIndex) {
        let i = 1;
        let iteration = 0;
        while (true) {
            iteration++;
            if (isSimpleNumber(iteration)) {
                if (i === simpleIndex) {
                    return iteration;
                }
                i++;
            }
        }
    }

    // Определяем простое ли число
    function isSimpleNumber(num) {
        if (num === 1) {
            return false;
        }
        for(let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    expect(getPrime(10001)).toBe(104743);
  });
});
