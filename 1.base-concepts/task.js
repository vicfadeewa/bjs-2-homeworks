"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = b * b - 4 * a * c;

  if (d < 0) {
    return arr;
  }

  if (d === 0) {
    let x = -b / (2 * a);
    arr.push(x);
    return arr;
  }

  if (d > 0) {
    let sqrtD = Math.sqrt(d);
    let x1 = (-b + sqrtD) / (2 * a);
    let x2 = (-b - sqrtD) / (2 * a);
    arr.push(x1, x2);
    return arr;
  }

  return arr;  
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }

  if (countMonths <= 0 || amount <= 0) {
    return 0;
  }

  let monthlyRate = (percent / 100) / 12;
  let loanBody = amount - contribution;

  if (loanBody <= 0) {
    return 0;
  }

  let monthlyPayment = loanBody * (
    monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1))
  );
  let totalPayment = monthlyPayment * countMonths;

  return Number(totalPayment.toFixed(2));
}
