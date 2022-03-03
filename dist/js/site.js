//// Mobil Menü Show
$(".menu").on("click",function(){
    $(".top_header ul").addClass("fadeIn");
    $(".top_header ul").removeClass("fadeOut");

    $(".top_header ul").attr("style","display:flex");
    $(".top_header .exit").addClass("fadeIn");
    $(".top_header .exit").attr("style","display:flex");
});

$(".exit").on("click",function(){
    $(".top_header ul").addClass("fadeOut");
    $(".top_header ul").removeClass("fadeIn");
    setTimeout(function(){ $(".top_header ul").removeAttr("style","display:none") }, 700);
    
    $(".top_header .exit").removeAttr("style","display:none");
});

var swiper = new Swiper(".breaking_News", {
    // spaceBetween: 30,
    // centeredSlides: true,
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 2500,
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
  });

  var swiper = new Swiper(".top_breaking_news_slider", {
    allowTouchMove:true,
    breakpoints : {
      768: {
        allowTouchMove :false
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    }
  });

  $('.top_breaking_news_slider .swiper-pagination-bullet').hover(function() {
    $( this ).trigger( "click" );
 });


 var swiper = new Swiper(".main_slider_news_content", {
  allowTouchMove:true, 
  breakpoints : {
    768: {
      allowTouchMove :false
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  }
});

$('.main_slider_news_content .swiper-pagination-bullet').hover(function() {
  $( this ).trigger( "click" );
});


$(window).scroll(function(){
  if ($(window).scrollTop() >= 1) {
      $('header').addClass('sticky_header');
      $('.wrapper').addClass('sticky_wrapper');
  }
  else {
      $('header').removeClass('sticky_header');
      $('.wrapper').removeClass('sticky_wrapper');
  }
});
