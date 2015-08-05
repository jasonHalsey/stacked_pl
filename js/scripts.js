
//Back To Top Scrolling
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

  //hide or show the "back to top" link
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if( $(this).scrollTop() > offset_opacity ) { 
      $back_to_top.addClass('cd-fade-out');
    }
  });

  //smooth scroll to top
    $back_to_top.on('click', function(event){
      event.preventDefault();
      $('body,html').animate({
        scrollTop: 0 ,
        }, scroll_top_duration
      );
    });

//Scroll to Signup
  $('a.signup').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
  });

//calculate the height of video container
    function videoStripeHeight() {
      var container = $(".header-video").height();
      $(".video-content-stripe").height(container);
    }

    function mainHeight(){
        divHeight = $('.overlay-container').height();
        $('#main').css({'height' : divHeight});
    }


  function videoStripeOffset() {
      var video_offset = $(".header-video img").height();
      var header_offset = $(".header").height();
      $('#big-wrap').css('margin-top', video_offset + header_offset);
    }

  function headerOffset() {
    var header_offset = $(".header").height();
    $('#video').css('margin-top', header_offset);
  }

// Sticky Animated Header
  $(function(){
   var shrinkHeader = 300;
    $(window).scroll(function() {
      var scroll = getCurrentScroll();
        if ( scroll >= shrinkHeader ) {
             $('.header').addClass('shrink');
          }
          else {
              $('.header').removeClass('shrink');
          }
    });
  function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
      }
  });


  $(document).ready(function(){
    HeaderVideo.init({
      container: $('.header-video'),
      header: $('.header-video--media'),
      videoTrigger: $("#video-trigger"),
      autoPlayVideo: false
    });  

    headerOffset();
    videoStripeOffset();

});

  $(window).resize(function() {
    videoStripeOffset();
    headerOffset();
  });

