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
    console.log($("#checkInInput").val());
    console.log($("#checkOutInput").val());
    $(".alert-danger").hide();
    $(".containerNewYorkCity").hide();
    $(".containerSanFrancisco").hide();
    $(".containerDenver").hide();
    $(".containerBoston").hide();
    var checkInDate = $("#checkInInput").val();
    var checkOutDate = $("#checkOutInput").val();
    var city = $("#cityInput").val().toLowerCase().trim();
    if(checkInDate === "" && checkOutDate === ""){
      $(".noCheckInOrOutAlert").slideDown();
    }
    else if(checkInDate === ""){
      $(".noCheckInAlert").slideDown();
    }
    else if(checkOutDate === ""){
      $(".noCheckOutAlert").slideDown();
    }
    else if(city === "new york city, ny"){
      $(".containerNewYorkCity").show();
    }
    else if(city === "san francisco, ca"){
      $(".containerSanFrancisco").show();
    }
    else if(city === "denver, co"){
      $(".containerDenver").show();
    }
    else if(city === "boston, ma"){
      $(".containerBoston").show();
    }
    else{
      $(".noCityAlert").slideDown();
    }
    $(".hideListing").on("click", function(){
      $(this).parent().parent().parent().parent().parent().parent().parent().fadeOut("slow");
    })
  })
  $(".wifi").on("click", function(){
    if($(this).attr("data-state") ==="unchecked"){
    $(".noWifi").fadeOut("slow");
    $(this).attr("data-state", "checked");
    }
  else{
    $(this).attr("data-state", "unchecked");
    $(".noWifi").fadeIn("slow");
    }
  })
  $(".pool").on("click", function(){
    if($(this).attr("data-state") ==="unchecked"){
    $(".noPool").fadeOut("slow");
    $(this).attr("data-state", "checked");
    }
  else{
    $(this).attr("data-state", "unchecked");
    $(".noPool").fadeIn("slow");
    }
  })
  $(".exerciseRoom").on("click", function(){
    if($(this).attr("data-state") ==="unchecked"){
    $(".noExerciseRoom").fadeOut("slow");
    $(this).attr("data-state", "checked");
    }
  else{
    $(this).attr("data-state", "unchecked");
    $(".noExerciseRoom").fadeIn("slow");
    }
  })
  $(".breakfast").on("click", function(){
    if($(this).attr("data-state") ==="unchecked"){
    $(".noBreakfast").fadeOut("slow");
    $(this).attr("data-state", "checked");
    }
  else{
    $(this).attr("data-state", "unchecked");
    $(".noBreakfast").fadeIn("slow");
    }
  })
});