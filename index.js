function add(inputString) {
    let sum = 0;
    let delimiter = ","; //Defaut delimiter is ","
    let negativeNumbers = [];

    //Base case, if string is empty
    if(!inputString || inputString === "") {
        return sum;
    };

    //Update delimiter if provided
    const delimiterMatchRegex = new RegExp("^\/\/(.*)\\n");
    const delimiterMatch = inputString.match(delimiterMatchRegex)

    if(delimiterMatch && delimiterMatch[1]) {
        delimiter = delimiterMatch[1];

        //remove delimiter part from input string
        inputString = inputString.substring(delimiterMatch[0].length);
    }

    //Regex to split by delimiter or \n
    const splitRegex = new RegExp(`[${delimiter}\\n]`);

    //Split with delimiter
    const stringSplit = inputString.split(splitRegex);

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
        throw new Error("Negative number are not allowed " + negativeNumbers.join(","));
    }

    return sum;
}

module.exports = { add };