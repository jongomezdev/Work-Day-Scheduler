////// Implement Current Day
$("#currentDay").text(
  luxon.DateTime.local().toLocaleString({
    weekday: "long",
    month: "long",
    day: "2-digit",
  })
);

let currentTime = luxon.DateTime.local().toLocaleString({
  hour: "2-digit",
  minute: "2-digit",
});

console.log(currentTime);
