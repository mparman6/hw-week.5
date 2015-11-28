$(document).ready(function(){
  $(".searchPanel").hide();
  $(".searchResultsContainer").hide();
  $("#checkInInput").pickadate()
  $("#checkOutInput").pickadate()
  $(".carouselCity").on("click", function(){
    $(this).parent().parent().parent().hide();
    $(".searchPanel").show();
    var cityId = $(this).attr("id")
    if(cityId === "newYorkCity"){
      $("#cityInput").val("New York City, NY")
    }
    else if (cityId === "sanFrancisco"){
      $("#cityInput").val("San Francsico, CA")
    }
    else if (cityId === "denver"){
      $("#cityInput").val("Denver, CO")
    }
    else if (cityId === "boston"){
      $("#cityInput").val("Boston, MA")
    }
  });
  $(".searchBtn").on("click", function(){
    $(".searchResultsContainer").show();
  })
});