$(document).ready(function(){

  $('.sub-story').hide();
  $('.sub-beers').hide();

  $('#story').on('click', function() {
    $('.sub-beers').hide();
    $('.sub-story').toggle('slow');
  });

  $('#beers').on('click', function() {
    $('.sub-story').hide();
    $('.sub-beers').toggle('slow');
  });

});