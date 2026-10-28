// ============================================
//  Unit 8.8 – The Date Object
// ============================================

// ============================================
//  WARM-UP: Day Name
// ============================================

// STEP 1: Create a new Date object
let now = new Date();

// STEP 2: Use .getDay() to get the day of the week as a number.
let dayNum = now.getDay();

// STEP 3: Create an array of day names:
let days = ["Sunday", "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday"];

// STEP 4: Use the day number as an index to get the day name
let dayName = days[dayNum];

// STEP 5: Display the day name in the element with ID "warmUpDate"
document.getElementById("warmUpDate").innerHTML = dayName;


// ============================================
//  PART 1: Current Date Display
// ============================================

// STEP 6: Create a new Date object (or reuse the one from above).
// Reusing the 'now' variable created in Step 1.

// STEP 7: Get the month using .getMonth()
// Add 1 because January is 0.
let month = now.getMonth() + 1;

// STEP 8: Get the day of the month using .getDate()
let day = now.getDate();

// STEP 9: Get the year using .getFullYear()
let year = now.getFullYear();

// STEP 10: Build the date string and display it
let dateString = month + "/" + day + "/" + year;
document.getElementById("myDate").innerHTML = dateString;


// ============================================
//  PART 2: Elapsed Timer
// ============================================

// STEP 11: Record the start time 
let startTime = new Date().getTime();

// STEP 12: Create a variable to hold the timer ID and use setInterval
let timerId = setInterval(function() {
    let currentTime = new Date().getTime();
    let elapsedSeconds = (currentTime - startTime) / 1000;
    document.getElementById("myTimer").innerHTML = elapsedSeconds.toFixed(3);
}, 10);


// ============================================
//  PART 3: Start/Stop Toggle Button
// ============================================

// STEP 13: Track whether the timer is currently running
let running = true;

// STEP 14: Add a click event listener to the button (ID "myBtn").
document.getElementById("myBtn").addEventListener("click", function() {
    if (running) {
        // Stop the timer
        clearInterval(timerId);
        document.getElementById("myBtn").innerHTML = "Start";
        running = false;
    } else {
        // Record new start time and restart timer
        startTime = new Date().getTime();
        timerId = setInterval(function() {
            let currentTime = new Date().getTime();
            let elapsedSeconds = (currentTime - startTime) / 1000;
            document.getElementById("myTimer").innerHTML = elapsedSeconds.toFixed(3);
        }, 10);
        document.getElementById("myBtn").innerHTML = "Stop";
        running = true;
    }
});