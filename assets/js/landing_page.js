
var swiper = new Swiper(".landing-header-slider", {
  direction: "vertical",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination-slider",
    clickable: true,
  },
});

var swiper = new Swiper(".landing-slider-company", {
  slidesPerView: 1,
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
});

$(document).ready(function () {
    $(window).scroll(function(){
        if($(document).width() < 1024) {
            if($(".splash").hasClass("active")) {
                $(".bottom_sheet").removeClass("active");
            }
        }
    });
});

$(".handle").click(function () {
  if ($(this).parent().hasClass("active")) {
    $(this).parent().removeClass("active");
    $(this).parent().removeClass("first");
  } else {
    $(this).parent().addClass("active");
    $(".bottom_sheet").removeClass("first");
    $(".splash").addClass("first");
  }
  if (!$(".bottom_sheet").hasClass("first")) {
    $(".splash").addClass("first");
  }
});

$(".btn_login").click(function () {
  $(".splash").removeClass("active");
  $(".login").addClass("active");
  $(".login").addClass("first");
});
$(".btn_fast").click(function () {
  $(".login").removeClass("active");
  $(".login").removeClass("first");
  $(".fast_login").addClass("active");
  $(".fast_login").addClass("first");
});
$(".btn_forgot_password").click(function () {
  $(".splash").removeClass("active");
  $(".splash").removeClass("first");
  $(".forgot_password").addClass("active");
  $(".forgot_password").addClass("first");
});
$(".btn_register").click(function () {
  $(".splash").removeClass("active");
  $(".register").addClass("active");
  $(".register").addClass("first");
});
$("#register_gln").focusout(function () {
  $(".register").removeClass("active");
  $(".register").removeClass("first");
  $(".sheet_web_bg").addClass("hidden");
  $(".bottom_sheet_alert.warning").addClass("active");
});
$(".sheet_btn_register").click(function () {
  $(".bottom_sheet_alert.warning").removeClass("active");
  $(".sheet_web_bg").removeClass("hidden");
  $(".register_extend").addClass("active");
  $(".register_extend").addClass("first");
});

$(document).ready(function () {
  $(".landing-menu-show").click(function () {
    $(this).removeClass("active");
    $(".landing-menu-close").addClass("active");
  });
  $(".landing-menu-close").click(function () {
    $(this).removeClass("active");
    $(".landing-menu-show").addClass("active");
  });
});

$(".show_popup").click(function (e) {
  e.preventDefault();
  $(".sheet_group").addClass("active");
});

$(document).ready(function () {
  var width = $(document).width();
  if (width > 1024) {
    $(".splash").addClass("active");
  }
});

$(".sheet_close").click(function (e) {
  e.preventDefault();
  $(".sheet_group").removeClass("active");
  $(".splash").addClass("first");
  $(".bottom_sheet").removeClass("active");
  $(".splash").addClass("active");
  $(".sheet_web_bg").attr("style", "");
});

$("button").click(function (e) {
  var height = $(".sheet_content").height();
  $(".sheet_web_bg").attr("style", "height:" + height + "px");
});
