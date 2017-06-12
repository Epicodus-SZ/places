//Business Logic

//place object
function place(name,location,yearVisited) {
  this.name = name;
  this.location = location;
  this.yearVisited = yearVisited;
}

//Interface Logic
$(document).ready(function() {
  $(".form-horizontal").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("#inputName").val();
    var inputtedLocation = $("#inputLocation").val();
    var inputtedYearVisited = $("#inputYearVisited").val();
    if (inputtedName === "") {
      alert("Please enter a Name");
    } else {
      var newPlace = new place(inputtedName, inputtedLocation, inputtedYearVisited);
      $("#placeList").append("<li>"+inputtedName+"</li>");
    }




  });



// using the place object, append to a list for each place entered
// extra work
// make the list a link, that when pressed shows all the place object properties in another location

});
