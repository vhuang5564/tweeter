/* global $ */

$(document).ready(function() {
  
  const $text = $('#tweet-text');
  $text.on('input', () => {
    const value = $('#tweet-text').val().length; // length of character input
    $('.counter').val(140 - value); // changes output value of tweet

    if (140 - value >= 0) { // changes number next to tweet if color is different
      $("output").removeClass('red-counter');
    } else if (140 - value < 0) {
      $("output").addClass('red-counter');
    }
  });
  
});
