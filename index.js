function add(inputString) {
    let sum = 0;
    let delimiter = ",";
    let negativeNumbers = [];

    //Base case, if string is empty
    if(inputString === "") {
        return sum;
    };

    //Split with delimiter
    const stringSplit = inputString.split(delimiter);

    //Calculate Sum
    for(const numAsString of stringSplit) {
        const num = parseInt(numAsString);

        if(num < 0) {
            negativeNumbers.push(num);
        } else {
            sum += num;
        }
    }

    //Throw error incase of string contains negative numbers
    if(negativeNumbers.length > 0) {
        console.log(negativeNumbers.join(","))
        throw new Error("Negative number are not allowed " + negativeNumbers.join(","));
    }

    return sum;
}

module.exports = { add };