// add daysTo method to js Date 
Date.prototype.daysTo = function(toDate){
    // validate toDate
    if (!(toDate instanceof Date)) {
        throw new Error('Argument should be an instance of Date object');
    }

    // calculate date diff
    let diffMs = toDate - this;
    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

// demo

let fromDate = new Date('2024-01-21');
let toDate = new Date('2024-01-27');

let diff = fromDate.daysTo(toDate)
console.log(diff)
