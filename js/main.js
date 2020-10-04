// попап
$(document).ready(function () {
   $(".popup-btn").on("click", function (event) {
      event.preventDefault();
      $(".popup").fadeIn();
   });
   $(".popup-close").on("click", function (event) {
      event.preventDefault();
      $(".popup").fadeOut();
   });
   /*слайдер с отзывами*/
   $(".feedback-slider").slick({
      prevArrow: '<button type="button" class="feedback-slider-btn feedback-prev-btn"><img src="./img/slider/prev.svg" alt=""/></button>',
      nextArrow: '<button type="button" class="feedback-slider-btn feedback-next-btn"><img src="./img/slider/next.svg" alt=""/></button>',
   });
   /*слайдер с преимуществами*/
   $(".features-slider").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [{
            breakpoint: 991,
            settings: {
               slidesToShow: 2,
               prevArrow: '<button class="prev arrow"></button>',
               nextArrow: '<button class="next arrow"></button>',
               slidesToScroll: 2,
            },
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
               prevArrow: '<button class="prev arrow"></button>',
               nextArrow: '<button class="next arrow"></button>',
               slidesToScroll: 1,
            },
         },
      ],
   });
});

// скрипт анимации
new WOW().init();

// скрпит маски телефона
jQuery(function ($) {
   $("#phone").mask("+7 (999) 999-99-99");
   $("#phone-1").mask("+7 (999) 999-99-99");
   $("#phone-2").mask("+7 (999) 999-99-99");
   $("#phone-3").mask("+7 (999) 999-99-99");
   $("#phone-4").mask("+7 (999) 999-99-99");
});

// скрипт кнопки наверх
jQuery(document).ready(function () {
   var duration = 500;
   jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() > 200) {
         jQuery('.to-top').fadeIn(duration);
      } else {
         jQuery('.to-top').fadeOut(duration);
      }
   });

   jQuery('.to-top').click(function (event) {
      event.preventDefault();
      jQuery('html').animate({
         scrollTop: 0
      }, duration);
      return false;
   })
});

$('form').submit(function (event) {
   event.preventDefault();
   $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
   }).done(function () {
      $(this).find("input").val("");
      alert("Спасибо сообщение отправлено!");
      $("#form").trigger("reset");
   });
   return false;
});