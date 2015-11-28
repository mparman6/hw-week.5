$(document).ready(function(){
  $(".searchPanel").hide();
  $(".searchResultsContainer").hide();
  $(".alert-danger").hide();
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
      $("#cityInput").val("San Francisco, CA")
    }
    else if (cityId === "denver"){
      $("#cityInput").val("Denver, CO")
    }
    else if (cityId === "boston"){
      $("#cityInput").val("Boston, MA")
    }
  });
  $(".searchBtn").on("click", function(){
    $(".alert-danger").hide();
    $(".containerNewYorkCity").hide();
    $(".containerSanFrancisco").hide();
    $(".containerDenver").hide();
    $(".containerBoston").hide();
    if($("#cityInput").val().toLowerCase().trim() === "new york city, ny"){
      $(".containerNewYorkCity").show();
      }
    else if($("#cityInput").val().toLowerCase().trim() === "san francisco, ca"){
      $(".containerSanFrancisco").show();
      }
    else if($("#cityInput").val().toLowerCase().trim() === "denver, co"){
      $(".containerDenver").show();
      }
    else if($("#cityInput").val().toLowerCase().trim() === "boston, ma"){
      $(".containerBoston").show();
      }
    else{
      $(".alert-danger").slideDown();
      return;
    }
  })
});