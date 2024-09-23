const removeFromArray = function(array, ...args) {
    let newArray = [];
    array.forEach((element) => {
        // if(element.includes(args)) {   // this just did not want to work.
        //     newArray.push(element);
        // }
        if(!args.includes(element)) { // check to see if element is NOT in args
            newArray.push(element) // only push element if not in args
        
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
