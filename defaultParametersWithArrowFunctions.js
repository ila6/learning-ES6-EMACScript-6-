/* In order to create more flexible functions, ES 6 introduces default parameters for functions. 
Write a function increment by adding default parameter so that it will add 1 to number if value is not specified.*/

const increment = (number, value = 1) => number + value; 

console.log(increment(5)); //if value is not specified like in this case value has default value.

