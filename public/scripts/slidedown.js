/* global $ */

$(document).ready(function() {
  
  const $tweetButton = $('#tweet-button');
  $tweetButton.on('click', () => {
    if ($('.counter').val() < 0) { // shows error if tweet is over 140 characters
      $('.slidedown').slideDown("slow");
      setTimeout(() => { // hides error after 5 seconds
        $('.slidedown').slideUp("slow");
      }, 5000);
    }
  });

  const $angular = $('#angular');
  $angular.on('click', () => {
    $('html, body').animate( { scrollTop: 0 }, 'slow');
  });

});
