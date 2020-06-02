/* Spread operator allows us to expand arrays and other expressions as an argument or as an array
where multiple parameters or elements are expected.

Copy all contents of arr1 into another array arr2 using spread operator.*/

const arr1 = ['JAN','FEB','MAR','APR','MAY'];

let arr2;

arr2 = [...arr1];

console.log(arr2);

