/* Challenge: Replace the two assignments with an equivalent destructuring
assignment. It should still assign variables today and tomorrow from HIGH_TEMPERATURE object. 

const HIGH_TEMPERATURE = {
    
    yesterday : 75,
    today : 77,
    tomorrow : 80
};

const today = HIGH_TEMPERATURE.today;
const tomorrow = HIGH_TEMPERATURE.tomorrow;
    
    */

   const HIGH_TEMPERATURE = {
   yesterday : 75,
   today : 77,
   tomorrow : 80
};

const {today, tomorrow} = HIGH_TEMPERATURE; //destructuring assignment of variables.


