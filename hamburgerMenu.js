http://codepen.io/g13nn/pen/eHGEF/

$(document).ready(function() {

  $( ".cross" ).hide();
  $( "#sidebar" ).hide();

  $( ".hamburger" ).click(function() {
    $( "#sidebar" ).slideToggle( "slow", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
    });
  });

  $( ".cross" ).click(function() {
    $( "#sidebar" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });

});
