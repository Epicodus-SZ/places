//Business Logic
//place object constructor
function place(name,city,state,yearVisited) {
  this.name = name;
  this.city = city;
  this.state = state;
  this.yearVisited = yearVisited;
}

//place location method
place.prototype.location = function(){
  return this.city + ", " + this.state;
}


//Interface Logic
$(document).ready(function() {
  $(".form-horizontal").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("#inputName").val();
    var inputtedCity = $("#inputCity").val();
    var inputtedState = $("#inputState").val();
    var inputtedYearVisited = $("#inputYearVisited").val();
    if (inputtedName === "") {
      alert("Please enter a Name");
    } else {
      var newPlace = new place(inputtedName, inputtedCity, inputtedState, inputtedYearVisited);
      $("#placeList").append("<li>"+newPlace.name+": "+newPlace.location()+ "</li>");
      //Clears the form fields
      $("#inputName").val("");
      $("#inputCity").val("");
      $("#inputState").val("");
      $("#inputYearVisited").val("");
    }




  });



// using the place object, append to a list for each place entered
// extra work
// make the list a link, that when pressed shows all the place object properties in another location

});
