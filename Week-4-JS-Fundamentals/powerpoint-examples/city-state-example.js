function cityStateAddress (city, state){
    state = state.toUpperCase();
    address = `${city}, ${state}`; // backtick allows for easier formatting
    return address
}

//example expected arguments
address = cityStateAddress("Minneapolis", 'mn');
console.log(address); // Prints Minneapolis, MN

// Unexpected arguments
console.log(cityStateAddress('Minneapolis')) //error - no state so state.toUpperCase() fails
console.log(cityStateAddress('Minneapolis', 'mn', 55403)) // extra argument is ignored
console.log(cityStateAddress()) // error - no state so .toUpperCase fails; undefined value


//find max number example; Uses the variable 'arguments'
x= findMax(1, 125, 674, 342, 43);
console.log(x);

function findMax(){
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++){
        if (arguments[i] > max){
            max = arguments[i]
        }
    }
    return max;
}