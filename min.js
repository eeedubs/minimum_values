function min(numbers) {
    // Write code here that returns the smallest value in numbers
    var values = [];
    for (var x = 0; x < numbers.length; x++){
      var tempOne = numbers[x];
      values.push(tempOne);
    }
    // We now have the numbers in an array
    for (var y = 0; y < values.length; y++){
      for (var z = 0; z < values.length; z++){
        if (values[y] > values[z]){
          var tempTwo = values[z];
          values[y] = values[z];
          values[z] = tempTwo;
        }
      }
    }
return values[0];
}

/*
 * This is some test runner code that's simply calling our min function defined
 * above to verify it's returning the proper minimum. Do not modify it!
 */

var flightPrices = [1260, 490, 599, 1400, 820];
console.log("The cheapest flight amongst $1260, $490, $599, $1400 and $820 costs $" + min(flightPrices));

var golfScores = [-1, 3, 0, -4, 1, 4, -2];
console.log("The winning golf score amongst -1, 3, 0, -4, 1, 4 and -2 is " + min(golfScores));

var pageNumbers = [232];
console.log("The shortest book out of a list of single book with 232 pages has " + min(pageNumbers) + " pages");

var temperatures = [45, 10, -20, 0, 3, -20];
console.log("The coldest temperature amongst 45C, 10C, -20C, 0C, 3C and -20C is " + min(temperatures) + "C");

