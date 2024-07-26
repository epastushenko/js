"use strict";

function mathOperations(num1 = 10, num2 = 4) {
  console.log("adding =>", num1 + num2);
  console.log("subtraction =>", num1 - num2);
  console.log("multiply =>", num1 * num2);
  console.log("divide =>", num1 / num2);
  console.log("exponentiation =>",  Math.sqrt(num1, num2));
  console.log("square root =>", Math.sqrt(num2));
};

function typeOperations(result) {
  result = "string";
  console.log("To string =>", result);
  result = 2;
  console.log("To number =>", result);
  result = !!result;
  console.log("To boolean =>", result);
};

mathOperations();
typeOperations();