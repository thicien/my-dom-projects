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
