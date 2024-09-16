const reverseString = function(string) {
    let stringLength = string.length;
    let reversedString = "";
    for (let i = stringLength -1; i >= 0; i--) { // stringLength - 1 because length is 5 but in an array the 1st letter is 0 not 1
        reversedString += string[i];

     }
    return(reversedString);
    
};

// Do not edit below this line
module.exports = reverseString;
