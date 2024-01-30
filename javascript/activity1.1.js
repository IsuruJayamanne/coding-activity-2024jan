// add daysTo method to js Date 
Date.prototype.daysTo = function(toDate){
    // validate toDate
    if (!(otherDate instanceof Date)) {
        throw new Error('Argument should be an instance of Date object');
    }

    // calculate date diff
    let diffMilliseconds = otherDate - this;
    return Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));
}

// demo

let d1 = new Date('2024-01-21');
let d2 = new Date('2024-01-23');
