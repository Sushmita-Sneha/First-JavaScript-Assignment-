"use strict";


// Question no. 1


// function celsiusToFahrenheit(celsius) {
//   return ...;
// }

// console.log(celsiusToFahrenheit(0)); // 32
// console.log(celsiusToFahrenheit(25)); // 77


function celsiusToFahrenheit(celsius) {
 return (celsius * 9/5) + 32;

}

console.log(celsiusToFahrenheit(25));




// Question no. 2

// function isEven(num) {
//     return ...;
//   }
  
//   console.log(isEven(4)); // true
//   console.log(isEven(7)); // false

function isEven(num) {
  return num % 2 === 0;
}   

console.log(isEven(4));

console.log(isEven(7));


// Question no. 3

// function sum(a, b) {
//     return ...;
//   }
  
//   console.log(sum(3, 4)); // 7
//   console.log(sum(10, 20)); // 30


function sum(a, b) {
    return a + b;
}  

console.log(sum(3, 4));

console.log(sum(10, 20));


// Question no. 4

// function findSmallestNum(arr) {
//     return ...;
//   }
  
//   console.log(findSmallestNum([3, 5, 1, 9])); // 1
//   console.log(findSmallestNum([-1, -5, 0, 10])); // -5
  
function findSmallestNum(arr) {
       return Math.min(...arr);
}

console.log(findSmallestNum([3, 5, 1, 9]));

console.log(findSmallestNum([-1, -5, 0, 10]));



// Question no. 5

// function countVowels(str) {
//     let vowels = 'aeiouAEIOU';
//     return ...;
//   }
  
//   console.log(countVowels("hello world")); // 3
//   console.log(countVowels("Javascript")); // 3


function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("hello world"));

console.log(countVowels("Javascript"));


// Question no. 6

// function getFirstElement(arr) {
//     return ...;
//   }
  
//   console.log(getFirstElement([1, 2, 3])); // 1
//   console.log(getFirstElement(["a", "b", "c"])); // "a"
  
function getFirstElement(arr) {
    return arr[0];
}

console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));


// Question no. 7

// function isArrayEmpty(arr) {
//     return ...;
//   }
  
//   console.log(isArrayEmpty([])); // true
//   console.log(isArrayEmpty([1, 2, 3])); // false
  
function isArrayEmpty(arr) {
    return arr.length === 0;
}

console.log(isArrayEmpty([]));
console.log(isArrayEmpty([1, 2, 3]));


// console.log(typeof (isArrayEmpty([])));
// console.log(typeof (isArrayEmpty([1, 2, 3])));





// Question no. 8

// function factorialize(num) {
//     if (num === 0 || num === 1) return 1;
//     return ....;
//   }
  
//   console.log(factorialize(5)); // 120
//   console.log(factorialize(7)); // 5040
  
    function factorialize(num) {
        if (num === 0 || num === 1) return 1;
        return num * factorialize(num - 1);
    }


    console.log(factorialize(5));
    
console.log(factorialize(7));




    
// Question no. 9
    
// function reverseString(str) {
//     return ...;
//   }
  
//   console.log(reverseString("hello")); // "olleh"
//   console.log(reverseString("world")); // "dlrow"

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));

console.log(reverseString("world"));



// Question no. 10

// function toLowerCase(str) {
//     return ...;
//   }
  
//   console.log(toLowerCase("HELLO WORLD")); // "hello world"
//   console.log(toLowerCase("JavaScript")); // "javascript"


  function toLowerCase(str) {
      return str.toLowerCase();
}
  
console.log(toLowerCase("HELLO WORLD"));

console.log(toLowerCase("JavaScript")); 




// Question no. 11

// function stringLength(str) {
//     return ...;
//   }
  
//   console.log(stringLength("hello")); // 5
//   console.log(stringLength("world")); // 5


function stringLength(str) {
    return str.length;
}

console.log(stringLength("hello"));

console.log(stringLength("world"));




// Question no. 12

// function mergeArrays(arr1, arr2) {
//     return ...;
//   }
  
//   console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
//   console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]

function mergeArrays(arr1, arr2) {
     return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays(["a", "b"], ["c", "d"]));


// Question no. 13

// function getLastElement(arr) {
//     return ...;
//   }
  
//   console.log(getLastElement([1, 2, 3])); // 3
//   console.log(getLastElement(["a", "b", "c"])); // "c"

function getLastElement(arr) {
    return arr[arr.length - 1];
}

console.log(getLastElement([1, 2, 3]));

console.log(getLastElement(["a", "b", "c"]));




// Question no. 14

// function getFirstCharacter(str) {
//     return ...;
//   }
  
//   console.log(getFirstCharacter("hello")); // "h"
//   console.log(getFirstCharacter("world")); // "w"


function getFirstCharacter(str) {
    return str.charAt(0);
}
console.log(getFirstCharacter("hello"));
console.log(getFirstCharacter("world"));




// Question no. 15

// function sumArray(arr) {
//     return ...;
//   }
  
//   console.log(sumArray([1, 2, 3, 4])); // 10
//   console.log(sumArray([-1, -2, -3, -4])); // -10
//   console.log(sumArray([1.5, 2.5, 3.5])); // 7.5


function sumArray(array) {
     return array.reduce((sum, number) => sum + number, 
         0);
}


console.log(sumArray([1, 2, 3, 4]));

console.log(sumArray([-1, -2, -3, -4]));

console.log(sumArray([1.5, 2.5, 3.5]));


// JavaScript 2nd Assignment done

