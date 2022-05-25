////////Header Slider
var swiper = new Swiper(".landing-header-slider", {
  direction: "vertical",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination-slider",
    clickable: true,
  },
});

///////Company Slider
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

//////// Scroll Hareket Ettiğinde Bottom Sheet Kapanıyor
$(document).ready(function () {
    $(window).scroll(function(){
        if($(document).width() < 1024) {
            if($(".splash").hasClass("active")) {
                $(".bottom_sheet").removeClass("active");
            }
        }
    });
});

///////// Bottom Sheet Icon tıklayınca kapanıyor
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



////// Giriş Yap Butonuna
$(".btn_login").click(function () {
  $(".splash").removeClass("active");
  $(".login").addClass("active");
  $(".login").addClass("first");
});

////// Hızlı Giriş Yap 
$(".btn_fast").click(function () {
  $(".login").removeClass("active");
  $(".login").removeClass("first");
  $(".fast_login").addClass("active");
  $(".fast_login").addClass("first");
});
///// Şifremi Unuttum
$(".btn_forgot_password").click(function () {
  $(".splash").removeClass("active");
  $(".splash").removeClass("first");
  $(".forgot_password").addClass("active");
  $(".forgot_password").addClass("first");
});
//////// Üye Ol
$(".btn_register").click(function () {
  $(".splash").removeClass("active");
  $(".register").addClass("active");
  $(".register").addClass("first");
});

////// GLN Alanı Kontrol
$("#register_gln").focusout(function () {
  $(".register").removeClass("active");
  $(".register").removeClass("first");
  $(".sheet_web_bg").addClass("hidden");
  $(".bottom_sheet_alert.warning").addClass("active");
});

////// Detaylı Üye Ol
$(".sheet_btn_register").click(function () {
  $(".bottom_sheet_alert.warning").removeClass("active");
  $(".sheet_web_bg").removeClass("hidden");
  $(".register_extend").addClass("active");
  $(".register_extend").addClass("first");
});


//////// Mobil Menu
$(document).ready(function () {
  $(".landing-menu-show").click(function () {
    $(this).removeClass("active");
    $(".landing-menu-close").addClass("active");
    $(".bottom_sheet").removeClass("active");
    $(".landing-menu").addClass("active");
  });
  $(".landing-menu-close").click(function () {
    $(this).removeClass("active");
    $(".landing-menu-show").addClass("active");
    $(".landing-menu").removeClass("active");
  });
  $(".landing-menu .handle").click(function () {
    $(".landing-menu-close").removeClass("active");
    $(".landing-menu-show").addClass("active");
    $(".landing-menu").removeClass("active");
  });
});

///////// Mobil Menu
$(".show_popup").click(function (e) {
  e.preventDefault();
  var width = $(document).width();
  $(".sheet_group").addClass("active");
  if (width < 1024) {
    $(".splash").addClass("active");
  }
});

///////// Web Bottom Sheet Açılması
$(document).ready(function () {
  var width = $(document).width();
  if (width > 1024) {
    $(".splash").addClass("active");
  }
});

///////// Web Bottom Sheet Kapanması
$(".sheet_close").click(function (e) {
  e.preventDefault();
  $(".sheet_group").removeClass("active");
  $(".splash").addClass("first");
  $(".bottom_sheet").removeClass("active");
  $(".splash").addClass("active");
  $(".sheet_web_bg").attr("style", "");
});

/////////Web Popup Imnage Yükselik Ayarı
$("button").click(function (e) {
  var height = $(".sheet_content").height();
  $(".sheet_web_bg").attr("style", "height:" + height + "px");
});


////////// Timer
$(document).ready(function () {
  // Config
var mins = 0; // Min test time
var secs = 3; // Seconds (In addition to min) test time
var timerDisplay = $('.sheet_timer_now');
//Globals: 
var timeExpired = false;
// Test time in seconds
var totalTime = secs + (mins * 60);
var countDown = function (callback) {
    var interval;
    interval = setInterval(function () {
        if (secs === 0) {
            if (mins === 0) {
                timerDisplay.text('0:00');
                clearInterval(interval);
                callback();
                return;
            } else {
                mins--;
                secs = 60;
            }
        }
        var minute_text;
        if (mins > 0) {
            minute_text = mins;
        } else {
            minute_text = '0';
        }
        var second_text = secs < 10 ? ('0' + secs) : secs;

        timerDisplay.text(minute_text + ':' + second_text);
        secs--;
    }, 1000,timeUp);   
};
var timeUp = function () {
  $(".retry_code").attr("disabled",false);
};
countDown(timeUp);


/////// Güvenlik Kodu Alanı
  const codes = document.querySelectorAll('.code')
  codes[0].focus()
  codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <=9) {
            if(idx == 5) {
              codes[idx].value = '';
              $(".confirm_btn").attr("disabled",false);
            }
            else {
              codes[idx].value = ''
              setTimeout(() => codes[idx + 1].focus(), 10);
            }
                        
        } else if(e.key === 'Backspace') {
            setTimeout(() => codes[idx - 1].focus(), 10);
            $(".confirm_btn").attr("disabled",true);
        }
    })
  });
  
  $(".retry_code").click(function (e) { 
    $(this).attr("disabled",true);
    countDown(timeUp);
  });
});

////////// Video Iframe
showInPopup = (code) => {
  var modal = document.getElementById("VideoModal");
  modal.style.display = "block";
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  var videoEmbed =
    '<div class="modal-content"><div class="modal-header"><span class="close">&times;</span></div><div class="modal-body"><iframe  width="100%" height="315" src="https://www.youtube.com/embed/' +
    code +
    '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe></div></div>';
  $("#VideoModal").html(videoEmbed);
  var span = document.getElementsByClassName("close")[0];

  span.onclick = function () {
    modal.style.display = "none";
    $("#VideoModal").html("");
  };
};
