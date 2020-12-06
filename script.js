////// Implement Current Day
$("#currentDay").text(
  luxon.DateTime.local().toLocaleString({
    weekday: "long",
    month: "long",
    day: "2-digit",
  })
);

//Create a function that styles the timeblocks in real time
//past, present & future
let currentTime = luxon.DateTime.local({
  hour: "2-digit",
});

//When save button is clicked, store input to local storage
