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
