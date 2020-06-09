import { fifaData } from './fifa.js';
// console.log(fifaData);

// console.log('its working');
// ⚽️ M  V P ⚽️ //

//Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 
//(a) Home Team name for 2014 world cup final
        function task1A(myArray){
            let index = 0;
            for (index in myArray){
            if (myArray[index].Year == 2014 && myArray[index].Stage =="Final"){
                return(fifaData[index]["Home Team Name"]);
                index++;
            }    
            else  {
                index++;
            }
            }
            }
            console.log(task1A(fifaData));

//(b) Away Team name for 2014 world cup final
        function task1B(myArray){
            let index = 0;
            for (index in myArray){
            if (myArray[index].Year == 2014 && myArray[index].Stage =="Final"){
                return(fifaData[index]["Away Team Name"]);
                index++;
            }    
            else  {
                index++;
            }
            }
            }
            console.log(task1B(fifaData));

//(c) Home Team goals for 2014 world cup final
        function task1C(myArray){
            let index = 0;
            for (index in myArray){
            if (myArray[index].Year == 2014 && myArray[index].Stage =="Final"){
                return(fifaData[index]["Home Team Goals"]);
                index++;
            }    
            else  {
                index++;
            }
            }
            }
            console.log(task1C(fifaData));

//(d) Away Team goals for 2014 world cup final
        function task1D(myArray){
            let index = 0;
            for (index in myArray){
            if (myArray[index].Year == 2014 && myArray[index].Stage =="Final"){
                return(fifaData[index]["Away Team Goals"]);
                index++;
            }    
            else  {
                index++;
            }
            }
            }
            console.log(task1D(fifaData));

//(e) Winner of 2014 world cup final
        function task1E(myArray){
            let index = 0;
            for (index in myArray){
            if (myArray[index].Year == 2014 && myArray[index].Stage =="Final"){
                return(fifaData[index]["Win conditions"]);
                index++;
            }    
            else  {
                index++;
            }
            }
            }
            console.log(task1E(fifaData));


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    // Syntax
    // var new_array = arr.filter(function callback(element, index, array) {
    //     // Return true or false
    // }[, thisArg])
    
    let allFinals = data.filter((data) => {return ( data.Stage) === "Final" ;    });

    return(allFinals);

};
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb){
    let finalsYears = cb.map((cb) => {return ( cb.Year)  });

    return(finalsYears);
    }

    console.log(getYears(getFinals(fifaData)));



 //Don't Freak out there is no Task 4 on the master!!!
 
 
/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(winners) {
// does NOT work moving on 
    //  let winners = [];

//     for (let  i = 0 ; i < cb.length;  i++ ) {
//        if (cb["Away Team Goals"]  === cb["Home Team Goals"])  {
//             winners.push("There was a tie - " + cb["Win conditions"]);
//         }
//     else if (cb["Away Team Goals"]  > cb["Home Team Goals"]) {
//         winners.push(cb["Away Team Goals"]);
//     }
//     else {
//         winners.push(cb["Home Team Goals"]);
//     }
//     }       
//         return(winners);

   

//}
//    console.log(getWinners(getFinals(fifaData)));





/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

 //cant so cus up doe snot work and I have yet to get good

// function getWinnersByYear(/* code here */) {

// };

// getWinnersByYear();

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

  

};

getAverageGoals(fifaData);
