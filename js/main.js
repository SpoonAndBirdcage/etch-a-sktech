$(document).ready(function() {
  var btnBool = false;
  console.log(btnBool);
  /* Used To Set Up Grid */
  function gridSetup() {
    var box_count = $('.grid-num').val();
    var box_face = ((700 / box_count) - 1) + 'px';
    for (var i = 0; i < box_count; i++) {
      for (var j = 0; j < box_count; j++) {
        $('.wrapper').append('<div class="square"></div>');
      }
    }
    $('.square').css({'height': box_face, 'width': box_face});
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
    if( btnBool === true ) {
    $('.square').on('mouseleave', function() {
      $(this).removeClass(initColor, 300, 'easeOutQuad');
    });
    }
  }
  /* Used Fully Reset the Board */
  function fullReset() {
    btnReset();
    $('.square').removeClass('yellow blue purple green');
    $('div').filter('.selected').click();
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
  $('.reset').on('click', function(e) {
    e.preventDefault();
    btnReset();
    $('.square').removeClass('yellow blue purple green');
    $('div').filter('.selected').click();
  });

  $('.set-grid').on('click', function(e) {
    e.preventDefault();
    $('div.square').remove();
    if ($('.grid-num').val() > 64) {
      $('.grid-num').val(64);
      gridSetup();
    } else if ($('.grid-num').val() < 5) {
      $('.grid-num').val(5);
      gridSetup();
    } else {
      gridSetup();
    }
  });

  $('.trail').on('click', function(e) {
      e.preventDefault();
      btnBool = !btnBool;
      $('div.square').remove();
      gridSetup();
      $('div').filter('.selected').click();

      /*var trailsStyle = function() {
  $("#sketchpad > div").hover(function() {
    $(this).css("opacity", 0);
  }, function() {
    $(this).fadeTo(300, 1);
  });
}*/
  });

  /*
    Setting Default Start on Load
  */
  gridSetup();
});
