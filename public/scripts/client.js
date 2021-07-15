/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {
    const fetchPosts = () => {
    $.getJSON(data, (tweets) => { // change this

      console.log(tweets);
      console.log(createTweetElement(tweets[0]))
    })
  }

  fetchPosts()


const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#twat-container').append($tweet);
  }
}


$form.on('submit', function(e) {
  e.preventDefault()
  const urlEncodedData = $(this).serialize();
  console.log(urlEncodedData);

  $.post('/api/posts', urlEncodedData, (response) => {
    console.log(response);
  })

})


renderTweets(data);

})
