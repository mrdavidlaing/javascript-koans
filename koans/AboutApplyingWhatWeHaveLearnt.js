var _; //globals

describe("About Applying What We Have Learnt", function () {

    var products;

    beforeEach(function () {
        products = [
            {name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false},
            {name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false},
            {name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false},
            {name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true},
            {name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true}
        ];
    });

    /*********************************************************************************/

    it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

        var i, j, hasMushrooms, productsICanEat = [];

        for (i = 0; i < products.length; i += 1) {
            if (products[i].containsNuts === false) {
                hasMushrooms = false;
                for (j = 0; j < products[i].ingredients.length; j += 1) {
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
        productsICanEat = _(products).filter(function (product) {
            return !product.containsNuts && !_(product.ingredients).any(function (ingredient) {
                return ingredient === "mushrooms"
            });
        });

        expect(productsICanEat.length).toBe(1);
    });

    /*********************************************************************************/

    it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

        var sum = 0;
        for (var i = 1; i < 1000; i += 1) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }

        expect(sum).toBe(233168);
    });

    it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

        var sum = _(_.range(1, 1000))
            .chain()
            .filter(function (num) {
                return num % 3 === 0 || num % 5 === 0;
            })
            .reduce(function (sum, num) {
                return sum + num;
            }).value();    /* try chaining range() and reduce() */

        expect(233168).toBe(sum);
    });

    /*********************************************************************************/
    it("should count the ingredient occurrence (imperative)", function () {
        var ingredientCount = {"{ingredient name}": 0};

        for (i = 0; i < products.length; i += 1) {
            for (j = 0; j < products[i].ingredients.length; j += 1) {
                ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
            }
        }

        expect(ingredientCount['mushrooms']).toBe(2);
    });

    it("should count the ingredient occurrence (functional)", function () {
        var ingredientCount = {"{ingredient name}": 0};

        /* chain() together map(), flatten() and reduce() */
        _(products).chain()
            .map(function (product) { return product.ingredients;})
            .flatten()
            .reduce(function (memo, ingredient) { memo[`${ingredient}`] = (memo[`${ingredient}`] || 0) + 1; return memo}, ingredientCount)
            .value();

        expect(ingredientCount['mushrooms']).toBe(2);
    });


    it("should find the largest prime factor of a composite number", function () {
        function isPrime(number) {
            for(let i= number-1; i>1; i--){
                if(number%i===0) return false;
            }
            return true;
        }

        function biggestPrimeFactor(number) {
            for(let i=number;i>1;i--){
                if(number%i===0 && isPrime(i)){
                    return i;
                }
            }
            return 1;
        }

        expect(biggestPrimeFactor(6857)).toBe(6857);
    });


    it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
        function isPoly(number) {
            let strNumber = `${number}`
            let coefficient = strNumber.length % 2 === 0 ? 0 : 1;
            let strNumber1 = strNumber.slice(0, (strNumber.length - coefficient) / 2);
            let strNumber2 = strNumber
                .slice((strNumber.length + coefficient) / 2, strNumber.length)
                .split("")
                .reverse()
                .join("");
            return strNumber1 === strNumber2;
        }

        function biggestPoly() {
            let result = 1;
            for(let i=999;i>99;i--){
                for(let j=i-1;j>99;j--){
                    if(isPoly(i*j) && result<(i*j)){
                        result = i*j;
                    }
                }
            }
            return result;
        }

        expect((biggestPoly())).toBe(906609);
    });


    it("should find the smallest number divisible by each of the numbers 1 to 20", function () {

        function isDividedBy(rangeStart, rangeEnd, number) {
            console.log(`number: ${number}`);
            let result = true;
            _(_.range(rangeStart, rangeEnd+1)).forEach(function (factor) {
                     if(number % factor !== 0) {
                         console.log(factor);
                         result = false;
                     }
                 });
            return result;
        }

        function gcd(number1, number2) {
            return number2 === 0 ? number1 : gcd(number2, number1%number2);
        }
        function lcm(number1, number2) {
            return number1/gcd(number1, number2)*number2;
        }

        let expectedNumber = 2;
        for(let i=2;i<=20;i++){
            expectedNumber = lcm(expectedNumber, i);
        }

        expect(isDividedBy(1, 20, expectedNumber)).toBe(true);
    });

    /*********************************************************************************/
    /* UNCOMMENT FOR EXTRA CREDIT */
    /*
    it("should find the difference between the sum of the squares and the square of the sums", function () {

    });

    it("should find the 10001st prime", function () {

    });
    */
});
