$(document).ready(function() {
  /* Used To Set Up Grid */
  function gridSetup() {
    var box_count = $('.grid-num').val();
    var box_face = ((700 / box_count) - 1) + 'px';
    for (var i = 0; i < box_count; i++) {
      for (var j = 0; j < box_count; j++) {
        $('.wrapper').append('<div class="square" style="width:' + box_face + '; height: ' + box_face + ';"></div>');
      }
    }
    $('div').filter('.selected').click();
  }
  /* Used To Reset All Color Buttons */
  function btnReset() {
    $('.control').children().removeClass('yellow blue purple green');
  }

  function selectedBtn(btnClass) {
    $('.selected').removeClass('selected');
    $(btnClass).addClass('selected');
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
    selectedBtn('.tog-1');
    colorSwitch('.tog-1', 'yellow', 'blue purple green');
  });
  /* The Blue-Toggle Button */
  $('.tog-2').on('click', function() {
    selectedBtn('.tog-2');
    colorSwitch('.tog-2', 'blue', 'yellow purple green');
  });
  /* The Purple-Toggle Button */
  $('.tog-3').on('click', function() {
    selectedBtn('.tog-3');
    colorSwitch('.tog-3', 'purple', 'yellow blue green');
  });
  /* The Purple-Toggle Button */
  $('.tog-4').on('click', function() {
    selectedBtn('.tog-4');
    colorSwitch('.tog-4', 'green', 'yellow blue purple');
  });
  /* The Reset Button */
  $('.reset').on('click', function() {
    btnReset();
    $('.square').removeClass('yellow blue purple green');
    $('.tog-1').click();
  });

  $('.set-grid').on('click', function(e) {
    e.preventDefault();
    $('div.square').remove();
    if ($('.grid-num').val() > 80) {
      $('.grid-num').val(80);
      gridSetup();
    } else if ($('.grid-num').val() < 5) {
      $('.grid-num').val(5);
      gridSetup();
    } else {
      gridSetup();
    }
  });

  /*
    Setting Default Start on Load
  */
  gridSetup();
});
