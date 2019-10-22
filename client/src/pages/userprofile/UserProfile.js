$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
  $(document).ready(function() {
              // Sticky footer from YYING6
              // Show or hide the sticky footer button
              $(window).scroll(function() {
                  if ($(this).scrollTop() > 200) {
                      $('.go-top').fadeIn(200);
                  } else {
                      $('.go-top').fadeOut(200);
                  }
              });
              
              // Animate the scroll to top
              $('.go-top').click(function(event) {
                  event.preventDefault();
                  
                  $('html, body').animate({scrollTop: 0}, 300);
              })
          });
  
  