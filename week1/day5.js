$('#welcome_form').submit(function(e) {

  event.preventDefault()
  var text = $('#username').val();
  $('#activeUsers').append('<ul><li>' + text + '</li></ul>');
  text = $('#username').val(null);

});

$('.sendBox').submit(function(e) {

  event.preventDefault()
  var text = $('#textSendMessageFrom').val();
  $('#chatRoom').append('<ul><li>' + new Date($.now()) + '</li></ul>');
  $('#chatRoom').append('<ul><li>' + text + '</li></ul><hr>');
  text = $('#textSendMessageFrom').val(null);

});
