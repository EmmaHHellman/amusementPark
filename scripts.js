$(document).ready(function() {
  const height = parseInt(prompt("Enter your height in inches-- we'll show you the rides you can ride!"));

  if(height < 60 && height > 48) {
    $("#slide").show();
    $("#ferrisWheel").show();
  } else if (height > 60 && height < 72) {
    $("#ferrisWheel").show();
    $("#merryGoRound").show();
    $("#rollerCoaster").show();
  } else if (height > 72 && height < 96) {
  $("#bumperCars").show();
  $("#merryGoRound").show();
  } else {
    alert('enter the correct height')
  }
});