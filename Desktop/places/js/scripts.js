function Place (city, country, landmark) {
  this.city = city;
  this.country = country;
  this.landmark = landmark;
}
$(function (){
  $("form#place").submit(function(event){
    event.preventDefault;
    var city = $("input#new-city").val();
    var country = $("input#new-country").val();
    var landmark = $("input#new-landmark").val();
  });
});
