$(document).ready(() => {
  const $form = $('#new-tweet');






  const fetchPosts = () => {
    $.getJSON('/', (posts) => {
      console.log(posts);
      console.log(createTweet(posts[0]))
    })
  }



  /* 
  
      <article class="tweet-container">
        <div class="avatar">this is the avatar.png</div>
        <div class="name">this is the name</div>
        <output name="tweet">this is the output</output>

      </article>

    */

    const createTweet = (tweet) => {
      const $avatar = $('<div>').addClass("avatar").text('this is the avatar');
      const $name = $('<div>').addClass("name").text('this is the name')
      const $output = $('output>').addClass("tweet").text('this is the output');  

     const $article = $('<article>').addClass("tweet-container");

      $article.append($avatar, $name, $output);

     return $article;

    }

    fetchPosts()

    // const createTweet = (tweet) => {
    //   $(`<article class="tweet-container">
    //   <div class="avatar">this is the avatar.png</div>
    //   <div class="name">this is the name</div>
    //   <output name="tweet">this is the output</output>
    //   </article>`)
    // }




  const renderTweet = (newTweet) => {
    $('#tweet-container').empty();
    for (const tweet of newTweet) {
      const $tweet = createTweet(tweet);
      $('#tweet-container').prepend($tweet);
    }
  };




  createTweet('this is a new tweet')
  renderTweet('this is a rendered tweet')



  $form.on('submit', function(e) {
    e.preventDefault()
    const urlEncodedData = $(this).serialize();
    console.log(urlEncodedData);

  })
})