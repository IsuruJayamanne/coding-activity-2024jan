const axios = require('axios');
require('dotenv').config();

//code

/**
 * Method to get busy intervals from calendar
 * @param {string} apiKey - The API key for google calendar API.
 * @param {Date} startTime - Start time of the interval .
 * @param {Date} endTime - End time of the interval.
 * @param {string} calendarId - The ID of the calendar. (Defaults = user's primary calendar).
 * @returns {Promise<{start:Date, end:Date}[]>} - Promise of an Array of busy intervals
 */
async function getBusyIntervals(apiKey, startTime, endTime, calendarId = "primary") {
    const url = `https://www.googleapis.com/calendar/v3/freeBusy?key=${apiKey}`;

    try {
        const response = await axios.post(url, {
            timeMin: startTime.toISOString(),
            timeMax: endTime.toISOString(),
            items: [{ id: calendarId }]
        });

        const busyIntervals = response.data.calendars[calendarId].busy;
        // console.log(JSON.stringify(response.data, null, 2))
        return busyIntervals;
    } catch (error) {
        console.error('Error - API request: ' + error);
        throw error;
    }
}

// demo

// api key
let apiKey = process.env.API_KEY;

// calendar id
let calendarId = process.env.CALENDAR_ID;

let startTime = new Date("2024-01-01");
let endTime = new Date("2024-01-30");

getBusyIntervals(apiKey, startTime, endTime, calendarId)
.then((busyIntervals) => {
    console.log(busyIntervals);
})
.catch((error) => {
    console.error(error);
});

/**
Assumption: the calendar is publically available
*/