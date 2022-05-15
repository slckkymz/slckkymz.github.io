  var swiper = new Swiper(".seller-slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: ".seller-nav-next-1",
          prevEl: ".seller-nav-prev-1",
        },
        breakpoints: {
          640: {
            slidesPerView:2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        },
      });
      var swiper = new Swiper(".seller-slider-2", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: ".seller-nav-next-2",
          prevEl: ".seller-nav-prev-2",
        },
        breakpoints: {
          640: {
            slidesPerView:2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        },
      });
      var swiper = new Swiper(".seller-slider-3", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: ".seller-nav-next-3",
          prevEl: ".seller-nav-prev-3",
        },
        breakpoints: {
          640: {
            slidesPerView:2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        },
      });

  var swiper = new Swiper(".refSlider", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: ".ref-nav-next",
          prevEl: ".ref-nav-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
            loop:true,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
            loop:true,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 10,
            loop:true,
          }
        },
      });
  var swiper = new Swiper(".info-slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next-sl1",
          prevEl: ".swiper-button-prev-sl1",
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
            loop:true,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
            loop:true,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 10,
            loop:true,
          }
        },
      });
		var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        })

        var swiper = new Swiper(".campaing-slider-1", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next-sl1",
          prevEl: ".swiper-button-prev-sl1",
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
            loop:true,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 10,
            loop:true,
          }
        },
      });
      var swiper = new Swiper(".campaing-slider-2", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next-sl2",
          prevEl: ".swiper-button-prev-sl2",
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
            loop:true,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 10,
            loop:true,
          }
        },
      });
      var swiper = new Swiper(".campaing-slider-3", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next-sl3",
          prevEl: ".swiper-button-prev-sl3",
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
            loop:true,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 10,
            loop:true,
          }
        },
      });
      var swiper = new Swiper(".product-slider-1", {
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
          nextEl: ".san1",
          prevEl: ".sap1",
        },
        breakpoints: {
          640: {
            slidesPerView:3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
            loop:true,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            loop:true,
          },
          1280:{
            slidesPerView: 5,
            spaceBetween: 10,
            loop:true,
          }
        },
      });
      var swiper = new Swiper(".product-slider-2", {
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
          nextEl: ".san2",
          prevEl: ".sap2",
        },
        breakpoints: {
          640: {
            slidesPerView:3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
            loop:true,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            loop:true,
          },
          1280:{
            slidesPerView: 5,
            spaceBetween: 10,
            loop:true,
          }
        },
      });

    $( document ).ready(function() {
    var width = $(document).width();
    if(width < 640) {
      $(".profile-menu > a").attr("href","#");
    }
    });

    $(document).ready(function() {
	function close_accordion_section() { //akordiyon bölümlerini kapat
		$('footer .content').slideUp(300).removeClass('open');
	}
	$('footer .link').click(function(e) {
			close_accordion_section(); //kapat sayfayi
			$(this).next().slideDown(300).addClass('open');
	});
});


    $(document).ready(function () {
      var width = $(".w-responsive").width();
      var windowWidth = $(window).width();
      if(windowWidth < 1024){
        $(".search_content").attr("style","width:"+width+"px!important;left:50%!important;transform:translateX(-50%)");
      }
      else if(windowWidth > 1280){
      }
      else {
        $(".search_content").attr("style","width:"+width+"px!important;left:56%!important;transform:translateX(-50%)");
      }
    });
