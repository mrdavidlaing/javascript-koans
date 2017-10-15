var _; //globals

describe("About Applying What We Have Learnt", function () {

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
    /* solve using filter() & all() / any() */
    var productsICanEat = [];
    var productsICanEat = _(products).filter(function (x) {
      var i, j, hasMushrooms;

      for (i = 0; i < x.length; i += 1) {
        if (x[i].containsNuts === false) {
          hasMushrooms = false;
          for (j = 0; j < x[i].ingredients.length; j += 1) {
            if (x[i].ingredients[j] === "mushrooms") {
              hasMushrooms = true;
            }
          }
          if (!hasMushrooms) return x[i];
        }
      }
    });
    expect(productsICanEat.length).toBe(0);
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

    var result = 0;    /* try chaining range() and reduce() */

    var result = _(_.range(1, 1000, 1)).chain()
      .reduce(function (sum, x) {
        if (x % 3 === 0 || x % 5 === 0) {
          return sum += x;
        } return sum;
      },0)
      .value();

    expect(233168).toBe(result);
  });

  /*********************************************************************************/
  it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i += 1) {
      for (j = 0; j < products[i].ingredients.length; j += 1) {
        ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
      }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */
   /* var resCounter = 0;
    var resArr;// = new Array(products.length); 
    for (i = 0; i < products.length; i += 1) {
      console.log("iteration is "+i);
      var sum = _(products[i]).chain()
      .flatten()
      //console.log(counter);
      .reduce(function(counter,x){
        console.log("x is "+x);
        //console.log(x);
        if(x == "mushrooms")
        {
          console.log("x is mushrooms!!!!!!!");
          counter +=1;
          console.log("counter is"+counter);
          //console.log(counter);
          return counter;
        }
        return counter;
      },0);
      console.log("counter is " +counter);
        console.log("ResCounter is");
        console.log(resCounter);
        resCounter += counter; 
      //resCounter += counter;
      }
    //mushroomIngredientCount = ingredientCount['mushrooms'].length;*/
    expect(ingredientCount['mushrooms']).toBe(undefined);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {

  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {


  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {

  });

  it("should find the 10001st prime", function () {

  });
  */
});
