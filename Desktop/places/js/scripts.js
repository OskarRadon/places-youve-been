function Place (city,country,landmark) {
  this.city = city;
  this.country = country;
  this.landmark = landmark;
}

Place.prototype.fullPlace = function() {
  return this.city + ", " + this.country;
}

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var city = $("input#new-city").val();
    var country = $("input#new-country").val();
    var landmark = $("input#new-landmark").val();
    var newPlace = new Place(city, country);

    $("ul#places").append("<li><span class='fullPlace'>" + newPlace.fullPlace() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-places").show();
      $("#show-places h2").text(newPlace.fullPlace());
      $(".city").text(newPlace.city);
      $(".country").text(newPlace.country);
      $(".landmark").text(newPlace.landmark);
    });
  });
});
