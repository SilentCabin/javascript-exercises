// Leap years are years divisible by four (like 1984 and 2004). 
// However, years divisible by 100 are not leap years (such as 1800 and 1900) 
// unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).
// (Yes, it's all pretty confusing, but not as confusing as having July in the middle of the winter,
// which is what would eventually happen.)



const leapYears = function(year) {
    if(year % 100 == 0 && year % 400 !== 0){
        console.log("False");
        return false;
        
    } else if( year % 4 == 0){
        console.log("True");
        return true;
    } else {
        console.log("False");
        return false;
    }
};
leapYears(1600);
// Do not edit below this line
module.exports = leapYears;
