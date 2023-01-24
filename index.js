let $currentDayEl = $("#currentDay");
$currentDayEl.text(moment().format("dddd, MMMM Do"));
let containerEl = $(".container");

let hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];


for (let i = 0; i < hoursArray.length; i++) {
  const hour = hoursArray[i];
  let getLocalStorage = localStorage.getItem(hour) || "";
  let row = `<div class="row">
  <div class="col-2 time-block hour">${hour}</div>
  <textarea class="col-8">${getLocalStorage}</textarea>
  <button class="col-2 saveBtn" data-hour="${hour}">
    <i class="fa fa-save" aria-hidden="true"></i>
  </button>
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
  
});
