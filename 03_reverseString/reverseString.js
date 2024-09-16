const reverseString = function(string) {
    let stringLength = string.length;
    let reversedString = "";
    for (let i = stringLength -1; i >= 0; i--) {
        reversedString += string[i];

     }
    console.log(reversedString);
    
};
reverseString("Hello")

// Do not edit below this line
module.exports = reverseString;
