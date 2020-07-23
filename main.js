// Hamburger menu:
// mostrare / nascondere il menu principale

$(".header-right > a").click(function(){

  $(".hamburger-menu").show("slow");

});

$(".close").click(function(){

  $(".hamburger-menu").hide("slow");

});
