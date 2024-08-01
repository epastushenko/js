"use strict";

function recursiveOddSumTo(number) {
  if(number <= 0) {
    return 0;
  } else {
    return (number % 2 !== 0 ? number : 0) + recursiveOddSumTo(number - 1)
  }
};
  
console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25

function iterativeOddSumTo(number) {
  let result = 0;
  for(let i = 0; i <= number; i++) {
    if(i % 2 !== 0) {
      result += i;
    }
  }
  return result;
};
  
console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(10)) // 25