function exchangeArrays(arr1, arr2) {

  let rev1 = [...arr1].reverse();
  let rev2 = [...arr2].reverse();
  arr1.length = 0;
  arr1.push(...rev2);
  arr2.length = 0;
  arr2.push(...rev1);
}
let myArray = ['a', 'b', 'c'];
let otherArray = [1, 2, 3];

function stringExpansion(s) {
    let result = '';
    let buffer = '';
    let repeat = 1; 

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (/[a-zA-Z]/.test(char)) {
            buffer += char;
        } else if (/\d/.test(char)) {
            repeat = parseInt(char);
            if (buffer) {
                result += buffer.repeat(repeat);
                buffer = '';
            }
        }
    }

    result += buffer;

    return result;
}

console.log(stringExpansion("3D2a5d2f")); // "DDDaadddddff"
console.log(stringExpansion("3abc"));     // "aaabbbccc"
console.log(stringExpansion("3d332f2a")); // "dddffaa"
console.log(stringExpansion("abcde"));    // "abcde"
console.log(stringExpansion("1111"));     // ""
console.log(stringExpansion(""));         


// exchangeArrays(myArray, otherArray);

// console.log(myArray);
// console.log(otherArray);
// function primeFactors(a, b) {
//     for(let i = 0; i < b; i++){
//         if(b % i === 0) {
//             while(b % i === 0) b /= i;
//             if(b % i !== 0) return false;
//         }
//     }
//     return true;
// }
// console.log(primeFactors(30, 12));
// console.log(primeFactors(15, 12));
// console.log(primeFactors(45, 15));
function allPrimeFactorsDivisible(a, b) {
    let num = b;
    let i = 2;
    while (i <= num) {
        if (num % i === 0) {
            if (a % i !== 0) return false; 
            while (num % i === 0) num /= i; 
        } else {
            i++;
        }
    }
    return true;
}

console.log(allPrimeFactorsDivisible(30, 12)); 
console.log(allPrimeFactorsDivisible(15, 12)); 
console.log(allPrimeFactorsDivisible(45, 15)); 



function sepStr(sentence) {
  // 1. Split sentence into words
  let words = sentence.split(' ');

  // 2. Convert each word into an array of letters
  let splitWords = words.map(word => word.split(''));

  // 3. Find the longest word length
  let maxLength = Math.max(...splitWords.map(word => word.length));

  // 4. Transpose: build rows from columns
  let result = [];
  for (let col = 0; col < maxLength; col++) {
    let newRow = splitWords.map(word => word[col] !== undefined ? word[col] : '');
    result.push(newRow);
  }

  return result;
}


function findUnique(arr) {
  // Helper functions
  const isFloat = n => n % 1 !== 0;
  const isPositive = n => n > 0;
  const isOdd = n => Math.abs(n) % 2 === 1;

  // 1. Check float vs integer
  let floats = arr.filter(n => isFloat(n));
  if (floats.length === 1) return floats[0];
  let integers = arr.filter(n => !isFloat(n));
  if (integers.length === 1) return integers[0];

  // 2. Check positive vs negative
  let positives = arr.filter(n => isPositive(n));
  if (positives.length === 1) return positives[0];
  let negatives = arr.filter(n => !isPositive(n));
  if (negatives.length === 1) return negatives[0];

  // 3. Check odd vs even
  let odds = arr.filter(n => isOdd(n));
  if (odds.length === 1) return odds[0];
  let evens = arr.filter(n => !isOdd(n));
  if (evens.length === 1) return evens[0];

  // 4. Check unique value
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

// Test examples
console.log(findUnique([1,2,3,5,7])); // 2
console.log(findUnique([2,4,6,8,9])); // 9
console.log(findUnique([2,-4,6,8]));  // -4
console.log(findUnique([-2,-4,-6,8]));// 8
console.log(findUnique([2,4.4,6,8])); // 4.4
console.log(findUnique([2.2,4.4,6.6,8])); // 8
console.log(findUnique([2,2,2,4]));   // 4
console.log(findUnique([-2,-4,-6.6,8])); // -6.6
console.log(findUnique([-2,-4,-7,8])); // 8
