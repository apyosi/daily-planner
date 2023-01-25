let $currentDayEl = $("#currentDay");
$currentDayEl.text(moment().format("dddd, MMMM Do hh:mm:ss"));
let containerEl = $(".container");

let hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
let currentHour = parseInt((moment().format("h")));
console.log(currentHour);
console.log(typeof(currentHour));

for (let i = 0; i < hoursArray.length; i++) {
  const hour = hoursArray[i];
  let cssClass = "";
  if ( hour > currentHour) {
    cssClass = "future";
  } else if ( hour < currentHour ) {
    cssClass = "past";
  } else  {
    cssClass = "present";
  }
  console.log(cssClass);
  let getLocalStorage = localStorage.getItem(hour) || "";
  let row = `<div class="row">
  <div class="col-2 time-block hour">${hour}</div>
  <textarea class="col-8 ${cssClass}">${getLocalStorage}</textarea>
  <button class="col-2 saveBtn" data-hour="${hour}">💾</button>
</div>`;
  console.log(hour);
  containerEl.append(row);
  
}

$("button").on("click", (event) => {
  console.log(event);
  console.log(event.target);
  let key = $(event.target).attr("data-hour");
  let value = $(event.target).siblings("textarea").val();
  localStorage.setItem(key, value);
  console.log(value);
  
});
