$(document).ready(function() {
  var box_count = 32;
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
    $('.square').removeClass(offColors);
    $(btnClass).addClass(initColor);
    $('.square').on('mouseenter', function() {
      $(this).addClass(initColor).removeClass(offColors);
    });
  }

  /*
    The Toggle Buttons That Set The Color of the Etch
  */
  /* The Yellow-Toggle Button */
  $('.tog-1').on('click', function() {
    var initColor = 'yellow';
    var offColors = 'blue purple green';
    var btnClass = '.tog-1';
    btnReset();
    colorSwitch(btnClass, initColor, offColors);
  });
  /* The Blue-Toggle Button */
  $('.tog-2').on('click', function() {
    var initColor = 'blue';
    var offColors = 'yellow purple green';
    var btnClass = '.tog-2';
    btnReset();
    colorSwitch(btnClass, initColor, offColors);
  });
  /* The Purple-Toggle Button */
  $('.tog-3').on('click', function() {
    var initColor = 'purple';
    var offColors = 'yellow blue green';
    var btnClass = '.tog-3';
    btnReset();
    colorSwitch(btnClass, initColor, offColors);
  });
  /* The Purple-Toggle Button */
  $('.tog-4').on('click', function() {
    var initColor = 'green';
    var offColors = 'yellow blue purple';
    var btnClass = '.tog-4';
    btnReset();
    colorSwitch(btnClass, initColor, offColors);
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
