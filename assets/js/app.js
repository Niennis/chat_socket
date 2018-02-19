$(function() {
  var socket = io('http://34.227.11.223:3000');
  $('form').submit(function() {
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function(msg) {
    $('#messages').append($('<li>').text(msg));
  });
});

$(document).ready(function() {
  $('#chat').hide();

  var height = 0;
  $('ul li').each(function(i, value) {
    height += parseInt($(this).height());
  });
  height += '';
  $('ul').animate({scrollTop: height});
});

$('#sendNick').click(function() {
  $('#chat').show();
  $('#nickWrap').hide();
});
