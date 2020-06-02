/* With rest parameters you can create functions that take number of arguments. These arguments are stored in array that
can be accessed later from the inside of a function.  

write a functions sum using rest parameters in such a way that the function sum is able to take any number of arguments
and return their sum.*/

const sum = (...args) => {

    return args.reduce((a,b) => a+b, 0); //if arguments are passed as 0,1,2 they will be added if no arguments are passed it will return 0.
}