describe ("Place", function(){
  it("will contain info for place", function(){
    var testPlace = new Place("Paris", "France", "Eiffel Tower")
    expect(testPlace.city).to.equal("Paris");
    expect(testPlace.country).to.equal("France");
    expect(testPlace.landmark).to.equal("Eiffel Tower");
  });

});

$(function (){
  $("form#place").submit(function(event){
    event.preventDefault;
    
  });
});
