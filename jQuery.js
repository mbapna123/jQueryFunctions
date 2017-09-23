$(document).ready(function(){
  $("p.slideToggle1").click(function(){
    $("p.slidetoggle").toggle();
  })
  $(".Append").click(function(){
    $(".append2").append("hi");
  })
  $(".addClass").click(function(){
    $(".redparagraph").css("background-color", "red")
  })
})
