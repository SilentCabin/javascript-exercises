const sumAll = function(num1, num2) {
    
    // Check if num1 and num2 are valid inputs
    if (typeof num1 !== 'number' || 
        typeof num2 !== 'number' || 
        num1 < 0 || 
        num2 < 0 || 
        !Number.isInteger(num1) || 
        !Number.isInteger(num2)) {
            
            console.log("ERROR");  
            return "ERROR";        // Return error if invalid input
        }
        
        let total = 0;
        
        //  When num1 is less than num2
        if (num1 < num2) {
            // Sum all numbers between num1 and num2 (inclusive)
            for (let i = num1; i <= num2; i++) {
                total += i;
            }
            
            console.log(total);  
            return total;        
        } 
        
        // When num1 is greater than num2
        else if (num1 > num2) {
            // Sum all numbers between num2 and num1 (inclusive)
            for (let i = num2; i <= num1; i++) {
                total += i;
            }
            
            console.log(total);  
            return total;        
        }
    };
    
    // Do not edit below this line
    module.exports = sumAll;
    