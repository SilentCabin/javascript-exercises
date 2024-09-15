const repeatString = function(string, num) {
    let word = ""; // create an empty variable to store our string
    if (num < 0) {
        word = "ERROR" // error if less than 0
    } else{
        
        for (let i = 0; i < num; i++) { // initiate counter for the amount of defined times
            word += string;    // change our empty variable to our string, however many times it needs to be repeated
            
        }}
        return word; // return final string
    };
    
    // Do not edit below this line
    module.exports = repeatString;
    