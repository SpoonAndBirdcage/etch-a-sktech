$(document).ready(function() {
  var box_count = 16;
  for(var i = 0; i < box_count; i++){
    for(var j = 0; j < box_count; j++){
    $('.wrapper').append('<div class="square"></div>');
    }
  }
  $('.square').on('mouseenter', function() {
    $(this).addClass('highlighted');
  });
  $(document).on('click', function() {
    $('.highlighted').removeClass('highlighted');
  });
});
