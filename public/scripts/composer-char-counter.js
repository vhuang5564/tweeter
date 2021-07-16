/* global $ */

$(document).ready(function() {
  
  const $text = $('#tweet-text');
  $text.on('input', () => {
    const value = $('#tweet-text').val().length; // length of character input
    $('.counter').val(140 - value); // changes output value of tweet

    if (140 - value >= 0) { // changes number next to tweet if color is different
      $('.counter').css('color', 'black');
    } else if (140 - value < 0) {
      $('.counter').css('color', 'red');
    }
  });
  
});
