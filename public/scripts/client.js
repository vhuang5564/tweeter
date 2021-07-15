/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {


  const fetchPosts = () => {
    $.getJSON('/tweets', (posts) => {
      renderTweets(posts);
    })
  }

  fetchPosts()


  // const createTweet = (tweet) => {
  //   const time = timeago.format(tweet.created_at)
  // return $(`<article class="tweet-container">
  //     <header class="tweet-header">
  //       <img src="${tweet.user.avatars}">
  //       <h6>${tweet.user.name}</h6>
  //       <h6 style="margin-left: auto">${tweet.user.handle}</h6>
  //     </header>
  //     <body class="tweet-body">
  //       ${tweet.content.text}
  //     </body>
  //     <footer class="tweet-footer">
  //       <h6>${time}</h6>
  //       <h6 style="margin-left: auto;"><i class="fas fa-flag"></i><i class="fas fa-retweet" style="margin: 0.2em"></i><i class="fas fa-heart"></i></h6>
  //     </footer>
  //   </article>`)
  // }

  
  const createTweet = (tweet) => {
    const time = timeago.format(tweet.created_at);
    const $avatars = $(`<img src="${tweet.user.avatars}">`);
    const $name = $("<h6>").text(`${tweet.user.name}`);
    const $handle = $(`<h6 style="margin-left: auto">`).text(`${tweet.user.handle}`);
    const $header = $('<header>').addClass('tweet-header');
    $header.append($avatars, $name, $handle);

    const $body = $(`<body>`).addClass('tweet-body').text(`${tweet.content.text}`);

    const $time = $(`<h6>`).text(`${time}`);
    const $icon = $(`<h6><i class="fas fa-flag"></i><i class="fas fa-retweet" style="margin: 0.2em"></i><i class="fas fa-heart">`).addClass('icons');
    const $footer = $('<footer>').addClass('tweet-footer');
    $footer.append($time, $icon);

    const $article = $('<article>').addClass('tweet-container');
    $article.append($header, $body, $footer);

    return $article;

  }




const renderTweets = function(tweets) {
  for (tweet of tweets) {
  const $tweet = createTweet(tweet);
  $('#tweet-container').prepend($tweet)
  }
}


const $form = $('#new-tweet');
$form.on('submit', function(e) { // when text is input and tweet is pressed
  e.preventDefault()
  const urlEncodedData = $(this).serialize();

  if ($('.counter').val() < 0) { // if counter is < 0 stops tweet
    return;
  }

  $.post('/tweets', urlEncodedData, (response) => {
    fetchPosts(); 
    $('.text').val(''); // emptys text bar after tweet
  });
})



})
