    $('#nav').affix({
      offset: {
        top: $('#nav').offset().top,
        bottom: ($('footer').outerHeight(true) + $('.application').outerHeight(true)) + 40
      }
    });

    $(window).scroll(function() {
      $('video').each(function() {
        if ($(this).visible(true)) {
          $(this)[0].play();
        } else {
          $(this)[0].pause();
        }
      })
    });