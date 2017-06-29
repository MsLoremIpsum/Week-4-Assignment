
$(document).ready(function() {

  $('.readmore').click(showMore)

  function showMore(event) {
    event.preventDefault();
    $('#show-this-on-click').slideDown();
  }
});

$(document).ready(function() {
  $('.readmore').click(showLess)

  function showLess(event) {
    event.preventDefault();
    $('#show-this-on-click').slideUp();
  }
});

$(document).ready(function() {
  $('.readmore').click(showMore)

  function showMore(event) {
    event.preventDefault();
    $('#show-this-on-click').slideDown();
  }
});
