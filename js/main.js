$(document).ready(function() {
  var box_count = 64;
  for (var i = 0; i < box_count; i++) {
    for (var j = 0; j < box_count; j++) {
      $('.wrapper').append('<div class="square"></div>');
    }
  }

  /* Used To Reset All Color Buttons */
  function btnReset() {
    return $('.control').children().removeClass('yellow blue purple green');
  }

  /* Used Switch Between colors with buttons */
  function colorSwitch(btnClass, initColor, offColors) {
    btnReset();
    $('.square').removeClass(offColors);
    $(btnClass).addClass(initColor);
    $('.square').on('mouseenter', function() {
      $(this).addClass(initColor).removeClass(offColors);
    });
  }

  /* The Yellow-Toggle Button */
  $('.tog-1').on('click', function() {
    colorSwitch('.tog-1', 'yellow', 'blue purple green');
  });
  /* The Blue-Toggle Button */
  $('.tog-2').on('click', function() {
    colorSwitch('.tog-2', 'blue', 'yellow purple green');
  });
  /* The Purple-Toggle Button */
  $('.tog-3').on('click', function() {
    colorSwitch('.tog-3', 'purple', 'yellow blue green');
  });
  /* The Purple-Toggle Button */
  $('.tog-4').on('click', function() {
    colorSwitch('.tog-4', 'green', 'yellow blue purple');
  });
  /* The Reset Button */
  $('.reset').on('click', function() {
    btnReset();
    $('.square').removeClass('yellow blue purple green');
    $('.tog-1').click();
  });


  /*
    Default starting position set on load
  */
  $('.tog-1').click();
});
