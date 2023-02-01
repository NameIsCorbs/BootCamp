// Create event listener to enter items below
$(".enter").on("click", function(){
    var task = $("#todoItem").val();
    $("#todoList").append("<div class='task'>" + task + "<div class'x fas fa-times'></div></div>");
});
// Create event listener to delete items below
$(document).on("click", ".x", function (){

});
// Create event listener to toggle 


$(".themeChange").on("click", function(){
    if ($(this).hasClass("regular")) {
      $("#theme").attr("href", "css/blank.css")
    }
    else if ($(this).hasClass("blue")){
      $("#theme").attr("href", "css/blue.css")
    }
    else if ($(this).hasClass("dark")){
      $("#theme").attr("href", "css/dark.css")
    }
  });
  