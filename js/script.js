$(document).ready(function(){
  $(".searchPanel").hide();
  $(".carouselCity").on("click", function(){
    $(this).parent().parent().hide();
    $(".searchPanel").show();
  });
});
