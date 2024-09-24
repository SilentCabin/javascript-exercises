const sumAll = function(num1, num2) {
    let total = 0;
    if(num1 < num2){
        for (let i = num1; i <= num2; i++) { // create a loop for all numbers between num1 and num2
            total += i;
        }
        console.log(total);
        return total;
    } else if(num1 > num2) {
        for (let i = num2; i <= num1; i++) {
            total += i;            
        }
        console.log(total);
        return total;
        
    }
};
sumAll(3, 10);
// Do not edit below this line
module.exports = sumAll;
