var root = 'https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json';

$.ajax({
  url: root,
  method: 'GET'
}).then(function(data) {
    for (var i = 0; i < data.hot.length; i++){

      var html = '<article class="article"><section class="featuredImage"><img src="' + data.hot[i].image + '" alt="" /></section><section class="articleContent"><a href="#"><h3>' + data.hot[i].title + '</h3></a><h6>' + data.hot[i].channel + '</h6></section><section class="impressions">' + data.hot[i].shares.total + '</section><div class="clearfix"></div></article>'

      $('#main').append(html);

    }
});
