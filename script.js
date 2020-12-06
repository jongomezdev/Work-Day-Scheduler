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

function timeBlockEl() {
  let hourEl = luxon.DateTime.local().toLocaleString({ hour: "2-digit" });

  let formattedHour = parseInt(hourEl[0] + hourEl[1]);
  if (hourEl.indexOf("PM")) {
    formattedHour += 12;
    console.log(formattedHour);
  }
  // console.log(formattedHour);
  console.log(hourEl);

  $(".time-block").each(function () {
    let currentHour = parseInt($(this).attr("id"));
    // console.log(currentHour);
    if (formattedHour > currentHour) {
      $(this).addClass("past");
    } else if (currentHour === formattedHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}
//When save button is clicked, store input to local storage

timeBlockEl();
