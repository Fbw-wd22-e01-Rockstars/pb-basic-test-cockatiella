// Add answers here 
/* #### 1. Los or New?
Create a function named "_nameOfCity_". If a passed string begins with "_Los_" or "_New_", then return the full string. If not, return "_The city name does not begin with Los or New_". The function should be **case insensitive**. */
function _nameOfCity_(city) {
    if (city.toLowerCase().startsWith("los") || city.toLowerCase().startsWith("new")) {
        return city;
    }
    return "The city name does not begin with Los or New";
}

/* #### 2. isDivisible?
Create a function named "_isDivisible_". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false. */

function _isDivisible_ (int){
    if (int %100 === 0){
      return true
    } else {
      return false
    }
  }

/*   #### 4. What's the weather?
Use a **ternary operator** to complete this task. Create a function named "_isRaining_". If passed `true`, return "_wet day - you need an umbrella_". If passed `false`, return "_dry day - leave your umbrella at home_". */

    function _isRaining_(rain){
        return rain ? "_wet day - you need an umbrella_" : "_dry day - leave your umbrella at home_"
    }

   /*  #### 1. Sequence
    Create a function named "_geometricalSequence_" and **use a loop** to return the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string. */

    function _geometricalSequence_(){
        let result = '';
        for (let i = 1; i <= 8; i++){
            result += Math.pow(2, i);
        }
        return result;
    }

    /* #### 2. Multiples
    Create a function named "_multiplesOfThree_" and **use a loop** to return the first five multiples of three: _`3 6 9 12 15`_. Concatenate each value to a string and return a string. */

    function _multiplesOfThree_ (){
        let result = ''
            for (let i = 0; i <= 5; i++){
              result += i*3 
            }
        return result;
      }
      
      console.log(_multiplesOfThree_())

    /*   ### Math 

      #### 1. You've got the power
      Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should **use a Math object method** to make the calculation. */

        function _powerOf_(int){
            return Math.pow(int, 2);
        }

       /*  #### 1. How many? 
        Create a function named "_vowelCount_" that accepts a string as an argument. Check how many vowels (A, a, E, e, I, i, O, o, U, u) the string contains, if any. **Return the vowel count** of the string.  */


        const vowels = ["a", "e", "i", "o", "u"]

function _vowelCount_(str) {
  let counter = 0

  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      counter++
    }
  }

  console.log(`The String contains ${counter} vowel(s)`)

  return counter
}


// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

